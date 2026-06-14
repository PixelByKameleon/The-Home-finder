/* The Home Finder — sample listing data
   Images are royalty-free Unsplash photos loaded via CDN. */
window.LISTINGS = [
  {
    id: 1,
    price: 845000,
    status: "For Sale",
    isNew: true,
    title: "Sunlit Modern Farmhouse",
    address: "1420 Cedar Hollow Ln",
    city: "Austin, TX",
    type: "House",
    beds: 4, baths: 3, sqft: 2680, lot: "0.32 ac", year: 2021,
    features: ["Chef's kitchen", "Home office", "EV charger", "Smart home", "Covered patio"],
    desc: "A bright, airy farmhouse blending warm wood tones with clean modern lines. Floor-to-ceiling windows flood the open-plan living space with light, and the chef's kitchen opens onto a covered patio built for entertaining.",
    images: [
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=900&q=80"
    ]
  },
  {
    id: 2,
    price: 3200,
    status: "For Rent",
    isNew: false,
    title: "Downtown Loft with Skyline Views",
    address: "88 Harbor St, Unit 12B",
    city: "Seattle, WA",
    type: "Apartment",
    beds: 2, baths: 2, sqft: 1180, lot: "—", year: 2018,
    features: ["Skyline views", "Gym access", "In-unit laundry", "Concierge", "Rooftop deck"],
    desc: "Industrial-chic loft perched above the harbor with exposed brick, soaring ceilings, and unobstructed skyline views. Building amenities include a 24-hour gym, concierge, and a rooftop deck.",
    images: [
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1493809842364-78817add7ffb?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=900&q=80"
    ]
  },
  {
    id: 3,
    price: 1295000,
    status: "For Sale",
    isNew: true,
    title: "Coastal Glass Retreat",
    address: "7 Tidewater Cove",
    city: "Santa Barbara, CA",
    type: "House",
    beds: 5, baths: 4, sqft: 3940, lot: "0.5 ac", year: 2020,
    features: ["Ocean view", "Infinity pool", "Wine cellar", "Guest suite", "Solar panels"],
    desc: "An architectural statement of glass and stone overlooking the Pacific. Walls of glass dissolve the line between indoors and out, while the infinity pool seems to spill into the ocean beyond.",
    images: [
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=900&q=80"
    ]
  },
  {
    id: 4,
    price: 525000,
    status: "For Sale",
    isNew: false,
    title: "Craftsman Bungalow with Garden",
    address: "312 Maple Grove Ave",
    city: "Portland, OR",
    type: "House",
    beds: 3, baths: 2, sqft: 1740, lot: "0.18 ac", year: 1996,
    features: ["Mature garden", "Fireplace", "Hardwood floors", "Detached studio"],
    desc: "A lovingly maintained Craftsman with original hardwood floors, a cozy fireplace, and a wraparound garden bursting with mature plantings. A detached studio makes the perfect workspace.",
    images: [
      "https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1576941089067-2de3c901e126?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=900&q=80"
    ]
  },
  {
    id: 5,
    price: 2450,
    status: "For Rent",
    isNew: true,
    title: "Bright Garden Townhouse",
    address: "45 Willow Walk",
    city: "Denver, CO",
    type: "Townhouse",
    beds: 3, baths: 2, sqft: 1560, lot: "—", year: 2019,
    features: ["Private patio", "Attached garage", "Pet friendly", "Community park"],
    desc: "A fresh, light-filled townhouse in a quiet, walkable community. Enjoy a private patio, attached garage, and access to community green spaces — pets welcome.",
    images: [
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1600566752355-35792bedcfea?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=900&q=80"
    ]
  },
  {
    id: 6,
    price: 689000,
    status: "For Sale",
    isNew: false,
    title: "Midcentury Hillside Condo",
    address: "920 Skyline Dr, #4",
    city: "Los Angeles, CA",
    type: "Condo",
    beds: 2, baths: 2, sqft: 1320, lot: "—", year: 2015,
    features: ["City views", "Balcony", "Pool", "Secure parking", "Concierge"],
    desc: "Sleek midcentury-inspired condo carved into the hills with sweeping city views from a private balcony. Resort-style amenities include a pool, secure parking, and concierge.",
    images: [
      "https://images.unsplash.com/photo-1567496898669-ee935f5f647a?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1600121848594-d8644e57abab?auto=format&fit=crop&w=900&q=80"
    ]
  },
  {
    id: 7,
    price: 2150000,
    status: "For Sale",
    isNew: true,
    title: "Restored Brownstone",
    address: "214 Park Place",
    city: "Brooklyn, NY",
    type: "Townhouse",
    beds: 4, baths: 3, sqft: 3100, lot: "0.05 ac", year: 1910,
    features: ["Original moldings", "Chef's kitchen", "Private garden", "Roof terrace", "Two fireplaces"],
    desc: "A meticulously restored brownstone marrying period detail with modern comfort. Original crown moldings and two working fireplaces meet a renovated chef's kitchen, private garden, and roof terrace.",
    images: [
      "https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1600573472550-8090b5e0745e?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1600585152220-90363fe7e115?auto=format&fit=crop&w=900&q=80"
    ]
  },
  {
    id: 8,
    price: 1850,
    status: "For Rent",
    isNew: false,
    title: "Cozy Studio in the Arts District",
    address: "60 Painter's Row, #7",
    city: "Austin, TX",
    type: "Apartment",
    beds: 1, baths: 1, sqft: 620, lot: "—", year: 2017,
    features: ["Walkable", "Exposed brick", "Bike storage", "Pet friendly"],
    desc: "A charming studio in the heart of the Arts District — exposed brick, big windows, and steps from galleries, cafés, and live music. Bike storage and pet-friendly policy included.",
    images: [
      "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1600494603989-9650cf6dad51?auto=format&fit=crop&w=900&q=80"
    ]
  },
  {
    id: 9,
    price: 975000,
    status: "For Sale",
    isNew: false,
    title: "Lakefront Contemporary",
    address: "5 Loon Lake Rd",
    city: "Minneapolis, MN",
    type: "House",
    beds: 4, baths: 3, sqft: 3020, lot: "0.6 ac", year: 2014,
    features: ["Private dock", "Lake views", "Heated floors", "Three-car garage", "Sauna"],
    desc: "Wake up to the water in this contemporary lakefront home with a private dock and floor-to-ceiling views. Heated floors, a sauna, and a three-car garage make every season comfortable.",
    images: [
      "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=900&q=80"
    ]
  }
];

window.CITIES = [
  { name: "Austin", count: 1840, img: "https://images.unsplash.com/photo-1531218150217-54595bc2b934?auto=format&fit=crop&w=500&q=80" },
  { name: "Seattle", count: 1210, img: "https://images.unsplash.com/photo-1438480478735-3234e63615bb?auto=format&fit=crop&w=500&q=80" },
  { name: "Brooklyn", count: 2360, img: "https://images.unsplash.com/photo-1496588152823-86ff7695e68f?auto=format&fit=crop&w=500&q=80" },
  { name: "Denver", count: 980, img: "https://images.unsplash.com/photo-1546156929-a4c0ac411f47?auto=format&fit=crop&w=500&q=80" }
];
