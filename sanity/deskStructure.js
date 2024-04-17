// ./deskStructure.js

import { orderableDocumentListDeskItem } from "@sanity/orderable-document-list";

export const myStructure = (S, context) =>
    S.list()
        .title('Content')
        .items([
            // S.listItem()
            //     .title('Services')
            //     .child(S.documentTypeList('service').title('Services')),
            orderableDocumentListDeskItem({type: 'service', title: 'Services', S, context}),
            S.listItem()
                .title('Paint Protection Service Package')
                .child(S.documentTypeList('paintProtectionService').title('Paint Protection Service Package')),
            S.listItem()
                .title('Window Tint Service')
                .child(S.documentTypeList('windowTintService').title('Window Tint Service')),
            S.listItem()
                .title('Vehicle Type')
                .child(S.documentTypeList('vehicleType').title('Vehicle Types for Window Tint Service')),
            orderableDocumentListDeskItem({type: 'accessories', title: 'Accessories', S, context}),
            orderableDocumentListDeskItem({type: 'commercialServices', title: 'Commercial Services', S, context}),
            S.divider(),
            orderableDocumentListDeskItem({type: 'portfolio', title: 'Automotive Portfolio', S, context}),
            // S.listItem()
            //     .title('Portfolio')
            //     .child(S.documentTypeList('portfolio').title('Portfolio')),
            S.listItem()
                .title('Portfolio Vehicles')
                .child(S.documentTypeList('portfolioVehicles').title('Automotive Portfolio Vehicles')),
            orderableDocumentListDeskItem({type: 'commercialPortfolio', title: 'Commercial Portfolio', S, context}),
            // S.listItem()
            //     .title('Commercial Portfolio')
            //     .child(S.documentTypeList('commercialPortfolio').title('Commercial Portfolio')),
            S.divider(),
            // We also need to remove the new singletons from the main list
            ...S.documentTypeListItems().filter(
                (listItem) => !['siteStats', 'service', 'portfolio', 'portfolioVehicles', 'paintProtectionService', 'windowTintService', 'vehicleType', 'aboutUs', 'homePage', 'automotiveHero', 'accessories', 'commercialServices', 'commercialHero', 'commercialStats', 'commercialPortfolio', 'privacyPolicy', 'footerText', 'accessoriesCatalogs', 'termsAndConditions'].includes(listItem.getId())
            ),
            orderableDocumentListDeskItem({type: 'accessoriesCatalogs', title: 'Accessories Catalogs', S, context}),

            S.divider(),

            S.listItem()
                .title('Settings')
                .child(
                    S.list()
                        // Sets a title for our new list
                        .title('Settings Documents')
                        // Add items to the array
                        // Each will pull one of our new singletons
                        .items([
                            S.listItem()
                                .title('Automotive Stats')
                                .child(S.document().schemaType('siteStats').documentId('siteStats')),
                            S.listItem()
                                .title('About Us')
                                .child(S.document().schemaType('aboutUs').documentId('aboutUs')),
                            S.listItem()
                                .title('Home')
                                .child(S.document().schemaType('homePage').documentId('homePage')),
                            S.listItem()
                                .title('Automotive')
                                .child(S.document().schemaType('automotiveHero').documentId('automotiveHero')),
                            S.listItem()
                                .title('Commercial')
                                .child(S.document().schemaType('commercialHero').documentId('commercialHero')),
                            S.listItem()
                                .title('Commercial Stats')
                                .child(S.document().schemaType('commercialStats').documentId('commercialStats')),
                            S.listItem()
                                .title('Privacy Policy')
                                .child(S.document().schemaType('privacyPolicy').documentId('privacyPolicy')),
                            S.listItem()
                                .title('Email Heading')
                                .child(S.document().schemaType('emailHeading').documentId('emailHeading')),
                            S.listItem()
                                .title('Footer Text')
                                .child(S.document().schemaType('footerText').documentId('footerText')),
                            S.listItem()
                                .title('Terms And Conditions')
                                .child(S.document().schemaType('termsAndConditions').documentId('termsAndConditions')),
                        ])
                ),
        ])