/*
  HIGAUBEO'S PICK - US Storefront
  Product data for landing page - Updated with real images from upanhlaylink.com
*/

export interface Product {
  id: string;
  name: string;
  description: string;
  image: string;
  affiliateUrl: string;
  badge?: "Trending" | "Best Seller" | "New" | "Deal";
  price?: string;
}

export interface Category {
  id: string;
  name: string;
  emoji: string;
  heroImage: string;
  products: Product[];
}

export const categories: Category[] = [
  {
    id: "smart-home",
    name: "Smart Home for Pet Parents",
    emoji: "🏠",
    heroImage: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&h=500&fit=crop",
    products: [
      {
        id: "sh1",
        name: "eufy Robot Vacuum Omni C20",
        description: "Smart Robot Vacuum with All-in-One Station, Ultra-Slim Body and Vacuum Mop Replacement Pads",
        image: "https://sf-static.upanhlaylink.com/img/image_20260305e8b6e71662ce10e6a1848d3075d0e609.jpg",
        affiliateUrl: "https://amzn.to/40sLWUB",
        badge: "Deal",
        price: "$384.98",
      },
      {
        id: "sh2",
        name: "26 Pack Replacement Accessories",
        description: "Compatible with eufy Vacuum Omni C20, 2 Mainbrush 4 Filter 6 Dust Bags 6 Mop Pads 6 Sidebrush 1 Cleaning Brush",
        image: "https://sf-static.upanhlaylink.com/img/image_2026030587f1d94fd0f8cf9ce830fa9cd64eb214.jpg",
        affiliateUrl: "https://amzn.to/3OJUeER",
        badge: "Trending",
        price: "$24.99",
      },
      {
        id: "sh3",
        name: "DREAME G10 Pro Wet Dry Vacuum Cleaner",
        description: "Vacuum Mop All in One with Auto Self-Cleaning, Floor Cleaner Machine for Hard Floor, 35 Mins Runtime, Edge Cleaning",
        image: "https://sf-static.upanhlaylink.com/img/image_20260305f6847c6bcd58a0ca1dd0a508fe5d4e5f.jpg",
        affiliateUrl: "https://amzn.to/40bniHS",
        price: "$189.89",
      },
      {
        id: "sh4",
        name: "PETKIT AIRSALON MAX",
        description: "Automatic Pet Hair Drying Box for Cat Puppy Kitten, Ultra Quiet Hair Dryer, 60L Large Capacity, Smart Temperature Control",
        image: "https://sf-static.upanhlaylink.com/img/image_20260305755687376405172175f60d2179865c7c.jpg",
        affiliateUrl: "https://amzn.to/406KA1z",
        price: "$376.99",
      },
      {
        id: "sh5",
        name: "PETKIT Automatic Cat Feeder",
        description: "Camera, 1080P HD Video with Night Vision, 2.4G WiFi Pet Feeder for Cat & Small Dog, 2-Way Audio & Meal Call",
        image: "https://sf-static.upanhlaylink.com/img/image_20260305c2db55e9749206bbcee6bd31dd1f8264.jpg",
        affiliateUrl: "https://amzn.to/4rfT9lM",
        price: "$99.99",
      },
      {
        id: "sh6",
        name: "PETKIT New Cat Water Fountain",
        description: "Ultra Quiet 65oz/1.85L Pet Water Fountain for Cats and Dogs Inside, Detachable Design Easy to Clean",
        image: "https://sf-static.upanhlaylink.com/img/image_20260305c2db55e9749206bbcee6bd31dd1f8264.jpg",
        affiliateUrl: "https://amzn.to/4ctKFns",
        price: "$25.99",
      },
      {
        id: "sh7",
        name: "PETLIBRO Cat Water Fountain",
        description: "Cordless Pet Water Fountain Battery Operated, 2.5L/84oz Dockstream, Stainless Steel Tray, Easy to Clean BPA-Free",
        image: "https://sf-static.upanhlaylink.com/img/image_202603054bf47f2780723672f7d98a22b0bd7f97.jpg",
        affiliateUrl: "https://amzn.to/4aPx2h1",
        price: "$69.90",
      },
    ],
  },
  {
    id: "cat-care",
    name: "Cat Care Essentials",
    emoji: "🐱",
    heroImage: "https://images.unsplash.com/photo-1574158622682-e40e69881006?w=1200&h=500&fit=crop",
    products: [
      {
        id: "cc1",
        name: "COMBO PETKIT Mixed Cat Litter",
        description: "Fast Clumping, Flushable, Ultra Absorbent, 100% Natural Ingredients, Really Dust-Free, Low Tracking",
        image: "https://sf-static.upanhlaylink.com/img/image_202603054279b9b943c66e7f2491237fbe7338d5.jpg",
        affiliateUrl: "https://amzn.to/46GHViR",
        badge: "Deal",
        price: "$29.90",
      },
      {
        id: "cc2",
        name: "PETKIT PuraX PuraMax Replaced Waste Bags",
        description: "5 Rolls, Portable Cat Litter Waste Receptacles Bags for Self-Cleaning Cat Litter Box",
        image: "https://sf-static.upanhlaylink.com/img/image_20260305bd1fde1330eb26271216d005d162da22.jpg",
        affiliateUrl: "https://amzn.to/4l9L40t",
        price: "$29.99",
      },
      {
        id: "cc3",
        name: "MYPIN Cat Litter Scooper with Holder",
        description: "Upgraded Cat Litter Shovel with Bags and Waste Can, Extra 135 Count Litter Waste Bags, Large Capacity",
        image: "https://sf-static.upanhlaylink.com/img/image_20260305a17360c76bb90a1233f21aea827bc570.jpg",
        affiliateUrl: "https://amzn.to/4u9RErL",
        price: "$19.99",
      },
      {
        id: "cc4",
        name: "Full Metal Cat Litter Scoop",
        description: "Stainless Steel Cat Litter Scooper Holder, Aluminum Kitty Scoop Captures All Clumps, Heavy Duty",
        image: "https://sf-static.upanhlaylink.com/img/image_20260305e2d482e9bc2675321ce39aa8c9f792a2.jpg",
        affiliateUrl: "https://amzn.to/4relbOx",
        price: "$21.99",
      },
      {
        id: "cc5",
        name: "PETKIT Upgraded Clump+ Tofu Mixed Cat Litter",
        description: "Water Flushable, Ultra Absorbent and Fast Drying, 100% Natural Ingredients Clumping Litter, Dust-Free",
        image: "https://sf-static.upanhlaylink.com/img/image_202603056a6cbad8005ccce8065ecaedd4b104d6.jpg",
        affiliateUrl: "https://amzn.to/47grOZp",
        price: "$37.45",
      },
      {
        id: "cc6",
        name: "Tapioca Cat Litter",
        description: "Cassava Cat Litter Odor Control Dust-Free Clumping Litter",
        image: "https://sf-static.upanhlaylink.com/img/image_20260305a6f00a7adfadb202f40cbf21bd6918ad.jpg",
        affiliateUrl: "https://amzn.to/47nB79S",
        price: "$33.60",
      },
      {
        id: "cc7",
        name: "Pet Glove Wipes",
        description: "36PCS Hypoallergenic Pet Glove Wipes for Dogs & Cats - Quick Clean & Deodorizing Between Baths & Travel",
        image: "https://sf-static.upanhlaylink.com/img/image_20260305be2d43cb41887e17f6d4f04699fe12b4.jpg",
        affiliateUrl: "https://amzn.to/40bplvA",
        price: "$23.99",
      },
      {
        id: "cc8",
        name: "Mooncat Waterless Cat Shampoo",
        description: "100% Licking Safe & Vet Approved No Rinse Dry Bath Foam - Gentle Deodorizer for Short Haired Cats",
        image: "https://sf-static.upanhlaylink.com/img/image_202603050bec28ffe7b3872049be637029f7a73c.jpg",
        affiliateUrl: "https://amzn.to/4rRa8Mp",
        price: "$17.99",
      },
      {
        id: "cc9",
        name: "ELEGX Pet Grooming Bath Massage Brush",
        description: "Soap and Shampoo Dispenser Soft Silicone Bristle for Long Short Haired Dogs Cats Shower",
        image: "https://sf-static.upanhlaylink.com/img/image_20260305fefd99c08491c8ec4f991e4bc29f3ba1.jpg",
        affiliateUrl: "https://amzn.to/4lfBidq",
        price: "$6.28",
      },
      {
        id: "cc10",
        name: "Pet Steam Brush for Dog & Cat",
        description: "3-in-1 Steam Grooming Brush for Shedding & Hair Removal - Self Cleaning Spray Comb with Mist",
        image: "https://sf-static.upanhlaylink.com/img/image_202603055e18b12e67b86a33b8a4fc15af0ce1c0.jpg",
        affiliateUrl: "https://amzn.to/407t1OS",
        price: "$19.99",
      },
    ],
  },
  {
    id: "cat-lifestyle",
    name: "Cat Lifestyle",
    emoji: "🐾",
    heroImage: "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=1200&h=500&fit=crop",
    products: [
      {
        id: "cl1",
        name: "Cat Scratching Post 35\" Tall",
        description: "Cat Scratcher Tree Tower Scratching Posts for Indoor Cats with Cat Toy Mouse Hole and Interactive Wooden Ball",
        image: "https://sf-static.upanhlaylink.com/img/image_2026030507a24131384c6176788148cd6f746e5f.jpg",
        affiliateUrl: "https://amzn.to/4ub9mes",
        price: "$39.99",
      },
      {
        id: "cl2",
        name: "Cat Living in Famous Painting",
        description: "Double-Sided Oil Painting Cat House with Scratcher Vintage Art Picture Frame Cardboard House",
        image: "https://sf-static.upanhlaylink.com/img/image_20260305307f27dd2354e3621c3f96549279ca0d.jpg",
        affiliateUrl: "https://amzn.to/4spYBmP",
        badge: "Trending",
        price: "$49.99",
      },
      {
        id: "cl3",
        name: "PETKARAY Cat Hammock",
        description: "Cat Hammock with Coconut Palm Tree Scratching Post, Cozy Beach Chair Elevated Cat Beds for Indoor Cats",
        image: "https://sf-static.upanhlaylink.com/img/image_20260305d79bfe4cffcc64c9ceb432f1d404ea3c.jpg",
        affiliateUrl: "https://amzn.to/3MVT88v",
        price: "$44.99",
      },
      {
        id: "cl4",
        name: "Cat Window Perch",
        description: "2PC Cat Window Perch Cordless Foldable Cat Hammock Bed for Window with Metal Frame and Reversible Cover",
        image: "https://sf-static.upanhlaylink.com/img/image_202603056ec5275c3665da7f4a1d250aff185356.jpg",
        affiliateUrl: "https://amzn.to/4rQcMln",
        price: "$25.59",
      },
    ],
  },
  {
    id: "cat-nutrition",
    name: "Cat Nutrition",
    emoji: "🍽️",
    heroImage: "https://images.unsplash.com/photo-1589924691995-400dc9ecc119?w=1200&h=500&fit=crop",
    products: [
      {
        id: "cn1",
        name: "Sheba Perfect Portions",
        description: "Wet Cat Food Cuts in Gravy, Roasted Chicken Entree, with Sustainable Salmon and Tuna, 36 Servings",
        image: "https://sf-static.upanhlaylink.com/img/image_202603053fcc4bc5cb080cf03bfefa4aa9634462.jpg",
        affiliateUrl: "https://amzn.to/4aPNqht",
        price: "$39.98",
      },
      {
        id: "cn2",
        name: "Farmina N&D",
        description: "Quinoa Urinary Duck Formula Adult Dry Cat Food, 3.3lb",
        image: "https://sf-static.upanhlaylink.com/img/image_20260305a1103a4a8dc352ae951fb2e5d74dab21.jpg",
        affiliateUrl: "https://amzn.to/4ltzHkl",
        price: "$43.92",
      },
      {
        id: "cn3",
        name: "Fancy Feast Grilled Wet Cat Food",
        description: "Purina Fancy Feast Grilled Wet Cat Food Poultry and Beef Collection - Pack of 30, 3 oz. Cans",
        image: "https://sf-static.upanhlaylink.com/img/image_20260305adce427e6c220117ddd9f9491d1f6a2e.jpg",
        affiliateUrl: "https://amzn.to/4sKPcH1",
        badge: "Best Seller",
        price: "$22.86",
      },
      {
        id: "cn4",
        name: "Fancy Feast Grilled Seafood Collection",
        description: "Purina Fancy Feast Grilled Wet Cat Food Seafood Collection in Wet Cat Food Variety Pack - Pack of 24",
        image: "https://sf-static.upanhlaylink.com/img/image_20260305e84a691e1da8642b15d665937712f5b5.jpg",
        affiliateUrl: "https://amzn.to/4rSq9Sc",
        badge: "Deal",
        price: "$22.86",
      },
      {
        id: "cn5",
        name: "Temptations Cat Treats Tasty Chicken Flavor",
        description: "Classic Crunchy and Soft Cat Treats, Tasty Chicken Flavor, 30 oz. Tub",
        image: "https://sf-static.upanhlaylink.com/img/image_202603055bcd602eb2ca97e37c055381a97c88b8.jpg",
        affiliateUrl: "https://amzn.to/4rg0dyx",
        price: "$15.48",
      },
      {
        id: "cn6",
        name: "Temptations Cat Treats Catnip Fever Flavor",
        description: "Classic Crunchy and Soft Cat Treats, Catnip Fever Flavor, 30 oz. Tub",
        image: "https://sf-static.upanhlaylink.com/img/image_2026030509ba14cb1cb88f80ed2ca532a53c49b6.jpg",
        affiliateUrl: "https://amzn.to/4u8Ovsb",
        price: "$15.48",
      },
      {
        id: "cn7",
        name: "INABA Churu Cat Treats Tuna & Seafood",
        description: "Grain-Free, Lickable, Squeezable Creamy Purée Cat Treat with Vitamin E & Taurine, 40 Tubes",
        image: "https://sf-static.upanhlaylink.com/img/image_20260305967ee45ecba37a44d7f6dedd93e800ea.jpg",
        affiliateUrl: "https://amzn.to/4ba4Lkg",
        price: "$26.99",
      },
      {
        id: "cn8",
        name: "INABA Churu Cat Treats Chicken",
        description: "Lickable, Squeezable Creamy Purée with Vitamin E, 120 Tubes Total, Chicken Variety",
        image: "https://sf-static.upanhlaylink.com/img/image_202603050083f0e173aa232a63140dd5a04cbe6c.jpg",
        affiliateUrl: "https://amzn.to/40chlu8",
        price: "$58.48",
      },
      {
        id: "cn9",
        name: "Delectables Lickable Spoon Handheld",
        description: "Wet Cat Treats Made with Real Chicken & Tuna, Creamy Puree, Mess Free, Variety Pack, 32ct",
        image: "https://sf-static.upanhlaylink.com/img/image_20260305dee9d7ba1399c0527fe6a88a319d45c3.jpg",
        affiliateUrl: "https://amzn.to/4sva9Wi",
        price: "$23.88",
      },
      {
        id: "cn10",
        name: "Cat Hairball Support Chews",
        description: "Crunchy & Creamy Hairball Remedy Treats, Cat Furball Treatment, Supports Skin & Coat, 30-Day Supply",
        image: "https://sf-static.upanhlaylink.com/img/image_202603055f096b45c8638b27b3b536597e44d1ca.jpg",
        affiliateUrl: "https://amzn.to/46DA5X7",
        price: "$14.99",
      },
      {
        id: "cn11",
        name: "Hartz Delectables Squeeze Up",
        description: "Interactive Lickable Wet Cat Treats for Adult & Senior Cats, Tuna & Salmon, 4 Count (Pack of 8)",
        image: "https://sf-static.upanhlaylink.com/img/image_20260305edb129ac79603c0d6aab93be91ea207e.jpg",
        affiliateUrl: "https://amzn.to/4aQdd9h",
        price: "$19.00",
      },
    ],
  },
];

export const siteConfig = {
  name: "Higaubeo's Pick",
  tagline: "Curated Finds You'll Actually Love",
  subtitle: "The best products we've tested and used continuously. We believed you will love too!",
  avatar: "https://sf-static.upanhlaylink.com/img/image_202603059c6c3362769d8cae5c8cb9e20b422f59.jpg",
  social: {
    tiktok: "https://tiktok.com/@higaubeous",
    instagram: "https://www.instagram.com/higaubeo",
    youtube: "https://youtube.com/@higaubeo",
  },
  affiliateDisclosure: "As an Amazon Associate, I earn from qualifying purchases. This means I may earn a small commission at no extra cost to you when you shop through my links.",
};
