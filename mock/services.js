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

export const paintProtectionFilmData = [
    {
        imageSrc: '/service-detail2.png',
        benefits: [
            "Front Bumper",
            "Headlights",
            "Fog Lights",
            "Full Hood",
            "Full Front Fenders",
            "Mirror Caps",
        ],
        befitsDescription: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat culpa vel earum in atque inventore natus nam ex, minima ab non omnis accusantium id fuga molestias suscipit quis quo, tempore cumque. Quae eius possimus culpa quos porro corrupti eveniet animi iusto aut excepturi consequatur officiis voluptates voluptas accusantium, cum nihil, eligendi, odio vitae id. Magni hic pariatur, magnam officiis assumenda, ea sint necessitatibus commodi totam ratione.",
        package: 'DYNO Shield Front',
        description: 'Welcome to the pinnacle of vehicle protection with our Full Front Package. Designed for those who demand comprehensive, state-of-the-art protection for their vehicle’s most vulnerable areas, this package is a high-quality solution that ensures your vehicle stays pristine, regardless of the road conditions. The Full Front Package meticulously covers the full front bumper, headlights, fog lights, full hood, full front fenders, and mirror caps. Our paint protection film seamlessly merges with your vehicle, preserving its aesthetic appeal while guarding against road debris, scratches, and the harsh effects of weather. Choose our Full Front Package today and feel confident knowing your vehicle’s front-end is protected by the best.'
    },
    {
        imageSrc: '/service-detail2.png',
        benefits: [
            "Front Bumper",
            "Entire Hood",
            "Both Full Fenders",
            "Headlights & Fog Lights",
            "Mirror Caps",
            "Rocker Panels",
            "Quarter Panels",
            "A-Pillars",
        ],
        befitsDescription: "Sunt molestias facilis praesentium vitae consectetur nemo dolorum facere quas qui ducimus eius earum. Lorem ipsum dolor sit amet consectetur adipisicing elit.  tenetur debitis ab autem mollitia quos eos consectetur deserunt beatae nisi at voluptatibus nam obcaecati, accusantium quidem! Itaque, illo, odit quo vero nam doloribus fugiat sed deleniti natus fuga earum praesentium voluptatum dolores! Doloremque.",
        package: 'DYNO Shield Track Pack',
        description: 'Drive with peace of mind with our Track Pack paint protection package. This offering is specifically crafted for high-performance car enthusiasts and those who appreciate an extra layer of defense for their vehicle. By adding to the comprehensive protection offered in our Full Front Package, the Track Pack extends coverage to the A-pillars, rocker panels, and quarter panels, areas that typically suffer the most during high-speed driving or off-roading. Our professionally installed paint protection film offers unparalleled resistance against chips, scratches, and stains, ensuring your vehicle remains in top-notch condition even under rigorous driving conditions. Embrace the thrill of the ride knowing your vehicle is shielded by our Track Pack.'
    },
    {
        imageSrc: '/service-detail2.png',
        benefits: [
            "All Painted Exterior Surfaces",
            "Headlights & Tail Lights",
            "Fog Lights",
        ],
        befitsDescription: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt molestias facilis praesentium vitae consectetur nemo dolorum facere quas qui ducimus eius earum.",
        package: 'DYNO Shield Fully Body',
        description: 'Indulge in our most luxurious, all-encompassing protective offering with the Full Body Package. This top-tier solution ensures complete protection for every inch of your vehicle, safeguarding it from everyday wear and tear, environmental factors, and unexpected road debris. Offering full coverage, this package envelops your vehicle in a virtually invisible shield, maintaining its pristine appearance and resplendent shine. Our high-quality paint protection film, professionally installed, guards against damage, ensuring the longevity of your vehicle’s appearance and resale value. With our Full Body Package, you’re investing in not just comprehensive protection, but also peace of mind, knowing your entire vehicle is protected. Trust in our Full Body Package for the ultimate protection solution.'
    },
    {
        imageSrc: '/service-detail2.png',
        benefits: [
            "Full PPF & Ceramic Coating",
            "Xpel Ultimate Plus film",
            "Xpel Fusion Premium 8yr",
            "All Painted Exterior Surfaces",
            "Headlights & Tail Lights",
            "Fog Lights",
        ],
        befitsDescription: "Sunt molestias facilis praesentium vitae consectetur nemo dolorum facere quas qui ducimus eius earum. Lorem ipsum dolor sit amet consectetur adipisicing elit.  tenetur debitis ab autem mollitia quos eos consectetur deserunt beatae nisi at voluptatibus nam obcaecati, accusantium quidem! Itaque, illo, odit quo vero nam doloribus fugiat sed deleniti natus fuga earum.",
        package: 'Fashion Film / DYNOmight / DYNOmate',
        description: 'Full body Xpel Ultimate plus 10 mil film, topped with Xpel Fusion Premium 8 year ceramic coating. You’d have better luck getting into Fort Knox, than into this paint. Say goodbye to rock chips, scratches, swirl marks, etchings, water spots and more with the strongest package of all time.'
    },
]