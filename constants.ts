import { Product, SiteSettings, StrainType } from './types';

// Images provided in the prompt mapped to usage
export const IMAGES = {
  HERO_BG: "https://fs.hubspotusercontent00.net/hubfs/6063852/CBDBanner-1.jpg",
  HERO_PLANT: "https://png.pngtree.com/png-vector/20230906/ourmid/pngtree-cannabis-plant-isolated-png-image_10006764.png",
  SMOKE_TEXTURE: "https://raw.githubusercontent.com/SochavaAG/example-my-code/master/pens/animation-smoke-fog/smoke.png",
  LEAF_DISPLAY: "https://images.stockcake.com/public/7/e/f/7ef513ec-9afa-49e4-bb57-6463f8c8f622_large/cannabis-leaf-display-stockcake.jpg",
  BUD_CLOSEUP_1: "https://img.freepik.com/premium-photo/medical-marijuana-flower-cannabis-flower-bud-weed-strain_1048944-28667331.jpg",
  BUD_CLOSEUP_2: "https://media.istockphoto.com/id/1313663860/photo/indoor-planting-of-marijuana-of-the-amnesia-haze-type.jpg?s=612x612&w=0&k=20&c=TmmRao_f2V_YtI5bU8nGpmfllMxNTEEDMiV4mqB1Jpc=",
  AI_CULTIVATION: "https://img.freepik.com/free-photo/cultivation-cannabis-natural-environment-created-with-help-generative-ai-technology_185193-161950.jpg?semt=ais_hybrid&w=740&q=80",
  TEXTURE_BG: "https://media.istockphoto.com/id/1147128047/photo/marijuana-cannabis-leaf-background.jpg?s=612x612&w=0&k=20&c=woKbMR-Hxj72CJ2pHOdfmpaGM8sDKr9QE1phw4ugJEA=",
  
  // Category Icons (kept for fallback or other uses)
  CAT_CANNABIS: "https://goodlayers.b-cdn.net/cannamed/demo1/wp-content/uploads/sites/3/2020/04/icon01.png",
  CAT_CONCENTRATES: "https://goodlayers.b-cdn.net/cannamed/demo1/wp-content/uploads/sites/3/2020/04/icon02.png",
  CAT_EDIBLES: "https://goodlayers.b-cdn.net/cannamed/demo1/wp-content/uploads/sites/3/2020/04/icon03.png",
  CAT_VAPES: "https://goodlayers.b-cdn.net/cannamed/demo1/wp-content/uploads/sites/3/2020/04/icon06.png",
  CAT_CBD: "https://goodlayers.b-cdn.net/cannamed/demo1/wp-content/uploads/sites/3/2020/04/icon05.png",
  CAT_ACCESSORIES: "https://goodlayers.b-cdn.net/cannamed/demo1/wp-content/uploads/sites/3/2020/04/icon04.png"
};

export const CATEGORY_IMAGES: Record<string, string> = {
  'Cannabis': "https://highgradeonly.com/wp-content/uploads/2022/03/gkm_feature_1x1-1024x1024.jpg",
  'Craft Cannabis Flowers': "https://www.bulkbuddy.co/wp-content/uploads/2025/12/Punch-funk-craft-strain-500x500.jpg",
  'Shake n Trim': "https://www.bulkbuddy.co/wp-content/uploads/2021/09/ODvMgmUI-500x500.jpeg",
  'Concentrates': "https://greensativa.com/wp-content/uploads/2024/03/close-up-image-of-cannabis-concentrates.jpg",
  'Edibles': "https://highroadedibles.imgix.net/Consumer/Cannabis-Products/HighRoadEdibles_09.202417691.jpg?auto=format&fit=clip&q=80&w=736",
  'Vapes': "https://cheechandchong.com/cdn/shop/articles/cheech-and-chong-vapes_ce0f0ba5-2bd2-4dfb-b94b-734322af824b.webp?v=1746117933&width=1100",
  'CBD': "https://chillbud.qodeinteractive.com/wp-content/uploads/2022/05/shop-img1.jpg",
  'Accessories': "https://www.gearpatrol.com/wp-content/uploads/sites/2/2023/04/Best-Rolling-Papers-Refresh-rolling-paper-packs-gold-joint-Lead-jpg.webp?w=1200&h=1080&crop=1",
  'Bulk': "https://www.bulkbuddy.co/wp-content/uploads/2021/09/ODvMgmUI-500x500.jpeg"
};

export const INITIAL_SETTINGS: SiteSettings = {
  primaryColor: '#059669', // Emerald 600
  announcementText: 'FREE SHIPPING ON ORDERS OVER $99 | BULK PRICING AVAILABLE',
  heroHeadline: 'Premium Cannabis Delivered Across Canada',
  contactEmail: 'contact@localkushdealer.ca',
  contactPhone: '+1 (800) 420-5555'
};

// Raw Bulk Inventory - Cleaned of duplicates that are in specific categories
const BULK_INVENTORY = [
  {
    "name": "Sour Apple Killer",
    "image": "https://www.bulkbuddy.co/wp-content/uploads/2025/12/Sour-apple-killer-strain-1-500x500.jpg",
    "info": "THC: 24-30% | Apple/Candy/Citrus | Batch: Dec 20, 2025",
    "pricing_tiers": { "1 Ounce": 30.00, "Quarter Pound": 96.00, "Half Pound": 139.32, "Pound": 258.00 }
  },
  {
    "name": "Afghani Pink",
    "image": "https://www.bulkbuddy.co/wp-content/uploads/2025/12/Afghani-pink-strain-500x500.jpg",
    "info": "THC: 24-31% | Diesel/Gas/Skunk | Batch: Dec 20, 2025",
    "pricing_tiers": { "1 Ounce": 107.56, "Quarter Pound": 344.19, "Half Pound": 499.50, "Pound": 925.00 }
  },
  {
    "name": "Ahi Tuna Kush",
    "image": "https://greensociety.cc/wp-content/uploads/2025/12/Black-Tuna-Kush-Strain-Multi-2.jpg",
    "info": "THC: 24-30% | Citrus/Gas/Kush | Batch: Jan 16, 2026",
    "pricing_tiers": { "1 Ounce": 101.74, "Quarter Pound": 325.58, "Half Pound": 472.50, "Pound": 875.00 }
  },
  {
    "name": "Astro Pink Kush",
    "image": "https://www.bulkbuddy.co/wp-content/uploads/2026/01/Atf-strain-500x500.jpg",
    "info": "THC: 25-30% | Berry/Candy/Vanilla | Batch: Jan 7, 2025",
    "pricing_tiers": { "1 Ounce": 104.65, "Quarter Pound": 334.88, "Half Pound": 486.00, "Pound": 900.00 }
  },
  {
    "name": "Ayahuasca Purple",
    "image": "https://www.bulkbuddy.co/wp-content/uploads/2026/01/ayahuasca-purple-strain-500x500.jpg",
    "info": "THC: 24-30% | Mango/Lavender/Nutty | Batch: Jan 14, 2026",
    "pricing_tiers": { "1 Ounce": 98.84, "Quarter Pound": 316.28, "Half Pound": 459.00, "Pound": 850.00 }
  },
  {
    "name": "Black Cherry OG",
    "image": "https://www.bulkbuddy.co/wp-content/uploads/2026/01/Black-chery-og-strain-500x500.jpg",
    "info": "THC: 24-30% | Berry/Fruity/Woody | Batch: Jan 9, 2026",
    "pricing_tiers": { "1 Ounce": 98.84, "Quarter Pound": 316.28, "Half Pound": 459.00, "Pound": 850.00 }
  }
];

// Helper to parse info string
const parseInfo = (info: string) => {
  const thcMatch = info.match(/THC:\s*([\d.-]+)%/);
  const thc = thcMatch ? parseFloat(thcMatch[1].split('-')[1] || thcMatch[1]) : 25;
  
  const flavorMatch = info.match(/\| (.*?) \|/);
  const flavors = flavorMatch ? flavorMatch[1].split('/').map(s => s.trim()) : ['Earth', 'Pine'];

  return { thc, flavors };
};

// Process Bulk Inventory into Product Format
const PROCESSED_INVENTORY: Product[] = BULK_INVENTORY.map((item, index) => {
  const { thc, flavors } = parseInfo(item.info);
  
  // Transform pricing tiers into variants
  const variants = Object.entries(item.pricing_tiers).map(([weight, price]) => ({
    weight,
    price
  }));

  // Determine Type (Indica/Sativa/Hybrid) - Heuristic based on name or random distribution for mock data stability
  let type = StrainType.HYBRID;
  if (item.name.toLowerCase().includes('indica') || item.name.toLowerCase().includes('pink') || item.name.toLowerCase().includes('death')) type = StrainType.INDICA;
  else if (item.name.toLowerCase().includes('sativa') || item.name.toLowerCase().includes('haze')) type = StrainType.SATIVA;
  else if (index % 3 === 0) type = StrainType.INDICA;

  return {
    id: item.name.toLowerCase().replace(/[^a-z0-9]+/g, '-'),
    name: item.name,
    image: item.image,
    description: item.info, // Keeping raw info as description for accuracy
    type,
    category: 'Cannabis',
    price: item.pricing_tiers["1 Ounce"], // Base price is 1 Ounce
    thcPercent: thc,
    flavor: flavors,
    inStock: true,
    rating: 4.8 + (index % 3) * 0.1, // Mock rating
    reviews: 20 + index * 5, // Mock reviews
    variants: variants
  };
});

// NEW HYBRID PRODUCTS
const NEW_HYBRID_DATA = [
  { "name": "Alaskan Thunder Fuck", "slug": "alaskan-thunder-fuck", "image_url": "https://www.bulkbuddy.co/wp-content/uploads/2026/01/Astro-pink-strain-500x500.jpg", "category": "Hybrid", "variants": [ { "weight": "Ounce", "price": 22 }, { "weight": "Quarter Pound", "price": 62.50 }, { "weight": "Half Pound", "price": 125 }, { "weight": "Pound", "price": 250 } ] },
  { "name": "Alien Cookies", "slug": "alien-cookies", "image_url": "https://www.bulkbuddy.co/wp-content/uploads/2026/01/Alien-cookies-strain-500x500.jpg", "category": "Hybrid", "variants": [ { "weight": "Ounce", "price": 65 }, { "weight": "Quarter Pound", "price": 193.75 }, { "weight": "Half Pound", "price": 387.50 }, { "weight": "Pound", "price": 775 } ] },
  { "name": "Banana Punch AAAA+ Hybrid Craft", "slug": "banana-punch-aaaa-hybrid-craft", "image_url": "https://www.bulkbuddy.co/wp-content/uploads/2025/12/Banana-punch-craft-strain-500x500.jpg", "category": "Hybrid", "variants": [ { "weight": "Ounce", "price": 85 }, { "weight": "Quarter Pound", "price": 243.75 }, { "weight": "Half Pound", "price": 487.50 }, { "weight": "Pound", "price": 975 } ] },
  { "name": "Black Widow", "slug": "black-widow", "image_url": "https://www.bulkbuddy.co/wp-content/uploads/2026/01/Black-widow-strain-500x500.jpg", "category": "Hybrid", "variants": [ { "weight": "Ounce", "price": 55 }, { "weight": "Quarter Pound", "price": 175 }, { "weight": "Half Pound", "price": 350 }, { "weight": "Pound", "price": 700 } ] },
  { "name": "Blue Hawaiian AAAA+ Hybrid Craft", "slug": "blue-hawaiian-aaaa-hybrid-craft", "image_url": "https://www.bulkbuddy.co/wp-content/uploads/2025/12/Blue-hawaiian-craft-strain-500x500.jpg", "category": "Hybrid", "variants": [ { "weight": "Ounce", "price": 85 }, { "weight": "Quarter Pound", "price": 243.75 }, { "weight": "Half Pound", "price": 487.50 }, { "weight": "Pound", "price": 975 } ] },
  { "name": "Blueberry AK", "slug": "blueberry-ak", "image_url": "https://www.bulkbuddy.co/wp-content/uploads/2025/12/Blueberry-ak-strain-500x500.jpg", "category": "Hybrid", "variants": [ { "weight": "Ounce", "price": 8 }, { "weight": "Quarter Pound", "price": 6 }, { "weight": "Half Pound", "price": 12 }, { "weight": "Pound", "price": 24 } ] },
  { "name": "Bruce Banner", "slug": "bruce-banner", "image_url": "https://www.bulkbuddy.co/wp-content/uploads/2026/01/Bruce-banner-strain-500x500.jpg", "category": "Hybrid", "variants": [ { "weight": "Ounce", "price": 70 }, { "weight": "Quarter Pound", "price": 212.50 }, { "weight": "Half Pound", "price": 425 }, { "weight": "Pound", "price": 850 } ] },
  { "name": "Butterscotch", "slug": "butterscotch", "image_url": "https://www.bulkbuddy.co/wp-content/uploads/2025/12/Butterscotch-strain-500x500.jpg", "category": "Hybrid", "variants": [ { "weight": "Ounce", "price": 68 }, { "weight": "Quarter Pound", "price": 206.25 }, { "weight": "Half Pound", "price": 412.50 }, { "weight": "Pound", "price": 825 } ] },
  { "name": "Big Drip", "slug": "big-drip", "image_url": "https://www.bulkbuddy.co/wp-content/uploads/2026/01/Big-drip-strain-500x500.jpg", "category": "Indica", "variants": [ { "weight": "Ounce", "price": 66 }, { "weight": "Quarter Pound", "price": 200 }, { "weight": "Half Pound", "price": 400 }, { "weight": "Pound", "price": 800 } ] },
  { "name": "Cereal Milk", "slug": "cereal-milk-new", "image_url": "https://www.bulkbuddy.co/wp-content/uploads/2025/11/Cereal-milk-strain-500x500.jpg", "category": "Hybrid", "variants": [ { "weight": "Ounce", "price": 75 }, { "weight": "Quarter Pound", "price": 225 }, { "weight": "Half Pound", "price": 450 }, { "weight": "Pound", "price": 900 } ] },
  { "name": "Dream Wedding", "slug": "dream-wedding", "image_url": "https://www.bulkbuddy.co/wp-content/uploads/2026/01/Dream-wedding-strain-500x500.jpg", "category": "Hybrid", "variants": [ { "weight": "Ounce", "price": 60 }, { "weight": "Quarter Pound", "price": 181.25 }, { "weight": "Half Pound", "price": 362.50 }, { "weight": "Pound", "price": 725 } ] },
  { "name": "Fish Scale AAAA+ Hybrid Craft", "slug": "fish-scale-aaaa-hybrid-craft", "image_url": "https://www.bulkbuddy.co/wp-content/uploads/2025/12/Fish-scale-craft-strain-500x500.jpg", "category": "Hybrid", "variants": [ { "weight": "Ounce", "price": 88 }, { "weight": "Quarter Pound", "price": 256.25 }, { "weight": "Half Pound", "price": 512.50 }, { "weight": "Pound", "price": 1025 } ] },
  { "name": "Fortune Cookies", "slug": "fortune-cookies", "image_url": "https://www.bulkbuddy.co/wp-content/uploads/2026/01/Fortune-cookies-strain-500x500.jpg", "category": "Hybrid", "variants": [ { "weight": "Ounce", "price": 66 }, { "weight": "Quarter Pound", "price": 200 }, { "weight": "Half Pound", "price": 400 }, { "weight": "Pound", "price": 800 } ] },
  { "name": "Starburst", "slug": "starburst", "image_url": "https://www.bulkbuddy.co/wp-content/uploads/2026/01/Star-brust-strain-500x500.jpg", "category": "Hybrid", "variants": [ { "weight": "Ounce", "price": 55 }, { "weight": "Quarter Pound", "price": 175 }, { "weight": "Half Pound", "price": 350 }, { "weight": "Pound", "price": 700 } ] },
  { "name": "Gelato #33", "slug": "gelato-33", "image_url": "https://www.bulkbuddy.co/wp-content/uploads/2026/01/Gelato33-strain-500x500.jpg", "category": "Hybrid", "variants": [ { "weight": "Ounce", "price": 66 }, { "weight": "Quarter Pound", "price": 200 }, { "weight": "Half Pound", "price": 400 }, { "weight": "Pound", "price": 800 } ] },
  { "name": "Girl Scout Cookies", "slug": "girl-scout-cookies", "image_url": "https://www.bulkbuddy.co/wp-content/uploads/2026/01/Girl-scout-cookies-strain-500x500.jpg", "category": "Hybrid", "variants": [ { "weight": "Ounce", "price": 15 }, { "weight": "Quarter Pound", "price": 20.25 }, { "weight": "Half Pound", "price": 40.50 }, { "weight": "Pound", "price": 81 } ] },
  { "name": "God’s Green Crack", "slug": "gods-green-crack", "image_url": "https://www.bulkbuddy.co/wp-content/uploads/2026/01/Gods-green-crack-strain-500x500.jpg", "category": "Hybrid", "variants": [ { "weight": "Ounce", "price": 72 }, { "weight": "Quarter Pound", "price": 218.75 }, { "weight": "Half Pound", "price": 437.50 }, { "weight": "Pound", "price": 875 } ] },
  { "name": "Grape Ape AAAA+ Hybrid Craft", "slug": "grape-ape-aaaa-hybrid-craft", "image_url": "https://www.bulkbuddy.co/wp-content/uploads/2025/12/Grape-ape-craft-strain-500x500.jpg", "category": "Hybrid", "variants": [ { "weight": "Ounce", "price": 82 }, { "weight": "Quarter Pound", "price": 250 }, { "weight": "Half Pound", "price": 500 }, { "weight": "Pound", "price": 1000 } ] },
  { "name": "Grape Cake AAAA+ Hybrid Craft", "slug": "grape-cake-aaaa-hybrid-craft", "image_url": "https://www.bulkbuddy.co/wp-content/uploads/2025/12/Grape-cake-craft-strain-1-500x500.jpg", "category": "Hybrid", "variants": [ { "weight": "Ounce", "price": 88 }, { "weight": "Quarter Pound", "price": 256.25 }, { "weight": "Half Pound", "price": 512.50 }, { "weight": "Pound", "price": 1025 } ] },
  { "name": "Kombucha AAAA+ Hybrid Craft", "slug": "kombucha-aaaa-hybrid-craft", "image_url": "https://www.bulkbuddy.co/wp-content/uploads/2025/12/Kombucha-craft-strain-1-500x500.jpg", "category": "Hybrid", "variants": [ { "weight": "Ounce", "price": 82 }, { "weight": "Quarter Pound", "price": 243.75 }, { "weight": "Half Pound", "price": 487.50 }, { "weight": "Pound", "price": 975 } ] },
  { "name": "MAC 1", "slug": "mac-1", "image_url": "https://www.bulkbuddy.co/wp-content/uploads/2026/01/Mac-1-strain-500x500.jpg", "category": "Hybrid", "variants": [ { "weight": "Ounce", "price": 60 }, { "weight": "Quarter Pound", "price": 181.25 }, { "weight": "Half Pound", "price": 362.50 }, { "weight": "Pound", "price": 725 } ] },
  { "name": "Mac 10", "slug": "mac-10", "image_url": "https://www.bulkbuddy.co/wp-content/uploads/2025/12/mac-10-strain-500x500.jpg", "category": "Hybrid", "variants": [ { "weight": "Ounce", "price": 12 }, { "weight": "Quarter Pound", "price": 11.25 }, { "weight": "Half Pound", "price": 22.50 }, { "weight": "Pound", "price": 45 } ] },
  { "name": "MACFlurry AAAA+ Hybrid Craft", "slug": "macflurry-aaaa-hybrid-craft", "image_url": "https://www.bulkbuddy.co/wp-content/uploads/2025/12/Macflurry-craft-strain-500x500.jpg", "category": "Hybrid", "variants": [ { "weight": "Ounce", "price": 82 }, { "weight": "Quarter Pound", "price": 243.75 }, { "weight": "Half Pound", "price": 487.50 }, { "weight": "Pound", "price": 975 } ] },
  { "name": "Miracle Alien Cookies AAAA+ Hybrid Craft", "slug": "miracle-alien-cookies-aaaa-hybrid-craft", "image_url": "https://www.bulkbuddy.co/wp-content/uploads/2025/12/Miracle-alien-cookies-craft-strain-500x500.jpg", "category": "Hybrid", "variants": [ { "weight": "Ounce", "price": 82 }, { "weight": "Quarter Pound", "price": 243.75 }, { "weight": "Half Pound", "price": 487.50 }, { "weight": "Pound", "price": 975 } ] },
  { "name": "OMFG", "slug": "omfg", "image_url": "https://www.bulkbuddy.co/wp-content/uploads/2026/01/Omfg-strain-500x500.jpg", "category": "Hybrid", "variants": [ { "weight": "Ounce", "price": 72 }, { "weight": "Quarter Pound", "price": 218.75 }, { "weight": "Half Pound", "price": 437.50 }, { "weight": "Pound", "price": 875 } ] },
  { "name": "Peachy Mack", "slug": "peachy-mack", "image_url": "https://www.bulkbuddy.co/wp-content/uploads/2026/01/Peachy-Mack-strain-500x500.jpg", "category": "Hybrid", "variants": [ { "weight": "Ounce", "price": 66 }, { "weight": "Quarter Pound", "price": 200 }, { "weight": "Half Pound", "price": 400 }, { "weight": "Pound", "price": 800 } ] },
  { "name": "Fancy Funk AAAA+ Hybrid Craft", "slug": "fancy-funk-aaaa-hybrid-craft", "image_url": "https://www.bulkbuddy.co/wp-content/uploads/2025/12/Fancy-funk-craft-strain-500x500.jpg", "category": "Hybrid", "variants": [ { "weight": "Ounce", "price": 82 }, { "weight": "Quarter Pound", "price": 243.75 }, { "weight": "Half Pound", "price": 487.50 }, { "weight": "Pound", "price": 975 } ] },
  { "name": "Purple Space Cookies AAAA+ Hybrid Craft", "slug": "purple-space-cookies-aaaa-hybrid-craft", "image_url": "https://www.bulkbuddy.co/wp-content/uploads/2025/12/Purpl-space-cookies-craft-strain-500x500.jpg", "category": "Hybrid", "variants": [ { "weight": "Ounce", "price": 12 }, { "weight": "Quarter Pound", "price": 16.75 }, { "weight": "Half Pound", "price": 33.50 }, { "weight": "Pound", "price": 67 } ] },
  { "name": "Sugar Cookie", "slug": "sugar-cookie", "image_url": "https://www.bulkbuddy.co/wp-content/uploads/2026/01/Sugar-cookies-strain-500x500.jpg", "category": "Hybrid", "variants": [ { "weight": "Ounce", "price": 70 }, { "weight": "Quarter Pound", "price": 212.50 }, { "weight": "Half Pound", "price": 425 }, { "weight": "Pound", "price": 850 } ] },
  { "name": "Purple Blizzard AAAA+ Hybrid Craft", "slug": "purple-blizzard-aaaa-hybrid-craft", "image_url": "https://www.bulkbuddy.co/wp-content/uploads/2025/12/Purple-blizzard-c-strain-500x500.jpg", "category": "Hybrid", "variants": [ { "weight": "Ounce", "price": 82 }, { "weight": "Quarter Pound", "price": 250 }, { "weight": "Half Pound", "price": 500 }, { "weight": "Pound", "price": 1000 } ] },
  { "name": "Temptation AAAA+ Indica Craft", "slug": "temptation-aaaa-indica-craft", "image_url": "https://www.bulkbuddy.co/wp-content/uploads/2025/12/Temptation-craft-strain-500x500.jpg", "category": "Hybrid", "variants": [ { "weight": "Ounce", "price": 82 }, { "weight": "Quarter Pound", "price": 243.75 }, { "weight": "Half Pound", "price": 487.50 }, { "weight": "Pound", "price": 975 } ] },
  { "name": "Trophy Wife", "slug": "trophy-wife", "image_url": "https://www.bulkbuddy.co/wp-content/uploads/2026/01/Trophy-wife-strain-500x500.jpg", "category": "Hybrid", "variants": [ { "weight": "Ounce", "price": 66 }, { "weight": "Quarter Pound", "price": 200 }, { "weight": "Half Pound", "price": 400 }, { "weight": "Pound", "price": 800 } ] },
  { "name": "Tropicana Jet Fuel", "slug": "tropicana-jet-fuel", "image_url": "https://www.bulkbuddy.co/wp-content/uploads/2026/01/Tropicana-jet-fuel-strain-500x500.jpg", "category": "Hybrid", "variants": [ { "weight": "Ounce", "price": 66 }, { "weight": "Quarter Pound", "price": 200 }, { "weight": "Half Pound", "price": 400 }, { "weight": "Pound", "price": 800 } ] },
  { "name": "White Diamond", "slug": "white-diamond", "image_url": "https://www.bulkbuddy.co/wp-content/uploads/2025/12/White-diamond-strain-1-500x500.jpg", "category": "Hybrid", "variants": [ { "weight": "Ounce", "price": 32 }, { "weight": "Quarter Pound", "price": 104.50 }, { "weight": "Half Pound", "price": 209 }, { "weight": "Pound", "price": 418 } ] },
  { "name": "Rainy Lady", "slug": "rainy-lady", "image_url": "https://www.bulkbuddy.co/wp-content/uploads/2025/12/Rainy-lady-strain-500x500.jpg", "category": "Hybrid", "variants": [ { "weight": "Ounce", "price": 66 }, { "weight": "Quarter Pound", "price": 200 }, { "weight": "Half Pound", "price": 400 }, { "weight": "Pound", "price": 800 } ] },
  { "name": "Unicorn Poop", "slug": "unicorn-poop", "image_url": "https://www.bulkbuddy.co/wp-content/uploads/2026/01/Unicorn-poop-strain-500x500.jpg", "category": "Hybrid", "variants": [ { "weight": "Ounce", "price": 70 }, { "weight": "Quarter Pound", "price": 212.50 }, { "weight": "Half Pound", "price": 425 }, { "weight": "Pound", "price": 850 } ] }
];

// NEW SHAKE N TRIM DATA
const SHAKE_TRIM_DATA = [
  {
    "name": "99% CBD Isolate Powder",
    "slug": "99-cbd-isolate-powder",
    "image_url": "https://www.bulkbuddy.co/wp-content/uploads/2019/10/180e6-cbd2bpowder3-copy.jpg",
    "category": "Shake n Trim",
    "description": "Pure 99% CBD Isolate powder. This crystalline isolate is THC-free and versatile for mixing into oils or direct use. Bulk pricing available for medicinal applications.",
    "variants": [
      { "weight": "Ounce", "price": 62.50 },
      { "weight": "Quarter Pound", "price": 250.00 },
      { "weight": "Half Pound", "price": 500.00 },
      { "weight": "Pound", "price": 1000.00 }
    ]
  },
  {
    "name": "Watermelon Kush Kief",
    "slug": "watermelon-kush-kief",
    "image_url": "https://www.bulkbuddy.co/wp-content/uploads/2023/04/Watrmelon-kief-500x500.jpg",
    "category": "Shake n Trim",
    "description": "Potent Watermelon Kush kief collected through multi-stage sifting. Adds a significant THC boost and sweet terpene profile to any flower.",
    "variants": [
      { "weight": "Ounce", "price": 37.50 },
      { "weight": "Quarter Pound", "price": 150.00 },
      { "weight": "Half Pound", "price": 300.00 },
      { "weight": "Pound", "price": 600.00 }
    ]
  },
  {
    "name": "$55/oz *Promo* Mystery AA-AAAA Weed Ounce",
    "slug": "mystery-ounce-promo",
    "image_url": "https://www.bulkbuddy.co/wp-content/uploads/2021/05/mystery-500x500.gif",
    "category": "Shake n Trim",
    "description": "A high-value promotional mystery ounce featuring a mix of AA to AAAA quality buds. Excellent for budget-conscious buyers looking for quality surprises.",
    "variants": [
      { "weight": "Ounce", "price": 55.00 }
    ]
  },
  {
    "name": "$39/oz *PROMO* Mixed Strain (POPCORN)",
    "slug": "mixed-strain-popcorn-promo",
    "image_url": "https://www.bulkbuddy.co/wp-content/uploads/2021/09/ODvMgmUI-500x500.jpeg",
    "category": "Shake n Trim",
    "description": "Mixed strain popcorn buds at an unbeatable promotional price. Perfect for high-volume users or for making potent infusions and edibles.",
    "variants": [
      { "weight": "Ounce", "price": 39.00 }
    ]
  },
  {
    "name": "Chanel Hash",
    "slug": "chanel-hash",
    "image_url": "https://www.bulkbuddy.co/wp-content/uploads/2023/12/buy-chanel-hash-wholesale-500x500.jpg",
    "category": "Shake n Trim",
    "description": "Smooth and spicy Chanel Hash. A domestic favorite with a pliable texture and a classic earthy flavor profile.",
    "variants": [
      { "weight": "Ounce", "price": 11.81 },
      { "weight": "Quarter Pound", "price": 47.25 },
      { "weight": "Half Pound", "price": 94.50 },
      { "weight": "Pound", "price": 189.00 }
    ]
  }
];

// USER PROVIDED ADDITIONS FROM PROMPT (DUPLICATES ALLOWED PER INSTRUCTION)
const USER_PROVIDED_LIST_1 = [
  {
    "name": "99% CBD Isolate Powder",
    "slug": "99-cbd-isolate-powder",
    "image_url": "https://www.bulkbuddy.co/wp-content/uploads/2019/10/180e6-cbd2bpowder3-copy.jpg",
    "category": "Shake n Trim",
    "description": "Pure 99% CBD Isolate powder. This crystalline isolate is THC-free and versatile for mixing into oils or direct use. Bulk pricing available for medicinal applications.",
    "variants": [
      { "weight": "Ounce", "price": 62.50 },
      { "weight": "Quarter Pound", "price": 250.00 },
      { "weight": "Half Pound", "price": 500.00 },
      { "weight": "Pound", "price": 1000.00 }
    ]
  },
  {
    "name": "Watermelon Kush Kief",
    "slug": "watermelon-kush-kief",
    "image_url": "https://www.bulkbuddy.co/wp-content/uploads/2023/04/Watrmelon-kief-500x500.jpg",
    "category": "Shake n Trim",
    "description": "Potent Watermelon Kush kief collected through multi-stage sifting. Adds a significant THC boost and sweet terpene profile to any flower.",
    "variants": [
      { "weight": "Ounce", "price": 37.50 },
      { "weight": "Quarter Pound", "price": 150.00 },
      { "weight": "Half Pound", "price": 300.00 },
      { "weight": "Pound", "price": 600.00 }
    ]
  }
];

const USER_PROVIDED_LIST_2 = [
  {
    "name": "99% CBD Isolate Powder",
    "slug": "99-cbd-isolate-powder-conc",
    "image_url": "https://www.bulkbuddy.co/wp-content/uploads/2019/10/180e6-cbd2bpowder3-copy.jpg",
    "category": "Concentrates",
    "description": "Pure 99% CBD Isolate in crystalline powder form. Completely THC-free and odorless. Perfect for DIY topicals, tinctures, or direct consumption for focused anti-inflammatory and anxiety relief.",
    "variants": [
      { "weight": "Ounce", "price": 62.50 },
      { "weight": "Quarter Pound", "price": 250.00 },
      { "weight": "Half Pound", "price": 500.00 },
      { "weight": "Pound", "price": 1000.00 }
    ]
  },
  {
    "name": "Watermelon Kush Kief",
    "slug": "watermelon-kush-kief-conc",
    "image_url": "https://www.bulkbuddy.co/wp-content/uploads/2023/04/Watrmelon-kief-500x500.jpg",
    "category": "Concentrates",
    "description": "Premium sifted kief from the Watermelon Kush strain. Highly potent and flavorful, ideal for topping bowls or infusing joints to enhance the sedative Indica effects and sweet melon aroma.",
    "variants": [
      { "weight": "Ounce", "price": 37.50 },
      { "weight": "Quarter Pound", "price": 150.00 },
      { "weight": "Half Pound", "price": 300.00 },
      { "weight": "Pound", "price": 600.00 }
    ]
  },
  {
    "name": "Chanel Hash",
    "slug": "chanel-hash-conc",
    "image_url": "https://www.bulkbuddy.co/wp-content/uploads/2023/12/buy-chanel-hash-wholesale-500x500.jpg",
    "category": "Concentrates",
    "description": "A high-quality imported-style domestic hash. Features a soft, pliable texture and a rich, spicy, and earthy profile. Provides a balanced body stone and mental relaxation.",
    "variants": [
      { "weight": "Ounce", "price": 11.81 },
      { "weight": "Quarter Pound", "price": 47.25 },
      { "weight": "Half Pound", "price": 94.50 },
      { "weight": "Pound", "price": 189.00 }
    ]
  },
  {
    "name": "Mystery AA-AAAA Weed Ounce (Promo)",
    "slug": "mystery-aa-aaaa-ounce-promo-dup",
    "image_url": "https://www.bulkbuddy.co/wp-content/uploads/2021/05/mystery-500x500.gif",
    "category": "Shake n Trim",
    "description": "A promotional mystery bag containing an ounce of flower ranging from AA to AAAA quality. A cost-effective way to sample various high-quality strains from our current inventory.",
    "variants": [
      { "weight": "Ounce", "price": 55.00 }
    ]
  },
  {
    "name": "Aurora Milk Chocolate | 500mg | Keo Edibles",
    "slug": "aurora-milk-chocolate-500mg",
    "image_url": "https://www.bulkbuddy.co/wp-content/uploads/2021/12/buy-keo-chocolate-aurora-milk-chocolate-copy-500x500.jpg",
    "category": "Edibles",
    "status": "Low Stock",
    "description": "Premium milk chocolate infused with 500mg of high-quality THC distillate. Precision-dosed for consistent potency. Note: This item is currently low in stock.",
    "price": 26.00
  },
  {
    "name": "Green Tea Crisp Chocolate | 500mg | Keo Edibles",
    "slug": "green-tea-crisp-chocolate-500mg",
    "image_url": "https://www.bulkbuddy.co/wp-content/uploads/2021/12/buy-keo-chocolate-green-tea-crisp-copy-1-500x500.jpg",
    "category": "Edibles",
    "status": "Low Stock",
    "description": "A unique blend of matcha green tea and crispy rice in a 500mg THC chocolate bar. Offers a smooth, gourmet flavor with a potent long-lasting effect.",
    "price": 25.00
  }
];

// NEW AAA WEED DATA
const AAA_WEED_DATA = [
  {
    "name": "Afghani Kush (AAA++)",
    "slug": "afghani-kush-aaa",
    "image_url": "https://www.bulkbuddy.co/wp-content/uploads/2025/12/Afghani-kush-strain-1-500x500.jpg",
    "category": "AAA Weed",
    "description": "Afghani Kush is a legendary heavy-indica known for its deep relaxation properties. This AAA++ batch features a semi-fluffy texture with a perfect cure and distinct hints of purple throughout. Its terpene profile is rich with earthy, floral, and spicy notes, evolving into a sweet, woody finish. Highly recommended for patients managing PTSD, chronic insomnia, and deep physical pain, it offers a THC range of 22-28%. Batch Date: Dec 17, 2025.",
    "variants": [
      { "weight": "Ounce", "price": 24.00 },
      { "weight": "Quarter Pound", "price": 96.00 },
      { "weight": "Half Pound", "price": 192.00 },
      { "weight": "Pound", "price": 384.00 }
    ]
  },
  {
    "name": "Grape Soda (AAA+)",
    "slug": "grape-soda-aaa",
    "image_url": "https://www.bulkbuddy.co/wp-content/uploads/2025/12/Grape-soda-strain-500x500.jpg",
    "category": "AAA Weed",
    "description": "Grape Soda is a high-potency selection that stands out with its semi-dense structure and beautiful purple coloration. This strain is a powerhouse for stress relief, testing between 24-31% THC. It delivers an unmistakable burst of grape and berry flavor followed by an earthy, skunk undertone. Ideal for managing severe migraines, anxiety, and depression, it provides a tranquilizing effect that is perfect for evening use. Batch Date: Dec 20, 2025.",
    "variants": [
      { "weight": "Ounce", "price": 56.25 },
      { "weight": "Quarter Pound", "price": 225.00 },
      { "weight": "Half Pound", "price": 450.00 },
      { "weight": "Pound", "price": 900.00 }
    ]
  },
  {
    "name": "White Truffle (AAA++)",
    "slug": "white-truffle-aaa",
    "image_url": "https://www.bulkbuddy.co/wp-content/uploads/2026/01/White-truffle-strain-500x500.jpg",
    "category": "AAA Weed",
    "description": "White Truffle is an exotic AAA++ variety that appeals to those seeking a savory and complex aroma. It features a semi-fluffy cure with vibrant purple bits and a unique flavor profile of garlic, mushroom, and dank earth, accented by spicy floral notes. With a THC content of 22-28%, it is particularly effective for those dealing with inflammation, PTSD, and chronic headaches. This strain offers a balanced but heavy stone. Batch Date: Jan 7, 2026.",
    "variants": [
      { "weight": "Ounce", "price": 45.31 },
      { "weight": "Quarter Pound", "price": 181.25 },
      { "weight": "Half Pound", "price": 362.50 },
      { "weight": "Pound", "price": 725.00 }
    ]
  },
  {
    "name": "Candyland (AAA++)",
    "slug": "candyland-aaa",
    "image_url": "https://www.bulkbuddy.co/wp-content/uploads/2026/01/Candy-Land-strain-500x500.jpg",
    "category": "AAA Weed",
    "description": "Candyland is a delightful sativa-leaning hybrid that provides a stimulating and upbeat experience. The buds are semi-fluffy and perfectly cured, smelling of sugary candy, honey, and vanilla with a diesel kick. Testing at 22-28% THC, it is a go-to for daytime relief from fatigue, depression, and ADD. It offers a smooth smoke with a sweet berry aftertaste that lingers. Batch Date: Jan 8, 2026.",
    "variants": [
      { "weight": "Ounce", "price": 46.88 },
      { "weight": "Quarter Pound", "price": 187.50 },
      { "weight": "Half Pound", "price": 375.00 },
      { "weight": "Pound", "price": 750.00 }
    ]
  },
  {
    "name": "Durban Poison (AAA+)",
    "slug": "durban-poison-aaa",
    "image_url": "https://www.bulkbuddy.co/wp-content/uploads/2026/01/Durban-poison-strain-500x500.jpg",
    "category": "AAA Weed",
    "description": "Durban Poison is a world-renowned pure sativa, celebrated for its energizing and uplifting effects. This AAA+ batch is semi-dense and expertly cured to preserve its signature citrus and spicy pine aroma. It is the perfect choice for productivity and focus, helping users manage fatigue, nausea, and high stress levels without the heavy sedation of other strains. THC: 21-27%. Batch Date: Jan 14, 2026.",
    "variants": [
      { "weight": "Ounce", "price": 23.56 },
      { "weight": "Quarter Pound", "price": 94.25 },
      { "weight": "Half Pound", "price": 188.50 },
      { "weight": "Pound", "price": 377.00 }
    ]
  }
];

const NEW_INDICA_DATA = [
  { "name": "Death Bubba", "slug": "death-bubba", "image_url": "https://www.bulkbuddy.co/wp-content/uploads/2026/01/Death-Bubba-strain-500x500.jpg", "description": "Death Bubba is an indica dominant hybrid (70% indica/30% sativa) strain created as a descendant of the hugely popular Bubba Kush strain.", "variants": [ { "weight": "Ounce", "price": 99.00 }, { "weight": "Quarter Pound", "price": 295.00 } ] },
  { "name": "Pink Kush", "slug": "pink-kush", "image_url": "https://www.bulkbuddy.co/wp-content/uploads/2026/01/Pink-kush-strain-500x500.jpg", "description": "Pink Kush is an indica-dominant hybrid with powerful body-focused effects. In its exceptional variations, pink hairs burst from bright green buds barely visible under a blanket of sugar-like trichomes.", "variants": [ { "weight": "Ounce", "price": 105.00 }, { "weight": "Quarter Pound", "price": 310.00 } ] },
  { "name": "Purple Kush", "slug": "purple-kush", "image_url": "https://www.bulkbuddy.co/wp-content/uploads/2026/01/Purple-kush-strain-500x500.jpg", "description": "Purple Kush is a pure indica strain that emerged from the Oakland area of California as the result of a cross between Hindu Kush and Purple Afghani.", "variants": [ { "weight": "Ounce", "price": 95.00 }, { "weight": "Quarter Pound", "price": 280.00 } ] },
  { "name": "Tuna Kush", "slug": "tuna-kush", "image_url": "https://www.bulkbuddy.co/wp-content/uploads/2026/01/Tuna-kush-strain-500x500.jpg", "description": "Tuna Kush is a BC legend that is now available from our dispensary. This strain is known for its very high potency.", "variants": [ { "weight": "Ounce", "price": 110.00 }, { "weight": "Quarter Pound", "price": 320.00 } ] },
  { "name": "Bubba Kush", "slug": "bubba-kush", "image_url": "https://www.bulkbuddy.co/wp-content/uploads/2026/01/Bubba-kush-strain-500x500.jpg", "description": "Bubba Kush is an indica strain that has gained notoriety in the US and beyond for its heavy tranquilizing effects.", "variants": [ { "weight": "Ounce", "price": 90.00 }, { "weight": "Quarter Pound", "price": 270.00 } ] }
];

const NEW_MIXED_BATCH = [
  { "name": "Mike Tyson", "slug": "mike-tyson", "category": "Indica", "image_url": "https://www.bulkbuddy.co/wp-content/uploads/2026/01/Mike-tyson-strain-500x500.jpg", "description": "Named after the heavyweight champion, this strain is sure to knock you out.", "variants": [ { "weight": "Ounce", "price": 120.00 } ] },
  { "name": "Green Crack", "slug": "green-crack", "category": "Sativa", "image_url": "https://www.bulkbuddy.co/wp-content/uploads/2026/01/Green-crack-strain-500x500.jpg", "description": "Don't let the name fool you: this is pure cannabis. Few strains compare to Green Crack's sharp energy and focus.", "variants": [ { "weight": "Ounce", "price": 100.00 } ] },
  { "name": "Blue Dream", "slug": "blue-dream", "category": "Hybrid", "image_url": "https://www.bulkbuddy.co/wp-content/uploads/2026/01/Blue-dream-strain-500x500.jpg", "description": "Blue Dream, a sativa-dominant hybrid originating in California, has achieved legendary status among West Coast strains.", "variants": [ { "weight": "Ounce", "price": 110.00 } ] }
];

const CRAFT_FLOWER_DATA = [
  { "name": "Wedding Cake AAAA+", "slug": "wedding-cake-aaaa-craft", "type": "Hybrid", "image_url": "https://www.bulkbuddy.co/wp-content/uploads/2025/12/Wedding-cake-craft-strain-500x500.jpg", "description": "Top shelf Wedding Cake. Rich and tangy with earthy and peppery flavors.", "variants": [ { "weight": "Ounce", "price": 180.00 } ] },
  { "name": "Godfather OG AAAA+", "slug": "godfather-og-aaaa-craft", "type": "Indica", "image_url": "https://www.bulkbuddy.co/wp-content/uploads/2025/12/Godfather-og-craft-strain-500x500.jpg", "description": "Known as the Don of all OG strains, this strain is popular for its potent sedative effects.", "variants": [ { "weight": "Ounce", "price": 190.00 } ] },
  { "name": "Sour Diesel AAAA+", "slug": "sour-diesel-aaaa-craft", "type": "Sativa", "image_url": "https://www.bulkbuddy.co/wp-content/uploads/2025/12/Sour-diesel-craft-strain-500x500.jpg", "description": "A fast-acting strain that delivers energizing, dreamy cerebral effects.", "variants": [ { "weight": "Ounce", "price": 185.00 } ] }
];

const PROCESSED_NEW_PRODUCTS: Product[] = NEW_HYBRID_DATA.map((item, index) => {
    let type = StrainType.HYBRID;
    if (item.category.toLowerCase().includes('indica')) type = StrainType.INDICA;
    else if (item.category.toLowerCase().includes('sativa')) type = StrainType.SATIVA;

    // Use price of first variant (Ounce) as base
    const basePrice = item.variants[0].price;

    return {
        id: item.slug,
        name: item.name,
        image: item.image_url,
        description: `Premium ${item.category} strain. Known for its potent effects and distinct flavor profile. Perfect for those seeking quality cannabis.`,
        type: type,
        category: 'Cannabis',
        price: basePrice,
        thcPercent: 22 + (index % 8),
        inStock: true,
        rating: 4.5 + (index % 5) * 0.1,
        reviews: 5 + index * 2,
        variants: item.variants.map(v => ({ weight: v.weight, price: v.price }))
    };
});

const PROCESSED_INDICA_PRODUCTS: Product[] = NEW_INDICA_DATA.map((item, index) => {
    return {
        id: item.slug,
        name: item.name,
        image: item.image_url,
        description: item.description,
        type: StrainType.INDICA,
        category: 'Cannabis',
        price: item.variants[0].price,
        thcPercent: 24 + (index % 7), // High potency range
        inStock: true,
        rating: 5,
        reviews: 3 + index,
        variants: item.variants.map(v => ({ weight: v.weight, price: v.price }))
    };
});

const PROCESSED_MIXED_BATCH: Product[] = NEW_MIXED_BATCH.map((item, index) => {
  let type = StrainType.HYBRID;
  if (item.category === 'Sativa') type = StrainType.SATIVA;
  else if (item.category === 'Indica') type = StrainType.INDICA;
  else if (item.name.includes('Tyson')) type = StrainType.INDICA;

  return {
    id: item.slug,
    name: item.name,
    image: item.image_url,
    description: item.description,
    type: type,
    category: 'Cannabis',
    price: item.variants[0].price,
    thcPercent: 28, // High THC for these premium ones
    inStock: true,
    rating: 5.0,
    reviews: 8 + index,
    variants: item.variants.map(v => ({ weight: v.weight, price: v.price }))
  };
});

const PROCESSED_CRAFT_FLOWERS: Product[] = CRAFT_FLOWER_DATA.map((item, index) => {
    return {
        id: item.slug,
        name: item.name,
        image: item.image_url,
        description: item.description,
        type: item.type as StrainType,
        category: 'Cannabis', // Changed from 'Craft Cannabis Flowers' to 'Cannabis' to merge them
        price: item.variants[0].price,
        thcPercent: 29, 
        inStock: true,
        rating: 5.0,
        reviews: 12 + index * 3,
        variants: item.variants.map(v => ({ weight: v.weight, price: v.price }))
    };
});

const PROCESSED_SHAKE_TRIM: Product[] = SHAKE_TRIM_DATA.map((item, index) => {
    // Categorize them as specific types if possible, otherwise generic Shake n Trim
    // This allows the Shop filters to catch them when clicking subcategories
    let type: string | StrainType = StrainType.HYBRID;
    if (item.name.includes('CBD')) type = StrainType.CBD;
    else if (item.name.includes('Kief')) type = 'Kief';
    else if (item.name.includes('Hash')) type = 'Hash';
    else type = 'Shake n Trim';

    return {
        id: item.slug,
        name: item.name,
        image: item.image_url,
        description: item.description,
        type: type,
        category: 'Cannabis',
        price: item.variants[0].price,
        thcPercent: item.name.includes('CBD') ? 0 : 22,
        inStock: true,
        rating: 4.5,
        reviews: 5 + index,
        variants: item.variants.map(v => ({ weight: v.weight, price: v.price }))
    };
});

const PROCESSED_AAA_WEED: Product[] = AAA_WEED_DATA.map((item, index) => {
    return {
        id: item.slug,
        name: item.name,
        image: item.image_url,
        description: item.description,
        type: 'AAA Weed',
        category: 'Cannabis',
        price: item.variants[0].price,
        thcPercent: 25, 
        inStock: true,
        rating: 4.3,
        reviews: 6 + index,
        variants: item.variants.map(v => ({ weight: v.weight, price: v.price }))
    };
});

const PROCESSED_USER_ADDITIONS_1: Product[] = USER_PROVIDED_LIST_1.map((item, index) => {
    return {
        id: item.slug,
        name: item.name,
        image: item.image_url,
        description: item.description || '',
        type: 'Shake n Trim',
        category: item.category,
        price: item.variants?.[0]?.price || 0,
        thcPercent: item.name.includes('CBD') ? 0 : 22,
        inStock: true,
        rating: 4.5,
        reviews: 5,
        variants: item.variants?.map(v => ({ weight: v.weight, price: v.price }))
    };
});

const PROCESSED_USER_ADDITIONS_2: Product[] = USER_PROVIDED_LIST_2.map((item, index) => {
    let type: string = 'Concentrates';
    if(item.category === 'Edibles') type = 'Edibles';
    if(item.category === 'Shake n Trim') type = 'Shake n Trim';

    return {
        id: item.slug,
        name: item.name,
        image: item.image_url,
        description: item.description || '',
        type: type,
        category: item.category,
        price: (item.variants && item.variants.length > 0) ? item.variants[0].price : (item.price || 0),
        thcPercent: 25,
        inStock: true,
        rating: 4.8,
        reviews: 3,
        variants: item.variants?.map(v => ({ weight: v.weight, price: v.price }))
    };
});

// Other non-cannabis products to keep the store populated
const OTHER_PRODUCTS: Product[] = [
   // --- VAPES ---
  {
    id: 'v1',
    name: 'THC Dual Chamber Disposable Vape | 6ML',
    type: StrainType.HYBRID,
    category: 'Vapes',
    price: 70.00,
    image: "https://www.bulkbuddy.co/wp-content/uploads/2024/11/Gorilla-Glue-4-6000-mg-500x500.jpg",
    description: "Dual chamber design. Each side of the cartridge is filled with a different flavor with a total of 6 mL of THC oil.",
    inStock: true,
    brand: 'Keo Extracts',
    features: ["Standard 510 Thread", "USB-C charge port", "Rechargeable", "Dual chamber"]
  },
  {
    id: 'v2',
    name: 'THC Disposable Vape Pen | 2ML',
    type: StrainType.HYBRID,
    category: 'Vapes',
    price: 35.00,
    image: "https://www.bulkbuddy.co/wp-content/uploads/2024/11/Gorilla-Glue-4-2000-mg-500x500.jpg",
    description: "Elevate your cannabis experience with Keo Extract's new disposable vape pen filled with 2 mL of THC oil.",
    inStock: true,
    brand: 'Keo Extracts',
    features: ["Standard 510 Thread", "USB-C charge port", "Rechargeable"]
  },
  // --- CONCENTRATES ---
  {
    id: '13',
    name: 'Ace Killer OG Shatter',
    type: 'Shatter',
    category: 'Concentrates',
    price: 21.00,
    image: "https://www.bulkbuddy.co/wp-content/uploads/2025/12/Ace-killer-og-shatters-w-500x500.jpg",
    description: 'Perfectly snaps. Flavors: Mint, Pine, Skunk, Vanilla.',
    inStock: true,
    rating: 5.0,
    reviews: 16,
    thcPercent: 78,
    texture: 'Snap & Pull'
  },
  // --- EDIBLES ---
  {
    id: 'e1',
    name: 'Almond Crunch Bar Chocolate',
    type: StrainType.CBD,
    category: 'Edibles',
    dosage: '500mg CBD',
    brand: 'Keo Edibles',
    price: 22.00,
    medical: ['Pain', 'Anxiety', 'Insomnia'],
    features: ['Relax', 'Calm'],
    image: 'https://www.bulkbuddy.co/wp-content/uploads/2025/10/Almond-crunch-chocolate-bar-500x500.jpg',
    description: 'Rich white chocolate blended and topped with ground almonds and calming CBD.',
    inStock: true
  }
];

export const INITIAL_PRODUCTS: Product[] = [
  ...PROCESSED_INVENTORY,
  // Filter out items from previous arrays if they exist in the new Craft Flowers array to prioritize new data
  ...PROCESSED_NEW_PRODUCTS.filter(p => !NEW_MIXED_BATCH.find(n => n.slug === p.id) && !CRAFT_FLOWER_DATA.find(c => c.slug === p.id) && !SHAKE_TRIM_DATA.find(s => s.slug === p.id) && !AAA_WEED_DATA.find(a => a.slug === p.id)),
  ...PROCESSED_INDICA_PRODUCTS.filter(p => !CRAFT_FLOWER_DATA.find(c => c.slug === p.id) && !SHAKE_TRIM_DATA.find(s => s.slug === p.id) && !AAA_WEED_DATA.find(a => a.slug === p.id)),
  ...PROCESSED_MIXED_BATCH.filter(p => !CRAFT_FLOWER_DATA.find(c => c.slug === p.id) && !SHAKE_TRIM_DATA.find(s => s.slug === p.id) && !AAA_WEED_DATA.find(a => a.slug === p.id)),
  ...PROCESSED_CRAFT_FLOWERS,
  ...PROCESSED_SHAKE_TRIM,
  ...PROCESSED_AAA_WEED,
  ...PROCESSED_USER_ADDITIONS_1, // Adding explicit user duplicates per instruction
  ...PROCESSED_USER_ADDITIONS_2, // Adding explicit user duplicates per instruction
  ...OTHER_PRODUCTS
];

export const MAIN_MENU = [
  { label: 'Home', path: '/' },
  { label: 'Shop', path: '/shop' },
  { label: 'How to pay', path: '/how-to-pay' },
  { label: 'Testimonials', path: '/testimonials' },
  { label: 'Contact', path: '/contact' },
];

export const CATEGORIES = [
  { 
    name: 'Cannabis', 
    subcategories: [
      'Cannabis Flower',
      'Indica',
      'Sativa',
      'Hybrid',
      'AAAA Weed',
      'AAA Weed',
      'AA Weed',
      'Pre-rolls',
      'Shake n Trim'
    ] 
  },
  { 
    name: 'Concentrates', 
    subcategories: [
      'Budder',
      'Caviar',
      'Distillate',
      'Hash',
      'Kief',
      'Live Resin',
      'Shatter',
      'THCa Diamond'
    ] 
  },
  { 
    name: 'Edibles', 
    subcategories: [
      'Candy',
      'Capsules',
      'Chocolate & Baked Goods',
      'Tinctures & Oils'
    ] 
  },
  { 
    name: 'Vapes', 
    subcategories: [] 
  },
  { 
    name: 'CBD', 
    subcategories: [] 
  },
  { 
    name: 'Accessories', 
    subcategories: [
      'Rolling Paper & Filters Tips',
      'Rolling Trays'
    ] 
  },
];