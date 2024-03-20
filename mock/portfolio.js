import { v4 as uuidv4 } from 'uuid';

export const projectsData = [
	{
		id: 1,
		title: 'Ceramic Coatings',
		category: 'ceramic coatings',
		slug: 'ceramic-coatings',
		imageSrc: "/portfolio/ceramic-coatings/cc1.jpg",
		ProjectHeader: {
			title: 'Ceramic Coatings',
			tags: 'Ceramic Coatings',
		},
		cars: [
			{
				id: 1,
				brand: 'mercedes-benz',
				imageSrc: "/portfolio/ceramic-coatings/cc1.jpg",
				gallery: [
					{
						id: uuidv4(),
						title: 'mercedes-benz',
						imageSrc: "/portfolio/ceramic-coatings/cc1.jpg",
					},
					{
						id: uuidv4(),
						title: 'mercedes-benz',
						imageSrc: "/portfolio/ceramic-coatings/cc2.jpg",
					},
				],
				ProjectInfo: {
					ClientHeading: 'Audi',
					CompanyInfo: [
						{
							id: uuidv4(),
							title: 'Company',
							details: 'CAPITAL UPFITTERS',
						},
						{
							id: uuidv4(),
							title: 'Services',
							details: 'Ceramic Coatings',
						},
						{
							id: uuidv4(),
							title: 'Phone',
							details: '301-304-1419',
						},
					],
					ObjectivesHeading:'Audi',
					titleHead: 'Stealth Hitch Installation for 2023 Audi Allroad: Quick Overview',
					ObjectivesDetails: [
						{
							title: '1. Preparation',
							techs: [
								'Vehicle and work area prepped to protect against damage.' +
								'Brief customer consultation for personalized service.',
							],

						},
						{
							title: '2. Installation ',
							techs: [
								'Step 1: Careful removal of the rear bumper.',
								'Step 2: Precise installation of the Stealth Hitch, with all hardware secured to factory standards.',
								'Step 3: Trimming of lower fascia and application of edge guard for safety and aesthetics.',
								'Step 4: Relocation and recalibration of the kick sensor per OEM guidelines.',
							],
							info: {

							},
						},
						{
							title: '3. Finalizing',
							techs: [
								'Bumper carefully reattached and alignment checked.\n' +
								'Thorough cleaning of the vehicle post-installation.'
							],
							info: {

							},
						},
						{
							title: '4. Customer Orientation',
							techs: [
								'Practical demonstration on hitch use and maintenance provided during handover.'
							],
							info: {

							},
						},
						{
							title: '5. Aftercare',
							techs: [
								'Continuous support and follow-up services available as needed.'
							],
							info: {

							},
						},

						{
							title: 'End-Note ',
							techs: [
								'Capital Upfitters guarantees a streamlined, high-quality installation process, ensuring your 2023 Audi Allroad\'s Stealth Hitch is perfectly fitted with attention to detail, functionality, and aesthetic preservation.'
							],
							info: {

							},
						},

					],



					Technologies: [
						{
							title: '2023 Audi Allroad Stealth Hitch Integration',
							techs: [
								'Our process for the 2023 Audi Allroad Stealth Hitch installation (Rack Only with 2" receiver) is meticulously designed to ensure functionality, safety, and seamless integration with your vehicle\'s original design. At Capital Upfitters, we specialize in customized, high-quality installations that prioritize your vehicle\'s integrity and aesthetics.'
							],
						},
					],
					ProjectDetailsHeading: 'Why us',
					ProjectDetails: [
						{
							id: uuidv4(),
							details:
								'Welcome to Capital Upfitters, the family-owned epicenter of top-tier auto customization, vehicle preservation, and performance enhancements. With a heritage of over 35 years in the industry, we proudly deliver unparalleled fleet customization services and robust protection coatings to a diverse range of clients, from municipal to retail sectors. Our reputation as a trailblazer stems from our continuous commitment to superior craftsmanship, delivering innovative auto customization and performance solutions that truly redefine automotive excellence.',
						},
						{
							id: uuidv4(),
							details:
								'We\'re not just about personal vehicles, our commitment to deliver exceptional service spans across government, commercial, and residential projects. Every vehicle that rolls into our shop receives the same degree of attention and commitment to quality. For additional information about our services at Capital Upfitters or to discuss your specific customization and performance enhancement needs, we welcome you to reach us at 301-304-1419 or explore our webpage. Choose Capital Upfitters for an automotive experience that goes beyond service to deliver a transformation, redefining your ride.',
						}
					],

				},


			},
			{
				id: 2,
				brand: 'GMC',
				imageSrc: "/portfolio/ceramic-coatings/cc3.jpg",
				gallery: [
					{
						id: uuidv4(),
						title: 'GMC',
						imageSrc: "/portfolio/ceramic-coatings/cc3.jpg",
					},
					{
						id: uuidv4(),
						title: 'GMC',
						imageSrc: "/portfolio/ceramic-coatings/cc4.jpg",
					},

				],
				ProjectInfo: {
					ClientHeading: 'Audi',
					CompanyInfo: [
						{
							id: uuidv4(),
							title: 'Company',
							details: 'CAPITAL UPFITTERS',
						},
						{
							id: uuidv4(),
							title: 'Services',
							details: 'Ceramic Coatings',
						},
						{
							id: uuidv4(),
							title: 'Phone',
							details: '301-304-1419',
						},
					],
					ObjectivesHeading:'Audi',
					titleHead: 'Stealth Hitch Installation for 2023 Audi Allroad: Quick Overview',
					ObjectivesDetails: [
						{
							title: '1. Preparation',
							techs: [
								'Vehicle and work area prepped to protect against damage.' +
								'Brief customer consultation for personalized service.',
							],

						},
						{
							title: '2. Installation ',
							techs: [
								'Step 1: Careful removal of the rear bumper.',
								'Step 2: Precise installation of the Stealth Hitch, with all hardware secured to factory standards.',
								'Step 3: Trimming of lower fascia and application of edge guard for safety and aesthetics.',
								'Step 4: Relocation and recalibration of the kick sensor per OEM guidelines.',
							],
							info: {

							},
						},
						{
							title: '3. Finalizing',
							techs: [
								'Bumper carefully reattached and alignment checked.\n' +
								'Thorough cleaning of the vehicle post-installation.'
							],
							info: {

							},
						},
						{
							title: '4. Customer Orientation',
							techs: [
								'Practical demonstration on hitch use and maintenance provided during handover.'
							],
							info: {

							},
						},
						{
							title: '5. Aftercare',
							techs: [
								'Continuous support and follow-up services available as needed.'
							],
							info: {

							},
						},

						{
							title: 'End-Note ',
							techs: [
								'Capital Upfitters guarantees a streamlined, high-quality installation process, ensuring your 2023 Audi Allroad\'s Stealth Hitch is perfectly fitted with attention to detail, functionality, and aesthetic preservation.'
							],
							info: {

							},
						},

					],



					Technologies: [
						{
							title: '2023 Audi Allroad Stealth Hitch Integration',
							techs: [
								'Our process for the 2023 Audi Allroad Stealth Hitch installation (Rack Only with 2" receiver) is meticulously designed to ensure functionality, safety, and seamless integration with your vehicle\'s original design. At Capital Upfitters, we specialize in customized, high-quality installations that prioritize your vehicle\'s integrity and aesthetics.'
							],
						},
					],
					ProjectDetailsHeading: 'Why us',
					ProjectDetails: [
						{
							id: uuidv4(),
							details:
								'Welcome to Capital Upfitters, the family-owned epicenter of top-tier auto customization, vehicle preservation, and performance enhancements. With a heritage of over 35 years in the industry, we proudly deliver unparalleled fleet customization services and robust protection coatings to a diverse range of clients, from municipal to retail sectors. Our reputation as a trailblazer stems from our continuous commitment to superior craftsmanship, delivering innovative auto customization and performance solutions that truly redefine automotive excellence.',
						},
						{
							id: uuidv4(),
							details:
								'We\'re not just about personal vehicles, our commitment to deliver exceptional service spans across government, commercial, and residential projects. Every vehicle that rolls into our shop receives the same degree of attention and commitment to quality. For additional information about our services at Capital Upfitters or to discuss your specific customization and performance enhancement needs, we welcome you to reach us at 301-304-1419 or explore our webpage. Choose Capital Upfitters for an automotive experience that goes beyond service to deliver a transformation, redefining your ride.',
						}
					],

				},


			},
			{
				id: 3,
				brand: 'Tesla',
				imageSrc: "/portfolio/ceramic-coatings/cc8.jpg",
				gallery: [
					{
						id: uuidv4(),
						title: 'Tesla',
						imageSrc: "/portfolio/ceramic-coatings/cc6.jpg",
					},
					{
						id: uuidv4(),
						title: 'Tesla',
						imageSrc: "/portfolio/ceramic-coatings/cc7.jpg",
					},
					{
						id: uuidv4(),
						title: 'Tesla',
						imageSrc: "/portfolio/ceramic-coatings/cc8.jpg",
					},
				],
				ProjectInfo: {
					ClientHeading: 'Audi',
					CompanyInfo: [
						{
							id: uuidv4(),
							title: 'Company',
							details: 'CAPITAL UPFITTERS',
						},
						{
							id: uuidv4(),
							title: 'Services',
							details: 'Ceramic Coatings',
						},
						{
							id: uuidv4(),
							title: 'Phone',
							details: '301-304-1419',
						},
					],
					ObjectivesHeading:'Audi',
					titleHead: 'Stealth Hitch Installation for 2023 Audi Allroad: Quick Overview',
					ObjectivesDetails: [
						{
							title: '1. Preparation',
							techs: [
								'Vehicle and work area prepped to protect against damage.' +
								'Brief customer consultation for personalized service.',
							],

						},
						{
							title: '2. Installation ',
							techs: [
								'Step 1: Careful removal of the rear bumper.',
								'Step 2: Precise installation of the Stealth Hitch, with all hardware secured to factory standards.',
								'Step 3: Trimming of lower fascia and application of edge guard for safety and aesthetics.',
								'Step 4: Relocation and recalibration of the kick sensor per OEM guidelines.',
							],
							info: {

							},
						},
						{
							title: '3. Finalizing',
							techs: [
								'Bumper carefully reattached and alignment checked.\n' +
								'Thorough cleaning of the vehicle post-installation.'
							],
							info: {

							},
						},
						{
							title: '4. Customer Orientation',
							techs: [
								'Practical demonstration on hitch use and maintenance provided during handover.'
							],
							info: {

							},
						},
						{
							title: '5. Aftercare',
							techs: [
								'Continuous support and follow-up services available as needed.'
							],
							info: {

							},
						},

						{
							title: 'End-Note ',
							techs: [
								'Capital Upfitters guarantees a streamlined, high-quality installation process, ensuring your 2023 Audi Allroad\'s Stealth Hitch is perfectly fitted with attention to detail, functionality, and aesthetic preservation.'
							],
							info: {

							},
						},

					],



					Technologies: [
						{
							title: '2023 Audi Allroad Stealth Hitch Integration',
							techs: [
								'Our process for the 2023 Audi Allroad Stealth Hitch installation (Rack Only with 2" receiver) is meticulously designed to ensure functionality, safety, and seamless integration with your vehicle\'s original design. At Capital Upfitters, we specialize in customized, high-quality installations that prioritize your vehicle\'s integrity and aesthetics.'
							],
						},
					],
					ProjectDetailsHeading: 'Why us',
					ProjectDetails: [
						{
							id: uuidv4(),
							details:
								'Welcome to Capital Upfitters, the family-owned epicenter of top-tier auto customization, vehicle preservation, and performance enhancements. With a heritage of over 35 years in the industry, we proudly deliver unparalleled fleet customization services and robust protection coatings to a diverse range of clients, from municipal to retail sectors. Our reputation as a trailblazer stems from our continuous commitment to superior craftsmanship, delivering innovative auto customization and performance solutions that truly redefine automotive excellence.',
						},
						{
							id: uuidv4(),
							details:
								'We\'re not just about personal vehicles, our commitment to deliver exceptional service spans across government, commercial, and residential projects. Every vehicle that rolls into our shop receives the same degree of attention and commitment to quality. For additional information about our services at Capital Upfitters or to discuss your specific customization and performance enhancement needs, we welcome you to reach us at 301-304-1419 or explore our webpage. Choose Capital Upfitters for an automotive experience that goes beyond service to deliver a transformation, redefining your ride.',
						}
					],

				},


			},
		],
	},
	{
		id: 2,
		title: 'Fleet',
		category: 'fleet',
		slug: 'fleet',
		imageSrc: "/portfolio/fleet/f1.jpg",
		ProjectHeader: {
			title: 'Fleet',
			tags: 'FLEET',
		},
		cars: [
			{
				id: 1,
				brand: 'Ford',
				imageSrc: "/portfolio/fleet/f1.jpg",
				gallery: [
					{
						id: uuidv4(),
						title: 'Ford',
						imageSrc: "/portfolio/fleet/f1.jpg",
					},
					{
						id: uuidv4(),
						title:'Ford',
						imageSrc: "/portfolio/fleet/f2.jpg",
					},
					{
						id: uuidv4(),
						title: 'Ford',
						imageSrc: "/portfolio/fleet/f3.jpg",
					},
					{
						id: uuidv4(),
						title:'Ford',
						imageSrc: "/portfolio/fleet/f4.jpg",
					},

				],
				ProjectInfo: {
					ClientHeading: 'Audi',
					CompanyInfo: [
						{
							id: uuidv4(),
							title: 'Company',
							details: 'CAPITAL UPFITTERS',
						},
						{
							id: uuidv4(),
							title: 'Services',
							details: 'Ceramic Coatings',
						},
						{
							id: uuidv4(),
							title: 'Phone',
							details: '301-304-1419',
						},
					],
					ObjectivesHeading:'Audi',
					titleHead: 'Stealth Hitch Installation for 2023 Audi Allroad - Quick Overview',
					ObjectivesDetails: [
						{
							title: '1. Preparation',
							techs: [
								'Vehicle and work area prepped to protect against damage.' +
								'Brief customer consultation for personalized service.',
							],

						},
						{
							title: '2. Installation ',
							techs: [
								'Step 1: Careful removal of the rear bumper.',
								'Step 2: Precise installation of the Stealth Hitch, with all hardware secured to factory standards.',
								'Step 3: Trimming of lower fascia and application of edge guard for safety and aesthetics.',
								'Step 4: Relocation and recalibration of the kick sensor per OEM guidelines.',
							],
							info: {

							},
						},
						{
							title: '3. Finalizing',
							techs: [
								'Bumper carefully reattached and alignment checked.\n' +
								'Thorough cleaning of the vehicle post-installation.'
							],
							info: {

							},
						},
						{
							title: '4. Customer Orientation',
							techs: [
								'Practical demonstration on hitch use and maintenance provided during handover.'
							],
							info: {

							},
						},
						{
							title: '5. Aftercare',
							techs: [
								'Continuous support and follow-up services available as needed.'
							],
							info: {

							},
						},

						{
							title: 'End-Note ',
							techs: [
								'Capital Upfitters guarantees a streamlined, high-quality installation process, ensuring your 2023 Audi Allroad\'s Stealth Hitch is perfectly fitted with attention to detail, functionality, and aesthetic preservation.'
							],
							info: {

							},
						},

					],



					Technologies: [
						{
							title: '2023 Audi Allroad Stealth Hitch Integration',
							techs: [
								'Our process for the 2023 Audi Allroad Stealth Hitch installation (Rack Only with 2" receiver) is meticulously designed to ensure functionality, safety, and seamless integration with your vehicle\'s original design. At Capital Upfitters, we specialize in customized, high-quality installations that prioritize your vehicle\'s integrity and aesthetics.'
							],
						},
					],
					ProjectDetailsHeading: 'Why us',
					ProjectDetails: [
						{
							id: uuidv4(),
							details:
								'Welcome to Capital Upfitters, the family-owned epicenter of top-tier auto customization, vehicle preservation, and performance enhancements. With a heritage of over 35 years in the industry, we proudly deliver unparalleled fleet customization services and robust protection coatings to a diverse range of clients, from municipal to retail sectors. Our reputation as a trailblazer stems from our continuous commitment to superior craftsmanship, delivering innovative auto customization and performance solutions that truly redefine automotive excellence.',
						},
						{
							id: uuidv4(),
							details:
								'We\'re not just about personal vehicles, our commitment to deliver exceptional service spans across government, commercial, and residential projects. Every vehicle that rolls into our shop receives the same degree of attention and commitment to quality. For additional information about our services at Capital Upfitters or to discuss your specific customization and performance enhancement needs, we welcome you to reach us at 301-304-1419 or explore our webpage. Choose Capital Upfitters for an automotive experience that goes beyond service to deliver a transformation, redefining your ride.',
						}
					],

				},


			},
			// Додайте інші авто для Ceramic Coatings
		],
	},
	{
		id: 3,
		title: 'Hitches',
		category: 'hithes',
		slug: 'hithes',
		imageSrc: "/portfolio/hitches/h1.jpg",
		ProjectHeader: {
			title: 'Hitches',
			tags: 'Hitches',
		},
		cars: [
			{
				id: 1,
				brand: 'Ford Mustang',
				imageSrc: "/portfolio/hitches/h1.jpg",
				gallery: [
					{
						id: uuidv4(),
						title: 'Ford Mustang',
						imageSrc: "/portfolio/hitches/h1.jpg",
					},
					{
						id: uuidv4(),
						title:'Ford Mustang',
						imageSrc: "/portfolio/hitches/h2.jpg",
					},
					{
						id: uuidv4(),
						title:'Ford Mustang',
						imageSrc: "/portfolio/hitches/h3.jpg",
					},


				],
				ProjectInfo: {
					ClientHeading: 'Audi',
					CompanyInfo: [
						{
							id: uuidv4(),
							title: 'Company',
							details: 'CAPITAL UPFITTERS',
						},
						{
							id: uuidv4(),
							title: 'Services',
							details: 'Ceramic Coatings',
						},
						{
							id: uuidv4(),
							title: 'Phone',
							details: '301-304-1419',
						},
					],
					ObjectivesHeading:'Audi',
					titleHead: 'Stealth Hitch Installation for 2023 Audi Allroad - Quick Overview',
					ObjectivesDetails: [
						{
							title: '1. Preparation',
							techs: [
								'Vehicle and work area prepped to protect against damage.' +
								'Brief customer consultation for personalized service.',
							],

						},
						{
							title: '2. Installation ',
							techs: [
								'Step 1: Careful removal of the rear bumper.',
								'Step 2: Precise installation of the Stealth Hitch, with all hardware secured to factory standards.',
								'Step 3: Trimming of lower fascia and application of edge guard for safety and aesthetics.',
								'Step 4: Relocation and recalibration of the kick sensor per OEM guidelines.',
							],
							info: {

							},
						},
						{
							title: '3. Finalizing',
							techs: [
								'Bumper carefully reattached and alignment checked.\n' +
								'Thorough cleaning of the vehicle post-installation.'
							],
							info: {

							},
						},
						{
							title: '4. Customer Orientation',
							techs: [
								'Practical demonstration on hitch use and maintenance provided during handover.'
							],
							info: {

							},
						},
						{
							title: '5. Aftercare',
							techs: [
								'Continuous support and follow-up services available as needed.'
							],
							info: {

							},
						},

						{
							title: 'End-Note ',
							techs: [
								'Capital Upfitters guarantees a streamlined, high-quality installation process, ensuring your 2023 Audi Allroad\'s Stealth Hitch is perfectly fitted with attention to detail, functionality, and aesthetic preservation.'
							],
							info: {

							},
						},

					],



					Technologies: [
						{
							title: '2023 Audi Allroad Stealth Hitch Integration',
							techs: [
								'Our process for the 2023 Audi Allroad Stealth Hitch installation (Rack Only with 2" receiver) is meticulously designed to ensure functionality, safety, and seamless integration with your vehicle\'s original design. At Capital Upfitters, we specialize in customized, high-quality installations that prioritize your vehicle\'s integrity and aesthetics.'
							],
						},
					],
					ProjectDetailsHeading: 'Why us',
					ProjectDetails: [
						{
							id: uuidv4(),
							details:
								'Welcome to Capital Upfitters, the family-owned epicenter of top-tier auto customization, vehicle preservation, and performance enhancements. With a heritage of over 35 years in the industry, we proudly deliver unparalleled fleet customization services and robust protection coatings to a diverse range of clients, from municipal to retail sectors. Our reputation as a trailblazer stems from our continuous commitment to superior craftsmanship, delivering innovative auto customization and performance solutions that truly redefine automotive excellence.',
						},
						{
							id: uuidv4(),
							details:
								'We\'re not just about personal vehicles, our commitment to deliver exceptional service spans across government, commercial, and residential projects. Every vehicle that rolls into our shop receives the same degree of attention and commitment to quality. For additional information about our services at Capital Upfitters or to discuss your specific customization and performance enhancement needs, we welcome you to reach us at 301-304-1419 or explore our webpage. Choose Capital Upfitters for an automotive experience that goes beyond service to deliver a transformation, redefining your ride.',
						}
					],

				},


			},
			{
				id: 2,
				brand: 'Tesla',
				imageSrc: "/portfolio/hitches/h7.jpg",
				gallery: [
					{
						id: uuidv4(),
						title: 'Tesla',
						imageSrc: "/portfolio/hitches/h7.jpg",
					},
					{
						id: uuidv4(),
						title:'Tesla',
						imageSrc: "/portfolio/hitches/h8.jpg",
					},
					{
						id: uuidv4(),
						title:'Tesla',
						imageSrc: "/portfolio/hitches/h11.jpg",
					},
					{
						id: uuidv4(),
						title:'Tesla',
						imageSrc: "/portfolio/hitches/h12.jpg",
					},

				],
				ProjectInfo: {
					ClientHeading: 'Audi',
					CompanyInfo: [
						{
							id: uuidv4(),
							title: 'Company',
							details: 'CAPITAL UPFITTERS',
						},
						{
							id: uuidv4(),
							title: 'Services',
							details: 'Ceramic Coatings',
						},
						{
							id: uuidv4(),
							title: 'Phone',
							details: '301-304-1419',
						},
					],
					ObjectivesHeading:'Audi',
					titleHead: 'Stealth Hitch Installation for 2023 Audi Allroad - Quick Overview',
					ObjectivesDetails: [
						{
							title: '1. Preparation',
							techs: [
								'Vehicle and work area prepped to protect against damage.' +
								'Brief customer consultation for personalized service.',
							],

						},
						{
							title: '2. Installation ',
							techs: [
								'Step 1: Careful removal of the rear bumper.',
								'Step 2: Precise installation of the Stealth Hitch, with all hardware secured to factory standards.',
								'Step 3: Trimming of lower fascia and application of edge guard for safety and aesthetics.',
								'Step 4: Relocation and recalibration of the kick sensor per OEM guidelines.',
							],
							info: {

							},
						},
						{
							title: '3. Finalizing',
							techs: [
								'Bumper carefully reattached and alignment checked.\n' +
								'Thorough cleaning of the vehicle post-installation.'
							],
							info: {

							},
						},
						{
							title: '4. Customer Orientation',
							techs: [
								'Practical demonstration on hitch use and maintenance provided during handover.'
							],
							info: {

							},
						},
						{
							title: '5. Aftercare',
							techs: [
								'Continuous support and follow-up services available as needed.'
							],
							info: {

							},
						},

						{
							title: 'End-Note ',
							techs: [
								'Capital Upfitters guarantees a streamlined, high-quality installation process, ensuring your 2023 Audi Allroad\'s Stealth Hitch is perfectly fitted with attention to detail, functionality, and aesthetic preservation.'
							],
							info: {

							},
						},

					],



					Technologies: [
						{
							title: '2023 Audi Allroad Stealth Hitch Integration',
							techs: [
								'Our process for the 2023 Audi Allroad Stealth Hitch installation (Rack Only with 2" receiver) is meticulously designed to ensure functionality, safety, and seamless integration with your vehicle\'s original design. At Capital Upfitters, we specialize in customized, high-quality installations that prioritize your vehicle\'s integrity and aesthetics.'
							],
						},
					],
					ProjectDetailsHeading: 'Why us',
					ProjectDetails: [
						{
							id: uuidv4(),
							details:
								'Welcome to Capital Upfitters, the family-owned epicenter of top-tier auto customization, vehicle preservation, and performance enhancements. With a heritage of over 35 years in the industry, we proudly deliver unparalleled fleet customization services and robust protection coatings to a diverse range of clients, from municipal to retail sectors. Our reputation as a trailblazer stems from our continuous commitment to superior craftsmanship, delivering innovative auto customization and performance solutions that truly redefine automotive excellence.',
						},
						{
							id: uuidv4(),
							details:
								'We\'re not just about personal vehicles, our commitment to deliver exceptional service spans across government, commercial, and residential projects. Every vehicle that rolls into our shop receives the same degree of attention and commitment to quality. For additional information about our services at Capital Upfitters or to discuss your specific customization and performance enhancement needs, we welcome you to reach us at 301-304-1419 or explore our webpage. Choose Capital Upfitters for an automotive experience that goes beyond service to deliver a transformation, redefining your ride.',
						}
					],

				},


			},
			{
				id: 3,
				brand: 'Audi',
				imageSrc: "/portfolio/hitches/h4.jpg",
				gallery: [
					{
						id: uuidv4(),
						title: 'Audi',
						imageSrc: "/portfolio/hitches/h4.jpg",
					},
					{
						id: uuidv4(),
						title:'Audi',
						imageSrc: "/portfolio/hitches/h5.jpg",
					},
					{
						id: uuidv4(),
						title:'Audi',
						imageSrc: "/portfolio/hitches/h6.jpg",
					},

				],
				ProjectInfo: {
					ClientHeading: 'Audi',
					CompanyInfo: [
						{
							id: uuidv4(),
							title: 'Company',
							details: 'CAPITAL UPFITTERS',
						},
						{
							id: uuidv4(),
							title: 'Services',
							details: 'Ceramic Coatings',
						},
						{
							id: uuidv4(),
							title: 'Phone',
							details: '301-304-1419',
						},
					],
					ObjectivesHeading:'Audi',
					titleHead: 'Stealth Hitch Installation for 2023 Audi Allroad - Quick Overview',
					ObjectivesDetails: [
						{
							title: '1. Preparation',
							techs: [
								'Vehicle and work area prepped to protect against damage.' +
								'Brief customer consultation for personalized service.',
							],

						},
						{
							title: '2. Installation ',
							techs: [
								'Step 1: Careful removal of the rear bumper.',
								'Step 2: Precise installation of the Stealth Hitch, with all hardware secured to factory standards.',
								'Step 3: Trimming of lower fascia and application of edge guard for safety and aesthetics.',
								'Step 4: Relocation and recalibration of the kick sensor per OEM guidelines.',
							],
							info: {

							},
						},
						{
							title: '3. Finalizing',
							techs: [
								'Bumper carefully reattached and alignment checked.\n' +
								'Thorough cleaning of the vehicle post-installation.'
							],
							info: {

							},
						},
						{
							title: '4. Customer Orientation',
							techs: [
								'Practical demonstration on hitch use and maintenance provided during handover.'
							],
							info: {

							},
						},
						{
							title: '5. Aftercare',
							techs: [
								'Continuous support and follow-up services available as needed.'
							],
							info: {

							},
						},

						{
							title: 'End-Note ',
							techs: [
								'Capital Upfitters guarantees a streamlined, high-quality installation process, ensuring your 2023 Audi Allroad\'s Stealth Hitch is perfectly fitted with attention to detail, functionality, and aesthetic preservation.'
							],
							info: {

							},
						},

					],



					Technologies: [
						{
							title: '2023 Audi Allroad Stealth Hitch Integration',
							techs: [
								'Our process for the 2023 Audi Allroad Stealth Hitch installation (Rack Only with 2" receiver) is meticulously designed to ensure functionality, safety, and seamless integration with your vehicle\'s original design. At Capital Upfitters, we specialize in customized, high-quality installations that prioritize your vehicle\'s integrity and aesthetics.'
							],
						},
					],
					ProjectDetailsHeading: 'Why us',
					ProjectDetails: [
						{
							id: uuidv4(),
							details:
								'Welcome to Capital Upfitters, the family-owned epicenter of top-tier auto customization, vehicle preservation, and performance enhancements. With a heritage of over 35 years in the industry, we proudly deliver unparalleled fleet customization services and robust protection coatings to a diverse range of clients, from municipal to retail sectors. Our reputation as a trailblazer stems from our continuous commitment to superior craftsmanship, delivering innovative auto customization and performance solutions that truly redefine automotive excellence.',
						},
						{
							id: uuidv4(),
							details:
								'We\'re not just about personal vehicles, our commitment to deliver exceptional service spans across government, commercial, and residential projects. Every vehicle that rolls into our shop receives the same degree of attention and commitment to quality. For additional information about our services at Capital Upfitters or to discuss your specific customization and performance enhancement needs, we welcome you to reach us at 301-304-1419 or explore our webpage. Choose Capital Upfitters for an automotive experience that goes beyond service to deliver a transformation, redefining your ride.',
						}
					],

				},


			},
			{
				id: 4,
				brand: '2023 Audi A4 Allroad',
				imageSrc: "/portfolio/hitches/2023 Audi Allroad/hitchesAudi14.jpg",
				gallery: [
					{
						id: uuidv4(),
						title: 'Audi',
						imageSrc: "/portfolio/hitches/2023 Audi Allroad/hitchesAudi1.jpg",
					},
					{
						id: uuidv4(),
						title:'Audi',
						imageSrc: "/portfolio/hitches/2023 Audi Allroad/hitchesAudi2.jpg",
					},
					{
						id: uuidv4(),
						title:'Audi',
						imageSrc: "/portfolio/hitches/2023 Audi Allroad/hitchesAudi4.jpg",
					},
					{
						id: uuidv4(),
						title: 'Audi',
						imageSrc: "/portfolio/hitches/2023 Audi Allroad/hitchesAudi3.jpg",
					},
					{
						id: uuidv4(),
						title:'Audi',
						imageSrc: "/portfolio/hitches/2023 Audi Allroad/hitchesAudi5.jpg",
					},
					{
						id: uuidv4(),
						title:'Audi',
						imageSrc: "/portfolio/hitches/2023 Audi Allroad/hitchesAudi6.jpg",
					},
					{
						id: uuidv4(),
						title: 'Audi',
						imageSrc: "/portfolio/hitches/2023 Audi Allroad/hitchesAudi7.jpg",
					},
					{
						id: uuidv4(),
						title:'Audi',
						imageSrc: "/portfolio/hitches/2023 Audi Allroad/hitchesAudi8.jpg",
					},
					{
						id: uuidv4(),
						title:'Audi',
						imageSrc: "/portfolio/hitches/2023 Audi Allroad/hitchesAudi9.jpg",
					},
					{
						id: uuidv4(),
						title: 'Audi',
						imageSrc: "/portfolio/hitches/2023 Audi Allroad/hitchesAudi10.jpg",
					},
					{
						id: uuidv4(),
						title:'Audi',
						imageSrc: "/portfolio/hitches/2023 Audi Allroad/hitchesAudi11.jpg",
					},
					{
						id: uuidv4(),
						title:'Audi',
						imageSrc: "/portfolio/hitches/2023 Audi Allroad/hitchesAudi12.jpg",
					},
					{
						id: uuidv4(),
						title: 'Audi',
						imageSrc: "/portfolio/hitches/2023 Audi Allroad/hitchesAudi13.jpg",
					},
					{
						id: uuidv4(),
						title:'Audi',
						imageSrc: "/portfolio/hitches/2023 Audi Allroad/hitchesAudi14.jpg",
					},
					{
						id: uuidv4(),
						title:'Audi',
						imageSrc: "/portfolio/hitches/2023 Audi Allroad/hitchesAudi15.jpg",
					},
					{
						id: uuidv4(),
						title:'Audi',
						imageSrc: "/portfolio/hitches/2023 Audi Allroad/hitchesAudi16.jpg",
					},

				],
				ProjectInfo: {
					ClientHeading: 'Audi',
					CompanyInfo: [
						{
							id: uuidv4(),
							title: 'Company',
							details: 'CAPITAL UPFITTERS',
						},
						{
							id: uuidv4(),
							title: 'Services',
							details: 'Ceramic Coatings',
						},
						{
							id: uuidv4(),
							title: 'Phone',
							details: '301-304-1419',
						},
					],
					ObjectivesHeading:'Audi',
					titleHead: 'Stealth Hitch Installation for 2023 Audi Allroad - Quick Overview',
					ObjectivesDetails: [
						{
							title: '1. Preparation',
							techs: [
								'Vehicle and work area prepped to protect against damage.' +
								'Brief customer consultation for personalized service.',
							],

						},
						{
							title: '2. Installation ',
							techs: [
								'Step 1: Careful removal of the rear bumper.',
								'Step 2: Precise installation of the Stealth Hitch, with all hardware secured to factory standards.',
								'Step 3: Trimming of lower fascia and application of edge guard for safety and aesthetics.',
								'Step 4: Relocation and recalibration of the kick sensor per OEM guidelines.',
							],
							info: {

							},
						},
						{
							title: '3. Finalizing',
							techs: [
								'Bumper carefully reattached and alignment checked.\n' +
								'Thorough cleaning of the vehicle post-installation.'
							],
							info: {

							},
						},
						{
							title: '4. Customer Orientation',
							techs: [
								'Practical demonstration on hitch use and maintenance provided during handover.'
							],
							info: {

							},
						},
						{
							title: '5. Aftercare',
							techs: [
								'Continuous support and follow-up services available as needed.'
							],
							info: {

							},
						},

						{
							title: 'End-Note ',
							techs: [
								'Capital Upfitters guarantees a streamlined, high-quality installation process, ensuring your 2023 Audi Allroad\'s Stealth Hitch is perfectly fitted with attention to detail, functionality, and aesthetic preservation.'
							],
							info: {

							},
						},

					],



					Technologies: [
						{
							title: '2023 Audi Allroad Stealth Hitch Integration',
							techs: [
								'Our process for the 2023 Audi Allroad Stealth Hitch installation (Rack Only with 2" receiver) is meticulously designed to ensure functionality, safety, and seamless integration with your vehicle\'s original design. At Capital Upfitters, we specialize in customized, high-quality installations that prioritize your vehicle\'s integrity and aesthetics.'
							],
						},
					],
					ProjectDetailsHeading: 'Why us',
					ProjectDetails: [
						{
							id: uuidv4(),
							details:
								'Welcome to Capital Upfitters, the family-owned epicenter of top-tier auto customization, vehicle preservation, and performance enhancements. With a heritage of over 35 years in the industry, we proudly deliver unparalleled fleet customization services and robust protection coatings to a diverse range of clients, from municipal to retail sectors. Our reputation as a trailblazer stems from our continuous commitment to superior craftsmanship, delivering innovative auto customization and performance solutions that truly redefine automotive excellence.',
						},
						{
							id: uuidv4(),
							details:
								'We\'re not just about personal vehicles, our commitment to deliver exceptional service spans across government, commercial, and residential projects. Every vehicle that rolls into our shop receives the same degree of attention and commitment to quality. For additional information about our services at Capital Upfitters or to discuss your specific customization and performance enhancement needs, we welcome you to reach us at 301-304-1419 or explore our webpage. Choose Capital Upfitters for an automotive experience that goes beyond service to deliver a transformation, redefining your ride.',
						}
					],

				},

			},
			// Додайте інші авто для Ceramic Coatings
		],
	},
	{
		id: 4,
		title: 'Patriot Liner',
		category: 'patriot liner',
		slug: 'patriot-liner',
		imageSrc: "/portfolio/patriot-liner/pl4.jpg",
		ProjectHeader: {
			title: 'test',
			tags: 'test',
		},
		cars: [

			{
				id: 1,
				brand: 'Ford',
				imageSrc: "/portfolio/patriot-liner/pl4.jpg",
				gallery: [
					{
						id: uuidv4(),
						title: 'Ford',
						imageSrc: "/portfolio/patriot-liner/pl4.jpg",
					},

					{
						id: uuidv4(),
						title: 'Ford',
						imageSrc: "/portfolio/patriot-liner/pl6.jpg",
					},

					{
						id: uuidv4(),
						title: 'Ford',
						imageSrc: "/portfolio/patriot-liner/pl8.jpg",
					},
					{
						id: uuidv4(),
						title: 'Ford',
						imageSrc: "/portfolio/patriot-liner/pl9.jpg",
					},
					{
						id: uuidv4(),
						title: 'Ford',
						imageSrc: "/portfolio/patriot-liner/pl10.jpg",
					},

					{
						id: uuidv4(),
						title: 'Ford',
						imageSrc: "/portfolio/patriot-liner/pl11.jpg",
					},
					{
						id: uuidv4(),
						title: 'Ford',
						imageSrc: "/portfolio/patriot-liner/pl13.jpg",
					},
					{
						id: uuidv4(),
						title: 'Ford',
						imageSrc: "/portfolio/patriot-liner/pl14.jpg",
					},
					{
						id: uuidv4(),
						title: 'Ford',
						imageSrc: "/portfolio/patriot-liner/pl15.jpg",
					},
					{
						id: uuidv4(),
						title: 'Ford',
						imageSrc: "/portfolio/patriot-liner/pl15.jpg",
					},
					{
						id: uuidv4(),
						title: 'Ford',
						imageSrc: "/portfolio/patriot-liner/pl21.jpg",
					},
					{
						id: uuidv4(),
						title: 'Ford',
						imageSrc: "/portfolio/patriot-liner/pl22.jpg",
					},
					{
						id: uuidv4(),
						title: 'Ford',
						imageSrc: "/portfolio/patriot-liner/pl23.jpg",
					},

				],
				ProjectInfo: {
					ClientHeading: 'Audi',
					CompanyInfo: [
						{
							id: uuidv4(),
							title: 'Company',
							details: 'CAPITAL UPFITTERS',
						},
						{
							id: uuidv4(),
							title: 'Services',
							details: 'Ceramic Coatings',
						},
						{
							id: uuidv4(),
							title: 'Phone',
							details: '301-304-1419',
						},
					],
					ObjectivesHeading:'Audi',
					titleHead: 'Stealth Hitch Installation for 2023 Audi Allroad - Quick Overview',
					ObjectivesDetails: [
						{
							title: '1. Preparation',
							techs: [
								'Vehicle and work area prepped to protect against damage.' +
								'Brief customer consultation for personalized service.',
							],

						},
						{
							title: '2. Installation ',
							techs: [
								'Step 1: Careful removal of the rear bumper.',
								'Step 2: Precise installation of the Stealth Hitch, with all hardware secured to factory standards.',
								'Step 3: Trimming of lower fascia and application of edge guard for safety and aesthetics.',
								'Step 4: Relocation and recalibration of the kick sensor per OEM guidelines.',
							],
							info: {

							},
						},
						{
							title: '3. Finalizing',
							techs: [
								'Bumper carefully reattached and alignment checked.\n' +
								'Thorough cleaning of the vehicle post-installation.'
							],
							info: {

							},
						},
						{
							title: '4. Customer Orientation',
							techs: [
								'Practical demonstration on hitch use and maintenance provided during handover.'
							],
							info: {

							},
						},
						{
							title: '5. Aftercare',
							techs: [
								'Continuous support and follow-up services available as needed.'
							],
							info: {

							},
						},

						{
							title: 'End-Note ',
							techs: [
								'Capital Upfitters guarantees a streamlined, high-quality installation process, ensuring your 2023 Audi Allroad\'s Stealth Hitch is perfectly fitted with attention to detail, functionality, and aesthetic preservation.'
							],
							info: {

							},
						},

					],



					Technologies: [
						{
							title: '2023 Audi Allroad Stealth Hitch Integration',
							techs: [
								'Our process for the 2023 Audi Allroad Stealth Hitch installation (Rack Only with 2" receiver) is meticulously designed to ensure functionality, safety, and seamless integration with your vehicle\'s original design. At Capital Upfitters, we specialize in customized, high-quality installations that prioritize your vehicle\'s integrity and aesthetics.'
							],
						},
					],
					ProjectDetailsHeading: 'Why us',
					ProjectDetails: [
						{
							id: uuidv4(),
							details:
								'Welcome to Capital Upfitters, the family-owned epicenter of top-tier auto customization, vehicle preservation, and performance enhancements. With a heritage of over 35 years in the industry, we proudly deliver unparalleled fleet customization services and robust protection coatings to a diverse range of clients, from municipal to retail sectors. Our reputation as a trailblazer stems from our continuous commitment to superior craftsmanship, delivering innovative auto customization and performance solutions that truly redefine automotive excellence.',
						},
						{
							id: uuidv4(),
							details:
								'We\'re not just about personal vehicles, our commitment to deliver exceptional service spans across government, commercial, and residential projects. Every vehicle that rolls into our shop receives the same degree of attention and commitment to quality. For additional information about our services at Capital Upfitters or to discuss your specific customization and performance enhancement needs, we welcome you to reach us at 301-304-1419 or explore our webpage. Choose Capital Upfitters for an automotive experience that goes beyond service to deliver a transformation, redefining your ride.',
						}
					],

				},


			},
			{
				id: 2,
				brand: 'Ford',
				imageSrc: "/portfolio/patriot-liner/pl17.jpg",
				gallery: [
					{
						id: uuidv4(),
						title: 'Ford',
						imageSrc: "/portfolio/patriot-liner/pl17.jpg",
					},

					{
						id: uuidv4(),
						title: 'Ford',
						imageSrc: "/portfolio/patriot-liner/pl19.jpg",
					},
					{
						id: uuidv4(),
						title: 'Ford',
						imageSrc: "/portfolio/patriot-liner/pl25.jpg",
					},
					{
						id: uuidv4(),
						title: 'Ford',
						imageSrc: "/portfolio/patriot-liner/pl18.jpg",
					},

					{
						id: uuidv4(),
						title: 'Ford',
						imageSrc: "/portfolio/patriot-liner/pl24.jpg",
					},

				],
				ProjectInfo: {
					ClientHeading: 'Audi',
					CompanyInfo: [
						{
							id: uuidv4(),
							title: 'Company',
							details: 'CAPITAL UPFITTERS',
						},
						{
							id: uuidv4(),
							title: 'Services',
							details: 'Ceramic Coatings',
						},
						{
							id: uuidv4(),
							title: 'Phone',
							details: '301-304-1419',
						},
					],
					ObjectivesHeading:'Audi',
					titleHead: 'Stealth Hitch Installation for 2023 Audi Allroad - Quick Overview',
					ObjectivesDetails: [
						{
							title: '1. Preparation',
							techs: [
								'Vehicle and work area prepped to protect against damage.' +
								'Brief customer consultation for personalized service.',
							],

						},
						{
							title: '2. Installation ',
							techs: [
								'Step 1: Careful removal of the rear bumper.',
								'Step 2: Precise installation of the Stealth Hitch, with all hardware secured to factory standards.',
								'Step 3: Trimming of lower fascia and application of edge guard for safety and aesthetics.',
								'Step 4: Relocation and recalibration of the kick sensor per OEM guidelines.',
							],
							info: {

							},
						},
						{
							title: '3. Finalizing',
							techs: [
								'Bumper carefully reattached and alignment checked.\n' +
								'Thorough cleaning of the vehicle post-installation.'
							],
							info: {

							},
						},
						{
							title: '4. Customer Orientation',
							techs: [
								'Practical demonstration on hitch use and maintenance provided during handover.'
							],
							info: {

							},
						},
						{
							title: '5. Aftercare',
							techs: [
								'Continuous support and follow-up services available as needed.'
							],
							info: {

							},
						},

						{
							title: 'End-Note ',
							techs: [
								'Capital Upfitters guarantees a streamlined, high-quality installation process, ensuring your 2023 Audi Allroad\'s Stealth Hitch is perfectly fitted with attention to detail, functionality, and aesthetic preservation.'
							],
							info: {

							},
						},

					],



					Technologies: [
						{
							title: '2023 Audi Allroad Stealth Hitch Integration',
							techs: [
								'Our process for the 2023 Audi Allroad Stealth Hitch installation (Rack Only with 2" receiver) is meticulously designed to ensure functionality, safety, and seamless integration with your vehicle\'s original design. At Capital Upfitters, we specialize in customized, high-quality installations that prioritize your vehicle\'s integrity and aesthetics.'
							],
						},
					],
					ProjectDetailsHeading: 'Why us',
					ProjectDetails: [
						{
							id: uuidv4(),
							details:
								'Welcome to Capital Upfitters, the family-owned epicenter of top-tier auto customization, vehicle preservation, and performance enhancements. With a heritage of over 35 years in the industry, we proudly deliver unparalleled fleet customization services and robust protection coatings to a diverse range of clients, from municipal to retail sectors. Our reputation as a trailblazer stems from our continuous commitment to superior craftsmanship, delivering innovative auto customization and performance solutions that truly redefine automotive excellence.',
						},
						{
							id: uuidv4(),
							details:
								'We\'re not just about personal vehicles, our commitment to deliver exceptional service spans across government, commercial, and residential projects. Every vehicle that rolls into our shop receives the same degree of attention and commitment to quality. For additional information about our services at Capital Upfitters or to discuss your specific customization and performance enhancement needs, we welcome you to reach us at 301-304-1419 or explore our webpage. Choose Capital Upfitters for an automotive experience that goes beyond service to deliver a transformation, redefining your ride.',
						}
					],

				},


			},
			{
				id: 3,
				brand: 'Jeep Wrangler',
				imageSrc: "/portfolio/patriot-liner/pl27 (1).jpg",
				gallery: [
					{
						id: uuidv4(),
						title: 'Jeep',
						imageSrc: "/portfolio/patriot-liner/pl27.jpg",
					},
					{
						id: uuidv4(),
						title:'Jeep',
						imageSrc: "/portfolio/patriot-liner/pl28.jpg",
					},
					{
						id: uuidv4(),
						title: 'Jeep',
						imageSrc: "/portfolio/patriot-liner/pl29.jpg",
					},
					{
						id: uuidv4(),
						title:'Jeep',
						imageSrc: "/portfolio/patriot-liner/pl30.jpg",
					},
					{
						id: uuidv4(),
						title: 'Jeep',
						imageSrc: "/portfolio/patriot-liner/pl31.jpg",
					},
					{
						id: uuidv4(),
						title:'Jeep',
						imageSrc: "/portfolio/patriot-liner/pl32.jpg",
					},
					{
						id: uuidv4(),
						title: 'Jeep',
						imageSrc: "/portfolio/patriot-liner/pl33.jpg",
					},
					{
						id: uuidv4(),
						title:'Jeep',
						imageSrc: "/portfolio/patriot-liner/pl34.jpg",
					},
					{
						id: uuidv4(),
						title:'Jeep',
						imageSrc: "/portfolio/patriot-liner/pl35.jpg",
					},
					{
						id: uuidv4(),
						title:'Jeep',
						imageSrc: "/portfolio/patriot-liner/pl36.jpg",
					},
					{
						id: uuidv4(),
						title:'Jeep',
						imageSrc: "/portfolio/patriot-liner/pl37.jpg",
					},
					{
						id: uuidv4(),
						title:'Jeep',
						imageSrc: "/portfolio/patriot-liner/pl38.jpg",
					},
					{
						id: uuidv4(),
						title:'Jeep',
						imageSrc: "/portfolio/patriot-liner/pl39.jpg",
					},
					{
						id: uuidv4(),
						title:'Jeep',
						imageSrc: "/portfolio/patriot-liner/pl40.jpg",
					},
					{
						id: uuidv4(),
						title:'Jeep',
						imageSrc: "/portfolio/patriot-liner/pl41.jpg",
					},
					{
						id: uuidv4(),
						title:'Jeep',
						imageSrc: "/portfolio/patriot-liner/pl42.jpg",
					},
					{
						id: uuidv4(),
						title:'Jeep',
						imageSrc: "/portfolio/patriot-liner/pl43.jpg",
					},
					{
						id: uuidv4(),
						title:'Jeep',
						imageSrc: "/portfolio/patriot-liner/pl44.jpg",
					},
				],
				ProjectInfo: {
					ClientHeading: 'Audi',
					CompanyInfo: [
						{
							id: uuidv4(),
							title: 'Company',
							details: 'CAPITAL UPFITTERS',
						},
						{
							id: uuidv4(),
							title: 'Services',
							details: 'Ceramic Coatings',
						},
						{
							id: uuidv4(),
							title: 'Phone',
							details: '301-304-1419',
						},
					],
					ObjectivesHeading:'Audi',
					titleHead: 'Stealth Hitch Installation for 2023 Audi Allroad - Quick Overview',
					ObjectivesDetails: [
						{
							title: '1. Preparation',
							techs: [
								'Vehicle and work area prepped to protect against damage.' +
								'Brief customer consultation for personalized service.',
							],

						},
						{
							title: '2. Installation ',
							techs: [
								'Step 1: Careful removal of the rear bumper.',
								'Step 2: Precise installation of the Stealth Hitch, with all hardware secured to factory standards.',
								'Step 3: Trimming of lower fascia and application of edge guard for safety and aesthetics.',
								'Step 4: Relocation and recalibration of the kick sensor per OEM guidelines.',
							],
							info: {

							},
						},
						{
							title: '3. Finalizing',
							techs: [
								'Bumper carefully reattached and alignment checked.\n' +
								'Thorough cleaning of the vehicle post-installation.'
							],
							info: {

							},
						},
						{
							title: '4. Customer Orientation',
							techs: [
								'Practical demonstration on hitch use and maintenance provided during handover.'
							],
							info: {

							},
						},
						{
							title: '5. Aftercare',
							techs: [
								'Continuous support and follow-up services available as needed.'
							],
							info: {

							},
						},

						{
							title: 'End-Note ',
							techs: [
								'Capital Upfitters guarantees a streamlined, high-quality installation process, ensuring your 2023 Audi Allroad\'s Stealth Hitch is perfectly fitted with attention to detail, functionality, and aesthetic preservation.'
							],
							info: {

							},
						},

					],



					Technologies: [
						{
							title: '2023 Audi Allroad Stealth Hitch Integration',
							techs: [
								'Our process for the 2023 Audi Allroad Stealth Hitch installation (Rack Only with 2" receiver) is meticulously designed to ensure functionality, safety, and seamless integration with your vehicle\'s original design. At Capital Upfitters, we specialize in customized, high-quality installations that prioritize your vehicle\'s integrity and aesthetics.'
							],
						},
					],
					ProjectDetailsHeading: 'Why us',
					ProjectDetails: [
						{
							id: uuidv4(),
							details:
								'Welcome to Capital Upfitters, the family-owned epicenter of top-tier auto customization, vehicle preservation, and performance enhancements. With a heritage of over 35 years in the industry, we proudly deliver unparalleled fleet customization services and robust protection coatings to a diverse range of clients, from municipal to retail sectors. Our reputation as a trailblazer stems from our continuous commitment to superior craftsmanship, delivering innovative auto customization and performance solutions that truly redefine automotive excellence.',
						},
						{
							id: uuidv4(),
							details:
								'We\'re not just about personal vehicles, our commitment to deliver exceptional service spans across government, commercial, and residential projects. Every vehicle that rolls into our shop receives the same degree of attention and commitment to quality. For additional information about our services at Capital Upfitters or to discuss your specific customization and performance enhancement needs, we welcome you to reach us at 301-304-1419 or explore our webpage. Choose Capital Upfitters for an automotive experience that goes beyond service to deliver a transformation, redefining your ride.',
						}
					],

				},


			},
			// Додайте інші авто для Ceramic Coatings
		],
	},
	{
		id: 5,
		title: 'Undercoating',
		category: 'undercoating',
		slug: 'undercoating',
		imageSrc: "/portfolio/undercoating/u3.jpg",
		ProjectHeader: {
			title: 'Undercoating',
			tags: 'Undercoating',
		},
		cars: [
			{
				id: 1,
				brand: 'Ford',
				imageSrc: "/portfolio/undercoating/u3.jpg",
				gallery: [
					{
						id: uuidv4(),
						title: 'fsd',
						imageSrc: "/portfolio/undercoating/u1.jpg",
					},
					{
						id: uuidv4(),
						title:'fsd',
						imageSrc: "/portfolio/undercoating/u2.jpg",
					},
					{
						id: uuidv4(),
						title:'fsd',
						imageSrc: "/portfolio/undercoating/u3.jpg",
					},
					{
						id: uuidv4(),
						title:'fsd',
						imageSrc: "/portfolio/undercoating/u4.jpg",
					},
				],
				ProjectInfo: {
					ClientHeading: 'Audi',
					CompanyInfo: [
						{
							id: uuidv4(),
							title: 'Company',
							details: 'CAPITAL UPFITTERS',
						},
						{
							id: uuidv4(),
							title: 'Services',
							details: 'Ceramic Coatings',
						},
						{
							id: uuidv4(),
							title: 'Phone',
							details: '301-304-1419',
						},
					],
					ObjectivesHeading:'Audi',
					titleHead: 'Stealth Hitch Installation for 2023 Audi Allroad: Quick Overview',
					ObjectivesDetails: [
						{
							title: '1. Preparation',
							techs: [
								'Vehicle and work area prepped to protect against damage.' +
								'Brief customer consultation for personalized service.',
							],

						},
						{
							title: '2. Installation ',
							techs: [
								'Step 1: Careful removal of the rear bumper.',
								'Step 2: Precise installation of the Stealth Hitch, with all hardware secured to factory standards.',
								'Step 3: Trimming of lower fascia and application of edge guard for safety and aesthetics.',
								'Step 4: Relocation and recalibration of the kick sensor per OEM guidelines.',
							],
							info: {

							},
						},
						{
							title: '3. Finalizing',
							techs: [
								'Bumper carefully reattached and alignment checked.\n' +
								'Thorough cleaning of the vehicle post-installation.'
							],
							info: {

							},
						},
						{
							title: '4. Customer Orientation',
							techs: [
								'Practical demonstration on hitch use and maintenance provided during handover.'
							],
							info: {

							},
						},
						{
							title: '5. Aftercare',
							techs: [
								'Continuous support and follow-up services available as needed.'
							],
							info: {

							},
						},

						{
							title: 'End-Note ',
							techs: [
								'Capital Upfitters guarantees a streamlined, high-quality installation process, ensuring your 2023 Audi Allroad\'s Stealth Hitch is perfectly fitted with attention to detail, functionality, and aesthetic preservation.'
							],
							info: {

							},
						},

					],



					Technologies: [
						{
							title: '2023 Audi Allroad Stealth Hitch Integration',
							techs: [
								'Our process for the 2023 Audi Allroad Stealth Hitch installation (Rack Only with 2" receiver) is meticulously designed to ensure functionality, safety, and seamless integration with your vehicle\'s original design. At Capital Upfitters, we specialize in customized, high-quality installations that prioritize your vehicle\'s integrity and aesthetics.'
							],
						},
					],
					ProjectDetailsHeading: 'Why us',
					ProjectDetails: [
						{
							id: uuidv4(),
							details:
								'Welcome to Capital Upfitters, the family-owned epicenter of top-tier auto customization, vehicle preservation, and performance enhancements. With a heritage of over 35 years in the industry, we proudly deliver unparalleled fleet customization services and robust protection coatings to a diverse range of clients, from municipal to retail sectors. Our reputation as a trailblazer stems from our continuous commitment to superior craftsmanship, delivering innovative auto customization and performance solutions that truly redefine automotive excellence.',
						},
						{
							id: uuidv4(),
							details:
								'We\'re not just about personal vehicles, our commitment to deliver exceptional service spans across government, commercial, and residential projects. Every vehicle that rolls into our shop receives the same degree of attention and commitment to quality. For additional information about our services at Capital Upfitters or to discuss your specific customization and performance enhancement needs, we welcome you to reach us at 301-304-1419 or explore our webpage. Choose Capital Upfitters for an automotive experience that goes beyond service to deliver a transformation, redefining your ride.',
						}
					],

				},


			},
			// Додайте інші авто для Ceramic Coatings
		],
	},
	{
		id: 6,
		title: 'Wheels Tires',
		category: 'wheels tires',
		slug: 'wheels-tires',
		imageSrc: "/portfolio/wheels-tires/wt2.jpg",
		ProjectHeader: {
			title: 'WHEELS TIRES',
			tags: 'WHEELS TIRES',
		},
		cars: [
			{
				id: 1,
				brand: 'GMC',
				imageSrc: "/portfolio/wheels-tires/wt2.jpg",
				gallery: [
					{
						id: uuidv4(),
						title: 'GMC',
						imageSrc: "/portfolio/wheels-tires/wt2.jpg",
					},
					{
						id: uuidv4(),
						title:'GMC',
						imageSrc: "/portfolio/wheels-tires/wt3.jpg",
					},



				],
				ProjectInfo: {
					ClientHeading: 'Audi',
					CompanyInfo: [
						{
							id: uuidv4(),
							title: 'Company',
							details: 'CAPITAL UPFITTERS',
						},
						{
							id: uuidv4(),
							title: 'Services',
							details: 'Ceramic Coatings',
						},
						{
							id: uuidv4(),
							title: 'Phone',
							details: '301-304-1419',
						},
					],
					ObjectivesHeading:'Audi',
					titleHead: 'Stealth Hitch Installation for 2023 Audi Allroad: Quick Overview',
					ObjectivesDetails: [
						{
							title: '1. Preparation',
							techs: [
								'Vehicle and work area prepped to protect against damage.' +
								'Brief customer consultation for personalized service.',
							],

						},
						{
							title: '2. Installation ',
							techs: [
								'Step 1: Careful removal of the rear bumper.',
								'Step 2: Precise installation of the Stealth Hitch, with all hardware secured to factory standards.',
								'Step 3: Trimming of lower fascia and application of edge guard for safety and aesthetics.',
								'Step 4: Relocation and recalibration of the kick sensor per OEM guidelines.',
							],
							info: {

							},
						},
						{
							title: '3. Finalizing',
							techs: [
								'Bumper carefully reattached and alignment checked.\n' +
								'Thorough cleaning of the vehicle post-installation.'
							],
							info: {

							},
						},
						{
							title: '4. Customer Orientation',
							techs: [
								'Practical demonstration on hitch use and maintenance provided during handover.'
							],
							info: {

							},
						},
						{
							title: '5. Aftercare',
							techs: [
								'Continuous support and follow-up services available as needed.'
							],
							info: {

							},
						},

						{
							title: 'End-Note ',
							techs: [
								'Capital Upfitters guarantees a streamlined, high-quality installation process, ensuring your 2023 Audi Allroad\'s Stealth Hitch is perfectly fitted with attention to detail, functionality, and aesthetic preservation.'
							],
							info: {

							},
						},

					],



					Technologies: [
						{
							title: '2023 Audi Allroad Stealth Hitch Integration',
							techs: [
								'Our process for the 2023 Audi Allroad Stealth Hitch installation (Rack Only with 2" receiver) is meticulously designed to ensure functionality, safety, and seamless integration with your vehicle\'s original design. At Capital Upfitters, we specialize in customized, high-quality installations that prioritize your vehicle\'s integrity and aesthetics.'
							],
						},
					],
					ProjectDetailsHeading: 'Why us',
					ProjectDetails: [
						{
							id: uuidv4(),
							details:
								'Welcome to Capital Upfitters, the family-owned epicenter of top-tier auto customization, vehicle preservation, and performance enhancements. With a heritage of over 35 years in the industry, we proudly deliver unparalleled fleet customization services and robust protection coatings to a diverse range of clients, from municipal to retail sectors. Our reputation as a trailblazer stems from our continuous commitment to superior craftsmanship, delivering innovative auto customization and performance solutions that truly redefine automotive excellence.',
						},
						{
							id: uuidv4(),
							details:
								'We\'re not just about personal vehicles, our commitment to deliver exceptional service spans across government, commercial, and residential projects. Every vehicle that rolls into our shop receives the same degree of attention and commitment to quality. For additional information about our services at Capital Upfitters or to discuss your specific customization and performance enhancement needs, we welcome you to reach us at 301-304-1419 or explore our webpage. Choose Capital Upfitters for an automotive experience that goes beyond service to deliver a transformation, redefining your ride.',
						}
					],

				},


			},
			{
				id: 2,
				brand: 'Volkswagen',
				imageSrc: "/portfolio/wheels-tires/wt5.jpg",
				gallery: [
					{
						id: uuidv4(),
						title: 'Volkswagen',
						imageSrc: "/portfolio/wheels-tires/wt5.jpg",
					},
				],
				ProjectInfo: {
					ClientHeading: 'Audi',
					CompanyInfo: [
						{
							id: uuidv4(),
							title: 'Company',
							details: 'CAPITAL UPFITTERS',
						},
						{
							id: uuidv4(),
							title: 'Services',
							details: 'Ceramic Coatings',
						},
						{
							id: uuidv4(),
							title: 'Phone',
							details: '301-304-1419',
						},
					],
					ObjectivesHeading:'Audi',
					titleHead: 'Stealth Hitch Installation for 2023 Audi Allroad - Quick Overview',
					ObjectivesDetails: [
						{
							title: '1. Preparation',
							techs: [
								'Vehicle and work area prepped to protect against damage.' +
								'Brief customer consultation for personalized service.',
							],

						},
						{
							title: '2. Installation ',
							techs: [
								'Step 1: Careful removal of the rear bumper.',
								'Step 2: Precise installation of the Stealth Hitch, with all hardware secured to factory standards.',
								'Step 3: Trimming of lower fascia and application of edge guard for safety and aesthetics.',
								'Step 4: Relocation and recalibration of the kick sensor per OEM guidelines.',
							],
							info: {

							},
						},
						{
							title: '3. Finalizing',
							techs: [
								'Bumper carefully reattached and alignment checked.\n' +
								'Thorough cleaning of the vehicle post-installation.'
							],
							info: {

							},
						},
						{
							title: '4. Customer Orientation',
							techs: [
								'Practical demonstration on hitch use and maintenance provided during handover.'
							],
							info: {

							},
						},
						{
							title: '5. Aftercare',
							techs: [
								'Continuous support and follow-up services available as needed.'
							],
							info: {

							},
						},

						{
							title: 'End-Note ',
							techs: [
								'Capital Upfitters guarantees a streamlined, high-quality installation process, ensuring your 2023 Audi Allroad\'s Stealth Hitch is perfectly fitted with attention to detail, functionality, and aesthetic preservation.'
							],
							info: {

							},
						},

					],



					Technologies: [
						{
							title: '2023 Audi Allroad Stealth Hitch Integration',
							techs: [
								'Our process for the 2023 Audi Allroad Stealth Hitch installation (Rack Only with 2" receiver) is meticulously designed to ensure functionality, safety, and seamless integration with your vehicle\'s original design. At Capital Upfitters, we specialize in customized, high-quality installations that prioritize your vehicle\'s integrity and aesthetics.'
							],
						},
					],
					ProjectDetailsHeading: 'Why us',
					ProjectDetails: [
						{
							id: uuidv4(),
							details:
								'Welcome to Capital Upfitters, the family-owned epicenter of top-tier auto customization, vehicle preservation, and performance enhancements. With a heritage of over 35 years in the industry, we proudly deliver unparalleled fleet customization services and robust protection coatings to a diverse range of clients, from municipal to retail sectors. Our reputation as a trailblazer stems from our continuous commitment to superior craftsmanship, delivering innovative auto customization and performance solutions that truly redefine automotive excellence.',
						},
						{
							id: uuidv4(),
							details:
								'We\'re not just about personal vehicles, our commitment to deliver exceptional service spans across government, commercial, and residential projects. Every vehicle that rolls into our shop receives the same degree of attention and commitment to quality. For additional information about our services at Capital Upfitters or to discuss your specific customization and performance enhancement needs, we welcome you to reach us at 301-304-1419 or explore our webpage. Choose Capital Upfitters for an automotive experience that goes beyond service to deliver a transformation, redefining your ride.',
						}
					],

				},


			},
			{
				id: 3,
				brand: 'Jeep',
				imageSrc: "/portfolio/wheels-tires/wt16.jpg",
				gallery: [
					{
						id: uuidv4(),
						title: 'Jeep',
						imageSrc: "/portfolio/wheels-tires/wt17.jpg",
					},
					{
						id: uuidv4(),
						title:'Jeep',
						imageSrc: "/portfolio/wheels-tires/wt18.jpg",
					},
					{
						id: uuidv4(),
						title: 'Jeep',
						imageSrc: "/portfolio/wheels-tires/wt25.jpg",
					},

				],
				ProjectInfo: {
					ClientHeading: 'Audi',
					CompanyInfo: [
						{
							id: uuidv4(),
							title: 'Company',
							details: 'CAPITAL UPFITTERS',
						},
						{
							id: uuidv4(),
							title: 'Services',
							details: 'Ceramic Coatings',
						},
						{
							id: uuidv4(),
							title: 'Phone',
							details: '301-304-1419',
						},
					],
					ObjectivesHeading:'Audi',
					titleHead: 'Stealth Hitch Installation for 2023 Audi Allroad - Quick Overview',
					ObjectivesDetails: [
						{
							title: '1. Preparation',
							techs: [
								'Vehicle and work area prepped to protect against damage.' +
								'Brief customer consultation for personalized service.',
							],

						},
						{
							title: '2. Installation ',
							techs: [
								'Step 1: Careful removal of the rear bumper.',
								'Step 2: Precise installation of the Stealth Hitch, with all hardware secured to factory standards.',
								'Step 3: Trimming of lower fascia and application of edge guard for safety and aesthetics.',
								'Step 4: Relocation and recalibration of the kick sensor per OEM guidelines.',
							],
							info: {

							},
						},
						{
							title: '3. Finalizing',
							techs: [
								'Bumper carefully reattached and alignment checked.\n' +
								'Thorough cleaning of the vehicle post-installation.'
							],
							info: {

							},
						},
						{
							title: '4. Customer Orientation',
							techs: [
								'Practical demonstration on hitch use and maintenance provided during handover.'
							],
							info: {

							},
						},
						{
							title: '5. Aftercare',
							techs: [
								'Continuous support and follow-up services available as needed.'
							],
							info: {

							},
						},

						{
							title: 'End-Note ',
							techs: [
								'Capital Upfitters guarantees a streamlined, high-quality installation process, ensuring your 2023 Audi Allroad\'s Stealth Hitch is perfectly fitted with attention to detail, functionality, and aesthetic preservation.'
							],
							info: {

							},
						},

					],



					Technologies: [
						{
							title: '2023 Audi Allroad Stealth Hitch Integration',
							techs: [
								'Our process for the 2023 Audi Allroad Stealth Hitch installation (Rack Only with 2" receiver) is meticulously designed to ensure functionality, safety, and seamless integration with your vehicle\'s original design. At Capital Upfitters, we specialize in customized, high-quality installations that prioritize your vehicle\'s integrity and aesthetics.'
							],
						},
					],
					ProjectDetailsHeading: 'Why us',
					ProjectDetails: [
						{
							id: uuidv4(),
							details:
								'Welcome to Capital Upfitters, the family-owned epicenter of top-tier auto customization, vehicle preservation, and performance enhancements. With a heritage of over 35 years in the industry, we proudly deliver unparalleled fleet customization services and robust protection coatings to a diverse range of clients, from municipal to retail sectors. Our reputation as a trailblazer stems from our continuous commitment to superior craftsmanship, delivering innovative auto customization and performance solutions that truly redefine automotive excellence.',
						},
						{
							id: uuidv4(),
							details:
								'We\'re not just about personal vehicles, our commitment to deliver exceptional service spans across government, commercial, and residential projects. Every vehicle that rolls into our shop receives the same degree of attention and commitment to quality. For additional information about our services at Capital Upfitters or to discuss your specific customization and performance enhancement needs, we welcome you to reach us at 301-304-1419 or explore our webpage. Choose Capital Upfitters for an automotive experience that goes beyond service to deliver a transformation, redefining your ride.',
						}
					],

				},


			},
			{
				id: 4,
				brand: 'Ford',
				imageSrc: "/portfolio/wheels-tires/wt6.jpg",
				gallery: [
					{
						id: uuidv4(),
						title: 'Ford',
						imageSrc: "/portfolio/wheels-tires/wt6.jpg",
					},
					{
						id: uuidv4(),
						title:'Ford',
						imageSrc: "/portfolio/wheels-tires/wt7.jpg",
					},
					{
						id: uuidv4(),
						title:'Ford',
						imageSrc: "/portfolio/wheels-tires/wt14.jpg",
					},
					{
						id: uuidv4(),
						title:'Ford',
						imageSrc: "/portfolio/wheels-tires/wt15.jpg",
					},
					{
						id: uuidv4(),
						title:'Ford',
						imageSrc: "/portfolio/wheels-tires/wt19.jpg",
					},
					{
						id: uuidv4(),
						title:'Ford',
						imageSrc: "/portfolio/wheels-tires/wt20.jpg",
					},

					{
						id: uuidv4(),
						title: 'Ford',
						imageSrc: "/portfolio/wheels-tires/wt36.jpg",
					},

					{
						id: uuidv4(),
						title: 'Ford',
						imageSrc: "/portfolio/wheels-tires/wt38.jpg",
					},
					{
						id: uuidv4(),
						title:'Ford',
						imageSrc: "/portfolio/wheels-tires/wt24.jpg",
					},
					{
						id: uuidv4(),
						title: 'Ford',
						imageSrc: "/portfolio/wheels-tires/wt68.jpg",
					},
					{
						id: uuidv4(),
						title: 'Ford',
						imageSrc: "/portfolio/wheels-tires/wt50.jpg",
					},
					{
						id: uuidv4(),
						title: 'Ford',
						imageSrc: "/portfolio/wheels-tires/wt51.jpg",
					},


					{
						id: uuidv4(),
						title: 'Ford',
						imageSrc: "/portfolio/wheels-tires/wt63.jpg",
					},
					{
						id: uuidv4(),
						title: 'Ford',
						imageSrc: "/portfolio/wheels-tires/wt65.jpg",
					},
					{
						id: uuidv4(),
						title: 'Ford',
						imageSrc: "/portfolio/wheels-tires/wt67.jpg",
					},


				],
				ProjectInfo: {
					ClientHeading: 'Audi',
					CompanyInfo: [
						{
							id: uuidv4(),
							title: 'Company',
							details: 'CAPITAL UPFITTERS',
						},
						{
							id: uuidv4(),
							title: 'Services',
							details: 'Ceramic Coatings',
						},
						{
							id: uuidv4(),
							title: 'Phone',
							details: '301-304-1419',
						},
					],
					ObjectivesHeading:'Audi',
					titleHead: 'Stealth Hitch Installation for 2023 Audi Allroad - Quick Overview',
					ObjectivesDetails: [
						{
							title: '1. Preparation',
							techs: [
								'Vehicle and work area prepped to protect against damage.' +
								'Brief customer consultation for personalized service.',
							],

						},
						{
							title: '2. Installation ',
							techs: [
								'Step 1: Careful removal of the rear bumper.',
								'Step 2: Precise installation of the Stealth Hitch, with all hardware secured to factory standards.',
								'Step 3: Trimming of lower fascia and application of edge guard for safety and aesthetics.',
								'Step 4: Relocation and recalibration of the kick sensor per OEM guidelines.',
							],
							info: {

							},
						},
						{
							title: '3. Finalizing',
							techs: [
								'Bumper carefully reattached and alignment checked.\n' +
								'Thorough cleaning of the vehicle post-installation.'
							],
							info: {

							},
						},
						{
							title: '4. Customer Orientation',
							techs: [
								'Practical demonstration on hitch use and maintenance provided during handover.'
							],
							info: {

							},
						},
						{
							title: '5. Aftercare',
							techs: [
								'Continuous support and follow-up services available as needed.'
							],
							info: {

							},
						},

						{
							title: 'End-Note ',
							techs: [
								'Capital Upfitters guarantees a streamlined, high-quality installation process, ensuring your 2023 Audi Allroad\'s Stealth Hitch is perfectly fitted with attention to detail, functionality, and aesthetic preservation.'
							],
							info: {

							},
						},

					],



					Technologies: [
						{
							title: '2023 Audi Allroad Stealth Hitch Integration',
							techs: [
								'Our process for the 2023 Audi Allroad Stealth Hitch installation (Rack Only with 2" receiver) is meticulously designed to ensure functionality, safety, and seamless integration with your vehicle\'s original design. At Capital Upfitters, we specialize in customized, high-quality installations that prioritize your vehicle\'s integrity and aesthetics.'
							],
						},
					],
					ProjectDetailsHeading: 'Why us',
					ProjectDetails: [
						{
							id: uuidv4(),
							details:
								'Welcome to Capital Upfitters, the family-owned epicenter of top-tier auto customization, vehicle preservation, and performance enhancements. With a heritage of over 35 years in the industry, we proudly deliver unparalleled fleet customization services and robust protection coatings to a diverse range of clients, from municipal to retail sectors. Our reputation as a trailblazer stems from our continuous commitment to superior craftsmanship, delivering innovative auto customization and performance solutions that truly redefine automotive excellence.',
						},
						{
							id: uuidv4(),
							details:
								'We\'re not just about personal vehicles, our commitment to deliver exceptional service spans across government, commercial, and residential projects. Every vehicle that rolls into our shop receives the same degree of attention and commitment to quality. For additional information about our services at Capital Upfitters or to discuss your specific customization and performance enhancement needs, we welcome you to reach us at 301-304-1419 or explore our webpage. Choose Capital Upfitters for an automotive experience that goes beyond service to deliver a transformation, redefining your ride.',
						}
					],

				},


			},
			{
				id: 5,
				brand: 'Toyota',
				imageSrc: "/portfolio/wheels-tires/wt8.jpg",
				gallery: [
					{
						id: uuidv4(),
						title: 'Toyota',
						imageSrc: "/portfolio/wheels-tires/wt8.jpg",
					},
					{
						id: uuidv4(),
						title:'Toyota',
						imageSrc: "/portfolio/wheels-tires/wt9.jpg",
					},
					{
						id: uuidv4(),
						title:'Toyota',
						imageSrc: "/portfolio/wheels-tires/wt10.jpg",
					},


				],
				ProjectInfo: {
					ClientHeading: 'Audi',
					CompanyInfo: [
						{
							id: uuidv4(),
							title: 'Company',
							details: 'CAPITAL UPFITTERS',
						},
						{
							id: uuidv4(),
							title: 'Services',
							details: 'Ceramic Coatings',
						},
						{
							id: uuidv4(),
							title: 'Phone',
							details: '301-304-1419',
						},
					],
					ObjectivesHeading:'Audi',
					titleHead: 'Stealth Hitch Installation for 2023 Audi Allroad - Quick Overview',
					ObjectivesDetails: [
						{
							title: '1. Preparation',
							techs: [
								'Vehicle and work area prepped to protect against damage.' +
								'Brief customer consultation for personalized service.',
							],

						},
						{
							title: '2. Installation ',
							techs: [
								'Step 1: Careful removal of the rear bumper.',
								'Step 2: Precise installation of the Stealth Hitch, with all hardware secured to factory standards.',
								'Step 3: Trimming of lower fascia and application of edge guard for safety and aesthetics.',
								'Step 4: Relocation and recalibration of the kick sensor per OEM guidelines.',
							],
							info: {

							},
						},
						{
							title: '3. Finalizing',
							techs: [
								'Bumper carefully reattached and alignment checked.\n' +
								'Thorough cleaning of the vehicle post-installation.'
							],
							info: {

							},
						},
						{
							title: '4. Customer Orientation',
							techs: [
								'Practical demonstration on hitch use and maintenance provided during handover.'
							],
							info: {

							},
						},
						{
							title: '5. Aftercare',
							techs: [
								'Continuous support and follow-up services available as needed.'
							],
							info: {

							},
						},

						{
							title: 'End-Note ',
							techs: [
								'Capital Upfitters guarantees a streamlined, high-quality installation process, ensuring your 2023 Audi Allroad\'s Stealth Hitch is perfectly fitted with attention to detail, functionality, and aesthetic preservation.'
							],
							info: {

							},
						},

					],



					Technologies: [
						{
							title: '2023 Audi Allroad Stealth Hitch Integration',
							techs: [
								'Our process for the 2023 Audi Allroad Stealth Hitch installation (Rack Only with 2" receiver) is meticulously designed to ensure functionality, safety, and seamless integration with your vehicle\'s original design. At Capital Upfitters, we specialize in customized, high-quality installations that prioritize your vehicle\'s integrity and aesthetics.'
							],
						},
					],
					ProjectDetailsHeading: 'Why us',
					ProjectDetails: [
						{
							id: uuidv4(),
							details:
								'Welcome to Capital Upfitters, the family-owned epicenter of top-tier auto customization, vehicle preservation, and performance enhancements. With a heritage of over 35 years in the industry, we proudly deliver unparalleled fleet customization services and robust protection coatings to a diverse range of clients, from municipal to retail sectors. Our reputation as a trailblazer stems from our continuous commitment to superior craftsmanship, delivering innovative auto customization and performance solutions that truly redefine automotive excellence.',
						},
						{
							id: uuidv4(),
							details:
								'We\'re not just about personal vehicles, our commitment to deliver exceptional service spans across government, commercial, and residential projects. Every vehicle that rolls into our shop receives the same degree of attention and commitment to quality. For additional information about our services at Capital Upfitters or to discuss your specific customization and performance enhancement needs, we welcome you to reach us at 301-304-1419 or explore our webpage. Choose Capital Upfitters for an automotive experience that goes beyond service to deliver a transformation, redefining your ride.',
						}
					],

				},


			},
			{
				id: 6,
				brand: 'Chevrolet',
				imageSrc: "/portfolio/wheels-tires/wt4.jpg",
				gallery: [
					{
						id: uuidv4(),
						title: 'Chevrolet',
						imageSrc: "/portfolio/wheels-tires/wt4.jpg",
					},

				],
				ProjectInfo: {
					ClientHeading: 'Audi',
					CompanyInfo: [
						{
							id: uuidv4(),
							title: 'Company',
							details: 'CAPITAL UPFITTERS',
						},
						{
							id: uuidv4(),
							title: 'Services',
							details: 'Ceramic Coatings',
						},
						{
							id: uuidv4(),
							title: 'Phone',
							details: '301-304-1419',
						},
					],
					ObjectivesHeading:'Audi',
					titleHead: 'Stealth Hitch Installation for 2023 Audi Allroad - Quick Overview',
					ObjectivesDetails: [
						{
							title: '1. Preparation',
							techs: [
								'Vehicle and work area prepped to protect against damage.' +
								'Brief customer consultation for personalized service.',
							],

						},
						{
							title: '2. Installation ',
							techs: [
								'Step 1: Careful removal of the rear bumper.',
								'Step 2: Precise installation of the Stealth Hitch, with all hardware secured to factory standards.',
								'Step 3: Trimming of lower fascia and application of edge guard for safety and aesthetics.',
								'Step 4: Relocation and recalibration of the kick sensor per OEM guidelines.',
							],
							info: {

							},
						},
						{
							title: '3. Finalizing',
							techs: [
								'Bumper carefully reattached and alignment checked.\n' +
								'Thorough cleaning of the vehicle post-installation.'
							],
							info: {

							},
						},
						{
							title: '4. Customer Orientation',
							techs: [
								'Practical demonstration on hitch use and maintenance provided during handover.'
							],
							info: {

							},
						},
						{
							title: '5. Aftercare',
							techs: [
								'Continuous support and follow-up services available as needed.'
							],
							info: {

							},
						},

						{
							title: 'End-Note ',
							techs: [
								'Capital Upfitters guarantees a streamlined, high-quality installation process, ensuring your 2023 Audi Allroad\'s Stealth Hitch is perfectly fitted with attention to detail, functionality, and aesthetic preservation.'
							],
							info: {

							},
						},

					],



					Technologies: [
						{
							title: '2023 Audi Allroad Stealth Hitch Integration',
							techs: [
								'Our process for the 2023 Audi Allroad Stealth Hitch installation (Rack Only with 2" receiver) is meticulously designed to ensure functionality, safety, and seamless integration with your vehicle\'s original design. At Capital Upfitters, we specialize in customized, high-quality installations that prioritize your vehicle\'s integrity and aesthetics.'
							],
						},
					],
					ProjectDetailsHeading: 'Why us',
					ProjectDetails: [
						{
							id: uuidv4(),
							details:
								'Welcome to Capital Upfitters, the family-owned epicenter of top-tier auto customization, vehicle preservation, and performance enhancements. With a heritage of over 35 years in the industry, we proudly deliver unparalleled fleet customization services and robust protection coatings to a diverse range of clients, from municipal to retail sectors. Our reputation as a trailblazer stems from our continuous commitment to superior craftsmanship, delivering innovative auto customization and performance solutions that truly redefine automotive excellence.',
						},
						{
							id: uuidv4(),
							details:
								'We\'re not just about personal vehicles, our commitment to deliver exceptional service spans across government, commercial, and residential projects. Every vehicle that rolls into our shop receives the same degree of attention and commitment to quality. For additional information about our services at Capital Upfitters or to discuss your specific customization and performance enhancement needs, we welcome you to reach us at 301-304-1419 or explore our webpage. Choose Capital Upfitters for an automotive experience that goes beyond service to deliver a transformation, redefining your ride.',
						}
					],

				},


			},
			{
				id: 7,
				brand: 'Nisan',
				imageSrc: "/portfolio/wheels-tires/wt22.jpg",
				gallery: [
					{
						id: uuidv4(),
						title: 'Nisan',
						imageSrc: "/portfolio/wheels-tires/wt23.jpg",
					},
				],
				ProjectInfo: {
					ClientHeading: 'Audi',
					CompanyInfo: [
						{
							id: uuidv4(),
							title: 'Company',
							details: 'CAPITAL UPFITTERS',
						},
						{
							id: uuidv4(),
							title: 'Services',
							details: 'Ceramic Coatings',
						},
						{
							id: uuidv4(),
							title: 'Phone',
							details: '301-304-1419',
						},
					],
					ObjectivesHeading:'Audi',
					titleHead: 'Stealth Hitch Installation for 2023 Audi Allroad - Quick Overview',
					ObjectivesDetails: [
						{
							title: '1. Preparation',
							techs: [
								'Vehicle and work area prepped to protect against damage.' +
								'Brief customer consultation for personalized service.',
							],

						},
						{
							title: '2. Installation ',
							techs: [
								'Step 1: Careful removal of the rear bumper.',
								'Step 2: Precise installation of the Stealth Hitch, with all hardware secured to factory standards.',
								'Step 3: Trimming of lower fascia and application of edge guard for safety and aesthetics.',
								'Step 4: Relocation and recalibration of the kick sensor per OEM guidelines.',
							],
							info: {

							},
						},
						{
							title: '3. Finalizing',
							techs: [
								'Bumper carefully reattached and alignment checked.\n' +
								'Thorough cleaning of the vehicle post-installation.'
							],
							info: {

							},
						},
						{
							title: '4. Customer Orientation',
							techs: [
								'Practical demonstration on hitch use and maintenance provided during handover.'
							],
							info: {

							},
						},
						{
							title: '5. Aftercare',
							techs: [
								'Continuous support and follow-up services available as needed.'
							],
							info: {

							},
						},

						{
							title: 'End-Note ',
							techs: [
								'Capital Upfitters guarantees a streamlined, high-quality installation process, ensuring your 2023 Audi Allroad\'s Stealth Hitch is perfectly fitted with attention to detail, functionality, and aesthetic preservation.'
							],
							info: {

							},
						},

					],



					Technologies: [
						{
							title: '2023 Audi Allroad Stealth Hitch Integration',
							techs: [
								'Our process for the 2023 Audi Allroad Stealth Hitch installation (Rack Only with 2" receiver) is meticulously designed to ensure functionality, safety, and seamless integration with your vehicle\'s original design. At Capital Upfitters, we specialize in customized, high-quality installations that prioritize your vehicle\'s integrity and aesthetics.'
							],
						},
					],
					ProjectDetailsHeading: 'Why us',
					ProjectDetails: [
						{
							id: uuidv4(),
							details:
								'Welcome to Capital Upfitters, the family-owned epicenter of top-tier auto customization, vehicle preservation, and performance enhancements. With a heritage of over 35 years in the industry, we proudly deliver unparalleled fleet customization services and robust protection coatings to a diverse range of clients, from municipal to retail sectors. Our reputation as a trailblazer stems from our continuous commitment to superior craftsmanship, delivering innovative auto customization and performance solutions that truly redefine automotive excellence.',
						},
						{
							id: uuidv4(),
							details:
								'We\'re not just about personal vehicles, our commitment to deliver exceptional service spans across government, commercial, and residential projects. Every vehicle that rolls into our shop receives the same degree of attention and commitment to quality. For additional information about our services at Capital Upfitters or to discuss your specific customization and performance enhancement needs, we welcome you to reach us at 301-304-1419 or explore our webpage. Choose Capital Upfitters for an automotive experience that goes beyond service to deliver a transformation, redefining your ride.',
						}
					],

				},


			},
			{
				id: 8,
				brand: 'Bronco',
				imageSrc: "/portfolio/wheels-tires/wt30.jpg",
				gallery: [
					{
						id: uuidv4(),
						title: 'Bronco',
						imageSrc: "/portfolio/wheels-tires/wt27.jpg",
					},
					{
						id: uuidv4(),
						title: 'Bronco',
						imageSrc: "/portfolio/wheels-tires/wt30.jpg",
					},
					{
						id: uuidv4(),
						title: 'Bronco',
						imageSrc: "/portfolio/wheels-tires/wt29.jpg",
					},
					{
						id: uuidv4(),
						title: 'Bronco',
						imageSrc: "/portfolio/wheels-tires/wt30.jpg",
					},
					{
						id: uuidv4(),
						title: 'Bronco',
						imageSrc: "/portfolio/wheels-tires/wt31.jpg",
					},
					{
						id: uuidv4(),
						title: 'Bronco',
						imageSrc: "/portfolio/wheels-tires/wt32.jpg",
					},
					{
						id: uuidv4(),
						title: 'Bronco',
						imageSrc: "/portfolio/wheels-tires/wt33.jpg",
					},
					{
						id: uuidv4(),
						title: 'Bronco',
						imageSrc: "/portfolio/wheels-tires/wt35.jpg",
					},
					{
						id: uuidv4(),
						title: 'Bronco',
						imageSrc: "/portfolio/wheels-tires/wt40.jpg",
					},
					{
						id: uuidv4(),
						title: 'Bronco',
						imageSrc: "/portfolio/wheels-tires/wt47.jpg",
					},
					{
						id: uuidv4(),
						title: 'Bronco',
						imageSrc: "/portfolio/wheels-tires/wt48.jpg",
					},
					{
						id: uuidv4(),
						title: 'Bronco',
						imageSrc: "/portfolio/wheels-tires/wt49.jpg",
					},
				],
				ProjectInfo: {
					ClientHeading: 'Audi',
					CompanyInfo: [
						{
							id: uuidv4(),
							title: 'Company',
							details: 'CAPITAL UPFITTERS',
						},
						{
							id: uuidv4(),
							title: 'Services',
							details: 'Ceramic Coatings',
						},
						{
							id: uuidv4(),
							title: 'Phone',
							details: '301-304-1419',
						},
					],
					ObjectivesHeading:'Audi',
					titleHead: 'Stealth Hitch Installation for 2023 Audi Allroad - Quick Overview',
					ObjectivesDetails: [
						{
							title: '1. Preparation',
							techs: [
								'Vehicle and work area prepped to protect against damage.' +
								'Brief customer consultation for personalized service.',
							],

						},
						{
							title: '2. Installation ',
							techs: [
								'Step 1: Careful removal of the rear bumper.',
								'Step 2: Precise installation of the Stealth Hitch, with all hardware secured to factory standards.',
								'Step 3: Trimming of lower fascia and application of edge guard for safety and aesthetics.',
								'Step 4: Relocation and recalibration of the kick sensor per OEM guidelines.',
							],
							info: {

							},
						},
						{
							title: '3. Finalizing',
							techs: [
								'Bumper carefully reattached and alignment checked.\n' +
								'Thorough cleaning of the vehicle post-installation.'
							],
							info: {

							},
						},
						{
							title: '4. Customer Orientation',
							techs: [
								'Practical demonstration on hitch use and maintenance provided during handover.'
							],
							info: {

							},
						},
						{
							title: '5. Aftercare',
							techs: [
								'Continuous support and follow-up services available as needed.'
							],
							info: {

							},
						},

						{
							title: 'End-Note ',
							techs: [
								'Capital Upfitters guarantees a streamlined, high-quality installation process, ensuring your 2023 Audi Allroad\'s Stealth Hitch is perfectly fitted with attention to detail, functionality, and aesthetic preservation.'
							],
							info: {

							},
						},

					],



					Technologies: [
						{
							title: '2023 Audi Allroad Stealth Hitch Integration',
							techs: [
								'Our process for the 2023 Audi Allroad Stealth Hitch installation (Rack Only with 2" receiver) is meticulously designed to ensure functionality, safety, and seamless integration with your vehicle\'s original design. At Capital Upfitters, we specialize in customized, high-quality installations that prioritize your vehicle\'s integrity and aesthetics.'
							],
						},
					],
					ProjectDetailsHeading: 'Why us',
					ProjectDetails: [
						{
							id: uuidv4(),
							details:
								'Welcome to Capital Upfitters, the family-owned epicenter of top-tier auto customization, vehicle preservation, and performance enhancements. With a heritage of over 35 years in the industry, we proudly deliver unparalleled fleet customization services and robust protection coatings to a diverse range of clients, from municipal to retail sectors. Our reputation as a trailblazer stems from our continuous commitment to superior craftsmanship, delivering innovative auto customization and performance solutions that truly redefine automotive excellence.',
						},
						{
							id: uuidv4(),
							details:
								'We\'re not just about personal vehicles, our commitment to deliver exceptional service spans across government, commercial, and residential projects. Every vehicle that rolls into our shop receives the same degree of attention and commitment to quality. For additional information about our services at Capital Upfitters or to discuss your specific customization and performance enhancement needs, we welcome you to reach us at 301-304-1419 or explore our webpage. Choose Capital Upfitters for an automotive experience that goes beyond service to deliver a transformation, redefining your ride.',
						}
					],

				},


			},
			{
				id: 9,
				brand: 'Ram',
				imageSrc: "/portfolio/wheels-tires/wt43.jpg",
				gallery: [
					{
						id: uuidv4(),
						title: 'RAM',
						imageSrc: "/portfolio/wheels-tires/wt43.jpg",
					},
					{
						id: uuidv4(),
						title: 'RAM',
						imageSrc: "/portfolio/wheels-tires/wt44.jpg",
					},
					{
						id: uuidv4(),
						title: 'RAM',
						imageSrc: "/portfolio/wheels-tires/wt45.jpg",
					},
					{
						id: uuidv4(),
						title: 'Ram',
						imageSrc: "/portfolio/wheels-tires/wt55.jpg",
					},
					{
						id: uuidv4(),
						title: 'RAM',
						imageSrc: "/portfolio/wheels-tires/wt41.jpg",
					},
					{
						id: uuidv4(),
						title: 'Ram',
						imageSrc: "/portfolio/wheels-tires/wt56.jpg",
					},
					{
						id: uuidv4(),
						title: 'Ram',
						imageSrc: "/portfolio/wheels-tires/wt57.jpg",
					},
					{
						id: uuidv4(),
						title: 'Ram',
						imageSrc: "/portfolio/wheels-tires/wt58.jpg",
					},
					{
						id: uuidv4(),
						title: 'Ram',
						imageSrc: "/portfolio/wheels-tires/wt59.jpg",
					},
					{
						id: uuidv4(),
						title: 'Ram',
						imageSrc: "/portfolio/wheels-tires/wt64.jpg",
					},
					{
						id: uuidv4(),
						title: 'Ram',
						imageSrc: "/portfolio/wheels-tires/wt62.jpg",
					},
					{
						id: uuidv4(),
						title: 'Ram',
						imageSrc: "/portfolio/wheels-tires/wt66.jpg",
					},
					{
						id: uuidv4(),
						title: 'Ram',
						imageSrc: "/portfolio/wheels-tires/wt60.jpg",
					},
					{
						id: uuidv4(),
						title: 'Ram',
						imageSrc: "/portfolio/wheels-tires/wt61.jpg",
					},
				],
				ProjectInfo: {
					ClientHeading: 'Audi',
					CompanyInfo: [
						{
							id: uuidv4(),
							title: 'Company',
							details: 'CAPITAL UPFITTERS',
						},
						{
							id: uuidv4(),
							title: 'Services',
							details: 'Ceramic Coatings',
						},
						{
							id: uuidv4(),
							title: 'Phone',
							details: '301-304-1419',
						},
					],
					ObjectivesHeading:'Audi',
					titleHead: 'Stealth Hitch Installation for 2023 Audi Allroad - Quick Overview',
					ObjectivesDetails: [
						{
							title: '1. Preparation',
							techs: [
								'Vehicle and work area prepped to protect against damage.' +
								'Brief customer consultation for personalized service.',
							],

						},
						{
							title: '2. Installation ',
							techs: [
								'Step 1: Careful removal of the rear bumper.',
								'Step 2: Precise installation of the Stealth Hitch, with all hardware secured to factory standards.',
								'Step 3: Trimming of lower fascia and application of edge guard for safety and aesthetics.',
								'Step 4: Relocation and recalibration of the kick sensor per OEM guidelines.',
							],
							info: {

							},
						},
						{
							title: '3. Finalizing',
							techs: [
								'Bumper carefully reattached and alignment checked.\n' +
								'Thorough cleaning of the vehicle post-installation.'
							],
							info: {

							},
						},
						{
							title: '4. Customer Orientation',
							techs: [
								'Practical demonstration on hitch use and maintenance provided during handover.'
							],
							info: {

							},
						},
						{
							title: '5. Aftercare',
							techs: [
								'Continuous support and follow-up services available as needed.'
							],
							info: {

							},
						},

						{
							title: 'End-Note ',
							techs: [
								'Capital Upfitters guarantees a streamlined, high-quality installation process, ensuring your 2023 Audi Allroad\'s Stealth Hitch is perfectly fitted with attention to detail, functionality, and aesthetic preservation.'
							],
							info: {

							},
						},

					],



					Technologies: [
						{
							title: '2023 Audi Allroad Stealth Hitch Integration',
							techs: [
								'Our process for the 2023 Audi Allroad Stealth Hitch installation (Rack Only with 2" receiver) is meticulously designed to ensure functionality, safety, and seamless integration with your vehicle\'s original design. At Capital Upfitters, we specialize in customized, high-quality installations that prioritize your vehicle\'s integrity and aesthetics.'
							],
						},
					],
					ProjectDetailsHeading: 'Why us',
					ProjectDetails: [
						{
							id: uuidv4(),
							details:
								'Welcome to Capital Upfitters, the family-owned epicenter of top-tier auto customization, vehicle preservation, and performance enhancements. With a heritage of over 35 years in the industry, we proudly deliver unparalleled fleet customization services and robust protection coatings to a diverse range of clients, from municipal to retail sectors. Our reputation as a trailblazer stems from our continuous commitment to superior craftsmanship, delivering innovative auto customization and performance solutions that truly redefine automotive excellence.',
						},
						{
							id: uuidv4(),
							details:
								'We\'re not just about personal vehicles, our commitment to deliver exceptional service spans across government, commercial, and residential projects. Every vehicle that rolls into our shop receives the same degree of attention and commitment to quality. For additional information about our services at Capital Upfitters or to discuss your specific customization and performance enhancement needs, we welcome you to reach us at 301-304-1419 or explore our webpage. Choose Capital Upfitters for an automotive experience that goes beyond service to deliver a transformation, redefining your ride.',
						}
					],

				},


			},
			{
				id: 10,
				brand: 'Volvo',
				imageSrc: "/portfolio/wheels-tires/wt52.jpg",
				gallery: [
					{
						id: uuidv4(),
						title: 'Volvo',
						imageSrc: "/portfolio/wheels-tires/wt52.jpg",
					},
					{
						id: uuidv4(),
						title: 'Volvo',
						imageSrc: "/portfolio/wheels-tires/wt53.jpg",
					},
					{
						id: uuidv4(),
						title: 'Volvo',
						imageSrc: "/portfolio/wheels-tires/wt54.jpg",
					},
				],
				ProjectInfo: {
					ClientHeading: 'Audi',
					CompanyInfo: [
						{
							id: uuidv4(),
							title: 'Company',
							details: 'CAPITAL UPFITTERS',
						},
						{
							id: uuidv4(),
							title: 'Services',
							details: 'Ceramic Coatings',
						},
						{
							id: uuidv4(),
							title: 'Phone',
							details: '301-304-1419',
						},
					],
					ObjectivesHeading:'Audi',
					titleHead: 'Stealth Hitch Installation for 2023 Audi Allroad - Quick Overview',
					ObjectivesDetails: [
						{
							title: '1. Preparation',
							techs: [
								'Vehicle and work area prepped to protect against damage.' +
								'Brief customer consultation for personalized service.',
							],

						},
						{
							title: '2. Installation ',
							techs: [
								'Step 1: Careful removal of the rear bumper.',
								'Step 2: Precise installation of the Stealth Hitch, with all hardware secured to factory standards.',
								'Step 3: Trimming of lower fascia and application of edge guard for safety and aesthetics.',
								'Step 4: Relocation and recalibration of the kick sensor per OEM guidelines.',
							],
							info: {

							},
						},
						{
							title: '3. Finalizing',
							techs: [
								'Bumper carefully reattached and alignment checked.\n' +
								'Thorough cleaning of the vehicle post-installation.'
							],
							info: {

							},
						},
						{
							title: '4. Customer Orientation',
							techs: [
								'Practical demonstration on hitch use and maintenance provided during handover.'
							],
							info: {

							},
						},
						{
							title: '5. Aftercare',
							techs: [
								'Continuous support and follow-up services available as needed.'
							],
							info: {

							},
						},

						{
							title: 'End-Note ',
							techs: [
								'Capital Upfitters guarantees a streamlined, high-quality installation process, ensuring your 2023 Audi Allroad\'s Stealth Hitch is perfectly fitted with attention to detail, functionality, and aesthetic preservation.'
							],
							info: {

							},
						},

					],



					Technologies: [
						{
							title: '2023 Audi Allroad Stealth Hitch Integration',
							techs: [
								'Our process for the 2023 Audi Allroad Stealth Hitch installation (Rack Only with 2" receiver) is meticulously designed to ensure functionality, safety, and seamless integration with your vehicle\'s original design. At Capital Upfitters, we specialize in customized, high-quality installations that prioritize your vehicle\'s integrity and aesthetics.'
							],
						},
					],
					ProjectDetailsHeading: 'Why us',
					ProjectDetails: [
						{
							id: uuidv4(),
							details:
								'Welcome to Capital Upfitters, the family-owned epicenter of top-tier auto customization, vehicle preservation, and performance enhancements. With a heritage of over 35 years in the industry, we proudly deliver unparalleled fleet customization services and robust protection coatings to a diverse range of clients, from municipal to retail sectors. Our reputation as a trailblazer stems from our continuous commitment to superior craftsmanship, delivering innovative auto customization and performance solutions that truly redefine automotive excellence.',
						},
						{
							id: uuidv4(),
							details:
								'We\'re not just about personal vehicles, our commitment to deliver exceptional service spans across government, commercial, and residential projects. Every vehicle that rolls into our shop receives the same degree of attention and commitment to quality. For additional information about our services at Capital Upfitters or to discuss your specific customization and performance enhancement needs, we welcome you to reach us at 301-304-1419 or explore our webpage. Choose Capital Upfitters for an automotive experience that goes beyond service to deliver a transformation, redefining your ride.',
						}
					],

				},


			},
			// Додайте інші авто для Ceramic Coatings
		],
	},
];


// export const portfolioData = [
//     {
//         id: 1,
//         imageSrc: '/portfolio/cc1.webp',
//         title: 'Ceramic Coatings',
//         slug: 'ceramic-coatings',
//     },
//     {
//         id: 2,
//         imageSrc: '/portfolio/f1.webp',
//         title: 'Fleet',
//         slug: 'fleet',
//     },
//     {
//         id: 3,
//         imageSrc: '/portfolio/h1.webp',
//         title: 'Hitches',
//         slug: 'hitches',
//     },
//     {
//         id: 4,
//         imageSrc: '/portfolio/pl4.webp',
//         title: 'Patriot Liner',
//         slug: 'patriot-liner',
//     },
//     {
//         id: 5,
//         imageSrc: '/portfolio/u3.webp',
//         title: 'undercoating',
//         slug: 'undercoating',
//     },
//     {
//         id: 6,
//         imageSrc: '/portfolio/wt2.webp',
//         title: 'Wheels Tires',
//         slug: 'wheel tires',
//     },
// ]



// import { v4 as uuidv4 } from 'uuid';
// export const projectsData = [
// 	{
// 		id: 1,
// 		title: 'Ceramic Coatings',
// 		category: 'CERAMIC-COATINGS',
// 		imageSrc: '/ceramic-coatings/mb1.jpg',
// 		ProjectHeader: {
// 			title: 'Ceramic Coatings',
// 			tags: 'Ceramic Coatings',
// 		},
// 		cars: [
// 			{
// 				id: uuidv4(),
// 				brand: 'mercedes-benz',
// 				imageSrc: '/ceramic-coatings/mb1.jpg',
// 				gallery: [
// 					{
// 						id: uuidv4(),
// 						title: 'mercedes-benz',
// 						imageSrc: '/ceramic-coatings/mb1.jpg',
// 					},
// 					{
// 						id: uuidv4(),
// 						title: 'mercedes-benz',
// 						imageSrc: '/ceramic-coatings/mb2.jpg',
// 					},
// 				],
// 				ProjectInfo: {
// 					ClientHeading: 'Audi',
// 					CompanyInfo: [
// 						{
// 							id: uuidv4(),
// 							title: 'Company',
// 							details: 'CAPITAL UPFITTERS',
// 						},
// 						{
// 							id: uuidv4(),
// 							title: 'Services',
// 							details: 'Ceramic Coatings',
// 						},
// 						{
// 							id: uuidv4(),
// 							title: 'Phone',
// 							details: '301-304-1419',
// 						},
// 					],
// 					ObjectivesHeading:'Audi',
// 					titleHead: 'Stealth Hitch Installation for 2023 Audi Allroad: Quick Overview',
// 					ObjectivesDetails: [
// 						{
// 							title: '1. Preparation',
// 							techs: [
// 								'Vehicle and work area prepped to protect against damage.' +
// 								'Brief customer consultation for personalized service.',
// 							],

// 						},
// 						{
// 							title: '2. Installation ',
// 							techs: [
// 								'Step 1: Careful removal of the rear bumper.',
// 								'Step 2: Precise installation of the Stealth Hitch, with all hardware secured to factory standards.',
// 								'Step 3: Trimming of lower fascia and application of edge guard for safety and aesthetics.',
// 								'Step 4: Relocation and recalibration of the kick sensor per OEM guidelines.',
// 							],
// 							info: {

// 							},
// 						},
// 						{
// 							title: '3. Finalizing',
// 							techs: [
// 								'Bumper carefully reattached and alignment checked.\n' +
// 								'Thorough cleaning of the vehicle post-installation.'
// 							],
// 							info: {

// 							},
// 						},
// 						{
// 							title: '4. Customer Orientation',
// 							techs: [
// 								'Practical demonstration on hitch use and maintenance provided during handover.'
// 							],
// 							info: {

// 							},
// 						},
// 						{
// 							title: '5. Aftercare',
// 							techs: [
// 								'Continuous support and follow-up services available as needed.'
// 							],
// 							info: {

// 							},
// 						},

// 						{
// 							title: 'End-Note ',
// 							techs: [
// 								'Capital Upfitters guarantees a streamlined, high-quality installation process, ensuring your 2023 Audi Allroad\'s Stealth Hitch is perfectly fitted with attention to detail, functionality, and aesthetic preservation.'
// 							],
// 							info: {

// 							},
// 						},

// 					],



// 					Technologies: [
// 						{
// 							title: '2023 Audi Allroad Stealth Hitch Integration',
// 							techs: [
// 								'Our process for the 2023 Audi Allroad Stealth Hitch installation (Rack Only with 2" receiver) is meticulously designed to ensure functionality, safety, and seamless integration with your vehicle\'s original design. At Capital Upfitters, we specialize in customized, high-quality installations that prioritize your vehicle\'s integrity and aesthetics.'
// 							],
// 						},
// 					],
// 					ProjectDetailsHeading: 'Why us',
// 					ProjectDetails: [
// 						{
// 							id: uuidv4(),
// 							details:
// 								'Welcome to Capital Upfitters, the family-owned epicenter of top-tier auto customization, vehicle preservation, and performance enhancements. With a heritage of over 35 years in the industry, we proudly deliver unparalleled fleet customization services and robust protection coatings to a diverse range of clients, from municipal to retail sectors. Our reputation as a trailblazer stems from our continuous commitment to superior craftsmanship, delivering innovative auto customization and performance solutions that truly redefine automotive excellence.',
// 						},
// 						{
// 							id: uuidv4(),
// 							details:
// 								'We\'re not just about personal vehicles, our commitment to deliver exceptional service spans across government, commercial, and residential projects. Every vehicle that rolls into our shop receives the same degree of attention and commitment to quality. For additional information about our services at Capital Upfitters or to discuss your specific customization and performance enhancement needs, we welcome you to reach us at 301-304-1419 or explore our webpage. Choose Capital Upfitters for an automotive experience that goes beyond service to deliver a transformation, redefining your ride.',
// 						}
// 					],

// 				},


// 			},
// 			{
// 				id: uuidv4(),
// 				brand: 'GMC',
// 				imageSrc: '/ceramic-coatings/gcm1.jpg',
// 				gallery: [
// 					{
// 						id: uuidv4(),
// 						title: 'GMC',
// 						imageSrc: '/ceramic-coatings/gcm1.jpg',
// 					},
// 					{
// 						id: uuidv4(),
// 						title: 'GMC',
// 						imageSrc: '/ceramic-coatings/gcm2.jpg',
// 					},

// 				],
// 				ProjectInfo: {
// 					ClientHeading: 'Audi',
// 					CompanyInfo: [
// 						{
// 							id: uuidv4(),
// 							title: 'Company',
// 							details: 'CAPITAL UPFITTERS',
// 						},
// 						{
// 							id: uuidv4(),
// 							title: 'Services',
// 							details: 'Ceramic Coatings',
// 						},
// 						{
// 							id: uuidv4(),
// 							title: 'Phone',
// 							details: '301-304-1419',
// 						},
// 					],
// 					ObjectivesHeading:'Audi',
// 					titleHead: 'Stealth Hitch Installation for 2023 Audi Allroad: Quick Overview',
// 					ObjectivesDetails: [
// 						{
// 							title: '1. Preparation',
// 							techs: [
// 								'Vehicle and work area prepped to protect against damage.' +
// 								'Brief customer consultation for personalized service.',
// 							],

// 						},
// 						{
// 							title: '2. Installation ',
// 							techs: [
// 								'Step 1: Careful removal of the rear bumper.',
// 								'Step 2: Precise installation of the Stealth Hitch, with all hardware secured to factory standards.',
// 								'Step 3: Trimming of lower fascia and application of edge guard for safety and aesthetics.',
// 								'Step 4: Relocation and recalibration of the kick sensor per OEM guidelines.',
// 							],
// 							info: {

// 							},
// 						},
// 						{
// 							title: '3. Finalizing',
// 							techs: [
// 								'Bumper carefully reattached and alignment checked.\n' +
// 								'Thorough cleaning of the vehicle post-installation.'
// 							],
// 							info: {

// 							},
// 						},
// 						{
// 							title: '4. Customer Orientation',
// 							techs: [
// 								'Practical demonstration on hitch use and maintenance provided during handover.'
// 							],
// 							info: {

// 							},
// 						},
// 						{
// 							title: '5. Aftercare',
// 							techs: [
// 								'Continuous support and follow-up services available as needed.'
// 							],
// 							info: {

// 							},
// 						},

// 						{
// 							title: 'End-Note ',
// 							techs: [
// 								'Capital Upfitters guarantees a streamlined, high-quality installation process, ensuring your 2023 Audi Allroad\'s Stealth Hitch is perfectly fitted with attention to detail, functionality, and aesthetic preservation.'
// 							],
// 							info: {

// 							},
// 						},

// 					],



// 					Technologies: [
// 						{
// 							title: '2023 Audi Allroad Stealth Hitch Integration',
// 							techs: [
// 								'Our process for the 2023 Audi Allroad Stealth Hitch installation (Rack Only with 2" receiver) is meticulously designed to ensure functionality, safety, and seamless integration with your vehicle\'s original design. At Capital Upfitters, we specialize in customized, high-quality installations that prioritize your vehicle\'s integrity and aesthetics.'
// 							],
// 						},
// 					],
// 					ProjectDetailsHeading: 'Why us',
// 					ProjectDetails: [
// 						{
// 							id: uuidv4(),
// 							details:
// 								'Welcome to Capital Upfitters, the family-owned epicenter of top-tier auto customization, vehicle preservation, and performance enhancements. With a heritage of over 35 years in the industry, we proudly deliver unparalleled fleet customization services and robust protection coatings to a diverse range of clients, from municipal to retail sectors. Our reputation as a trailblazer stems from our continuous commitment to superior craftsmanship, delivering innovative auto customization and performance solutions that truly redefine automotive excellence.',
// 						},
// 						{
// 							id: uuidv4(),
// 							details:
// 								'We\'re not just about personal vehicles, our commitment to deliver exceptional service spans across government, commercial, and residential projects. Every vehicle that rolls into our shop receives the same degree of attention and commitment to quality. For additional information about our services at Capital Upfitters or to discuss your specific customization and performance enhancement needs, we welcome you to reach us at 301-304-1419 or explore our webpage. Choose Capital Upfitters for an automotive experience that goes beyond service to deliver a transformation, redefining your ride.',
// 						}
// 					],

// 				},


// 			},
// 			{
// 				id: uuidv4(),
// 				brand: 'Tesla',
// 				imageSrc: '/ceramic-coatings/tesla3.jpg',
// 				gallery: [
// 					{
// 						id: uuidv4(),
// 						title: 'Tesla',
// 						imageSrc: '/ceramic-coatings/tesla1.jpg',
// 					},
// 					{
// 						id: uuidv4(),
// 						title: 'Tesla',
// 						imageSrc: '/ceramic-coatings/tesla2.jpg',
// 					},
// 					{
// 						id: uuidv4(),
// 						title: 'Tesla',
// 						imageSrc: '/ceramic-coatings/tesla3.jpg',
// 					},
// 				],
// 				ProjectInfo: {
// 					ClientHeading: 'Audi',
// 					CompanyInfo: [
// 						{
// 							id: uuidv4(),
// 							title: 'Company',
// 							details: 'CAPITAL UPFITTERS',
// 						},
// 						{
// 							id: uuidv4(),
// 							title: 'Services',
// 							details: 'Ceramic Coatings',
// 						},
// 						{
// 							id: uuidv4(),
// 							title: 'Phone',
// 							details: '301-304-1419',
// 						},
// 					],
// 					ObjectivesHeading:'Audi',
// 					titleHead: 'Stealth Hitch Installation for 2023 Audi Allroad: Quick Overview',
// 					ObjectivesDetails: [
// 						{
// 							title: '1. Preparation',
// 							techs: [
// 								'Vehicle and work area prepped to protect against damage.' +
// 								'Brief customer consultation for personalized service.',
// 							],

// 						},
// 						{
// 							title: '2. Installation ',
// 							techs: [
// 								'Step 1: Careful removal of the rear bumper.',
// 								'Step 2: Precise installation of the Stealth Hitch, with all hardware secured to factory standards.',
// 								'Step 3: Trimming of lower fascia and application of edge guard for safety and aesthetics.',
// 								'Step 4: Relocation and recalibration of the kick sensor per OEM guidelines.',
// 							],
// 							info: {

// 							},
// 						},
// 						{
// 							title: '3. Finalizing',
// 							techs: [
// 								'Bumper carefully reattached and alignment checked.\n' +
// 								'Thorough cleaning of the vehicle post-installation.'
// 							],
// 							info: {

// 							},
// 						},
// 						{
// 							title: '4. Customer Orientation',
// 							techs: [
// 								'Practical demonstration on hitch use and maintenance provided during handover.'
// 							],
// 							info: {

// 							},
// 						},
// 						{
// 							title: '5. Aftercare',
// 							techs: [
// 								'Continuous support and follow-up services available as needed.'
// 							],
// 							info: {

// 							},
// 						},

// 						{
// 							title: 'End-Note ',
// 							techs: [
// 								'Capital Upfitters guarantees a streamlined, high-quality installation process, ensuring your 2023 Audi Allroad\'s Stealth Hitch is perfectly fitted with attention to detail, functionality, and aesthetic preservation.'
// 							],
// 							info: {

// 							},
// 						},

// 					],



// 					Technologies: [
// 						{
// 							title: '2023 Audi Allroad Stealth Hitch Integration',
// 							techs: [
// 								'Our process for the 2023 Audi Allroad Stealth Hitch installation (Rack Only with 2" receiver) is meticulously designed to ensure functionality, safety, and seamless integration with your vehicle\'s original design. At Capital Upfitters, we specialize in customized, high-quality installations that prioritize your vehicle\'s integrity and aesthetics.'
// 							],
// 						},
// 					],
// 					ProjectDetailsHeading: 'Why us',
// 					ProjectDetails: [
// 						{
// 							id: uuidv4(),
// 							details:
// 								'Welcome to Capital Upfitters, the family-owned epicenter of top-tier auto customization, vehicle preservation, and performance enhancements. With a heritage of over 35 years in the industry, we proudly deliver unparalleled fleet customization services and robust protection coatings to a diverse range of clients, from municipal to retail sectors. Our reputation as a trailblazer stems from our continuous commitment to superior craftsmanship, delivering innovative auto customization and performance solutions that truly redefine automotive excellence.',
// 						},
// 						{
// 							id: uuidv4(),
// 							details:
// 								'We\'re not just about personal vehicles, our commitment to deliver exceptional service spans across government, commercial, and residential projects. Every vehicle that rolls into our shop receives the same degree of attention and commitment to quality. For additional information about our services at Capital Upfitters or to discuss your specific customization and performance enhancement needs, we welcome you to reach us at 301-304-1419 or explore our webpage. Choose Capital Upfitters for an automotive experience that goes beyond service to deliver a transformation, redefining your ride.',
// 						}
// 					],

// 				},


// 			},
// 		],
// 	},
// 	{
// 		id: 2,
// 		title: 'Fleet',
// 		category: 'FLEET',
// 		imageSrc: '/fleet/f1.jpg',
// 		ProjectHeader: {
// 			title: 'Fleet',
// 			tags: 'FLEET',
// 		},
// 		cars: [
// 			{
// 				id: uuidv4(),
// 				brand: 'Ford',
// 				imageSrc: '/fleet/f1.jpg',
// 				gallery: [
// 					{
// 						id: uuidv4(),
// 						title: 'Ford',
// 						imageSrc: '/fleet/f1.jpg',
// 					},
// 					{
// 						id: uuidv4(),
// 						title:'Ford',
// 						imageSrc: '/fleet/f2.jpg',
// 					},
// 					{
// 						id: uuidv4(),
// 						title: 'Ford',
// 						imageSrc: '/fleet/f3.jpg',
// 					},
// 					{
// 						id: uuidv4(),
// 						title:'Ford',
// 						imageSrc: '/fleet/f4.jpg',
// 					},

// 				],
// 				ProjectInfo: {
// 					ClientHeading: 'Audi',
// 					CompanyInfo: [
// 						{
// 							id: uuidv4(),
// 							title: 'Company',
// 							details: 'CAPITAL UPFITTERS',
// 						},
// 						{
// 							id: uuidv4(),
// 							title: 'Services',
// 							details: 'Ceramic Coatings',
// 						},
// 						{
// 							id: uuidv4(),
// 							title: 'Phone',
// 							details: '301-304-1419',
// 						},
// 					],
// 					ObjectivesHeading:'Audi',
// 					titleHead: 'Stealth Hitch Installation for 2023 Audi Allroad - Quick Overview',
// 					ObjectivesDetails: [
// 						{
// 							title: '1. Preparation',
// 							techs: [
// 								'Vehicle and work area prepped to protect against damage.' +
// 								'Brief customer consultation for personalized service.',
// 							],

// 						},
// 						{
// 							title: '2. Installation ',
// 							techs: [
// 								'Step 1: Careful removal of the rear bumper.',
// 								'Step 2: Precise installation of the Stealth Hitch, with all hardware secured to factory standards.',
// 								'Step 3: Trimming of lower fascia and application of edge guard for safety and aesthetics.',
// 								'Step 4: Relocation and recalibration of the kick sensor per OEM guidelines.',
// 							],
// 							info: {

// 							},
// 						},
// 						{
// 							title: '3. Finalizing',
// 							techs: [
// 								'Bumper carefully reattached and alignment checked.\n' +
// 								'Thorough cleaning of the vehicle post-installation.'
// 							],
// 							info: {

// 							},
// 						},
// 						{
// 							title: '4. Customer Orientation',
// 							techs: [
// 								'Practical demonstration on hitch use and maintenance provided during handover.'
// 							],
// 							info: {

// 							},
// 						},
// 						{
// 							title: '5. Aftercare',
// 							techs: [
// 								'Continuous support and follow-up services available as needed.'
// 							],
// 							info: {

// 							},
// 						},

// 						{
// 							title: 'End-Note ',
// 							techs: [
// 								'Capital Upfitters guarantees a streamlined, high-quality installation process, ensuring your 2023 Audi Allroad\'s Stealth Hitch is perfectly fitted with attention to detail, functionality, and aesthetic preservation.'
// 							],
// 							info: {

// 							},
// 						},

// 					],



// 					Technologies: [
// 						{
// 							title: '2023 Audi Allroad Stealth Hitch Integration',
// 							techs: [
// 								'Our process for the 2023 Audi Allroad Stealth Hitch installation (Rack Only with 2" receiver) is meticulously designed to ensure functionality, safety, and seamless integration with your vehicle\'s original design. At Capital Upfitters, we specialize in customized, high-quality installations that prioritize your vehicle\'s integrity and aesthetics.'
// 							],
// 						},
// 					],
// 					ProjectDetailsHeading: 'Why us',
// 					ProjectDetails: [
// 						{
// 							id: uuidv4(),
// 							details:
// 								'Welcome to Capital Upfitters, the family-owned epicenter of top-tier auto customization, vehicle preservation, and performance enhancements. With a heritage of over 35 years in the industry, we proudly deliver unparalleled fleet customization services and robust protection coatings to a diverse range of clients, from municipal to retail sectors. Our reputation as a trailblazer stems from our continuous commitment to superior craftsmanship, delivering innovative auto customization and performance solutions that truly redefine automotive excellence.',
// 						},
// 						{
// 							id: uuidv4(),
// 							details:
// 								'We\'re not just about personal vehicles, our commitment to deliver exceptional service spans across government, commercial, and residential projects. Every vehicle that rolls into our shop receives the same degree of attention and commitment to quality. For additional information about our services at Capital Upfitters or to discuss your specific customization and performance enhancement needs, we welcome you to reach us at 301-304-1419 or explore our webpage. Choose Capital Upfitters for an automotive experience that goes beyond service to deliver a transformation, redefining your ride.',
// 						}
// 					],

// 				},


// 			},
// 			// Додайте інші авто для Ceramic Coatings
// 		],
// 	},
// 	{
// 		id: 3,
// 		title: 'Hitches',
// 		category: 'HITCHES',
// 		imageSrc: '/hitches/ford-mustang/fm1.jpg',
// 		ProjectHeader: {
// 			title: 'Hitches',
// 			tags: 'Hitches',
// 		},
// 		cars: [
// 			{
// 				id: uuidv4(),
// 				brand: 'Ford Mustang',
				// imageSrc: "/portfolio/hitches/h1.jpg",
// 				gallery: [
// 					{
// 						id: uuidv4(),
// 						title: 'Ford Mustang',
// 						imageSrc: '/hitches/ford-mustang/fm1.jpg',
// 					},
// 					{
// 						id: uuidv4(),
// 						title:'Ford Mustang',
// 						imageSrc: '/hitches/tesla/t1.jpg',
// 					},
// 					{
// 						id: uuidv4(),
// 						title:'Ford Mustang',
// 						imageSrc: '/hitches/audi/a1.jpg',
// 					},


// 				],
// 				ProjectInfo: {
// 					ClientHeading: 'Audi',
// 					CompanyInfo: [
// 						{
// 							id: uuidv4(),
// 							title: 'Company',
// 							details: 'CAPITAL UPFITTERS',
// 						},
// 						{
// 							id: uuidv4(),
// 							title: 'Services',
// 							details: 'Ceramic Coatings',
// 						},
// 						{
// 							id: uuidv4(),
// 							title: 'Phone',
// 							details: '301-304-1419',
// 						},
// 					],
// 					ObjectivesHeading:'Audi',
// 					titleHead: 'Stealth Hitch Installation for 2023 Audi Allroad - Quick Overview',
// 					ObjectivesDetails: [
// 						{
// 							title: '1. Preparation',
// 							techs: [
// 								'Vehicle and work area prepped to protect against damage.' +
// 								'Brief customer consultation for personalized service.',
// 							],

// 						},
// 						{
// 							title: '2. Installation ',
// 							techs: [
// 								'Step 1: Careful removal of the rear bumper.',
// 								'Step 2: Precise installation of the Stealth Hitch, with all hardware secured to factory standards.',
// 								'Step 3: Trimming of lower fascia and application of edge guard for safety and aesthetics.',
// 								'Step 4: Relocation and recalibration of the kick sensor per OEM guidelines.',
// 							],
// 							info: {

// 							},
// 						},
// 						{
// 							title: '3. Finalizing',
// 							techs: [
// 								'Bumper carefully reattached and alignment checked.\n' +
// 								'Thorough cleaning of the vehicle post-installation.'
// 							],
// 							info: {

// 							},
// 						},
// 						{
// 							title: '4. Customer Orientation',
// 							techs: [
// 								'Practical demonstration on hitch use and maintenance provided during handover.'
// 							],
// 							info: {

// 							},
// 						},
// 						{
// 							title: '5. Aftercare',
// 							techs: [
// 								'Continuous support and follow-up services available as needed.'
// 							],
// 							info: {

// 							},
// 						},

// 						{
// 							title: 'End-Note ',
// 							techs: [
// 								'Capital Upfitters guarantees a streamlined, high-quality installation process, ensuring your 2023 Audi Allroad\'s Stealth Hitch is perfectly fitted with attention to detail, functionality, and aesthetic preservation.'
// 							],
// 							info: {

// 							},
// 						},

// 					],



// 					Technologies: [
// 						{
// 							title: '2023 Audi Allroad Stealth Hitch Integration',
// 							techs: [
// 								'Our process for the 2023 Audi Allroad Stealth Hitch installation (Rack Only with 2" receiver) is meticulously designed to ensure functionality, safety, and seamless integration with your vehicle\'s original design. At Capital Upfitters, we specialize in customized, high-quality installations that prioritize your vehicle\'s integrity and aesthetics.'
// 							],
// 						},
// 					],
// 					ProjectDetailsHeading: 'Why us',
// 					ProjectDetails: [
// 						{
// 							id: uuidv4(),
// 							details:
// 								'Welcome to Capital Upfitters, the family-owned epicenter of top-tier auto customization, vehicle preservation, and performance enhancements. With a heritage of over 35 years in the industry, we proudly deliver unparalleled fleet customization services and robust protection coatings to a diverse range of clients, from municipal to retail sectors. Our reputation as a trailblazer stems from our continuous commitment to superior craftsmanship, delivering innovative auto customization and performance solutions that truly redefine automotive excellence.',
// 						},
// 						{
// 							id: uuidv4(),
// 							details:
// 								'We\'re not just about personal vehicles, our commitment to deliver exceptional service spans across government, commercial, and residential projects. Every vehicle that rolls into our shop receives the same degree of attention and commitment to quality. For additional information about our services at Capital Upfitters or to discuss your specific customization and performance enhancement needs, we welcome you to reach us at 301-304-1419 or explore our webpage. Choose Capital Upfitters for an automotive experience that goes beyond service to deliver a transformation, redefining your ride.',
// 						}
// 					],

// 				},


// 			},
// 			{
// 				id: uuidv4(),
// 				brand: 'Tesla',
// 				imageSrc: '/hitches/tesla/t1.jpg',
// 				gallery: [
// 					{
// 						id: uuidv4(),
// 						title: 'Tesla',
// 						imageSrc: '/hitches/tesla/t1.jpg',
// 					},
// 					{
// 						id: uuidv4(),
// 						title:'Tesla',
// 						imageSrc: '/hitches/tesla/t2.jpg',
// 					},
// 					{
// 						id: uuidv4(),
// 						title:'Tesla',
// 						imageSrc: '/hitches/tesla/t3.jpg',
// 					},
// 					{
// 						id: uuidv4(),
// 						title:'Tesla',
// 						imageSrc: '/hitches/tesla/t4.jpg',
// 					},

// 				],
// 				ProjectInfo: {
// 					ClientHeading: 'Audi',
// 					CompanyInfo: [
// 						{
// 							id: uuidv4(),
// 							title: 'Company',
// 							details: 'CAPITAL UPFITTERS',
// 						},
// 						{
// 							id: uuidv4(),
// 							title: 'Services',
// 							details: 'Ceramic Coatings',
// 						},
// 						{
// 							id: uuidv4(),
// 							title: 'Phone',
// 							details: '301-304-1419',
// 						},
// 					],
// 					ObjectivesHeading:'Audi',
// 					titleHead: 'Stealth Hitch Installation for 2023 Audi Allroad - Quick Overview',
// 					ObjectivesDetails: [
// 						{
// 							title: '1. Preparation',
// 							techs: [
// 								'Vehicle and work area prepped to protect against damage.' +
// 								'Brief customer consultation for personalized service.',
// 							],

// 						},
// 						{
// 							title: '2. Installation ',
// 							techs: [
// 								'Step 1: Careful removal of the rear bumper.',
// 								'Step 2: Precise installation of the Stealth Hitch, with all hardware secured to factory standards.',
// 								'Step 3: Trimming of lower fascia and application of edge guard for safety and aesthetics.',
// 								'Step 4: Relocation and recalibration of the kick sensor per OEM guidelines.',
// 							],
// 							info: {

// 							},
// 						},
// 						{
// 							title: '3. Finalizing',
// 							techs: [
// 								'Bumper carefully reattached and alignment checked.\n' +
// 								'Thorough cleaning of the vehicle post-installation.'
// 							],
// 							info: {

// 							},
// 						},
// 						{
// 							title: '4. Customer Orientation',
// 							techs: [
// 								'Practical demonstration on hitch use and maintenance provided during handover.'
// 							],
// 							info: {

// 							},
// 						},
// 						{
// 							title: '5. Aftercare',
// 							techs: [
// 								'Continuous support and follow-up services available as needed.'
// 							],
// 							info: {

// 							},
// 						},

// 						{
// 							title: 'End-Note ',
// 							techs: [
// 								'Capital Upfitters guarantees a streamlined, high-quality installation process, ensuring your 2023 Audi Allroad\'s Stealth Hitch is perfectly fitted with attention to detail, functionality, and aesthetic preservation.'
// 							],
// 							info: {

// 							},
// 						},

// 					],



// 					Technologies: [
// 						{
// 							title: '2023 Audi Allroad Stealth Hitch Integration',
// 							techs: [
// 								'Our process for the 2023 Audi Allroad Stealth Hitch installation (Rack Only with 2" receiver) is meticulously designed to ensure functionality, safety, and seamless integration with your vehicle\'s original design. At Capital Upfitters, we specialize in customized, high-quality installations that prioritize your vehicle\'s integrity and aesthetics.'
// 							],
// 						},
// 					],
// 					ProjectDetailsHeading: 'Why us',
// 					ProjectDetails: [
// 						{
// 							id: uuidv4(),
// 							details:
// 								'Welcome to Capital Upfitters, the family-owned epicenter of top-tier auto customization, vehicle preservation, and performance enhancements. With a heritage of over 35 years in the industry, we proudly deliver unparalleled fleet customization services and robust protection coatings to a diverse range of clients, from municipal to retail sectors. Our reputation as a trailblazer stems from our continuous commitment to superior craftsmanship, delivering innovative auto customization and performance solutions that truly redefine automotive excellence.',
// 						},
// 						{
// 							id: uuidv4(),
// 							details:
// 								'We\'re not just about personal vehicles, our commitment to deliver exceptional service spans across government, commercial, and residential projects. Every vehicle that rolls into our shop receives the same degree of attention and commitment to quality. For additional information about our services at Capital Upfitters or to discuss your specific customization and performance enhancement needs, we welcome you to reach us at 301-304-1419 or explore our webpage. Choose Capital Upfitters for an automotive experience that goes beyond service to deliver a transformation, redefining your ride.',
// 						}
// 					],

// 				},


// 			},
// 			{
// 				id: 3,
// 				brand: 'Audi',
// 				imageSrc: '/hitches/audi/a1.jpg',
// 				gallery: [
// 					{
// 						id: uuidv4(),
// 						title: 'Audi',
// 						imageSrc: '/hitches/audi/a1.jpg',
// 					},
// 					{
// 						id: uuidv4(),
// 						title:'Audi',
// 						imageSrc: '/hitches/audi/a2.jpg',
// 					},
// 					{
// 						id: uuidv4(),
// 						title:'Audi',
// 						imageSrc: '/hitches/audi/a3.jpg',
// 					},

// 				],
// 				ProjectInfo: {
// 					ClientHeading: 'Audi',
// 					CompanyInfo: [
// 						{
// 							id: uuidv4(),
// 							title: 'Company',
// 							details: 'CAPITAL UPFITTERS',
// 						},
// 						{
// 							id: uuidv4(),
// 							title: 'Services',
// 							details: 'Ceramic Coatings',
// 						},
// 						{
// 							id: uuidv4(),
// 							title: 'Phone',
// 							details: '301-304-1419',
// 						},
// 					],
// 					ObjectivesHeading:'Audi',
// 					titleHead: 'Stealth Hitch Installation for 2023 Audi Allroad - Quick Overview',
// 					ObjectivesDetails: [
// 						{
// 							title: '1. Preparation',
// 							techs: [
// 								'Vehicle and work area prepped to protect against damage.' +
// 								'Brief customer consultation for personalized service.',
// 							],

// 						},
// 						{
// 							title: '2. Installation ',
// 							techs: [
// 								'Step 1: Careful removal of the rear bumper.',
// 								'Step 2: Precise installation of the Stealth Hitch, with all hardware secured to factory standards.',
// 								'Step 3: Trimming of lower fascia and application of edge guard for safety and aesthetics.',
// 								'Step 4: Relocation and recalibration of the kick sensor per OEM guidelines.',
// 							],
// 							info: {

// 							},
// 						},
// 						{
// 							title: '3. Finalizing',
// 							techs: [
// 								'Bumper carefully reattached and alignment checked.\n' +
// 								'Thorough cleaning of the vehicle post-installation.'
// 							],
// 							info: {

// 							},
// 						},
// 						{
// 							title: '4. Customer Orientation',
// 							techs: [
// 								'Practical demonstration on hitch use and maintenance provided during handover.'
// 							],
// 							info: {

// 							},
// 						},
// 						{
// 							title: '5. Aftercare',
// 							techs: [
// 								'Continuous support and follow-up services available as needed.'
// 							],
// 							info: {

// 							},
// 						},

// 						{
// 							title: 'End-Note ',
// 							techs: [
// 								'Capital Upfitters guarantees a streamlined, high-quality installation process, ensuring your 2023 Audi Allroad\'s Stealth Hitch is perfectly fitted with attention to detail, functionality, and aesthetic preservation.'
// 							],
// 							info: {

// 							},
// 						},

// 					],



// 					Technologies: [
// 						{
// 							title: '2023 Audi Allroad Stealth Hitch Integration',
// 							techs: [
// 								'Our process for the 2023 Audi Allroad Stealth Hitch installation (Rack Only with 2" receiver) is meticulously designed to ensure functionality, safety, and seamless integration with your vehicle\'s original design. At Capital Upfitters, we specialize in customized, high-quality installations that prioritize your vehicle\'s integrity and aesthetics.'
// 							],
// 						},
// 					],
// 					ProjectDetailsHeading: 'Why us',
// 					ProjectDetails: [
// 						{
// 							id: uuidv4(),
// 							details:
// 								'Welcome to Capital Upfitters, the family-owned epicenter of top-tier auto customization, vehicle preservation, and performance enhancements. With a heritage of over 35 years in the industry, we proudly deliver unparalleled fleet customization services and robust protection coatings to a diverse range of clients, from municipal to retail sectors. Our reputation as a trailblazer stems from our continuous commitment to superior craftsmanship, delivering innovative auto customization and performance solutions that truly redefine automotive excellence.',
// 						},
// 						{
// 							id: uuidv4(),
// 							details:
// 								'We\'re not just about personal vehicles, our commitment to deliver exceptional service spans across government, commercial, and residential projects. Every vehicle that rolls into our shop receives the same degree of attention and commitment to quality. For additional information about our services at Capital Upfitters or to discuss your specific customization and performance enhancement needs, we welcome you to reach us at 301-304-1419 or explore our webpage. Choose Capital Upfitters for an automotive experience that goes beyond service to deliver a transformation, redefining your ride.',
// 						}
// 					],

// 				},


// 			},
// 			{
// 				id: uuidv4(),
// 				brand: '2023 Audi A4 Allroad',
// 				imageSrc: '/hitches/audi-allroad/aa1.jpg',
// 				gallery: [
// 					{
// 						id: uuidv4(),
// 						title: 'Audi',
// 						imageSrc: '/hitches/audi-allroad/aa1.jpg',
// 					},
// 					{
// 						id: uuidv4(),
// 						title:'Audi',
// 						imageSrc: '/hitches/audi-allroad/aa2.jpg',
// 					},
// 					{
// 						id: uuidv4(),
// 						title:'Audi',
// 						imageSrc: '/hitches/audi-allroad/aa3.jpg',
// 					},
// 					{
// 						id: uuidv4(),
// 						title: 'Audi',
// 						imageSrc: '/hitches/audi-allroad/aa4.jpg',
// 					},
// 					{
// 						id: uuidv4(),
// 						title:'Audi',
// 						imageSrc: '/hitches/audi-allroad/aa5.jpg',
// 					},
// 					{
// 						id: uuidv4(),
// 						title:'Audi',
// 						imageSrc: '/hitches/audi-allroad/aa6.jpg',
// 					},
// 					{
// 						id: uuidv4(),
// 						title: 'Audi',
// 						imageSrc: '/hitches/audi-allroad/aa7.jpg',
// 					},
// 					{
// 						id: uuidv4(),
// 						title:'Audi',
// 						imageSrc: '/hitches/audi-allroad/aa8.jpg',
// 					},
// 					{
// 						id: uuidv4(),
// 						title:'Audi',
// 						imageSrc: '/hitches/audi-allroad/aa9.jpg',
// 					},
// 					{
// 						id: uuidv4(),
// 						title: 'Audi',
// 						imageSrc: '/hitches/audi-allroad/aa10.jpg',
// 					},
// 					{
// 						id: uuidv4(),
// 						title:'Audi',
// 						imageSrc: '/hitches/audi-allroad/aa11.jpg',
// 					},
// 					{
// 						id: uuidv4(),
// 						title:'Audi',
// 						imageSrc: '/hitches/audi-allroad/aa12.jpg',
// 					},
// 					{
// 						id: uuidv4(),
// 						title: 'Audi',
// 						imageSrc: '/hitches/audi-allroad/aa13.jpg',
// 					},
// 					{
// 						id: uuidv4(),
// 						title:'Audi',
// 						imageSrc: '/hitches/audi-allroad/aa14.jpg',
// 					},
// 					{
// 						id: uuidv4(),
// 						title:'Audi',
// 						imageSrc: '/hitches/audi-allroad/aa15.jpg',
// 					},
// 					{
// 						id: uuidv4(),
// 						title:'Audi',
// 						imageSrc: '/hitches/audi-allroad/aa16.jpg',
// 					},

// 				],
// 				ProjectInfo: {
// 					ClientHeading: 'Audi',
// 					CompanyInfo: [
// 						{
// 							id: uuidv4(),
// 							title: 'Company',
// 							details: 'CAPITAL UPFITTERS',
// 						},
// 						{
// 							id: uuidv4(),
// 							title: 'Services',
// 							details: 'Ceramic Coatings',
// 						},
// 						{
// 							id: uuidv4(),
// 							title: 'Phone',
// 							details: '301-304-1419',
// 						},
// 					],
// 					ObjectivesHeading:'Audi',
// 					titleHead: 'Stealth Hitch Installation for 2023 Audi Allroad - Quick Overview',
// 					ObjectivesDetails: [
// 						{
// 							title: '1. Preparation',
// 							techs: [
// 								'Vehicle and work area prepped to protect against damage.' +
// 								'Brief customer consultation for personalized service.',
// 							],

// 						},
// 						{
// 							title: '2. Installation ',
// 							techs: [
// 								'Step 1: Careful removal of the rear bumper.',
// 								'Step 2: Precise installation of the Stealth Hitch, with all hardware secured to factory standards.',
// 								'Step 3: Trimming of lower fascia and application of edge guard for safety and aesthetics.',
// 								'Step 4: Relocation and recalibration of the kick sensor per OEM guidelines.',
// 							],
// 							info: {

// 							},
// 						},
// 						{
// 							title: '3. Finalizing',
// 							techs: [
// 								'Bumper carefully reattached and alignment checked.\n' +
// 								'Thorough cleaning of the vehicle post-installation.'
// 							],
// 							info: {

// 							},
// 						},
// 						{
// 							title: '4. Customer Orientation',
// 							techs: [
// 								'Practical demonstration on hitch use and maintenance provided during handover.'
// 							],
// 							info: {

// 							},
// 						},
// 						{
// 							title: '5. Aftercare',
// 							techs: [
// 								'Continuous support and follow-up services available as needed.'
// 							],
// 							info: {

// 							},
// 						},

// 						{
// 							title: 'End-Note ',
// 							techs: [
// 								'Capital Upfitters guarantees a streamlined, high-quality installation process, ensuring your 2023 Audi Allroad\'s Stealth Hitch is perfectly fitted with attention to detail, functionality, and aesthetic preservation.'
// 							],
// 							info: {

// 							},
// 						},

// 					],



// 					Technologies: [
// 						{
// 							title: '2023 Audi Allroad Stealth Hitch Integration',
// 							techs: [
// 								'Our process for the 2023 Audi Allroad Stealth Hitch installation (Rack Only with 2" receiver) is meticulously designed to ensure functionality, safety, and seamless integration with your vehicle\'s original design. At Capital Upfitters, we specialize in customized, high-quality installations that prioritize your vehicle\'s integrity and aesthetics.'
// 							],
// 						},
// 					],
// 					ProjectDetailsHeading: 'Why us',
// 					ProjectDetails: [
// 						{
// 							id: uuidv4(),
// 							details:
// 								'Welcome to Capital Upfitters, the family-owned epicenter of top-tier auto customization, vehicle preservation, and performance enhancements. With a heritage of over 35 years in the industry, we proudly deliver unparalleled fleet customization services and robust protection coatings to a diverse range of clients, from municipal to retail sectors. Our reputation as a trailblazer stems from our continuous commitment to superior craftsmanship, delivering innovative auto customization and performance solutions that truly redefine automotive excellence.',
// 						},
// 						{
// 							id: uuidv4(),
// 							details:
// 								'We\'re not just about personal vehicles, our commitment to deliver exceptional service spans across government, commercial, and residential projects. Every vehicle that rolls into our shop receives the same degree of attention and commitment to quality. For additional information about our services at Capital Upfitters or to discuss your specific customization and performance enhancement needs, we welcome you to reach us at 301-304-1419 or explore our webpage. Choose Capital Upfitters for an automotive experience that goes beyond service to deliver a transformation, redefining your ride.',
// 						}
// 					],

// 				},

// 			},
// 			// Додайте інші авто для Ceramic Coatings
// 		],
// 	},
// 	{
// 		id: 4,
// 		title: 'Patriot Liner',
// 		category: 'PATRIOT LINER',
// 		imageSrc: "/portfolio/patriot-liner/pl4.jpg",
// 		ProjectHeader: {
// 			title: 'test',
// 			tags: 'test',
// 		},
// 		cars: [

// 			{
// 				id: uuidv4(),
// 				brand: 'Ford',
// 				imageSrc: "/portfolio/patriot-liner/pl4.jpg",
// 				gallery: [
// 					{
// 						id: uuidv4(),
// 						title: 'Ford',
// 						imageSrc: "/portfolio/patriot-liner/pl4.jpg",
// 					},

// 					{
// 						id: uuidv4(),
// 						title: 'Ford',
// 						imageSrc: "/portfolio/patriot-liner/pl6.jpg",
// 					},

// 					{
// 						id: uuidv4(),
// 						title: 'Ford',
// 						imageSrc: "/portfolio/patriot-liner/pl8.jpg",
// 					},
// 					{
// 						id: uuidv4(),
// 						title: 'Ford',
// 						imageSrc: "/portfolio/patriot-liner/pl9.jpg",
// 					},
// 					{
// 						id: uuidv4(),
// 						title: 'Ford',
// 						imageSrc: "/portfolio/patriot-liner/pl10.jpg",
// 					},

// 					{
// 						id: uuidv4(),
// 						title: 'Ford',
// 						imageSrc: "/portfolio/patriot-liner/pl11.jpg",
// 					},
// 					{
// 						id: uuidv4(),
// 						title: 'Ford',
// 						imageSrc: "/portfolio/patriot-liner/pl13.jpg",
// 					},
// 					{
// 						id: uuidv4(),
// 						title: 'Ford',
// 						imageSrc: "/portfolio/patriot-liner/pl14.jpg",
// 					},
// 					{
// 						id: uuidv4(),
// 						title: 'Ford',
// 						imageSrc: "/portfolio/patriot-liner/pl15.jpg",
// 					},
// 					{
// 						id: uuidv4(),
// 						title: 'Ford',
// 						imageSrc: "/portfolio/patriot-liner/pl15.jpg",
// 					},
// 					{
// 						id: uuidv4(),
// 						title: 'Ford',
// 						imageSrc: "/portfolio/patriot-liner/pl21.jpg",
// 					},
// 					{
// 						id: uuidv4(),
// 						title: 'Ford',
// 						imageSrc: "/portfolio/patriot-liner/pl22.jpg",
// 					},
// 					{
// 						id: uuidv4(),
// 						title: 'Ford',
// 						imageSrc: "/portfolio/patriot-liner/pl23.jpg",
// 					},

// 				],
// 				ProjectInfo: {
// 					ClientHeading: 'Audi',
// 					CompanyInfo: [
// 						{
// 							id: uuidv4(),
// 							title: 'Company',
// 							details: 'CAPITAL UPFITTERS',
// 						},
// 						{
// 							id: uuidv4(),
// 							title: 'Services',
// 							details: 'Ceramic Coatings',
// 						},
// 						{
// 							id: uuidv4(),
// 							title: 'Phone',
// 							details: '301-304-1419',
// 						},
// 					],
// 					ObjectivesHeading:'Audi',
// 					titleHead: 'Stealth Hitch Installation for 2023 Audi Allroad - Quick Overview',
// 					ObjectivesDetails: [
// 						{
// 							title: '1. Preparation',
// 							techs: [
// 								'Vehicle and work area prepped to protect against damage.' +
// 								'Brief customer consultation for personalized service.',
// 							],

// 						},
// 						{
// 							title: '2. Installation ',
// 							techs: [
// 								'Step 1: Careful removal of the rear bumper.',
// 								'Step 2: Precise installation of the Stealth Hitch, with all hardware secured to factory standards.',
// 								'Step 3: Trimming of lower fascia and application of edge guard for safety and aesthetics.',
// 								'Step 4: Relocation and recalibration of the kick sensor per OEM guidelines.',
// 							],
// 							info: {

// 							},
// 						},
// 						{
// 							title: '3. Finalizing',
// 							techs: [
// 								'Bumper carefully reattached and alignment checked.\n' +
// 								'Thorough cleaning of the vehicle post-installation.'
// 							],
// 							info: {

// 							},
// 						},
// 						{
// 							title: '4. Customer Orientation',
// 							techs: [
// 								'Practical demonstration on hitch use and maintenance provided during handover.'
// 							],
// 							info: {

// 							},
// 						},
// 						{
// 							title: '5. Aftercare',
// 							techs: [
// 								'Continuous support and follow-up services available as needed.'
// 							],
// 							info: {

// 							},
// 						},

// 						{
// 							title: 'End-Note ',
// 							techs: [
// 								'Capital Upfitters guarantees a streamlined, high-quality installation process, ensuring your 2023 Audi Allroad\'s Stealth Hitch is perfectly fitted with attention to detail, functionality, and aesthetic preservation.'
// 							],
// 							info: {

// 							},
// 						},

// 					],



// 					Technologies: [
// 						{
// 							title: '2023 Audi Allroad Stealth Hitch Integration',
// 							techs: [
// 								'Our process for the 2023 Audi Allroad Stealth Hitch installation (Rack Only with 2" receiver) is meticulously designed to ensure functionality, safety, and seamless integration with your vehicle\'s original design. At Capital Upfitters, we specialize in customized, high-quality installations that prioritize your vehicle\'s integrity and aesthetics.'
// 							],
// 						},
// 					],
// 					ProjectDetailsHeading: 'Why us',
// 					ProjectDetails: [
// 						{
// 							id: uuidv4(),
// 							details:
// 								'Welcome to Capital Upfitters, the family-owned epicenter of top-tier auto customization, vehicle preservation, and performance enhancements. With a heritage of over 35 years in the industry, we proudly deliver unparalleled fleet customization services and robust protection coatings to a diverse range of clients, from municipal to retail sectors. Our reputation as a trailblazer stems from our continuous commitment to superior craftsmanship, delivering innovative auto customization and performance solutions that truly redefine automotive excellence.',
// 						},
// 						{
// 							id: uuidv4(),
// 							details:
// 								'We\'re not just about personal vehicles, our commitment to deliver exceptional service spans across government, commercial, and residential projects. Every vehicle that rolls into our shop receives the same degree of attention and commitment to quality. For additional information about our services at Capital Upfitters or to discuss your specific customization and performance enhancement needs, we welcome you to reach us at 301-304-1419 or explore our webpage. Choose Capital Upfitters for an automotive experience that goes beyond service to deliver a transformation, redefining your ride.',
// 						}
// 					],

// 				},


// 			},
// 			{
// 				id: uuidv4(),
// 				brand: 'Ford',
// 				imageSrc: "/portfolio/patriot-liner/pl17.jpg",
// 				gallery: [
// 					{
// 						id: uuidv4(),
// 						title: 'Ford',
// 						imageSrc: "/portfolio/patriot-liner/pl17.jpg",
// 					},

// 					{
// 						id: uuidv4(),
// 						title: 'Ford',
// 						imageSrc: "/portfolio/patriot-liner/pl19.jpg",
// 					},
// 					{
// 						id: uuidv4(),
// 						title: 'Ford',
// 						imageSrc: "/portfolio/patriot-liner/pl25.jpg",
// 					},
// 					{
// 						id: uuidv4(),
// 						title: 'Ford',
// 						imageSrc: "/portfolio/patriot-liner/pl18.jpg",
// 					},

// 					{
// 						id: uuidv4(),
// 						title: 'Ford',
// 						imageSrc: "/portfolio/patriot-liner/pl24.jpg",
// 					},

// 				],
// 				ProjectInfo: {
// 					ClientHeading: 'Audi',
// 					CompanyInfo: [
// 						{
// 							id: uuidv4(),
// 							title: 'Company',
// 							details: 'CAPITAL UPFITTERS',
// 						},
// 						{
// 							id: uuidv4(),
// 							title: 'Services',
// 							details: 'Ceramic Coatings',
// 						},
// 						{
// 							id: uuidv4(),
// 							title: 'Phone',
// 							details: '301-304-1419',
// 						},
// 					],
// 					ObjectivesHeading:'Audi',
// 					titleHead: 'Stealth Hitch Installation for 2023 Audi Allroad - Quick Overview',
// 					ObjectivesDetails: [
// 						{
// 							title: '1. Preparation',
// 							techs: [
// 								'Vehicle and work area prepped to protect against damage.' +
// 								'Brief customer consultation for personalized service.',
// 							],

// 						},
// 						{
// 							title: '2. Installation ',
// 							techs: [
// 								'Step 1: Careful removal of the rear bumper.',
// 								'Step 2: Precise installation of the Stealth Hitch, with all hardware secured to factory standards.',
// 								'Step 3: Trimming of lower fascia and application of edge guard for safety and aesthetics.',
// 								'Step 4: Relocation and recalibration of the kick sensor per OEM guidelines.',
// 							],
// 							info: {

// 							},
// 						},
// 						{
// 							title: '3. Finalizing',
// 							techs: [
// 								'Bumper carefully reattached and alignment checked.\n' +
// 								'Thorough cleaning of the vehicle post-installation.'
// 							],
// 							info: {

// 							},
// 						},
// 						{
// 							title: '4. Customer Orientation',
// 							techs: [
// 								'Practical demonstration on hitch use and maintenance provided during handover.'
// 							],
// 							info: {

// 							},
// 						},
// 						{
// 							title: '5. Aftercare',
// 							techs: [
// 								'Continuous support and follow-up services available as needed.'
// 							],
// 							info: {

// 							},
// 						},

// 						{
// 							title: 'End-Note ',
// 							techs: [
// 								'Capital Upfitters guarantees a streamlined, high-quality installation process, ensuring your 2023 Audi Allroad\'s Stealth Hitch is perfectly fitted with attention to detail, functionality, and aesthetic preservation.'
// 							],
// 							info: {

// 							},
// 						},

// 					],



// 					Technologies: [
// 						{
// 							title: '2023 Audi Allroad Stealth Hitch Integration',
// 							techs: [
// 								'Our process for the 2023 Audi Allroad Stealth Hitch installation (Rack Only with 2" receiver) is meticulously designed to ensure functionality, safety, and seamless integration with your vehicle\'s original design. At Capital Upfitters, we specialize in customized, high-quality installations that prioritize your vehicle\'s integrity and aesthetics.'
// 							],
// 						},
// 					],
// 					ProjectDetailsHeading: 'Why us',
// 					ProjectDetails: [
// 						{
// 							id: uuidv4(),
// 							details:
// 								'Welcome to Capital Upfitters, the family-owned epicenter of top-tier auto customization, vehicle preservation, and performance enhancements. With a heritage of over 35 years in the industry, we proudly deliver unparalleled fleet customization services and robust protection coatings to a diverse range of clients, from municipal to retail sectors. Our reputation as a trailblazer stems from our continuous commitment to superior craftsmanship, delivering innovative auto customization and performance solutions that truly redefine automotive excellence.',
// 						},
// 						{
// 							id: uuidv4(),
// 							details:
// 								'We\'re not just about personal vehicles, our commitment to deliver exceptional service spans across government, commercial, and residential projects. Every vehicle that rolls into our shop receives the same degree of attention and commitment to quality. For additional information about our services at Capital Upfitters or to discuss your specific customization and performance enhancement needs, we welcome you to reach us at 301-304-1419 or explore our webpage. Choose Capital Upfitters for an automotive experience that goes beyond service to deliver a transformation, redefining your ride.',
// 						}
// 					],

// 				},


// 			},
// 			{
// 				id: uuidv4(),
// 				brand: 'Jeep Wrangler',
// 				imageSrc: "/portfolio/patriot-liner/pl27 (1).jpg",
// 				gallery: [
// 					{
// 						id: uuidv4(),
// 						title: 'Jeep',
// 						imageSrc: "/portfolio/patriot-liner/pl27.jpg",
// 					},
// 					{
// 						id: uuidv4(),
// 						title:'Jeep',
// 						imageSrc: "/portfolio/patriot-liner/pl28.jpg",
// 					},
// 					{
// 						id: uuidv4(),
// 						title: 'Jeep',
// 						imageSrc: "/portfolio/patriot-liner/pl29.jpg",
// 					},
// 					{
// 						id: uuidv4(),
// 						title:'Jeep',
// 						imageSrc: "/portfolio/patriot-liner/pl30.jpg",
// 					},
// 					{
// 						id: uuidv4(),
// 						title: 'Jeep',
// 						imageSrc: "/portfolio/patriot-liner/pl31.jpg",
// 					},
// 					{
// 						id: uuidv4(),
// 						title:'Jeep',
// 						imageSrc: "/portfolio/patriot-liner/pl32.jpg",
// 					},
// 					{
// 						id: uuidv4(),
// 						title: 'Jeep',
// 						imageSrc: "/portfolio/patriot-liner/pl33.jpg",
// 					},
// 					{
// 						id: uuidv4(),
// 						title:'Jeep',
// 						imageSrc: "/portfolio/patriot-liner/pl34.jpg",
// 					},
// 					{
// 						id: uuidv4(),
// 						title:'Jeep',
// 						imageSrc: "/portfolio/patriot-liner/pl35.jpg",
// 					},
// 					{
// 						id: uuidv4(),
// 						title:'Jeep',
// 						imageSrc: "/portfolio/patriot-liner/pl36.jpg",
// 					},
// 					{
// 						id: uuidv4(),
// 						title:'Jeep',
// 						imageSrc: "/portfolio/patriot-liner/pl37.jpg",
// 					},
// 					{
// 						id: uuidv4(),
// 						title:'Jeep',
// 						imageSrc: "/portfolio/patriot-liner/pl38.jpg",
// 					},
// 					{
// 						id: uuidv4(),
// 						title:'Jeep',
// 						imageSrc: "/portfolio/patriot-liner/pl39.jpg",
// 					},
// 					{
// 						id: uuidv4(),
// 						title:'Jeep',
// 						imageSrc: "/portfolio/patriot-liner/pl40.jpg",
// 					},
// 					{
// 						id: uuidv4(),
// 						title:'Jeep',
// 						imageSrc: "/portfolio/patriot-liner/pl41.jpg",
// 					},
// 					{
// 						id: uuidv4(),
// 						title:'Jeep',
// 						imageSrc: "/portfolio/patriot-liner/pl42.jpg",
// 					},
// 					{
// 						id: uuidv4(),
// 						title:'Jeep',
// 						imageSrc: "/portfolio/patriot-liner/pl43.jpg",
// 					},
// 					{
// 						id: uuidv4(),
// 						title:'Jeep',
// 						imageSrc: "/portfolio/patriot-liner/pl44.jpg",
// 					},
// 				],
// 				ProjectInfo: {
// 					ClientHeading: 'Audi',
// 					CompanyInfo: [
// 						{
// 							id: uuidv4(),
// 							title: 'Company',
// 							details: 'CAPITAL UPFITTERS',
// 						},
// 						{
// 							id: uuidv4(),
// 							title: 'Services',
// 							details: 'Ceramic Coatings',
// 						},
// 						{
// 							id: uuidv4(),
// 							title: 'Phone',
// 							details: '301-304-1419',
// 						},
// 					],
// 					ObjectivesHeading:'Audi',
// 					titleHead: 'Stealth Hitch Installation for 2023 Audi Allroad - Quick Overview',
// 					ObjectivesDetails: [
// 						{
// 							title: '1. Preparation',
// 							techs: [
// 								'Vehicle and work area prepped to protect against damage.' +
// 								'Brief customer consultation for personalized service.',
// 							],

// 						},
// 						{
// 							title: '2. Installation ',
// 							techs: [
// 								'Step 1: Careful removal of the rear bumper.',
// 								'Step 2: Precise installation of the Stealth Hitch, with all hardware secured to factory standards.',
// 								'Step 3: Trimming of lower fascia and application of edge guard for safety and aesthetics.',
// 								'Step 4: Relocation and recalibration of the kick sensor per OEM guidelines.',
// 							],
// 							info: {

// 							},
// 						},
// 						{
// 							title: '3. Finalizing',
// 							techs: [
// 								'Bumper carefully reattached and alignment checked.\n' +
// 								'Thorough cleaning of the vehicle post-installation.'
// 							],
// 							info: {

// 							},
// 						},
// 						{
// 							title: '4. Customer Orientation',
// 							techs: [
// 								'Practical demonstration on hitch use and maintenance provided during handover.'
// 							],
// 							info: {

// 							},
// 						},
// 						{
// 							title: '5. Aftercare',
// 							techs: [
// 								'Continuous support and follow-up services available as needed.'
// 							],
// 							info: {

// 							},
// 						},

// 						{
// 							title: 'End-Note ',
// 							techs: [
// 								'Capital Upfitters guarantees a streamlined, high-quality installation process, ensuring your 2023 Audi Allroad\'s Stealth Hitch is perfectly fitted with attention to detail, functionality, and aesthetic preservation.'
// 							],
// 							info: {

// 							},
// 						},

// 					],



// 					Technologies: [
// 						{
// 							title: '2023 Audi Allroad Stealth Hitch Integration',
// 							techs: [
// 								'Our process for the 2023 Audi Allroad Stealth Hitch installation (Rack Only with 2" receiver) is meticulously designed to ensure functionality, safety, and seamless integration with your vehicle\'s original design. At Capital Upfitters, we specialize in customized, high-quality installations that prioritize your vehicle\'s integrity and aesthetics.'
// 							],
// 						},
// 					],
// 					ProjectDetailsHeading: 'Why us',
// 					ProjectDetails: [
// 						{
// 							id: uuidv4(),
// 							details:
// 								'Welcome to Capital Upfitters, the family-owned epicenter of top-tier auto customization, vehicle preservation, and performance enhancements. With a heritage of over 35 years in the industry, we proudly deliver unparalleled fleet customization services and robust protection coatings to a diverse range of clients, from municipal to retail sectors. Our reputation as a trailblazer stems from our continuous commitment to superior craftsmanship, delivering innovative auto customization and performance solutions that truly redefine automotive excellence.',
// 						},
// 						{
// 							id: uuidv4(),
// 							details:
// 								'We\'re not just about personal vehicles, our commitment to deliver exceptional service spans across government, commercial, and residential projects. Every vehicle that rolls into our shop receives the same degree of attention and commitment to quality. For additional information about our services at Capital Upfitters or to discuss your specific customization and performance enhancement needs, we welcome you to reach us at 301-304-1419 or explore our webpage. Choose Capital Upfitters for an automotive experience that goes beyond service to deliver a transformation, redefining your ride.',
// 						}
// 					],

// 				},


// 			},
// 			// Додайте інші авто для Ceramic Coatings
// 		],
// 	},
// 	{
// 		id: 5,
// 		title: 'Undercoating',
// 		category: 'UNDERCOATING',
// 		imageSrc: "/portfolio/undercoating/u3.jpg",
// 		ProjectHeader: {
// 			title: 'Undercoating',
// 			tags: 'Undercoating',
// 		},
// 		cars: [
// 			{
// 				id: uuidv4(),
// 				brand: 'Ford',
// 				imageSrc: "/portfolio/undercoating/u3.jpg",
// 				gallery: [
// 					{
// 						id: uuidv4(),
// 						title: 'fsd',
// 						imageSrc: "/portfolio/undercoating/u1.jpg",
// 					},
// 					{
// 						id: uuidv4(),
// 						title:'fsd',
// 						imageSrc: "/portfolio/undercoating/u2.jpg",
// 					},
// 					{
// 						id: uuidv4(),
// 						title:'fsd',
// 						imageSrc: "/portfolio/undercoating/u3.jpg",
// 					},
// 					{
// 						id: uuidv4(),
// 						title:'fsd',
// 						imageSrc: "/portfolio/undercoating/u4.jpg",
// 					},
// 				],
// 				ProjectInfo: {
// 					ClientHeading: 'Audi',
// 					CompanyInfo: [
// 						{
// 							id: uuidv4(),
// 							title: 'Company',
// 							details: 'CAPITAL UPFITTERS',
// 						},
// 						{
// 							id: uuidv4(),
// 							title: 'Services',
// 							details: 'Ceramic Coatings',
// 						},
// 						{
// 							id: uuidv4(),
// 							title: 'Phone',
// 							details: '301-304-1419',
// 						},
// 					],
// 					ObjectivesHeading:'Audi',
// 					titleHead: 'Stealth Hitch Installation for 2023 Audi Allroad: Quick Overview',
// 					ObjectivesDetails: [
// 						{
// 							title: '1. Preparation',
// 							techs: [
// 								'Vehicle and work area prepped to protect against damage.' +
// 								'Brief customer consultation for personalized service.',
// 							],

// 						},
// 						{
// 							title: '2. Installation ',
// 							techs: [
// 								'Step 1: Careful removal of the rear bumper.',
// 								'Step 2: Precise installation of the Stealth Hitch, with all hardware secured to factory standards.',
// 								'Step 3: Trimming of lower fascia and application of edge guard for safety and aesthetics.',
// 								'Step 4: Relocation and recalibration of the kick sensor per OEM guidelines.',
// 							],
// 							info: {

// 							},
// 						},
// 						{
// 							title: '3. Finalizing',
// 							techs: [
// 								'Bumper carefully reattached and alignment checked.\n' +
// 								'Thorough cleaning of the vehicle post-installation.'
// 							],
// 							info: {

// 							},
// 						},
// 						{
// 							title: '4. Customer Orientation',
// 							techs: [
// 								'Practical demonstration on hitch use and maintenance provided during handover.'
// 							],
// 							info: {

// 							},
// 						},
// 						{
// 							title: '5. Aftercare',
// 							techs: [
// 								'Continuous support and follow-up services available as needed.'
// 							],
// 							info: {

// 							},
// 						},

// 						{
// 							title: 'End-Note ',
// 							techs: [
// 								'Capital Upfitters guarantees a streamlined, high-quality installation process, ensuring your 2023 Audi Allroad\'s Stealth Hitch is perfectly fitted with attention to detail, functionality, and aesthetic preservation.'
// 							],
// 							info: {

// 							},
// 						},

// 					],



// 					Technologies: [
// 						{
// 							title: '2023 Audi Allroad Stealth Hitch Integration',
// 							techs: [
// 								'Our process for the 2023 Audi Allroad Stealth Hitch installation (Rack Only with 2" receiver) is meticulously designed to ensure functionality, safety, and seamless integration with your vehicle\'s original design. At Capital Upfitters, we specialize in customized, high-quality installations that prioritize your vehicle\'s integrity and aesthetics.'
// 							],
// 						},
// 					],
// 					ProjectDetailsHeading: 'Why us',
// 					ProjectDetails: [
// 						{
// 							id: uuidv4(),
// 							details:
// 								'Welcome to Capital Upfitters, the family-owned epicenter of top-tier auto customization, vehicle preservation, and performance enhancements. With a heritage of over 35 years in the industry, we proudly deliver unparalleled fleet customization services and robust protection coatings to a diverse range of clients, from municipal to retail sectors. Our reputation as a trailblazer stems from our continuous commitment to superior craftsmanship, delivering innovative auto customization and performance solutions that truly redefine automotive excellence.',
// 						},
// 						{
// 							id: uuidv4(),
// 							details:
// 								'We\'re not just about personal vehicles, our commitment to deliver exceptional service spans across government, commercial, and residential projects. Every vehicle that rolls into our shop receives the same degree of attention and commitment to quality. For additional information about our services at Capital Upfitters or to discuss your specific customization and performance enhancement needs, we welcome you to reach us at 301-304-1419 or explore our webpage. Choose Capital Upfitters for an automotive experience that goes beyond service to deliver a transformation, redefining your ride.',
// 						}
// 					],

// 				},


// 			},
// 			// Додайте інші авто для Ceramic Coatings
// 		],
// 	},
// 	{
// 		id: 6,
// 		title: 'Wheels Tires',
// 		category: 'WHEELS TIRES',
// 		imageSrc: "/portfolio/wheels-tires/wt2.jpg",
// 		ProjectHeader: {
// 			title: 'WHEELS TIRES',
// 			tags: 'WHEELS TIRES',
// 		},
// 		cars: [
// 			{
// 				id: uuidv4(),
// 				brand: 'GMC',
// 				imageSrc: "/portfolio/wheels-tires/wt2.jpg",
// 				gallery: [
// 					{
// 						id: uuidv4(),
// 						title: 'GMC',
// 						imageSrc: "/portfolio/wheels-tires/wt2.jpg",
// 					},
// 					{
// 						id: uuidv4(),
// 						title:'GMC',
// 						imageSrc: "/portfolio/wheels-tires/wt3.jpg",
// 					},



// 				],
// 				ProjectInfo: {
// 					ClientHeading: 'Audi',
// 					CompanyInfo: [
// 						{
// 							id: uuidv4(),
// 							title: 'Company',
// 							details: 'CAPITAL UPFITTERS',
// 						},
// 						{
// 							id: uuidv4(),
// 							title: 'Services',
// 							details: 'Ceramic Coatings',
// 						},
// 						{
// 							id: uuidv4(),
// 							title: 'Phone',
// 							details: '301-304-1419',
// 						},
// 					],
// 					ObjectivesHeading:'Audi',
// 					titleHead: 'Stealth Hitch Installation for 2023 Audi Allroad: Quick Overview',
// 					ObjectivesDetails: [
// 						{
// 							title: '1. Preparation',
// 							techs: [
// 								'Vehicle and work area prepped to protect against damage.' +
// 								'Brief customer consultation for personalized service.',
// 							],

// 						},
// 						{
// 							title: '2. Installation ',
// 							techs: [
// 								'Step 1: Careful removal of the rear bumper.',
// 								'Step 2: Precise installation of the Stealth Hitch, with all hardware secured to factory standards.',
// 								'Step 3: Trimming of lower fascia and application of edge guard for safety and aesthetics.',
// 								'Step 4: Relocation and recalibration of the kick sensor per OEM guidelines.',
// 							],
// 							info: {

// 							},
// 						},
// 						{
// 							title: '3. Finalizing',
// 							techs: [
// 								'Bumper carefully reattached and alignment checked.\n' +
// 								'Thorough cleaning of the vehicle post-installation.'
// 							],
// 							info: {

// 							},
// 						},
// 						{
// 							title: '4. Customer Orientation',
// 							techs: [
// 								'Practical demonstration on hitch use and maintenance provided during handover.'
// 							],
// 							info: {

// 							},
// 						},
// 						{
// 							title: '5. Aftercare',
// 							techs: [
// 								'Continuous support and follow-up services available as needed.'
// 							],
// 							info: {

// 							},
// 						},

// 						{
// 							title: 'End-Note ',
// 							techs: [
// 								'Capital Upfitters guarantees a streamlined, high-quality installation process, ensuring your 2023 Audi Allroad\'s Stealth Hitch is perfectly fitted with attention to detail, functionality, and aesthetic preservation.'
// 							],
// 							info: {

// 							},
// 						},

// 					],



// 					Technologies: [
// 						{
// 							title: '2023 Audi Allroad Stealth Hitch Integration',
// 							techs: [
// 								'Our process for the 2023 Audi Allroad Stealth Hitch installation (Rack Only with 2" receiver) is meticulously designed to ensure functionality, safety, and seamless integration with your vehicle\'s original design. At Capital Upfitters, we specialize in customized, high-quality installations that prioritize your vehicle\'s integrity and aesthetics.'
// 							],
// 						},
// 					],
// 					ProjectDetailsHeading: 'Why us',
// 					ProjectDetails: [
// 						{
// 							id: uuidv4(),
// 							details:
// 								'Welcome to Capital Upfitters, the family-owned epicenter of top-tier auto customization, vehicle preservation, and performance enhancements. With a heritage of over 35 years in the industry, we proudly deliver unparalleled fleet customization services and robust protection coatings to a diverse range of clients, from municipal to retail sectors. Our reputation as a trailblazer stems from our continuous commitment to superior craftsmanship, delivering innovative auto customization and performance solutions that truly redefine automotive excellence.',
// 						},
// 						{
// 							id: uuidv4(),
// 							details:
// 								'We\'re not just about personal vehicles, our commitment to deliver exceptional service spans across government, commercial, and residential projects. Every vehicle that rolls into our shop receives the same degree of attention and commitment to quality. For additional information about our services at Capital Upfitters or to discuss your specific customization and performance enhancement needs, we welcome you to reach us at 301-304-1419 or explore our webpage. Choose Capital Upfitters for an automotive experience that goes beyond service to deliver a transformation, redefining your ride.',
// 						}
// 					],

// 				},


// 			},
// 			{
// 				id: uuidv4(),
// 				brand: 'Volkswagen',
// 				imageSrc: "/portfolio/wheels-tires/wt5.jpg",
// 				gallery: [
// 					{
// 						id: uuidv4(),
// 						title: 'Volkswagen',
// 						imageSrc: "/portfolio/wheels-tires/wt5.jpg",
// 					},
// 				],
// 				ProjectInfo: {
// 					ClientHeading: 'Audi',
// 					CompanyInfo: [
// 						{
// 							id: uuidv4(),
// 							title: 'Company',
// 							details: 'CAPITAL UPFITTERS',
// 						},
// 						{
// 							id: uuidv4(),
// 							title: 'Services',
// 							details: 'Ceramic Coatings',
// 						},
// 						{
// 							id: uuidv4(),
// 							title: 'Phone',
// 							details: '301-304-1419',
// 						},
// 					],
// 					ObjectivesHeading:'Audi',
// 					titleHead: 'Stealth Hitch Installation for 2023 Audi Allroad - Quick Overview',
// 					ObjectivesDetails: [
// 						{
// 							title: '1. Preparation',
// 							techs: [
// 								'Vehicle and work area prepped to protect against damage.' +
// 								'Brief customer consultation for personalized service.',
// 							],

// 						},
// 						{
// 							title: '2. Installation ',
// 							techs: [
// 								'Step 1: Careful removal of the rear bumper.',
// 								'Step 2: Precise installation of the Stealth Hitch, with all hardware secured to factory standards.',
// 								'Step 3: Trimming of lower fascia and application of edge guard for safety and aesthetics.',
// 								'Step 4: Relocation and recalibration of the kick sensor per OEM guidelines.',
// 							],
// 							info: {

// 							},
// 						},
// 						{
// 							title: '3. Finalizing',
// 							techs: [
// 								'Bumper carefully reattached and alignment checked.\n' +
// 								'Thorough cleaning of the vehicle post-installation.'
// 							],
// 							info: {

// 							},
// 						},
// 						{
// 							title: '4. Customer Orientation',
// 							techs: [
// 								'Practical demonstration on hitch use and maintenance provided during handover.'
// 							],
// 							info: {

// 							},
// 						},
// 						{
// 							title: '5. Aftercare',
// 							techs: [
// 								'Continuous support and follow-up services available as needed.'
// 							],
// 							info: {

// 							},
// 						},

// 						{
// 							title: 'End-Note ',
// 							techs: [
// 								'Capital Upfitters guarantees a streamlined, high-quality installation process, ensuring your 2023 Audi Allroad\'s Stealth Hitch is perfectly fitted with attention to detail, functionality, and aesthetic preservation.'
// 							],
// 							info: {

// 							},
// 						},

// 					],



// 					Technologies: [
// 						{
// 							title: '2023 Audi Allroad Stealth Hitch Integration',
// 							techs: [
// 								'Our process for the 2023 Audi Allroad Stealth Hitch installation (Rack Only with 2" receiver) is meticulously designed to ensure functionality, safety, and seamless integration with your vehicle\'s original design. At Capital Upfitters, we specialize in customized, high-quality installations that prioritize your vehicle\'s integrity and aesthetics.'
// 							],
// 						},
// 					],
// 					ProjectDetailsHeading: 'Why us',
// 					ProjectDetails: [
// 						{
// 							id: uuidv4(),
// 							details:
// 								'Welcome to Capital Upfitters, the family-owned epicenter of top-tier auto customization, vehicle preservation, and performance enhancements. With a heritage of over 35 years in the industry, we proudly deliver unparalleled fleet customization services and robust protection coatings to a diverse range of clients, from municipal to retail sectors. Our reputation as a trailblazer stems from our continuous commitment to superior craftsmanship, delivering innovative auto customization and performance solutions that truly redefine automotive excellence.',
// 						},
// 						{
// 							id: uuidv4(),
// 							details:
// 								'We\'re not just about personal vehicles, our commitment to deliver exceptional service spans across government, commercial, and residential projects. Every vehicle that rolls into our shop receives the same degree of attention and commitment to quality. For additional information about our services at Capital Upfitters or to discuss your specific customization and performance enhancement needs, we welcome you to reach us at 301-304-1419 or explore our webpage. Choose Capital Upfitters for an automotive experience that goes beyond service to deliver a transformation, redefining your ride.',
// 						}
// 					],

// 				},


// 			},
// 			{
// 				id: uuidv4(),
// 				brand: 'Jeep',
// 				imageSrc: "/portfolio/wheels-tires/wt16.jpg",
// 				gallery: [
// 					{
// 						id: uuidv4(),
// 						title: 'Jeep',
// 						imageSrc: "/portfolio/wheels-tires/wt17.jpg",
// 					},
// 					{
// 						id: uuidv4(),
// 						title:'Jeep',
// 						imageSrc: "/portfolio/wheels-tires/wt18.jpg",
// 					},
// 					{
// 						id: uuidv4(),
// 						title: 'Jeep',
// 						imageSrc: "/portfolio/wheels-tires/wt25.jpg",
// 					},

// 				],
// 				ProjectInfo: {
// 					ClientHeading: 'Audi',
// 					CompanyInfo: [
// 						{
// 							id: uuidv4(),
// 							title: 'Company',
// 							details: 'CAPITAL UPFITTERS',
// 						},
// 						{
// 							id: uuidv4(),
// 							title: 'Services',
// 							details: 'Ceramic Coatings',
// 						},
// 						{
// 							id: uuidv4(),
// 							title: 'Phone',
// 							details: '301-304-1419',
// 						},
// 					],
// 					ObjectivesHeading:'Audi',
// 					titleHead: 'Stealth Hitch Installation for 2023 Audi Allroad - Quick Overview',
// 					ObjectivesDetails: [
// 						{
// 							title: '1. Preparation',
// 							techs: [
// 								'Vehicle and work area prepped to protect against damage.' +
// 								'Brief customer consultation for personalized service.',
// 							],

// 						},
// 						{
// 							title: '2. Installation ',
// 							techs: [
// 								'Step 1: Careful removal of the rear bumper.',
// 								'Step 2: Precise installation of the Stealth Hitch, with all hardware secured to factory standards.',
// 								'Step 3: Trimming of lower fascia and application of edge guard for safety and aesthetics.',
// 								'Step 4: Relocation and recalibration of the kick sensor per OEM guidelines.',
// 							],
// 							info: {

// 							},
// 						},
// 						{
// 							title: '3. Finalizing',
// 							techs: [
// 								'Bumper carefully reattached and alignment checked.\n' +
// 								'Thorough cleaning of the vehicle post-installation.'
// 							],
// 							info: {

// 							},
// 						},
// 						{
// 							title: '4. Customer Orientation',
// 							techs: [
// 								'Practical demonstration on hitch use and maintenance provided during handover.'
// 							],
// 							info: {

// 							},
// 						},
// 						{
// 							title: '5. Aftercare',
// 							techs: [
// 								'Continuous support and follow-up services available as needed.'
// 							],
// 							info: {

// 							},
// 						},

// 						{
// 							title: 'End-Note ',
// 							techs: [
// 								'Capital Upfitters guarantees a streamlined, high-quality installation process, ensuring your 2023 Audi Allroad\'s Stealth Hitch is perfectly fitted with attention to detail, functionality, and aesthetic preservation.'
// 							],
// 							info: {

// 							},
// 						},

// 					],



// 					Technologies: [
// 						{
// 							title: '2023 Audi Allroad Stealth Hitch Integration',
// 							techs: [
// 								'Our process for the 2023 Audi Allroad Stealth Hitch installation (Rack Only with 2" receiver) is meticulously designed to ensure functionality, safety, and seamless integration with your vehicle\'s original design. At Capital Upfitters, we specialize in customized, high-quality installations that prioritize your vehicle\'s integrity and aesthetics.'
// 							],
// 						},
// 					],
// 					ProjectDetailsHeading: 'Why us',
// 					ProjectDetails: [
// 						{
// 							id: uuidv4(),
// 							details:
// 								'Welcome to Capital Upfitters, the family-owned epicenter of top-tier auto customization, vehicle preservation, and performance enhancements. With a heritage of over 35 years in the industry, we proudly deliver unparalleled fleet customization services and robust protection coatings to a diverse range of clients, from municipal to retail sectors. Our reputation as a trailblazer stems from our continuous commitment to superior craftsmanship, delivering innovative auto customization and performance solutions that truly redefine automotive excellence.',
// 						},
// 						{
// 							id: uuidv4(),
// 							details:
// 								'We\'re not just about personal vehicles, our commitment to deliver exceptional service spans across government, commercial, and residential projects. Every vehicle that rolls into our shop receives the same degree of attention and commitment to quality. For additional information about our services at Capital Upfitters or to discuss your specific customization and performance enhancement needs, we welcome you to reach us at 301-304-1419 or explore our webpage. Choose Capital Upfitters for an automotive experience that goes beyond service to deliver a transformation, redefining your ride.',
// 						}
// 					],

// 				},


// 			},
// 			{
// 				id: uuidv4(),
// 				brand: 'Ford',
// 				imageSrc: "/portfolio/wheels-tires/wt6.jpg",
// 				gallery: [
// 					{
// 						id: uuidv4(),
// 						title: 'Ford',
// 						imageSrc: "/portfolio/wheels-tires/wt6.jpg",
// 					},
// 					{
// 						id: uuidv4(),
// 						title:'Ford',
// 						imageSrc: "/portfolio/wheels-tires/wt7.jpg",
// 					},
// 					{
// 						id: uuidv4(),
// 						title:'Ford',
// 						imageSrc: "/portfolio/wheels-tires/wt14.jpg",
// 					},
// 					{
// 						id: uuidv4(),
// 						title:'Ford',
// 						imageSrc: "/portfolio/wheels-tires/wt15.jpg",
// 					},
// 					{
// 						id: uuidv4(),
// 						title:'Ford',
// 						imageSrc: "/portfolio/wheels-tires/wt19.jpg",
// 					},
// 					{
// 						id: uuidv4(),
// 						title:'Ford',
// 						imageSrc: "/portfolio/wheels-tires/wt20.jpg",
// 					},

// 					{
// 						id: uuidv4(),
// 						title: 'Ford',
// 						imageSrc: "/portfolio/wheels-tires/wt36.jpg",
// 					},

// 					{
// 						id: uuidv4(),
// 						title: 'Ford',
// 						imageSrc: "/portfolio/wheels-tires/wt38.jpg",
// 					},
// 					{
// 						id: uuidv4(),
// 						title:'Ford',
// 						imageSrc: "/portfolio/wheels-tires/wt24.jpg",
// 					},
// 					{
// 						id: uuidv4(),
// 						title: 'Ford',
// 						imageSrc: "/portfolio/wheels-tires/wt68.jpg",
// 					},
// 					{
// 						id: uuidv4(),
// 						title: 'Ford',
// 						imageSrc: "/portfolio/wheels-tires/wt50.jpg",
// 					},
// 					{
// 						id: uuidv4(),
// 						title: 'Ford',
// 						imageSrc: "/portfolio/wheels-tires/wt51.jpg",
// 					},


// 					{
// 						id: uuidv4(),
// 						title: 'Ford',
// 						imageSrc: "/portfolio/wheels-tires/wt63.jpg",
// 					},
// 					{
// 						id: uuidv4(),
// 						title: 'Ford',
// 						imageSrc: "/portfolio/wheels-tires/wt65.jpg",
// 					},
// 					{
// 						id: uuidv4(),
// 						title: 'Ford',
// 						imageSrc: "/portfolio/wheels-tires/wt67.jpg",
// 					},


// 				],
// 				ProjectInfo: {
// 					ClientHeading: 'Audi',
// 					CompanyInfo: [
// 						{
// 							id: uuidv4(),
// 							title: 'Company',
// 							details: 'CAPITAL UPFITTERS',
// 						},
// 						{
// 							id: uuidv4(),
// 							title: 'Services',
// 							details: 'Ceramic Coatings',
// 						},
// 						{
// 							id: uuidv4(),
// 							title: 'Phone',
// 							details: '301-304-1419',
// 						},
// 					],
// 					ObjectivesHeading:'Audi',
// 					titleHead: 'Stealth Hitch Installation for 2023 Audi Allroad - Quick Overview',
// 					ObjectivesDetails: [
// 						{
// 							title: '1. Preparation',
// 							techs: [
// 								'Vehicle and work area prepped to protect against damage.' +
// 								'Brief customer consultation for personalized service.',
// 							],

// 						},
// 						{
// 							title: '2. Installation ',
// 							techs: [
// 								'Step 1: Careful removal of the rear bumper.',
// 								'Step 2: Precise installation of the Stealth Hitch, with all hardware secured to factory standards.',
// 								'Step 3: Trimming of lower fascia and application of edge guard for safety and aesthetics.',
// 								'Step 4: Relocation and recalibration of the kick sensor per OEM guidelines.',
// 							],
// 							info: {

// 							},
// 						},
// 						{
// 							title: '3. Finalizing',
// 							techs: [
// 								'Bumper carefully reattached and alignment checked.\n' +
// 								'Thorough cleaning of the vehicle post-installation.'
// 							],
// 							info: {

// 							},
// 						},
// 						{
// 							title: '4. Customer Orientation',
// 							techs: [
// 								'Practical demonstration on hitch use and maintenance provided during handover.'
// 							],
// 							info: {

// 							},
// 						},
// 						{
// 							title: '5. Aftercare',
// 							techs: [
// 								'Continuous support and follow-up services available as needed.'
// 							],
// 							info: {

// 							},
// 						},

// 						{
// 							title: 'End-Note ',
// 							techs: [
// 								'Capital Upfitters guarantees a streamlined, high-quality installation process, ensuring your 2023 Audi Allroad\'s Stealth Hitch is perfectly fitted with attention to detail, functionality, and aesthetic preservation.'
// 							],
// 							info: {

// 							},
// 						},

// 					],



// 					Technologies: [
// 						{
// 							title: '2023 Audi Allroad Stealth Hitch Integration',
// 							techs: [
// 								'Our process for the 2023 Audi Allroad Stealth Hitch installation (Rack Only with 2" receiver) is meticulously designed to ensure functionality, safety, and seamless integration with your vehicle\'s original design. At Capital Upfitters, we specialize in customized, high-quality installations that prioritize your vehicle\'s integrity and aesthetics.'
// 							],
// 						},
// 					],
// 					ProjectDetailsHeading: 'Why us',
// 					ProjectDetails: [
// 						{
// 							id: uuidv4(),
// 							details:
// 								'Welcome to Capital Upfitters, the family-owned epicenter of top-tier auto customization, vehicle preservation, and performance enhancements. With a heritage of over 35 years in the industry, we proudly deliver unparalleled fleet customization services and robust protection coatings to a diverse range of clients, from municipal to retail sectors. Our reputation as a trailblazer stems from our continuous commitment to superior craftsmanship, delivering innovative auto customization and performance solutions that truly redefine automotive excellence.',
// 						},
// 						{
// 							id: uuidv4(),
// 							details:
// 								'We\'re not just about personal vehicles, our commitment to deliver exceptional service spans across government, commercial, and residential projects. Every vehicle that rolls into our shop receives the same degree of attention and commitment to quality. For additional information about our services at Capital Upfitters or to discuss your specific customization and performance enhancement needs, we welcome you to reach us at 301-304-1419 or explore our webpage. Choose Capital Upfitters for an automotive experience that goes beyond service to deliver a transformation, redefining your ride.',
// 						}
// 					],

// 				},


// 			},
// 			{
// 				id: uuidv4(),
// 				brand: 'Toyota',
// 				imageSrc: "/portfolio/wheels-tires/wt8.jpg",
// 				gallery: [
// 					{
// 						id: uuidv4(),
// 						title: 'Toyota',
// 						imageSrc: "/portfolio/wheels-tires/wt8.jpg",
// 					},
// 					{
// 						id: uuidv4(),
// 						title:'Toyota',
// 						imageSrc: "/portfolio/wheels-tires/wt9.jpg",
// 					},
// 					{
// 						id: uuidv4(),
// 						title:'Toyota',
// 						imageSrc: "/portfolio/wheels-tires/wt10.jpg",
// 					},


// 				],
// 				ProjectInfo: {
// 					ClientHeading: 'Audi',
// 					CompanyInfo: [
// 						{
// 							id: uuidv4(),
// 							title: 'Company',
// 							details: 'CAPITAL UPFITTERS',
// 						},
// 						{
// 							id: uuidv4(),
// 							title: 'Services',
// 							details: 'Ceramic Coatings',
// 						},
// 						{
// 							id: uuidv4(),
// 							title: 'Phone',
// 							details: '301-304-1419',
// 						},
// 					],
// 					ObjectivesHeading:'Audi',
// 					titleHead: 'Stealth Hitch Installation for 2023 Audi Allroad - Quick Overview',
// 					ObjectivesDetails: [
// 						{
// 							title: '1. Preparation',
// 							techs: [
// 								'Vehicle and work area prepped to protect against damage.' +
// 								'Brief customer consultation for personalized service.',
// 							],

// 						},
// 						{
// 							title: '2. Installation ',
// 							techs: [
// 								'Step 1: Careful removal of the rear bumper.',
// 								'Step 2: Precise installation of the Stealth Hitch, with all hardware secured to factory standards.',
// 								'Step 3: Trimming of lower fascia and application of edge guard for safety and aesthetics.',
// 								'Step 4: Relocation and recalibration of the kick sensor per OEM guidelines.',
// 							],
// 							info: {

// 							},
// 						},
// 						{
// 							title: '3. Finalizing',
// 							techs: [
// 								'Bumper carefully reattached and alignment checked.\n' +
// 								'Thorough cleaning of the vehicle post-installation.'
// 							],
// 							info: {

// 							},
// 						},
// 						{
// 							title: '4. Customer Orientation',
// 							techs: [
// 								'Practical demonstration on hitch use and maintenance provided during handover.'
// 							],
// 							info: {

// 							},
// 						},
// 						{
// 							title: '5. Aftercare',
// 							techs: [
// 								'Continuous support and follow-up services available as needed.'
// 							],
// 							info: {

// 							},
// 						},

// 						{
// 							title: 'End-Note ',
// 							techs: [
// 								'Capital Upfitters guarantees a streamlined, high-quality installation process, ensuring your 2023 Audi Allroad\'s Stealth Hitch is perfectly fitted with attention to detail, functionality, and aesthetic preservation.'
// 							],
// 							info: {

// 							},
// 						},

// 					],



// 					Technologies: [
// 						{
// 							title: '2023 Audi Allroad Stealth Hitch Integration',
// 							techs: [
// 								'Our process for the 2023 Audi Allroad Stealth Hitch installation (Rack Only with 2" receiver) is meticulously designed to ensure functionality, safety, and seamless integration with your vehicle\'s original design. At Capital Upfitters, we specialize in customized, high-quality installations that prioritize your vehicle\'s integrity and aesthetics.'
// 							],
// 						},
// 					],
// 					ProjectDetailsHeading: 'Why us',
// 					ProjectDetails: [
// 						{
// 							id: uuidv4(),
// 							details:
// 								'Welcome to Capital Upfitters, the family-owned epicenter of top-tier auto customization, vehicle preservation, and performance enhancements. With a heritage of over 35 years in the industry, we proudly deliver unparalleled fleet customization services and robust protection coatings to a diverse range of clients, from municipal to retail sectors. Our reputation as a trailblazer stems from our continuous commitment to superior craftsmanship, delivering innovative auto customization and performance solutions that truly redefine automotive excellence.',
// 						},
// 						{
// 							id: uuidv4(),
// 							details:
// 								'We\'re not just about personal vehicles, our commitment to deliver exceptional service spans across government, commercial, and residential projects. Every vehicle that rolls into our shop receives the same degree of attention and commitment to quality. For additional information about our services at Capital Upfitters or to discuss your specific customization and performance enhancement needs, we welcome you to reach us at 301-304-1419 or explore our webpage. Choose Capital Upfitters for an automotive experience that goes beyond service to deliver a transformation, redefining your ride.',
// 						}
// 					],

// 				},


// 			},
// 			{
// 				id: uuidv4(),
// 				brand: 'Chevrolet',
// 				imageSrc: "/portfolio/wheels-tires/wt4.jpg",
// 				gallery: [
// 					{
// 						id: uuidv4(),
// 						title: 'Chevrolet',
// 						imageSrc: "/portfolio/wheels-tires/wt4.jpg",
// 					},

// 				],
// 				ProjectInfo: {
// 					ClientHeading: 'Audi',
// 					CompanyInfo: [
// 						{
// 							id: uuidv4(),
// 							title: 'Company',
// 							details: 'CAPITAL UPFITTERS',
// 						},
// 						{
// 							id: uuidv4(),
// 							title: 'Services',
// 							details: 'Ceramic Coatings',
// 						},
// 						{
// 							id: uuidv4(),
// 							title: 'Phone',
// 							details: '301-304-1419',
// 						},
// 					],
// 					ObjectivesHeading:'Audi',
// 					titleHead: 'Stealth Hitch Installation for 2023 Audi Allroad - Quick Overview',
// 					ObjectivesDetails: [
// 						{
// 							title: '1. Preparation',
// 							techs: [
// 								'Vehicle and work area prepped to protect against damage.' +
// 								'Brief customer consultation for personalized service.',
// 							],

// 						},
// 						{
// 							title: '2. Installation ',
// 							techs: [
// 								'Step 1: Careful removal of the rear bumper.',
// 								'Step 2: Precise installation of the Stealth Hitch, with all hardware secured to factory standards.',
// 								'Step 3: Trimming of lower fascia and application of edge guard for safety and aesthetics.',
// 								'Step 4: Relocation and recalibration of the kick sensor per OEM guidelines.',
// 							],
// 							info: {

// 							},
// 						},
// 						{
// 							title: '3. Finalizing',
// 							techs: [
// 								'Bumper carefully reattached and alignment checked.\n' +
// 								'Thorough cleaning of the vehicle post-installation.'
// 							],
// 							info: {

// 							},
// 						},
// 						{
// 							title: '4. Customer Orientation',
// 							techs: [
// 								'Practical demonstration on hitch use and maintenance provided during handover.'
// 							],
// 							info: {

// 							},
// 						},
// 						{
// 							title: '5. Aftercare',
// 							techs: [
// 								'Continuous support and follow-up services available as needed.'
// 							],
// 							info: {

// 							},
// 						},

// 						{
// 							title: 'End-Note ',
// 							techs: [
// 								'Capital Upfitters guarantees a streamlined, high-quality installation process, ensuring your 2023 Audi Allroad\'s Stealth Hitch is perfectly fitted with attention to detail, functionality, and aesthetic preservation.'
// 							],
// 							info: {

// 							},
// 						},

// 					],



// 					Technologies: [
// 						{
// 							title: '2023 Audi Allroad Stealth Hitch Integration',
// 							techs: [
// 								'Our process for the 2023 Audi Allroad Stealth Hitch installation (Rack Only with 2" receiver) is meticulously designed to ensure functionality, safety, and seamless integration with your vehicle\'s original design. At Capital Upfitters, we specialize in customized, high-quality installations that prioritize your vehicle\'s integrity and aesthetics.'
// 							],
// 						},
// 					],
// 					ProjectDetailsHeading: 'Why us',
// 					ProjectDetails: [
// 						{
// 							id: uuidv4(),
// 							details:
// 								'Welcome to Capital Upfitters, the family-owned epicenter of top-tier auto customization, vehicle preservation, and performance enhancements. With a heritage of over 35 years in the industry, we proudly deliver unparalleled fleet customization services and robust protection coatings to a diverse range of clients, from municipal to retail sectors. Our reputation as a trailblazer stems from our continuous commitment to superior craftsmanship, delivering innovative auto customization and performance solutions that truly redefine automotive excellence.',
// 						},
// 						{
// 							id: uuidv4(),
// 							details:
// 								'We\'re not just about personal vehicles, our commitment to deliver exceptional service spans across government, commercial, and residential projects. Every vehicle that rolls into our shop receives the same degree of attention and commitment to quality. For additional information about our services at Capital Upfitters or to discuss your specific customization and performance enhancement needs, we welcome you to reach us at 301-304-1419 or explore our webpage. Choose Capital Upfitters for an automotive experience that goes beyond service to deliver a transformation, redefining your ride.',
// 						}
// 					],

// 				},


// 			},
// 			{
// 				id: uuidv4(),
// 				brand: 'Nisan',
// 				imageSrc: "/portfolio/wheels-tires/wt22.jpg",
// 				gallery: [
// 					{
// 						id: uuidv4(),
// 						title: 'Nisan',
// 						imageSrc: "/portfolio/wheels-tires/wt23.jpg",
// 					},
// 				],
// 				ProjectInfo: {
// 					ClientHeading: 'Audi',
// 					CompanyInfo: [
// 						{
// 							id: uuidv4(),
// 							title: 'Company',
// 							details: 'CAPITAL UPFITTERS',
// 						},
// 						{
// 							id: uuidv4(),
// 							title: 'Services',
// 							details: 'Ceramic Coatings',
// 						},
// 						{
// 							id: uuidv4(),
// 							title: 'Phone',
// 							details: '301-304-1419',
// 						},
// 					],
// 					ObjectivesHeading:'Audi',
// 					titleHead: 'Stealth Hitch Installation for 2023 Audi Allroad - Quick Overview',
// 					ObjectivesDetails: [
// 						{
// 							title: '1. Preparation',
// 							techs: [
// 								'Vehicle and work area prepped to protect against damage.' +
// 								'Brief customer consultation for personalized service.',
// 							],

// 						},
// 						{
// 							title: '2. Installation ',
// 							techs: [
// 								'Step 1: Careful removal of the rear bumper.',
// 								'Step 2: Precise installation of the Stealth Hitch, with all hardware secured to factory standards.',
// 								'Step 3: Trimming of lower fascia and application of edge guard for safety and aesthetics.',
// 								'Step 4: Relocation and recalibration of the kick sensor per OEM guidelines.',
// 							],
// 							info: {

// 							},
// 						},
// 						{
// 							title: '3. Finalizing',
// 							techs: [
// 								'Bumper carefully reattached and alignment checked.\n' +
// 								'Thorough cleaning of the vehicle post-installation.'
// 							],
// 							info: {

// 							},
// 						},
// 						{
// 							title: '4. Customer Orientation',
// 							techs: [
// 								'Practical demonstration on hitch use and maintenance provided during handover.'
// 							],
// 							info: {

// 							},
// 						},
// 						{
// 							title: '5. Aftercare',
// 							techs: [
// 								'Continuous support and follow-up services available as needed.'
// 							],
// 							info: {

// 							},
// 						},

// 						{
// 							title: 'End-Note ',
// 							techs: [
// 								'Capital Upfitters guarantees a streamlined, high-quality installation process, ensuring your 2023 Audi Allroad\'s Stealth Hitch is perfectly fitted with attention to detail, functionality, and aesthetic preservation.'
// 							],
// 							info: {

// 							},
// 						},

// 					],



// 					Technologies: [
// 						{
// 							title: '2023 Audi Allroad Stealth Hitch Integration',
// 							techs: [
// 								'Our process for the 2023 Audi Allroad Stealth Hitch installation (Rack Only with 2" receiver) is meticulously designed to ensure functionality, safety, and seamless integration with your vehicle\'s original design. At Capital Upfitters, we specialize in customized, high-quality installations that prioritize your vehicle\'s integrity and aesthetics.'
// 							],
// 						},
// 					],
// 					ProjectDetailsHeading: 'Why us',
// 					ProjectDetails: [
// 						{
// 							id: uuidv4(),
// 							details:
// 								'Welcome to Capital Upfitters, the family-owned epicenter of top-tier auto customization, vehicle preservation, and performance enhancements. With a heritage of over 35 years in the industry, we proudly deliver unparalleled fleet customization services and robust protection coatings to a diverse range of clients, from municipal to retail sectors. Our reputation as a trailblazer stems from our continuous commitment to superior craftsmanship, delivering innovative auto customization and performance solutions that truly redefine automotive excellence.',
// 						},
// 						{
// 							id: uuidv4(),
// 							details:
// 								'We\'re not just about personal vehicles, our commitment to deliver exceptional service spans across government, commercial, and residential projects. Every vehicle that rolls into our shop receives the same degree of attention and commitment to quality. For additional information about our services at Capital Upfitters or to discuss your specific customization and performance enhancement needs, we welcome you to reach us at 301-304-1419 or explore our webpage. Choose Capital Upfitters for an automotive experience that goes beyond service to deliver a transformation, redefining your ride.',
// 						}
// 					],

// 				},


// 			},
// 			{
// 				id: uuidv4(),
// 				brand: 'Bronco',
// 				imageSrc: "/portfolio/wheels-tires/wt30.jpg",
// 				gallery: [
// 					{
// 						id: uuidv4(),
// 						title: 'Bronco',
// 						imageSrc: "/portfolio/wheels-tires/wt27.jpg",
// 					},
// 					{
// 						id: uuidv4(),
// 						title: 'Bronco',
// 						imageSrc: "/portfolio/wheels-tires/wt30.jpg",
// 					},
// 					{
// 						id: uuidv4(),
// 						title: 'Bronco',
// 						imageSrc: "/portfolio/wheels-tires/wt29.jpg",
// 					},
// 					{
// 						id: uuidv4(),
// 						title: 'Bronco',
// 						imageSrc: "/portfolio/wheels-tires/wt30.jpg",
// 					},
// 					{
// 						id: uuidv4(),
// 						title: 'Bronco',
// 						imageSrc: "/portfolio/wheels-tires/wt31.jpg",
// 					},
// 					{
// 						id: uuidv4(),
// 						title: 'Bronco',
// 						imageSrc: "/portfolio/wheels-tires/wt32.jpg",
// 					},
// 					{
// 						id: uuidv4(),
// 						title: 'Bronco',
// 						imageSrc: "/portfolio/wheels-tires/wt33.jpg",
// 					},
// 					{
// 						id: uuidv4(),
// 						title: 'Bronco',
// 						imageSrc: "/portfolio/wheels-tires/wt35.jpg",
// 					},
// 					{
// 						id: uuidv4(),
// 						title: 'Bronco',
// 						imageSrc: "/portfolio/wheels-tires/wt40.jpg",
// 					},
// 					{
// 						id: uuidv4(),
// 						title: 'Bronco',
// 						imageSrc: "/portfolio/wheels-tires/wt47.jpg",
// 					},
// 					{
// 						id: uuidv4(),
// 						title: 'Bronco',
// 						imageSrc: "/portfolio/wheels-tires/wt48.jpg",
// 					},
// 					{
// 						id: uuidv4(),
// 						title: 'Bronco',
// 						imageSrc: "/portfolio/wheels-tires/wt49.jpg",
// 					},
// 				],
// 				ProjectInfo: {
// 					ClientHeading: 'Audi',
// 					CompanyInfo: [
// 						{
// 							id: uuidv4(),
// 							title: 'Company',
// 							details: 'CAPITAL UPFITTERS',
// 						},
// 						{
// 							id: uuidv4(),
// 							title: 'Services',
// 							details: 'Ceramic Coatings',
// 						},
// 						{
// 							id: uuidv4(),
// 							title: 'Phone',
// 							details: '301-304-1419',
// 						},
// 					],
// 					ObjectivesHeading:'Audi',
// 					titleHead: 'Stealth Hitch Installation for 2023 Audi Allroad - Quick Overview',
// 					ObjectivesDetails: [
// 						{
// 							title: '1. Preparation',
// 							techs: [
// 								'Vehicle and work area prepped to protect against damage.' +
// 								'Brief customer consultation for personalized service.',
// 							],

// 						},
// 						{
// 							title: '2. Installation ',
// 							techs: [
// 								'Step 1: Careful removal of the rear bumper.',
// 								'Step 2: Precise installation of the Stealth Hitch, with all hardware secured to factory standards.',
// 								'Step 3: Trimming of lower fascia and application of edge guard for safety and aesthetics.',
// 								'Step 4: Relocation and recalibration of the kick sensor per OEM guidelines.',
// 							],
// 							info: {

// 							},
// 						},
// 						{
// 							title: '3. Finalizing',
// 							techs: [
// 								'Bumper carefully reattached and alignment checked.\n' +
// 								'Thorough cleaning of the vehicle post-installation.'
// 							],
// 							info: {

// 							},
// 						},
// 						{
// 							title: '4. Customer Orientation',
// 							techs: [
// 								'Practical demonstration on hitch use and maintenance provided during handover.'
// 							],
// 							info: {

// 							},
// 						},
// 						{
// 							title: '5. Aftercare',
// 							techs: [
// 								'Continuous support and follow-up services available as needed.'
// 							],
// 							info: {

// 							},
// 						},

// 						{
// 							title: 'End-Note ',
// 							techs: [
// 								'Capital Upfitters guarantees a streamlined, high-quality installation process, ensuring your 2023 Audi Allroad\'s Stealth Hitch is perfectly fitted with attention to detail, functionality, and aesthetic preservation.'
// 							],
// 							info: {

// 							},
// 						},

// 					],



// 					Technologies: [
// 						{
// 							title: '2023 Audi Allroad Stealth Hitch Integration',
// 							techs: [
// 								'Our process for the 2023 Audi Allroad Stealth Hitch installation (Rack Only with 2" receiver) is meticulously designed to ensure functionality, safety, and seamless integration with your vehicle\'s original design. At Capital Upfitters, we specialize in customized, high-quality installations that prioritize your vehicle\'s integrity and aesthetics.'
// 							],
// 						},
// 					],
// 					ProjectDetailsHeading: 'Why us',
// 					ProjectDetails: [
// 						{
// 							id: uuidv4(),
// 							details:
// 								'Welcome to Capital Upfitters, the family-owned epicenter of top-tier auto customization, vehicle preservation, and performance enhancements. With a heritage of over 35 years in the industry, we proudly deliver unparalleled fleet customization services and robust protection coatings to a diverse range of clients, from municipal to retail sectors. Our reputation as a trailblazer stems from our continuous commitment to superior craftsmanship, delivering innovative auto customization and performance solutions that truly redefine automotive excellence.',
// 						},
// 						{
// 							id: uuidv4(),
// 							details:
// 								'We\'re not just about personal vehicles, our commitment to deliver exceptional service spans across government, commercial, and residential projects. Every vehicle that rolls into our shop receives the same degree of attention and commitment to quality. For additional information about our services at Capital Upfitters or to discuss your specific customization and performance enhancement needs, we welcome you to reach us at 301-304-1419 or explore our webpage. Choose Capital Upfitters for an automotive experience that goes beyond service to deliver a transformation, redefining your ride.',
// 						}
// 					],

// 				},


// 			},
// 			{
// 				id: uuidv4(),
// 				brand: 'Ram',
// 				imageSrc: "/portfolio/wheels-tires/wt43.jpg",
// 				gallery: [
// 					{
// 						id: uuidv4(),
// 						title: 'RAM',
// 						imageSrc: "/portfolio/wheels-tires/wt43.jpg",
// 					},
// 					{
// 						id: uuidv4(),
// 						title: 'RAM',
// 						imageSrc: "/portfolio/wheels-tires/wt44.jpg",
// 					},
// 					{
// 						id: uuidv4(),
// 						title: 'RAM',
// 						imageSrc: "/portfolio/wheels-tires/wt45.jpg",
// 					},
// 					{
// 						id: uuidv4(),
// 						title: 'Ram',
// 						imageSrc: "/portfolio/wheels-tires/wt55.jpg",
// 					},
// 					{
// 						id: uuidv4(),
// 						title: 'RAM',
// 						imageSrc: "/portfolio/wheels-tires/wt41.jpg",
// 					},
// 					{
// 						id: uuidv4(),
// 						title: 'Ram',
// 						imageSrc: "/portfolio/wheels-tires/wt56.jpg",
// 					},
// 					{
// 						id: uuidv4(),
// 						title: 'Ram',
// 						imageSrc: "/portfolio/wheels-tires/wt57.jpg",
// 					},
// 					{
// 						id: uuidv4(),
// 						title: 'Ram',
// 						imageSrc: "/portfolio/wheels-tires/wt58.jpg",
// 					},
// 					{
// 						id: uuidv4(),
// 						title: 'Ram',
// 						imageSrc: "/portfolio/wheels-tires/wt59.jpg",
// 					},
// 					{
// 						id: uuidv4(),
// 						title: 'Ram',
// 						imageSrc: "/portfolio/wheels-tires/wt64.jpg",
// 					},
// 					{
// 						id: uuidv4(),
// 						title: 'Ram',
// 						imageSrc: "/portfolio/wheels-tires/wt62.jpg",
// 					},
// 					{
// 						id: uuidv4(),
// 						title: 'Ram',
// 						imageSrc: "/portfolio/wheels-tires/wt66.jpg",
// 					},
// 					{
// 						id: uuidv4(),
// 						title: 'Ram',
// 						imageSrc: "/portfolio/wheels-tires/wt60.jpg",
// 					},
// 					{
// 						id: uuidv4(),
// 						title: 'Ram',
// 						imageSrc: "/portfolio/wheels-tires/wt61.jpg",
// 					},
// 				],
// 				ProjectInfo: {
// 					ClientHeading: 'Audi',
// 					CompanyInfo: [
// 						{
// 							id: uuidv4(),
// 							title: 'Company',
// 							details: 'CAPITAL UPFITTERS',
// 						},
// 						{
// 							id: uuidv4(),
// 							title: 'Services',
// 							details: 'Ceramic Coatings',
// 						},
// 						{
// 							id: uuidv4(),
// 							title: 'Phone',
// 							details: '301-304-1419',
// 						},
// 					],
// 					ObjectivesHeading:'Audi',
// 					titleHead: 'Stealth Hitch Installation for 2023 Audi Allroad - Quick Overview',
// 					ObjectivesDetails: [
// 						{
// 							title: '1. Preparation',
// 							techs: [
// 								'Vehicle and work area prepped to protect against damage.' +
// 								'Brief customer consultation for personalized service.',
// 							],

// 						},
// 						{
// 							title: '2. Installation ',
// 							techs: [
// 								'Step 1: Careful removal of the rear bumper.',
// 								'Step 2: Precise installation of the Stealth Hitch, with all hardware secured to factory standards.',
// 								'Step 3: Trimming of lower fascia and application of edge guard for safety and aesthetics.',
// 								'Step 4: Relocation and recalibration of the kick sensor per OEM guidelines.',
// 							],
// 							info: {

// 							},
// 						},
// 						{
// 							title: '3. Finalizing',
// 							techs: [
// 								'Bumper carefully reattached and alignment checked.\n' +
// 								'Thorough cleaning of the vehicle post-installation.'
// 							],
// 							info: {

// 							},
// 						},
// 						{
// 							title: '4. Customer Orientation',
// 							techs: [
// 								'Practical demonstration on hitch use and maintenance provided during handover.'
// 							],
// 							info: {

// 							},
// 						},
// 						{
// 							title: '5. Aftercare',
// 							techs: [
// 								'Continuous support and follow-up services available as needed.'
// 							],
// 							info: {

// 							},
// 						},

// 						{
// 							title: 'End-Note ',
// 							techs: [
// 								'Capital Upfitters guarantees a streamlined, high-quality installation process, ensuring your 2023 Audi Allroad\'s Stealth Hitch is perfectly fitted with attention to detail, functionality, and aesthetic preservation.'
// 							],
// 							info: {

// 							},
// 						},

// 					],



// 					Technologies: [
// 						{
// 							title: '2023 Audi Allroad Stealth Hitch Integration',
// 							techs: [
// 								'Our process for the 2023 Audi Allroad Stealth Hitch installation (Rack Only with 2" receiver) is meticulously designed to ensure functionality, safety, and seamless integration with your vehicle\'s original design. At Capital Upfitters, we specialize in customized, high-quality installations that prioritize your vehicle\'s integrity and aesthetics.'
// 							],
// 						},
// 					],
// 					ProjectDetailsHeading: 'Why us',
// 					ProjectDetails: [
// 						{
// 							id: uuidv4(),
// 							details:
// 								'Welcome to Capital Upfitters, the family-owned epicenter of top-tier auto customization, vehicle preservation, and performance enhancements. With a heritage of over 35 years in the industry, we proudly deliver unparalleled fleet customization services and robust protection coatings to a diverse range of clients, from municipal to retail sectors. Our reputation as a trailblazer stems from our continuous commitment to superior craftsmanship, delivering innovative auto customization and performance solutions that truly redefine automotive excellence.',
// 						},
// 						{
// 							id: uuidv4(),
// 							details:
// 								'We\'re not just about personal vehicles, our commitment to deliver exceptional service spans across government, commercial, and residential projects. Every vehicle that rolls into our shop receives the same degree of attention and commitment to quality. For additional information about our services at Capital Upfitters or to discuss your specific customization and performance enhancement needs, we welcome you to reach us at 301-304-1419 or explore our webpage. Choose Capital Upfitters for an automotive experience that goes beyond service to deliver a transformation, redefining your ride.',
// 						}
// 					],

// 				},


// 			},
// 			{
// 				id: uuidv4(),
// 				brand: 'Volvo',
// 				imageSrc: "/portfolio/wheels-tires/wt52.jpg",
// 				gallery: [
// 					{
// 						id: uuidv4(),
// 						title: 'Volvo',
// 						imageSrc: "/portfolio/wheels-tires/wt52.jpg",
// 					},
// 					{
// 						id: uuidv4(),
// 						title: 'Volvo',
// 						imageSrc: "/portfolio/wheels-tires/wt53.jpg",
// 					},
// 					{
// 						id: uuidv4(),
// 						title: 'Volvo',
// 						imageSrc: "/portfolio/wheels-tires/wt54.jpg",
// 					},
// 				],
// 				ProjectInfo: {
// 					ClientHeading: 'Audi',
// 					CompanyInfo: [
// 						{
// 							id: uuidv4(),
// 							title: 'Company',
// 							details: 'CAPITAL UPFITTERS',
// 						},
// 						{
// 							id: uuidv4(),
// 							title: 'Services',
// 							details: 'Ceramic Coatings',
// 						},
// 						{
// 							id: uuidv4(),
// 							title: 'Phone',
// 							details: '301-304-1419',
// 						},
// 					],
// 					ObjectivesHeading:'Audi',
// 					titleHead: 'Stealth Hitch Installation for 2023 Audi Allroad - Quick Overview',
// 					ObjectivesDetails: [
// 						{
// 							title: '1. Preparation',
// 							techs: [
// 								'Vehicle and work area prepped to protect against damage.' +
// 								'Brief customer consultation for personalized service.',
// 							],

// 						},
// 						{
// 							title: '2. Installation ',
// 							techs: [
// 								'Step 1: Careful removal of the rear bumper.',
// 								'Step 2: Precise installation of the Stealth Hitch, with all hardware secured to factory standards.',
// 								'Step 3: Trimming of lower fascia and application of edge guard for safety and aesthetics.',
// 								'Step 4: Relocation and recalibration of the kick sensor per OEM guidelines.',
// 							],
// 							info: {

// 							},
// 						},
// 						{
// 							title: '3. Finalizing',
// 							techs: [
// 								'Bumper carefully reattached and alignment checked.\n' +
// 								'Thorough cleaning of the vehicle post-installation.'
// 							],
// 							info: {

// 							},
// 						},
// 						{
// 							title: '4. Customer Orientation',
// 							techs: [
// 								'Practical demonstration on hitch use and maintenance provided during handover.'
// 							],
// 							info: {

// 							},
// 						},
// 						{
// 							title: '5. Aftercare',
// 							techs: [
// 								'Continuous support and follow-up services available as needed.'
// 							],
// 							info: {

// 							},
// 						},

// 						{
// 							title: 'End-Note ',
// 							techs: [
// 								'Capital Upfitters guarantees a streamlined, high-quality installation process, ensuring your 2023 Audi Allroad\'s Stealth Hitch is perfectly fitted with attention to detail, functionality, and aesthetic preservation.'
// 							],
// 							info: {

// 							},
// 						},

// 					],



// 					Technologies: [
// 						{
// 							title: '2023 Audi Allroad Stealth Hitch Integration',
// 							techs: [
// 								'Our process for the 2023 Audi Allroad Stealth Hitch installation (Rack Only with 2" receiver) is meticulously designed to ensure functionality, safety, and seamless integration with your vehicle\'s original design. At Capital Upfitters, we specialize in customized, high-quality installations that prioritize your vehicle\'s integrity and aesthetics.'
// 							],
// 						},
// 					],
// 					ProjectDetailsHeading: 'Why us',
// 					ProjectDetails: [
// 						{
// 							id: uuidv4(),
// 							details:
// 								'Welcome to Capital Upfitters, the family-owned epicenter of top-tier auto customization, vehicle preservation, and performance enhancements. With a heritage of over 35 years in the industry, we proudly deliver unparalleled fleet customization services and robust protection coatings to a diverse range of clients, from municipal to retail sectors. Our reputation as a trailblazer stems from our continuous commitment to superior craftsmanship, delivering innovative auto customization and performance solutions that truly redefine automotive excellence.',
// 						},
// 						{
// 							id: uuidv4(),
// 							details:
// 								'We\'re not just about personal vehicles, our commitment to deliver exceptional service spans across government, commercial, and residential projects. Every vehicle that rolls into our shop receives the same degree of attention and commitment to quality. For additional information about our services at Capital Upfitters or to discuss your specific customization and performance enhancement needs, we welcome you to reach us at 301-304-1419 or explore our webpage. Choose Capital Upfitters for an automotive experience that goes beyond service to deliver a transformation, redefining your ride.',
// 						}
// 					],

// 				},


// 			},
// 		],
// 	},
// ];
