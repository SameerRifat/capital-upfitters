export const servicesData = [
    {
        id: 1,
        imageSrc: '/services/service1.png',
        serviceName: 'Patriot Liner',
        slug: 'patriot-liner',
        serviceDesc: 'Welcome to Capital Upfitters, the family-owned epicenter of top-tier. ',
    },
    {
        id: 2,
        imageSrc: '/services/service2.png',
        serviceName: 'Waxoyl Undercoating ',
        slug: 'waxoyl-undercoating',
        serviceDesc: 'Welcome to Capital Upfitters, the family-owned epicenter of top-tier. ',
    },
    {
        id: 3,
        imageSrc: '/services/service3.png',
        serviceName: 'Ceramic Coatings',
        slug: 'ceramic-coatings',
        serviceDesc: 'Welcome to Capital Upfitters, the family-owned epicenter of top-tier. ',
    },
    {
        id: 4,
        imageSrc: '/services/service4.png',
        serviceName: 'CPC Anti-Corrosion Graphene Clear Coat',
        slug: 'CPC-anti-corrosion-graphene-clear-coat',
        serviceDesc: 'Welcome to Capital Upfitters, the family-owned epicenter of top-tier. ',
    },
    {
        id: 5,
        imageSrc: '/services/service5.png',
        serviceName: 'Window Tint',
        slug: '/styling/window-tint',
        serviceDesc: 'Welcome to Capital Upfitters, the family-owned epicenter of top-tier. ',
    },
    {
        id: 6,
        imageSrc: '/services/service6.png',
        serviceName: 'Hitches',
        slug: 'hitches',
        serviceDesc: 'Welcome to Capital Upfitters, the family-owned epicenter of top-tier. ',
    },
    {
        id: 7,
        imageSrc: '/services/service7.png',
        serviceName: 'Wheels & Tires',
        slug: 'wheels-and-tires',
        serviceDesc: 'Welcome to Capital Upfitters, the family-owned epicenter of top-tier. ',
    },
    {
        id: 8,
        imageSrc: '/services/service3.png',
        serviceName: 'Ceramic Coatings',
        slug: 'ceramic-coatings',
        serviceDesc: 'Welcome to Capital Upfitters, the family-owned epicenter of top-tier. ',
    },
    {
        id: 9,
        imageSrc: '/services/service2.png',
        serviceName: 'Waxoyl Undercoating',
        slug: 'waxoyl-undercoating',
        serviceDesc: 'Welcome to Capital Upfitters, the family-owned epicenter of top-tier. ',
    },
    {
        id: 10,
        imageSrc: '/services/service1.png',
        serviceName: 'Patriot Liner',
        slug: 'patriot-liner',
        serviceDesc: 'Welcome to Capital Upfitters, the family-owned epicenter of top-tier. ',
    },
    {
        id: 11,
        imageSrc: '/services/service7.png',
        serviceName: 'Wheels & Tires',
        slug: 'wheels-and-tires',
        serviceDesc: 'Welcome to Capital Upfitters, the family-owned epicenter of top-tier. ',
    },
    {
        id: 12,
        imageSrc: '/services/service6.png',
        serviceName: 'Hitches',
        slug: 'hitches',
        serviceDesc: 'Welcome to Capital Upfitters, the family-owned epicenter of top-tier. ',
    },
    {
        id: 13,
        imageSrc: '/services/service5.png',
        serviceName: 'Window Tint',
        slug: '/styling/window-tint',
        serviceDesc: 'Welcome to Capital Upfitters, the family-owned epicenter of top-tier. ',
    },
    {
        id: 14,
        imageSrc: '/services/service4.png',
        serviceName: 'CPC Anti-Corrosion Graphene Clear Coat',
        slug: 'CPC-anti-corrosion-graphene-clear-coat',
        serviceDesc: 'Welcome to Capital Upfitters, the family-owned epicenter of top-tier. ',
    },
    {
        id: 15,
        imageSrc: '/services/service1.png',
        serviceName: 'Patriot Liner',
        slug: 'patriot-liner',
        serviceDesc: 'Welcome to Capital Upfitters, the family-owned epicenter of top-tier. ',
    },
    {
        id: 16,
        imageSrc: '/services/service2.png',
        serviceName: 'Waxoyl Undercoating ',
        slug: 'waxoyl-undercoating',
        serviceDesc: 'Welcome to Capital Upfitters, the family-owned epicenter of top-tier. ',
    },
    {
        id: 17,
        imageSrc: '/services/service3.png',
        serviceName: 'Ceramic Coatings',
        slug: 'ceramic-coatings',
        serviceDesc: 'Welcome to Capital Upfitters, the family-owned epicenter of top-tier. ',
    },
    {
        id: 18,
        imageSrc: '/services/service4.png',
        serviceName: 'CPC Anti-Corrosion Graphene Clear Coat',
        slug: 'CPC-anti-corrosion-graphene-clear-coat',
        serviceDesc: 'Welcome to Capital Upfitters, the family-owned epicenter of top-tier. ',
    },
    {
        id: 19,
        imageSrc: '/services/service5.png',
        serviceName: 'Window Tint',
        slug: '/styling/window-tint',
        serviceDesc: 'Welcome to Capital Upfitters, the family-owned epicenter of top-tier. ',
    },
    {
        id: 20,
        imageSrc: '/services/service6.png',
        serviceName: 'Hitches',
        slug: 'hitches',
        serviceDesc: 'Welcome to Capital Upfitters, the family-owned epicenter of top-tier. ',
    },
    {
        id: 21,
        imageSrc: '/services/service7.png',
        serviceName: 'Wheels & Tires',
        slug: 'wheels-and-tires',
        serviceDesc: 'Welcome to Capital Upfitters, the family-owned epicenter of top-tier. ',
    },
]

export const windowTintServiceOptions = {
    vehicleType: [
        { value: "car", label: "Car" },
        { value: "truck", label: "Truck" },
        { value: "suv", label: "SUV" },
        { value: "2 front", label: "2 Front" },
        { value: "windshield", label: "Windshield" },
    ],
    tintType: [
        { value: "carbon", label: "Carbon" },
        { value: "ceramic", label: "Ceramic" },
        { value: "ceramic+", label: "Ceramic+" },
    ]
}

export const windowTintServices = [
    // Car with Carbon
    {
        imageSrc: '/service-detail1.png',
        charges: 250,
        benefits: [
            "Ultra Violet (UV) Protection",
            "Improved Privacy",
            "Reduced Glare",
            "Added Styles"
        ],
        description: "Our carbon window tint offers superior UV protection and heat rejection, keeping your car's interior cooler and protecting your skin from harmful UV rays. It also reduces glare, making driving more comfortable, and adds a stylish finish to your vehicle.",
        vehicleType: 'car',
        tintType: 'carbon'
    },
    // Car with Ceramic
    {
        imageSrc: '/service-detail1.png',
        charges: 260,
        benefits: [
            "Blocks up to 98% of UV rays",
            "Provides privacy for your belongings",
            "Reduces interior heat",
            "Adds a modern look to your car"
        ],
        description: "Our ceramic window tint offers excellent UV protection and heat rejection, keeping your car's interior cooler and protecting your skin from harmful UV rays. It also provides added privacy for your belongings and adds a sleek, modern look to your car.",
        vehicleType: 'car',
        tintType: 'ceramic'
    },
    // Car with Ceramic+
    {
        imageSrc: '/service-detail1.png',
        charges: 270,
        benefits: [
            "Blocks up to 99% of UV rays",
            "Improves comfort by reducing heat",
            "Adds a luxurious appearance to your car",
            "Protects your interior from fading"
        ],
        description: "Our ceramic+ window tint offers superior UV protection and heat rejection, keeping your car's interior cooler and protecting your skin from harmful UV rays. It also adds a luxurious appearance to your vehicle and protects your interior from fading.",
        vehicleType: 'car',
        tintType: 'ceramic+'
    },
    // Truck with Carbon
    {
        imageSrc: '/service-detail1.png',
        charges: 270,
        benefits: [
            "Blocks up to 98% of UV rays",
            "Provides privacy for your belongings",
            "Reduces interior heat",
            "Adds a modern look to your truck"
        ],
        description: "Our carbon window tint offers excellent UV protection and heat rejection, keeping your truck's interior cooler and protecting your skin from harmful UV rays. It also provides added privacy for your belongings and adds a sleek, modern look to your truck.",
        vehicleType: 'truck',
        tintType: 'carbon'
    },
    // Truck with Ceramic
    {
        imageSrc: '/service-detail1.png',
        charges: 280,
        benefits: [
            "Blocks up to 98% of UV rays",
            "Provides privacy for your belongings",
            "Reduces interior heat",
            "Adds a modern look to your truck"
        ],
        description: "Our ceramic window tint offers excellent UV protection and heat rejection, keeping your truck's interior cooler and protecting your skin from harmful UV rays. It also provides added privacy for your belongings and adds a sleek, modern look to your truck.",
        vehicleType: 'truck',
        tintType: 'ceramic'
    },
    // Truck with Ceramic+
    {
        imageSrc: '/service-detail1.png',
        charges: 290,
        benefits: [
            "Blocks up to 98% of UV rays",
            "Provides privacy for your belongings",
            "Reduces interior heat",
            "Adds a modern look to your truck"
        ],
        description: "Our ceramic+ window tint offers excellent UV protection and heat rejection, keeping your truck's interior cooler and protecting your skin from harmful UV rays. It also provides added privacy for your belongings and adds a sleek, modern look to your truck.",
        vehicleType: 'truck',
        tintType: 'ceramic+'
    },
    // SUV with Carbon
    {
        imageSrc: '/service-detail1.png',
        charges: 280,
        benefits: [
            "Blocks up to 98% of UV rays",
            "Provides privacy for your belongings",
            "Reduces interior heat",
            "Adds a modern look to your SUV"
        ],
        description: "Our carbon window tint offers excellent UV protection and heat rejection, keeping your SUV's interior cooler and protecting your skin from harmful UV rays. It also provides added privacy for your belongings and adds a sleek, modern look to your SUV.",
        vehicleType: 'suv',
        tintType: 'carbon'
    },
    // SUV with Ceramic
    {
        imageSrc: '/service-detail1.png',
        charges: 300,
        benefits: [
            "Blocks up to 98% of UV rays",
            "Provides privacy for your belongings",
            "Reduces interior heat",
            "Adds a modern look to your SUV"
        ],
        description: "Our ceramic window tint offers excellent UV protection and heat rejection, keeping your SUV's interior cooler and protecting your skin from harmful UV rays. It also provides added privacy for your belongings and adds a sleek, modern look to your SUV.",
        vehicleType: 'suv',
        tintType: 'ceramic'
    },
    // SUV with Ceramic+
    {
        imageSrc: '/service-detail1.png',
        charges: 310,
        benefits: [
            "Blocks up to 98% of UV rays",
            "Provides privacy for your belongings",
            "Reduces interior heat",
            "Adds a modern look to your SUV"
        ],
        description: "Our ceramic+ window tint offers excellent UV protection and heat rejection, keeping your SUV's interior cooler and protecting your skin from harmful UV rays. It also provides added privacy for your belongings and adds a sleek, modern look to your SUV.",
        vehicleType: 'suv',
        tintType: 'ceramic+'
    },
    // 2 Front with Carbon
    {
        imageSrc: '/service-detail1.png',
        charges: 290,
        benefits: [
            "Blocks up to 98% of UV rays",
            "Provides privacy for your belongings",
            "Reduces interior heat",
            "Adds a modern look to your vehicle"
        ],
        description: "Our carbon window tint offers excellent UV protection and heat rejection, keeping your vehicle's interior cooler and protecting your skin from harmful UV rays. It also provides added privacy for your belongings and adds a sleek, modern look to your vehicle.",
        vehicleType: '2 front',
        tintType: 'carbon'
    },
    // 2 Front with Ceramic
    {
        imageSrc: '/service-detail1.png',
        charges: 300,
        benefits: [
            "Blocks up to 98% of UV rays",
            "Provides privacy for your belongings",
            "Reduces interior heat",
            "Adds a modern look to your vehicle"
        ],
        description: "Our ceramic window tint offers excellent UV protection and heat rejection, keeping your vehicle's interior cooler and protecting your skin from harmful UV rays. It also provides added privacy for your belongings and adds a sleek, modern look to your vehicle.",
        vehicleType: '2 front',
        tintType: 'ceramic'
    },
    // 2 Front with Ceramic+
    {
        imageSrc: '/service-detail1.png',
        charges: 310,
        benefits: [
            "Blocks up to 98% of UV rays",
            "Provides privacy for your belongings",
            "Reduces interior heat",
            "Adds a modern look to your vehicle"
        ],
        description: "Our ceramic+ window tint offers excellent UV protection and heat rejection, keeping your vehicle's interior cooler and protecting your skin from harmful UV rays. It also provides added privacy for your belongings and adds a sleek, modern look to your vehicle.",
        vehicleType: '2 front',
        tintType: 'ceramic+'
    },
    // Windshield with Carbon
    {
        imageSrc: '/service-detail1.png',
        charges: 300,
        benefits: [
            "Blocks up to 98% of UV rays",
            "Provides privacy for your belongings",
            "Reduces interior heat",
            "Adds a modern look to your windshield"
        ],
        description: "Our carbon window tint offers excellent UV protection and heat rejection, keeping your windshield cooler and protecting your skin from harmful UV rays. It also provides added privacy for your belongings and adds a sleek, modern look to your windshield.",
        vehicleType: 'windshield',
        tintType: 'carbon'
    },
    // Windshield with Ceramic
    {
        imageSrc: '/service-detail1.png',
        charges: 320,
        benefits: [
            "Blocks up to 98% of UV rays",
            "Provides privacy for your belongings",
            "Reduces interior heat",
            "Adds a modern look to your windshield"
        ],
        description: "Our ceramic window tint offers excellent UV protection and heat rejection, keeping your windshield cooler and protecting your skin from harmful UV rays. It also provides added privacy for your belongings and adds a sleek, modern look to your windshield.",
        vehicleType: 'windshield',
        tintType: 'ceramic'
    },
    // Windshield with Ceramic+
    {
        imageSrc: '/service-detail1.png',
        charges: 330,
        benefits: [
            "Blocks up to 98% of UV rays",
            "Provides privacy for your belongings",
            "Reduces interior heat",
            "Adds a modern look to your windshield"
        ],
        description: "Our ceramic+ window tint offers excellent UV protection and heat rejection, keeping your windshield cooler and protecting your skin from harmful UV rays. It also provides added privacy for your belongings and adds a sleek, modern look to your windshield.",
        vehicleType: 'windshield',
        tintType: 'ceramic+'
    },
];
