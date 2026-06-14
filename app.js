/* The Home Finder — interactivity */
(function () {
  "use strict";

  const listings = window.LISTINGS || [];
  const cities = window.CITIES || [];

  const grid = document.getElementById("listingGrid");
  const emptyState = document.getElementById("emptyState");
  const resultsCount = document.getElementById("resultsCount");
  const cityGrid = document.getElementById("cityGrid");
  const savedCountEl = document.getElementById("savedCount");

  // ---- State ----
  const favorites = loadFavorites();
  let activeFilter = "all";
  let sortBy = "featured";
  let search = { location: "", type: "any", budget: 0 };

  // ---- Helpers ----
  function loadFavorites() {
    try { return new Set(JSON.parse(localStorage.getItem("thf_favs") || "[]")); }
    catch { return new Set(); }
  }
  function saveFavorites() {
    try { localStorage.setItem("thf_favs", JSON.stringify([...favorites])); } catch {}
  }
  function fmtPrice(p, status) {
    if (status === "For Rent") return "$" + p.toLocaleString() + "/mo";
    return "$" + p.toLocaleString();
  }
  function pinIcon() {
    return '<svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 21s-7-6-7-11a7 7 0 1114 0c0 5-7 11-7 11z"/><circle cx="12" cy="10" r="2.5"/></svg>';
  }
  const bedIcon = '<svg viewBox="0 0 24 24"><path d="M3 18v-3h18v3M3 15v-5a2 2 0 012-2h5v5M14 13V8h5a2 2 0 012 2v5"/></svg>';
  const bathIcon = '<svg viewBox="0 0 24 24"><path d="M4 12h16v3a4 4 0 01-4 4H8a4 4 0 01-4-4v-3zM6 12V6a2 2 0 012-2 2 2 0 012 2"/></svg>';
  const areaIcon = '<svg viewBox="0 0 24 24"><path d="M3 3h18v18H3zM9 3v18M3 9h18"/></svg>';

  // ---- Rendering ----
  function getVisible() {
    let items = listings.slice();

    if (activeFilter === "New") items = items.filter(l => l.isNew);
    else if (activeFilter !== "all") items = items.filter(l => l.status === activeFilter);

    if (search.location) {
      const q = search.location.toLowerCase();
      items = items.filter(l =>
        (l.city + " " + l.address + " " + l.title).toLowerCase().includes(q));
    }
    if (search.type !== "any") items = items.filter(l => l.type === search.type);
    if (search.budget > 0) items = items.filter(l => l.status === "For Rent" || l.price <= search.budget);

    switch (sortBy) {
      case "price-asc": items.sort((a, b) => a.price - b.price); break;
      case "price-desc": items.sort((a, b) => b.price - a.price); break;
      case "beds": items.sort((a, b) => b.beds - a.beds); break;
      default: items.sort((a, b) => (b.isNew - a.isNew)); break;
    }
    return items;
  }

  function cardHTML(l, i) {
    const fav = favorites.has(l.id) ? " is-fav" : "";
    const badges = [];
    if (l.isNew) badges.push('<span class="badge new">New</span>');
    badges.push(`<span class="badge ${l.status === "For Sale" ? "sale" : "rent"}">${l.status}</span>`);

    return `
      <article class="card" data-id="${l.id}" style="animation-delay:${i * 45}ms">
        <div class="card-media">
          <img src="${l.images[0]}" alt="${l.title}" loading="lazy" />
          <div class="card-badges">${badges.join("")}</div>
          <button class="fav-btn${fav}" data-fav="${l.id}" aria-label="Save ${l.title}" aria-pressed="${favorites.has(l.id)}">
            <svg viewBox="0 0 24 24"><path d="M12 21s-7.5-4.6-10-9.2C.4 8.4 2 5 5.2 5c2 0 3.3 1.1 4 2.2C9.7 6.1 11 5 13 5c3.2 0 4.8 3.4 3.2 6.8C19.5 16.4 12 21 12 21z"/></svg>
          </button>
        </div>
        <div class="card-body">
          <div class="card-price">${fmtPrice(l.price, l.status)} <small>${l.type}</small></div>
          <div class="card-title">${l.title}</div>
          <div class="card-address">${pinIcon()} ${l.address}, ${l.city}</div>
          <div class="card-specs">
            <span>${bedIcon} ${l.beds} bd</span>
            <span>${bathIcon} ${l.baths} ba</span>
            <span>${areaIcon} ${l.sqft.toLocaleString()} sqft</span>
          </div>
        </div>
      </article>`;
  }

  function render() {
    const items = getVisible();
    grid.innerHTML = items.map(cardHTML).join("");
    emptyState.hidden = items.length > 0;
    resultsCount.textContent = items.length
      ? `${items.length} home${items.length > 1 ? "s" : ""} available`
      : "No homes found";
  }

  function renderCities() {
    if (!cityGrid) return;
    cityGrid.innerHTML = cities.map(c => `
      <div class="city-card" data-city="${c.name}">
        <img src="${c.img}" alt="${c.name}" loading="lazy" />
        <div class="city-meta"><strong>${c.name}</strong><span>${c.count.toLocaleString()} homes</span></div>
      </div>`).join("");
  }

  function updateSavedCount() {
    const n = favorites.size;
    savedCountEl.textContent = n;
    savedCountEl.classList.toggle("show", n > 0);
  }

  // ---- Favorites ----
  function toggleFav(id, btn) {
    id = Number(id);
    if (favorites.has(id)) favorites.delete(id);
    else { favorites.add(id); btn && btn.classList.add("pop"); }
    saveFavorites();
    if (btn) {
      const on = favorites.has(id);
      btn.classList.toggle("is-fav", on);
      btn.setAttribute("aria-pressed", on);
      btn.addEventListener("animationend", () => btn.classList.remove("pop"), { once: true });
    }
    updateSavedCount();
  }

  // ---- Modal ----
  const modal = document.getElementById("propertyModal");
  const panel = document.getElementById("modalPanel");

  function openModal(id) {
    const l = listings.find(x => x.id === Number(id));
    if (!l) return;
    const isFav = favorites.has(l.id);
    panel.innerHTML = `
      <div class="modal-hero">
        <img src="${l.images[0]}" alt="${l.title}" id="modalMainImg" />
        <button class="modal-close" data-close aria-label="Close">×</button>
      </div>
      <div class="modal-thumbs">
        ${l.images.map((src, i) => `<img src="${src}" alt="View ${i + 1}" class="${i === 0 ? "active" : ""}" data-thumb="${src}" />`).join("")}
      </div>
      <div class="modal-content">
        <div class="modal-top">
          <div>
            <div class="modal-price">${fmtPrice(l.price, l.status)}</div>
            <div class="modal-status">${l.status} · ${l.type} · Built ${l.year}</div>
          </div>
          <button class="btn ${isFav ? "btn-primary" : "btn-outline"}" id="modalFav" data-fav="${l.id}">
            ${isFav ? "♥ Saved" : "♡ Save home"}
          </button>
        </div>
        <h3 class="modal-title">${l.title}</h3>
        <div class="modal-address">${pinIcon()} ${l.address}, ${l.city}</div>
        <div class="modal-specs">
          <div class="modal-spec"><strong>${l.beds}</strong><span>Bedrooms</span></div>
          <div class="modal-spec"><strong>${l.baths}</strong><span>Bathrooms</span></div>
          <div class="modal-spec"><strong>${l.sqft.toLocaleString()}</strong><span>Sq ft</span></div>
          <div class="modal-spec"><strong>${l.lot}</strong><span>Lot size</span></div>
        </div>
        <p class="modal-desc">${l.desc}</p>
        <div class="modal-features">
          ${l.features.map(f => `<span class="feature-tag">${f}</span>`).join("")}
        </div>
        <div class="modal-actions">
          <button class="btn btn-primary">Schedule a tour</button>
          <button class="btn btn-outline">Contact agent</button>
        </div>
      </div>`;
    modal.hidden = false;
    document.body.style.overflow = "hidden";
  }

  function closeModal() {
    modal.hidden = true;
    document.body.style.overflow = "";
  }

  // ---- Events ----
  grid.addEventListener("click", e => {
    const favBtn = e.target.closest("[data-fav]");
    if (favBtn) { e.stopPropagation(); toggleFav(favBtn.dataset.fav, favBtn); return; }
    const card = e.target.closest(".card");
    if (card) openModal(card.dataset.id);
  });

  modal.addEventListener("click", e => {
    if (e.target.closest("[data-close]")) return closeModal();
    const favBtn = e.target.closest("[data-fav]");
    if (favBtn) {
      toggleFav(favBtn.dataset.fav, null);
      const on = favorites.has(Number(favBtn.dataset.fav));
      favBtn.textContent = on ? "♥ Saved" : "♡ Save home";
      favBtn.className = "btn " + (on ? "btn-primary" : "btn-outline");
      favBtn.dataset.fav = favBtn.dataset.fav;
      // keep grid in sync
      const gridBtn = grid.querySelector(`[data-fav="${favBtn.dataset.fav}"]`);
      if (gridBtn) { gridBtn.classList.toggle("is-fav", on); gridBtn.setAttribute("aria-pressed", on); }
      return;
    }
    const thumb = e.target.closest("[data-thumb]");
    if (thumb) {
      document.getElementById("modalMainImg").src = thumb.dataset.thumb;
      panel.querySelectorAll(".modal-thumbs img").forEach(t => t.classList.toggle("active", t === thumb));
    }
  });

  document.addEventListener("keydown", e => { if (e.key === "Escape" && !modal.hidden) closeModal(); });

  // Filters
  document.getElementById("filters").addEventListener("click", e => {
    const chip = e.target.closest(".chip");
    if (!chip) return;
    document.querySelectorAll(".chip").forEach(c => c.classList.remove("is-active"));
    chip.classList.add("is-active");
    activeFilter = chip.dataset.filter;
    render();
  });

  document.getElementById("sortBy").addEventListener("change", e => { sortBy = e.target.value; render(); });

  // Search
  document.getElementById("searchBar").addEventListener("submit", e => {
    e.preventDefault();
    search.location = document.getElementById("searchLocation").value.trim();
    search.type = document.getElementById("searchType").value;
    search.budget = Number(document.getElementById("searchBudget").value);
    render();
    document.getElementById("listings").scrollIntoView({ behavior: "smooth" });
  });

  // City quick-search
  document.getElementById("cityGrid").addEventListener("click", e => {
    const card = e.target.closest("[data-city]");
    if (!card) return;
    document.getElementById("searchLocation").value = card.dataset.city;
    search.location = card.dataset.city;
    render();
    document.getElementById("listings").scrollIntoView({ behavior: "smooth" });
  });

  // Saved button → filter to favorites
  document.getElementById("savedBtn").addEventListener("click", () => {
    if (favorites.size === 0) {
      resultsCount.textContent = "No saved homes yet — tap the ♥ on any home.";
      document.getElementById("listings").scrollIntoView({ behavior: "smooth" });
      return;
    }
    const saved = listings.filter(l => favorites.has(l.id));
    grid.innerHTML = saved.map(cardHTML).join("");
    emptyState.hidden = true;
    resultsCount.textContent = `${saved.length} saved home${saved.length > 1 ? "s" : ""}`;
    document.getElementById("listings").scrollIntoView({ behavior: "smooth" });
  });

  // CTA + newsletter
  document.getElementById("ctaForm").addEventListener("submit", e => {
    e.preventDefault();
    const input = e.target.querySelector("input");
    input.value = "";
    input.placeholder = "Thanks! We'll be in touch ✓";
  });

  document.getElementById("year").textContent = new Date().getFullYear();

  // ---- Init ----
  render();
  renderCities();
  updateSavedCount();
})();
