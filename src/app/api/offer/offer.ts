// /data/offers.ts
export const offers: Record<string, Array<{
    id: number;
    subService: string;
    originalPrice: number;
    discountedPrice: number;
    features: string[];
}>> = {
    "Appliance Cleaning": [
        {
            id: 1,
            subService: "Fridge (Single Door)",
            originalPrice: 499,
            discountedPrice: 349,
            features: [
                "Interior + exterior cleaning",
                "Racks, trays, rubber gasket",
                "Deodorization free",
                "30% cheaper"
            ]
        },
        {
            id: 2,
            subService: "Fridge (Double Door)",
            originalPrice: 699,
            discountedPrice: 489,
            features: [
                "Interior + exterior cleaning",
                "Racks, trays, rubber gasket",
                "Deodorization free",
                "30% cheaper"
            ]
        },
        {
            id: 3,
            subService: "Microwave",
            originalPrice: 399,
            discountedPrice: 279,
            features: [
                "Interior + tray cleaning",
                "Deodorization free",
                "30% cheaper"
            ]
        },
        {
            id: 4,
            subService: "Water Purifier",
            originalPrice: 499,
            discountedPrice: 349,
            features: [
                "Exterior cleaning, basic filter wipe",
                "Back panel dusting free",
                "30% cheaper + more detailed cleaning"
            ]
        },
        {
            id: 5,
            subService: "Chimney",
            originalPrice: 849,
            discountedPrice: 589,
            features: [
                "Exterior + filter cleaning with degreasing",
                "Deodorization free",
                "30% cheaper + deodorization free"
            ]
        },
        {
            id: 6,
            subService: "Ceiling Fan (per unit)",
            originalPrice: 149,
            discountedPrice: 105,
            features: [
                "Dust removal + wipe",
                "Motor dust vacuum",
                "30% cheaper + extra motor cleaning"
            ]
        },
        {
            id: 7,
            subService: "Water Tank (500-1000L)",
            originalPrice: 1199,
            discountedPrice: 839,
            features: [
                "Drain, scrubbing, disinfection",
                "Deodorization free",
                "30% cheaper + deodorization free"
            ]
        },
        {
            id: 8,
            subService: "Exaust fan",
            originalPrice: 89,
            discountedPrice: 59,
            features: [
                "Dry dusting, strain Removal",
                "wet wiping",
            ]
        }
    ],
    "Curtain Cleaning": [
        {
            id: 1,
            subService: "2 Curtains (Window)",
            originalPrice: 299,
            discountedPrice: 209,
            features: [
                "Vacuuming, shampooing",
                "Deodorization free",
                "30% cheaper + deodorization free"
            ]
        },
        {
            id: 2,
            subService: "2 Curtains (Door)",
            originalPrice: 399,
            discountedPrice: 279,
            features: [
                "Vacuuming, shampooing",
                "Deodorization free",
                "30% cheaper + deodorization free"
            ]
        },
        {
            id: 3,
            subService: "4 Curtains (Window+Door Mix)",
            originalPrice: 699,
            discountedPrice: 489,
            features: [
                "Vacuuming, shampooing",
                "Deodorization free",
                "30% cheaper + deodorization free"
            ]
        }
    ],
    "Mattress Cleaning": [
        {
            id: 1,
            subService: "Single Bed",
            originalPrice: 399,
            discountedPrice: 279,
            features: [
                "Vacuuming, shampooing, stain removal",
                "Anti-allergen spray free",
                "30% cheaper + anti-allergen treatment free"
            ]
        },
        {
            id: 2,
            subService: "Double Bed",
            originalPrice: 699,
            discountedPrice: 489,
            features: [
                "Vacuuming, shampooing, stain removal",
                "Anti-allergen spray free",
                "30% cheaper + anti-allergen treatment free"
            ]
        },
        {
            id: 3,
            subService: "King Size Bed",
            originalPrice: 899,
            discountedPrice: 629,
            features: [
                "Vacuuming, shampooing, stain removal",
                "Anti-allergen spray free",
                "30% cheaper + anti-allergen treatment free"
            ]
        }
    ],
    "Sofa Cleaning": [
        {
            id: 1,
            subService: "3-Seater Sofa",
            originalPrice: 599,
            discountedPrice: 419,
            features: [
                "Vacuuming, shampooing, stain removal",
                "Fabric sanitization free",
                "30% cheaper + sanitization free"
            ]
        },
        {
            id: 2,
            subService: "5-Seater Sofa",
            originalPrice: 999,
            discountedPrice: 699,
            features: [
                "Vacuuming, shampooing, stain removal",
                "Fabric sanitization free",
                "30% cheaper + sanitization free"
            ]
        },
        {
            id: 3,
            subService: "7-Seater Sofa",
            originalPrice: 1299,
            discountedPrice: 909,
            features: [
                "Vacuuming, shampooing, stain removal",
                "Fabric sanitization free",
                "30% cheaper + sanitization free"
            ]
        }
    ],
    "Balcony Cleaning": [
        {
            id: 1,
            subService: "One Balcony",
            originalPrice: 399,
            discountedPrice: 279,
            features: [
                "Sweeping, mopping, railing cleaning",
                "Window glass cleaning free",
                "30% cheaper + window cleaning free"
            ]
        }
    ],
    "Bathroom Cleaning": [
        {
            id: 1,
            subService: "1 Bathroom",
            originalPrice: 499,
            discountedPrice: 349,
            features: [
                "Tiles scrubbing, Basin, WC, Taps, Mirror",
                "Exhaust fan cleaning free",
                "30% cheaper + free exhaust fan cleaning"
            ]
        },
        {
            id: 2,
            subService: "2 Bathrooms",
            originalPrice: 899,
            discountedPrice: 629,
            features: [
                "Tiles scrubbing, Basin, WC, Taps, Mirror",
                "Exhaust fan cleaning free",
                "30% cheaper + free exhaust fan cleaning"
            ]
        }
    ],
    "House Cleaning": [
        {
            id: 1,
            subService: "1 BHK House",
            originalPrice: 3299,
            discountedPrice: 2309,
            features: [
                "1 Bathroom, 1 Balcony, All Rooms, Kitchen exteriors, Dusting, Floor mop",
                "Wardrobe interior + Mattress vacuum + Sofa dry vacuum + Exhaust fan cleaning",
                "30% cheaper + extra add-ons free"
            ]
        },
        {
            id: 2,
            subService: "2 BHK House",
            originalPrice: 4299,
            discountedPrice: 3009,
            features: [
                "2 Bathrooms, 1 Balcony, All Rooms, Kitchen exteriors, Dusting, Floor mop",
                "Wardrobe interior + Mattress vacuum + Sofa dry vacuum + Exhaust fan cleaning",
                "30% cheaper + more coverage"
            ]
        },
        {
            id: 3,
            subService: "3 BHK House",
            originalPrice: 5299,
            discountedPrice: 3710,
            features: [
                "3 Bathrooms, 2 Balconies, All Rooms, Kitchen exteriors, Dusting, Floor mop",
                "Wardrobe interior + Mattress vacuum + Sofa dry vacuum + Exhaust fan cleaning",
                "30% cheaper + premium add-ons"
            ]
        },
        {
            id: 4,
            subService: "4 BHK House",
            originalPrice: 6299,
            discountedPrice: 4410,
            features: [
                "4 Bathrooms, 2 Balconies, All Rooms, Kitchen exteriors, Dusting, Floor mop",
                "Wardrobe interior + Mattress vacuum + Sofa dry vacuum + Exhaust fan cleaning",
                "30% cheaper + additional free services"
            ]
        },
        {
            id: 5,
            subService: "5 BHK House",
            originalPrice: 7299,
            discountedPrice: 5110,
            features: [
                "5 Bathrooms, 3 Balconies, All Rooms, Kitchen exteriors, Dusting, Floor mop",
                "Wardrobe interior + Mattress vacuum + Sofa dry vacuum + Exhaust fan cleaning",
                "30% cheaper + extra add-ons free"
            ]
        }
    ],
    "Dining Table Cleaning": [
        {
            id: 1,
            subService: "Dining table & Chair",
            originalPrice: 299,
            discountedPrice: 249,
            features: [
                "Dusting and wet wiping of furniture surface",
                "wet wiping of  chair cushions for dust and tough strain removal",
            ], 
        }
    ],
    "Carpet Cleaning": [
        {
            id: 1,
            subService: "Small Carpet ",
            originalPrice: 399,
            discountedPrice: 249,
            features: [
                "Dry vacuuming",
                "shampooing wet vacuuming",
                "drying"
            ],
        },
        {
            id: 2,
            subService: "Medium Carpet",
            originalPrice: 799,
            discountedPrice: 549,
            features: [
                "Dry vacuuming",
                "shampooing wet vacuuming",
                "drying"
            ],
        },
        {
            id: 3,
            subService: "Large Carpet",
            originalPrice: 949,
            discountedPrice: 699,
            features: [
                "Dry vacuuming",
                "shampooing wet vacuuming",
                "drying"
            ],
        }
    ],
    "Kitchen Cleaning":[
        {
            id: 1,
            subService: "Basic kitchen",
            originalPrice: 799,
            discountedPrice: 599,
            features: [
                "Cupboard cleaning",
                "Floor mopping",
                "Dusting",
                "Sink & Disposal"
            ]
        },
        {
            id: 2,
            subService: "Deep kitchen",
            originalPrice: 1449,
            discountedPrice: 1199,
            features: [
                "Oven and Stovetop",
                "Refrigerator and Freezer",
                "Cabinets and Drawers+Sink",
                "Floors and Baseboards"
            ]
        },
    ]
};


//    "Carpet Cleaning": [
//         {
//             id: 1,
//             subService: "Up to 50 sq. ft",
//             originalPrice: 499,
//             discountedPrice: 349,
//             features: [
//                 "Vacuuming, shampooing, stain removal",
//                 "Deodorization free",
//                 "30% cheaper + deodorization free"
//             ]
//         }
//     ],