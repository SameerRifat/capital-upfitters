// ./deskStructure.js

export const myStructure = (S) =>
    S.list()
        .title('Content')
        .items([
            S.listItem()
                .title('Services')
                .child(S.documentTypeList('service').title('Services')),
            S.listItem()
                .title('Paint Protection Service Package')
                .child(S.documentTypeList('paintProtectionService').title('Paint Protection Service Package')),
            S.listItem()
                .title('Window Tint Service')
                .child(S.documentTypeList('windowTintService').title('Window Tint Service')),
            S.listItem()
                .title('Vehicle Type')
                .child(S.documentTypeList('vehicleType').title('Vehicle Types for Window Tint Service')),
            S.divider(),
            S.listItem()
                .title('Portfolio')
                .child(S.documentTypeList('portfolio').title('Categories')),
            S.listItem()
                .title('Portfolio Vehicles')
                .child(S.documentTypeList('portfolioVehicles').title('Posts')),
            S.divider(),
            // We also need to remove the new singletons from the main list
            ...S.documentTypeListItems().filter(
                (listItem) => !['siteStats', 'portfolio', 'portfolioVehicles', 'service', 'paintProtectionService', 'windowTintService', 'vehicleType', 'aboutUs'].includes(listItem.getId())
            ),

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
                                .title('Stats')
                                .child(S.document().schemaType('siteStats').documentId('siteStats')),
                            S.listItem()
                                .title('About Us')
                                .child(S.document().schemaType('aboutUs').documentId('aboutUs')),
                            // S.listItem()
                            //     .title('Main Navigation')
                            //     .child(S.document().schemaType('navigation').documentId('navigation')),
                        ])
                ),
        ])