export interface Translations {
  // Navigation
  nav: {
    home: string;
    products: string;
    about: string;
    contact: string;
  };
  
  // Common
  common: {
    currency: string;
    viewDetails: string;
    backToCatalog: string;
    contactUs: string;
    getQuote: string;
    browseProducts: string;
    warranty: string;
    qualityTested: string;
    newCondition: string;
    usedCondition: string;
    refurbishedCondition: string;
    clickToRevealEmail: string;
    clickToRevealPhone: string;
    emailUs: string;
    callUs: string;
    sendUsYourInquiry: string;
    speakDirectlyWithOurTeam: string;
  };

  // Home Page
  home: {
    heroTitle: string;
    heroSubtitle: string;
    heroDescription: string;
    whyChooseTitle: string;
    whyChooseDescription: string;
    qualityTestedTitle: string;
    qualityTestedDescription: string;
    competitivePricesTitle: string;
    competitivePricesDescription: string;
    fastDeliveryTitle: string;
    fastDeliveryDescription: string;
    expertSupportTitle: string;
    expertSupportDescription: string;
    productRangeTitle: string;
    productRangeDescription: string;
    solarInvertersTitle: string;
    solarInvertersDescription: string;
    solarPanelsTitle: string;
    solarPanelsDescription: string;
    completeSystemsTitle: string;
    completeSystemsDescription: string;
    ctaTitle: string;
    ctaDescription: string;
    ctaButton: string;
    fromPrice: string;
    containerLots: string;
    volumePricing: string;
    viewAllProducts: string;
  };

  // Product Catalog
  catalog: {
    title: string;
    description: string;
    searchPlaceholder: string;
    allCategories: string;
    allConditions: string;
    inverter: string;
    panel: string;
    accessory: string;
    new: string;
    used: string;
    refurbished: string;
    showingResults: string;
    of: string;
    products: string;
    noProductsFound: string;
    noProductsDescription: string;
  };

  // Product Detail
  productDetail: {
    purchaseInfoTitle: string;
    purchaseInfoDescription: string;
    description: string;
    warrantyIncluded: string;
    technicalSpecifications: string;
    keyFeatures: string;
    interestedTitle: string;
    interestedDescription: string;
  };

  // About Page
  about: {
    title: string;
    subtitle: string;
    missionTitle: string;
    missionParagraph1: string;
    missionParagraph2: string;
    missionParagraph3: string;
    experienceYears: string;
    experienceInSolar: string;
    projectsCompleted: string;
    equipmentSupplied: string;
    valuesTitle: string;
    qualityFirstTitle: string;
    qualityFirstDescription: string;
    expertKnowledgeTitle: string;
    expertKnowledgeDescription: string;
    customerFocusTitle: string;
    customerFocusDescription: string;
    sustainableFutureTitle: string;
    sustainableFutureDescription: string;
    whatWeOfferTitle: string;
    solarInvertersOfferTitle: string;
    solarInvertersOfferDescription: string;
    solarPanelsOfferTitle: string;
    solarPanelsOfferDescription: string;
    completeSystemsOfferTitle: string;
    completeSystemsOfferDescription: string;
    whyChooseUsTitle: string;
    qualityAssurance: string;
    customerService: string;
    allUsedEquipmentTested: string;
    detailedConditionReports: string;
    transparentEquipmentHistory: string;
    expertTechnicalSupport: string;
    fastResponseTimes: string;
    competitivePricingVolumeDiscounts: string;
  };

  // Contact Page
  contact: {
    title: string;
    subtitle: string;
    getTouchTitle: string;
    businessHoursTitle: string;
    businessHoursSubtitle: string;
    mondayFriday: string;
    saturday: string;
    sunday: string;
    closed: string;
    responseTime: string;
    responseTimeDescription: string;
    serviceAreaTitle: string;
    serviceAreaSubtitle: string;
    primaryMarket: string;
    shipping: string;
    specialization: string;
    shippingDescription: string;
    howToPurchaseTitle: string;
    step1Title: string;
    step1Description: string;
    step2Title: string;
    step2Description: string;
    step3Title: string;
    step3Description: string;
    step4Title: string;
    step4Description: string;
    importantInfoTitle: string;
    termsConditionsTitle: string;
    usedEquipmentSoldAsSeen: string;
    newEquipmentWarranty: string;
    pricesExcludeShipping: string;
    paymentTermsDiscussed: string;
    inquiryIncludeTitle: string;
    specificProductQuantity: string;
    deliveryLocation: string;
    projectTimeline: string;
    technicalQuestions: string;
  };

  // Footer
  footer: {
    description: string;
    quickLinks: string;
    categories: string;
    allProducts: string;
    inverters: string;
    solarPanels: string;
    accessories: string;
    usedEquipment: string;
    kacoInverters: string;
    stringInverters: string;
    pvModules: string;
    commercialSystems: string;
    residentialSolutions: string;
    allRightsReserved: string;
    privacyPolicy: string;
    termsOfService: string;
    shippingInfo: string;
    qualityTested: string;
    certifiedEquipment: string;
    fastDelivery: string;
    solarExperts: string;
  };
}

export const translations: Record<string, Translations> = {
  en: {
    nav: {
      home: 'Home',
      products: 'Products',
      about: 'About',
      contact: 'Contact'
    },
    common: {
      currency: '€',
      viewDetails: 'View Details',
      backToCatalog: 'Back to Catalog',
      contactUs: 'Contact Us',
      getQuote: 'Get Quote',
      browseProducts: 'Browse Products',
      warranty: 'Warranty',
      qualityTested: 'Quality Tested',
      newCondition: 'New',
      usedCondition: 'Used',
      refurbishedCondition: 'Refurbished',
      clickToRevealEmail: 'Click to reveal email',
      clickToRevealPhone: 'Click to reveal phone',
      emailUs: 'Email Us',
      callUs: 'Call Us',
      sendUsYourInquiry: 'Send us your inquiry',
      speakDirectlyWithOurTeam: 'Speak directly with our team'
    },
    home: {
      heroTitle: 'Premium Solar Equipment',
      heroSubtitle: 'At Unbeatable Prices',
      heroDescription: 'Your trusted source for quality new and used solar inverters, panels, and accessories. Professional-grade equipment for residential and commercial installations.',
      whyChooseTitle: 'Why Choose Polovni Paneli?',
      whyChooseDescription: 'We specialize in offering high-quality solar equipment at competitive prices, backed by expert knowledge and excellent customer service.',
      qualityTestedTitle: 'Quality Tested',
      qualityTestedDescription: 'All used equipment is thoroughly tested and verified for functionality before sale.',
      competitivePricesTitle: 'Competitive Prices',
      competitivePricesDescription: 'Significant savings on both new and used solar equipment without compromising quality.',
      fastDeliveryTitle: 'Fast Delivery',
      fastDeliveryDescription: 'Quick and secure shipping to get your solar project up and running faster.',
      expertSupportTitle: 'Expert Support',
      expertSupportDescription: 'Professional guidance from solar industry experts to help you choose the right equipment.',
      productRangeTitle: 'Our Product Range',
      productRangeDescription: 'From single residential inverters to large commercial installations',
      solarInvertersTitle: 'Solar Inverters',
      solarInvertersDescription: 'New and used KACO, Danfoss, and Diehl inverters from 3kW to 22kW',
      solarPanelsTitle: 'Solar Panels',
      solarPanelsDescription: 'Bulk quantities of tested Trina Solar modules, perfect for large installations',
      completeSystemsTitle: 'Complete Systems',
      completeSystemsDescription: 'Bulk inverter packages for 500kWp to 1MWp commercial installations',
      ctaTitle: 'Ready to Power Your Project?',
      ctaDescription: 'Contact us today for personalized quotes and expert advice on your solar equipment needs.',
      ctaButton: 'Contact Us Now',
      fromPrice: 'From',
      containerLots: 'Container Lots',
      volumePricing: 'Volume Pricing',
      viewAllProducts: 'View All Products'
    },
    catalog: {
      title: 'Solar Equipment Catalog',
      description: 'Browse our complete collection of new and used solar equipment',
      searchPlaceholder: 'Search products...',
      allCategories: 'All Categories',
      allConditions: 'All Conditions',
      inverter: 'Inverter',
      panel: 'Panel',
      accessory: 'Accessory',
      new: 'New',
      used: 'Used',
      refurbished: 'Refurbished',
      showingResults: 'Showing',
      of: 'of',
      products: 'products',
      noProductsFound: 'No products found',
      noProductsDescription: 'Try adjusting your search criteria or filters to find what you\'re looking for.'
    },
    productDetail: {
      purchaseInfoTitle: 'Purchase Information',
      purchaseInfoDescription: 'This item is available for purchase through direct contact only. Please use the contact information below to inquire about availability, shipping costs, and to place your order.',
      description: 'Description',
      warrantyIncluded: 'Warranty Included',
      technicalSpecifications: 'Technical Specifications',
      keyFeatures: 'Key Features',
      interestedTitle: 'Interested in This Product?',
      interestedDescription: 'Contact us directly to check availability, get shipping quotes, and place your order. Our team is ready to help you with your solar equipment needs.'
    },
    about: {
      title: 'About Polovni Paneli',
      subtitle: 'Your trusted partner in the solar energy revolution, specializing in quality new and used solar equipment at competitive prices.',
      missionTitle: 'Our Mission',
      missionParagraph1: 'At Polovni Paneli, we believe that sustainable energy should be accessible to everyone. Our mission is to make high-quality solar equipment more affordable by offering both new and carefully tested used equipment.',
      missionParagraph2: 'We specialize in sourcing, testing, and reselling solar inverters, panels, and accessories from leading manufacturers like KACO, Danfoss, Diehl, and Trina Solar. Every piece of used equipment undergoes rigorous testing to ensure reliability and performance.',
      missionParagraph3: 'Whether you\'re a homeowner looking to reduce energy costs or a commercial developer planning a large installation, we have the expertise and inventory to support your project.',
      experienceYears: '10+ Years',
      experienceInSolar: 'Experience in Solar Industry',
      projectsCompleted: 'Projects Completed',
      equipmentSupplied: 'Equipment Supplied',
      valuesTitle: 'Our Values',
      qualityFirstTitle: 'Quality First',
      qualityFirstDescription: 'Every piece of equipment is thoroughly tested and verified before being offered for sale.',
      expertKnowledgeTitle: 'Expert Knowledge',
      expertKnowledgeDescription: 'Years of experience in the solar industry help us provide the best solutions for your needs.',
      customerFocusTitle: 'Customer Focus',
      customerFocusDescription: 'We prioritize building long-term relationships with our customers through reliable service.',
      sustainableFutureTitle: 'Sustainable Future',
      sustainableFutureDescription: 'Contributing to a cleaner planet by making solar technology more accessible and affordable.',
      whatWeOfferTitle: 'What We Offer',
      solarInvertersOfferTitle: 'Solar Inverters',
      solarInvertersOfferDescription: 'New and used string inverters from 3kW to 22kW, including KACO, Danfoss, and Diehl models',
      solarPanelsOfferTitle: 'Solar Panels',
      solarPanelsOfferDescription: 'Bulk quantities of tested Trina Solar modules, perfect for large commercial installations',
      completeSystemsOfferTitle: 'Complete Systems',
      completeSystemsOfferDescription: 'Bulk inverter packages for 500kWp to 1MWp installations with volume pricing',
      whyChooseUsTitle: 'Why Choose Polovni Paneli?',
      qualityAssurance: 'Quality Assurance',
      customerService: 'Customer Service',
      allUsedEquipmentTested: 'All used equipment thoroughly tested',
      detailedConditionReports: 'Detailed condition reports provided',
      transparentEquipmentHistory: 'Transparent about equipment history',
      expertTechnicalSupport: 'Expert technical support',
      fastResponseTimes: 'Fast response times',
      competitivePricingVolumeDiscounts: 'Competitive pricing and volume discounts'
    },
    contact: {
      title: 'Contact Polovni Paneli',
      subtitle: 'Ready to purchase solar equipment? Get in touch with us directly to discuss availability, shipping, and pricing for your specific needs.',
      getTouchTitle: 'Get in Touch',
      businessHoursTitle: 'Business Hours',
      businessHoursSubtitle: 'When we\'re available',
      mondayFriday: 'Monday - Friday',
      saturday: 'Saturday',
      sunday: 'Sunday',
      closed: 'Closed',
      responseTime: 'Response Time:',
      responseTimeDescription: 'We typically respond to inquiries within 24 hours during business days.',
      serviceAreaTitle: 'Service Area',
      serviceAreaSubtitle: 'Where we operate',
      primaryMarket: 'Primary Market:',
      shipping: 'Shipping:',
      specialization: 'Specialization:',
      shippingDescription: 'We can arrange shipping throughout Europe. Contact us for specific delivery quotes and logistics.',
      howToPurchaseTitle: 'How to Purchase',
      step1Title: 'Browse Catalog',
      step1Description: 'Find the solar equipment you need in our product catalog',
      step2Title: 'Contact Us',
      step2Description: 'Reach out via email or phone with your specific requirements',
      step3Title: 'Get Quote',
      step3Description: 'Receive detailed pricing including shipping and availability',
      step4Title: 'Complete Purchase',
      step4Description: 'Finalize your order and arrange delivery or pickup',
      importantInfoTitle: 'Important Purchase Information',
      termsConditionsTitle: 'Terms & Conditions',
      usedEquipmentSoldAsSeen: 'Used equipment sold "as seen" - no warranty unless specified',
      newEquipmentWarranty: 'New equipment includes manufacturer warranty',
      pricesExcludeShipping: 'All prices exclude shipping and customs duties',
      paymentTermsDiscussed: 'Payment terms discussed upon order confirmation',
      inquiryIncludeTitle: 'What to Include in Your Inquiry',
      specificProductQuantity: 'Specific product name and quantity needed',
      deliveryLocation: 'Your delivery location for shipping quotes',
      projectTimeline: 'Timeline for your project or installation',
      technicalQuestions: 'Any technical questions about compatibility'
    },
    footer: {
      description: 'Your trusted partner for quality used and new solar equipment. We offer a wide range of inverters, panels, and accessories at competitive prices for residential and commercial installations.',
      quickLinks: 'Quick Links',
      categories: 'Categories',
      allProducts: 'All Products',
      inverters: 'Inverters',
      solarPanels: 'Solar Panels',
      accessories: 'Accessories',
      usedEquipment: 'Used Equipment',
      kacoInverters: 'KACO Inverters',
      stringInverters: 'String Inverters',
      pvModules: 'PV Modules',
      commercialSystems: 'Commercial Systems',
      residentialSolutions: 'Residential Solutions',
      allRightsReserved: '© 2025 Polovni Paneli. All rights reserved.',
      privacyPolicy: 'Privacy Policy',
      termsOfService: 'Terms of Service',
      shippingInfo: 'Shipping Info',
      qualityTested: 'Quality Tested',
      certifiedEquipment: 'Certified Equipment',
      fastDelivery: 'Fast Delivery',
      solarExperts: 'Solar Experts'
    }
  },
  de: {
    nav: {
      home: 'Startseite',
      products: 'Produkte',
      about: 'Über uns',
      contact: 'Kontakt'
    },
    common: {
      currency: '€',
      viewDetails: 'Details anzeigen',
      backToCatalog: 'Zurück zum Katalog',
      contactUs: 'Kontaktieren Sie uns',
      getQuote: 'Angebot erhalten',
      browseProducts: 'Produkte durchsuchen',
      warranty: 'Garantie',
      qualityTested: 'Qualitätsgeprüft',
      newCondition: 'Neu',
      usedCondition: 'Gebraucht',
      refurbishedCondition: 'Überholt',
      clickToRevealEmail: 'Klicken Sie, um E-Mail anzuzeigen',
      clickToRevealPhone: 'Klicken Sie, um Telefon anzuzeigen',
      emailUs: 'E-Mail senden',
      callUs: 'Anrufen',
      sendUsYourInquiry: 'Senden Sie uns Ihre Anfrage',
      speakDirectlyWithOurTeam: 'Sprechen Sie direkt mit unserem Team'
    },
    home: {
      heroTitle: 'Premium Solarausrüstung',
      heroSubtitle: 'Zu unschlagbaren Preisen',
      heroDescription: 'Ihre vertrauenswürdige Quelle für hochwertige neue und gebrauchte Solar-Wechselrichter, -Module und -Zubehör. Professionelle Ausrüstung für Wohn- und Gewerbeinstallationen.',
      whyChooseTitle: 'Warum Polovni Paneli wählen?',
      whyChooseDescription: 'Wir sind spezialisiert auf hochwertige Solarausrüstung zu wettbewerbsfähigen Preisen, unterstützt durch Expertenwissen und exzellenten Kundenservice.',
      qualityTestedTitle: 'Qualitätsgeprüft',
      qualityTestedDescription: 'Alle gebrauchten Geräte werden gründlich getestet und auf Funktionalität überprüft, bevor sie verkauft werden.',
      competitivePricesTitle: 'Wettbewerbsfähige Preise',
      competitivePricesDescription: 'Erhebliche Einsparungen bei neuen und gebrauchten Solargeräten ohne Qualitätskompromisse.',
      fastDeliveryTitle: 'Schnelle Lieferung',
      fastDeliveryDescription: 'Schneller und sicherer Versand, damit Ihr Solarprojekt schneller läuft.',
      expertSupportTitle: 'Expertenunterstützung',
      expertSupportDescription: 'Professionelle Beratung von Solarindustrie-Experten, um Ihnen bei der Auswahl der richtigen Ausrüstung zu helfen.',
      productRangeTitle: 'Unser Produktsortiment',
      productRangeDescription: 'Von einzelnen Wohn-Wechselrichtern bis zu großen Gewerbeinstallationen',
      solarInvertersTitle: 'Solar-Wechselrichter',
      solarInvertersDescription: 'Neue und gebrauchte KACO-, Danfoss- und Diehl-Wechselrichter von 3kW bis 22kW',
      solarPanelsTitle: 'Solarmodule',
      solarPanelsDescription: 'Große Mengen getesteter Trina Solar Module, perfekt für große Installationen',
      completeSystemsTitle: 'Komplette Systeme',
      completeSystemsDescription: 'Bulk-Wechselrichter-Pakete für 500kWp bis 1MWp Gewerbeinstallationen',
      ctaTitle: 'Bereit, Ihr Projekt zu starten?',
      ctaDescription: 'Kontaktieren Sie uns heute für personalisierte Angebote und Expertenberatung für Ihre Solarausrüstung.',
      ctaButton: 'Jetzt kontaktieren',
      fromPrice: 'Ab',
      containerLots: 'Container-Lose',
      volumePricing: 'Mengenpreise',
      viewAllProducts: 'Alle Produkte anzeigen'
    },
    catalog: {
      title: 'Solarausrüstung Katalog',
      description: 'Durchsuchen Sie unsere komplette Sammlung neuer und gebrauchter Solarausrüstung',
      searchPlaceholder: 'Produkte suchen...',
      allCategories: 'Alle Kategorien',
      allConditions: 'Alle Zustände',
      inverter: 'Wechselrichter',
      panel: 'Modul',
      accessory: 'Zubehör',
      new: 'Neu',
      used: 'Gebraucht',
      refurbished: 'Überholt',
      showingResults: 'Zeige',
      of: 'von',
      products: 'Produkten',
      noProductsFound: 'Keine Produkte gefunden',
      noProductsDescription: 'Versuchen Sie, Ihre Suchkriterien oder Filter anzupassen, um zu finden, wonach Sie suchen.'
    },
    productDetail: {
      purchaseInfoTitle: 'Kaufinformationen',
      purchaseInfoDescription: 'Dieser Artikel ist nur über direkten Kontakt erhältlich. Bitte verwenden Sie die unten stehenden Kontaktinformationen, um sich über Verfügbarkeit, Versandkosten zu erkundigen und Ihre Bestellung aufzugeben.',
      description: 'Beschreibung',
      warrantyIncluded: 'Garantie inbegriffen',
      technicalSpecifications: 'Technische Spezifikationen',
      keyFeatures: 'Hauptmerkmale',
      interestedTitle: 'Interessiert an diesem Produkt?',
      interestedDescription: 'Kontaktieren Sie uns direkt, um Verfügbarkeit zu prüfen, Versandangebote zu erhalten und Ihre Bestellung aufzugeben. Unser Team ist bereit, Ihnen bei Ihren Solarausrüstungsbedürfnissen zu helfen.'
    },
    about: {
      title: 'Über Polovni Paneli',
      subtitle: 'Ihr vertrauenswürdiger Partner in der Solarenergierevolution, spezialisiert auf hochwertige neue und gebrauchte Solarausrüstung zu wettbewerbsfähigen Preisen.',
      missionTitle: 'Unsere Mission',
      missionParagraph1: 'Bei Polovni Paneli glauben wir, dass nachhaltige Energie für jeden zugänglich sein sollte. Unsere Mission ist es, hochwertige Solarausrüstung erschwinglicher zu machen, indem wir sowohl neue als auch sorgfältig getestete gebrauchte Ausrüstung anbieten.',
      missionParagraph2: 'Wir sind spezialisiert auf die Beschaffung, Prüfung und den Weiterverkauf von Solar-Wechselrichtern, -Modulen und -Zubehör von führenden Herstellern wie KACO, Danfoss, Diehl und Trina Solar. Jedes gebrauchte Gerät durchläuft rigorose Tests, um Zuverlässigkeit und Leistung zu gewährleisten.',
      missionParagraph3: 'Ob Sie ein Hausbesitzer sind, der Energiekosten senken möchte, oder ein gewerblicher Entwickler, der eine große Installation plant, wir haben das Fachwissen und das Inventar, um Ihr Projekt zu unterstützen.',
      experienceYears: '10+ Jahre',
      experienceInSolar: 'Erfahrung in der Solarindustrie',
      projectsCompleted: 'Abgeschlossene Projekte',
      equipmentSupplied: 'Gelieferte Ausrüstung',
      valuesTitle: 'Unsere Werte',
      qualityFirstTitle: 'Qualität zuerst',
      qualityFirstDescription: 'Jedes Gerät wird gründlich getestet und überprüft, bevor es zum Verkauf angeboten wird.',
      expertKnowledgeTitle: 'Expertenwissen',
      expertKnowledgeDescription: 'Jahre der Erfahrung in der Solarindustrie helfen uns, die besten Lösungen für Ihre Bedürfnisse zu bieten.',
      customerFocusTitle: 'Kundenfokus',
      customerFocusDescription: 'Wir priorisieren den Aufbau langfristiger Beziehungen zu unseren Kunden durch zuverlässigen Service.',
      sustainableFutureTitle: 'Nachhaltige Zukunft',
      sustainableFutureDescription: 'Beitrag zu einem saubereren Planeten durch die Zugänglichmachung und Erschwinglichkeit von Solartechnologie.',
      whatWeOfferTitle: 'Was wir anbieten',
      solarInvertersOfferTitle: 'Solar-Wechselrichter',
      solarInvertersOfferDescription: 'Neue und gebrauchte String-Wechselrichter von 3kW bis 22kW, einschließlich KACO-, Danfoss- und Diehl-Modelle',
      solarPanelsOfferTitle: 'Solarmodule',
      solarPanelsOfferDescription: 'Große Mengen getesteter Trina Solar Module, perfekt für große gewerbliche Installationen',
      completeSystemsOfferTitle: 'Komplette Systeme',
      completeSystemsOfferDescription: 'Bulk-Wechselrichter-Pakete für 500kWp bis 1MWp Installationen mit Mengenpreisen',
      whyChooseUsTitle: 'Warum Polovni Paneli wählen?',
      qualityAssurance: 'Qualitätssicherung',
      customerService: 'Kundenservice',
      allUsedEquipmentTested: 'Alle gebrauchten Geräte gründlich getestet',
      detailedConditionReports: 'Detaillierte Zustandsberichte bereitgestellt',
      transparentEquipmentHistory: 'Transparent über Gerätehistorie',
      expertTechnicalSupport: 'Experten-technischer Support',
      fastResponseTimes: 'Schnelle Antwortzeiten',
      competitivePricingVolumeDiscounts: 'Wettbewerbsfähige Preise und Mengenrabatte'
    },
    contact: {
      title: 'Kontakt Polovni Paneli',
      subtitle: 'Bereit, Solarausrüstung zu kaufen? Kontaktieren Sie uns direkt, um Verfügbarkeit, Versand und Preise für Ihre spezifischen Bedürfnisse zu besprechen.',
      getTouchTitle: 'Kontakt aufnehmen',
      businessHoursTitle: 'Geschäftszeiten',
      businessHoursSubtitle: 'Wann wir verfügbar sind',
      mondayFriday: 'Montag - Freitag',
      saturday: 'Samstag',
      sunday: 'Sonntag',
      closed: 'Geschlossen',
      responseTime: 'Antwortzeit:',
      responseTimeDescription: 'Wir antworten normalerweise innerhalb von 24 Stunden an Geschäftstagen auf Anfragen.',
      serviceAreaTitle: 'Servicebereich',
      serviceAreaSubtitle: 'Wo wir tätig sind',
      primaryMarket: 'Hauptmarkt:',
      shipping: 'Versand:',
      specialization: 'Spezialisierung:',
      shippingDescription: 'Wir können den Versand in ganz Europa arrangieren. Kontaktieren Sie uns für spezifische Lieferangebote und Logistik.',
      howToPurchaseTitle: 'Wie kaufen',
      step1Title: 'Katalog durchsuchen',
      step1Description: 'Finden Sie die Solarausrüstung, die Sie in unserem Produktkatalog benötigen',
      step2Title: 'Kontaktieren Sie uns',
      step2Description: 'Wenden Sie sich per E-Mail oder Telefon mit Ihren spezifischen Anforderungen an uns',
      step3Title: 'Angebot erhalten',
      step3Description: 'Erhalten Sie detaillierte Preise einschließlich Versand und Verfügbarkeit',
      step4Title: 'Kauf abschließen',
      step4Description: 'Finalisieren Sie Ihre Bestellung und arrangieren Sie Lieferung oder Abholung',
      importantInfoTitle: 'Wichtige Kaufinformationen',
      termsConditionsTitle: 'Geschäftsbedingungen',
      usedEquipmentSoldAsSeen: 'Gebrauchte Ausrüstung wird "wie gesehen" verkauft - keine Garantie, sofern nicht angegeben',
      newEquipmentWarranty: 'Neue Ausrüstung beinhaltet Herstellergarantie',
      pricesExcludeShipping: 'Alle Preise verstehen sich ohne Versand und Zollgebühren',
      paymentTermsDiscussed: 'Zahlungsbedingungen werden bei Auftragsbestätigung besprochen',
      inquiryIncludeTitle: 'Was in Ihre Anfrage einzubeziehen ist',
      specificProductQuantity: 'Spezifischer Produktname und benötigte Menge',
      deliveryLocation: 'Ihr Lieferort für Versandangebote',
      projectTimeline: 'Zeitplan für Ihr Projekt oder Installation',
      technicalQuestions: 'Technische Fragen zur Kompatibilität'
    },
    footer: {
      description: 'Ihr vertrauenswürdiger Partner für hochwertige gebrauchte und neue Solarausrüstung. Wir bieten eine breite Palette von Wechselrichtern, Modulen und Zubehör zu wettbewerbsfähigen Preisen für Wohn- und Gewerbeinstallationen.',
      quickLinks: 'Schnelllinks',
      categories: 'Kategorien',
      allProducts: 'Alle Produkte',
      inverters: 'Wechselrichter',
      solarPanels: 'Solarmodule',
      accessories: 'Zubehör',
      usedEquipment: 'Gebrauchte Ausrüstung',
      kacoInverters: 'KACO Wechselrichter',
      stringInverters: 'String-Wechselrichter',
      pvModules: 'PV-Module',
      commercialSystems: 'Gewerbliche Systeme',
      residentialSolutions: 'Wohnlösungen',
      allRightsReserved: '© 2025 Polovni Paneli. Alle Rechte vorbehalten.',
      privacyPolicy: 'Datenschutzrichtlinie',
      termsOfService: 'Nutzungsbedingungen',
      shippingInfo: 'Versandinfo',
      qualityTested: 'Qualitätsgeprüft',
      certifiedEquipment: 'Zertifizierte Ausrüstung',
      fastDelivery: 'Schnelle Lieferung',
      solarExperts: 'Solarexperten'
    }
  },
  hr: {
    nav: {
      home: 'Početna',
      products: 'Proizvodi',
      about: 'O nama',
      contact: 'Kontakt'
    },
    common: {
      currency: '€',
      viewDetails: 'Pogledaj detalje',
      backToCatalog: 'Povratak na katalog',
      contactUs: 'Kontaktirajte nas',
      getQuote: 'Zatražite ponudu',
      browseProducts: 'Pregledajte proizvode',
      warranty: 'Garancija',
      qualityTested: 'Testirano kvalitete',
      newCondition: 'Novo',
      usedCondition: 'Korišteno',
      refurbishedCondition: 'Obnovljeno',
      clickToRevealEmail: 'Kliknite za prikaz e-maila',
      clickToRevealPhone: 'Kliknite za prikaz telefona',
      emailUs: 'Pošaljite e-mail',
      callUs: 'Pozovite nas',
      sendUsYourInquiry: 'Pošaljite nam svoj upit',
      speakDirectlyWithOurTeam: 'Razgovarajte direktno s našim timom'
    },
    home: {
      heroTitle: 'Premium solarna oprema',
      heroSubtitle: 'Po nenadmašnim cijenama',
      heroDescription: 'Vaš pouzdani izvor za kvalitetne nove i korištene solarne invertere, panele i pribor. Profesionalna oprema za stambene i komercijalne instalacije.',
      whyChooseTitle: 'Zašto odabrati Polovni Paneli?',
      whyChooseDescription: 'Specijalizirani smo za ponudu visokokvalitetne solarne opreme po konkurentnim cijenama, podržane stručnim znanjem i izvrsnom korisničkom podrškom.',
      qualityTestedTitle: 'Testirano kvalitete',
      qualityTestedDescription: 'Sva korištena oprema je temeljito testirana i provjerena na funkcionalnost prije prodaje.',
      competitivePricesTitle: 'Konkurentne cijene',
      competitivePricesDescription: 'Značajne uštede na novoj i korištenoj solarnoj opremi bez kompromisa u kvaliteti.',
      fastDeliveryTitle: 'Brza dostava',
      fastDeliveryDescription: 'Brza i sigurna dostava kako bi vaš solarni projekt bio pokrenut brže.',
      expertSupportTitle: 'Stručna podrška',
      expertSupportDescription: 'Profesionalno vodstvo od stručnjaka solarne industrije koji će vam pomoći odabrati pravu opremu.',
      productRangeTitle: 'Naš asortiman proizvoda',
      productRangeDescription: 'Od pojedinačnih stambenih invertera do velikih komercijalnih instalacija',
      solarInvertersTitle: 'Solarni inverteri',
      solarInvertersDescription: 'Novi i korišteni KACO, Danfoss i Diehl inverteri od 3kW do 22kW',
      solarPanelsTitle: 'Solarni paneli',
      solarPanelsDescription: 'Velike količine testiranih Trina Solar modula, savršenih za velike instalacije',
      completeSystemsTitle: 'Kompletni sustavi',
      completeSystemsDescription: 'Paketi invertera za 500kWp do 1MWp komercijalne instalacije',
      ctaTitle: 'Spremni pokrenuti svoj projekt?',
      ctaDescription: 'Kontaktirajte nas danas za personalizirane ponude i stručne savjete o vašim potrebama za solarnom opremom.',
      ctaButton: 'Kontaktirajte nas sada',
      fromPrice: 'Od',
      containerLots: 'Kontejnerski lotovi',
      volumePricing: 'Količinske cijene',
      viewAllProducts: 'Pogledajte sve proizvode'
    },
    catalog: {
      title: 'Katalog solarne opreme',
      description: 'Pregledajte našu kompletnu kolekciju nove i korištene solarne opreme',
      searchPlaceholder: 'Pretražite proizvode...',
      allCategories: 'Sve kategorije',
      allConditions: 'Sva stanja',
      inverter: 'Inverter',
      panel: 'Panel',
      accessory: 'Pribor',
      new: 'Novo',
      used: 'Korišteno',
      refurbished: 'Obnovljeno',
      showingResults: 'Prikazuje se',
      of: 'od',
      products: 'proizvoda',
      noProductsFound: 'Nema pronađenih proizvoda',
      noProductsDescription: 'Pokušajte prilagoditi svoje kriterije pretrage ili filtere da pronađete ono što tražite.'
    },
    productDetail: {
      purchaseInfoTitle: 'Informacije o kupovini',
      purchaseInfoDescription: 'Ovaj artikl je dostupan za kupnju samo putem direktnog kontakta. Molimo koristite kontakt informacije ispod za upit o dostupnosti, troškovima dostave i za naručivanje.',
      description: 'Opis',
      warrantyIncluded: 'Garancija uključena',
      technicalSpecifications: 'Tehničke specifikacije',
      keyFeatures: 'Ključne značajke',
      interestedTitle: 'Zainteresirani za ovaj proizvod?',
      interestedDescription: 'Kontaktirajte nas direktno da provjerite dostupnost, dobijete ponude za dostavu i naručite. Naš tim je spreman pomoći vam s vašim potrebama za solarnom opremom.'
    },
    about: {
      title: 'O Polovni Paneli',
      subtitle: 'Vaš pouzdani partner u solarnoj energetskoj revoluciji, specijaliziran za kvalitetnu novu i korištenu solarnu opremu po konkurentnim cijenama.',
      missionTitle: 'Naša misija',
      missionParagraph1: 'U Polovni Paneli vjerujemo da održiva energija treba biti dostupna svima. Naša misija je učiniti visokokvalitetnu solarnu opremu pristupačnijom nudeći i novu i pažljivo testiranu korištenu opremu.',
      missionParagraph2: 'Specijalizirani smo za nabavu, testiranje i preprodaju solarnih invertera, panela i pribora od vodećih proizvođača poput KACO, Danfoss, Diehl i Trina Solar. Svaki dio korištene opreme prolazi rigorozno testiranje kako bi se osigurala pouzdanost i performanse.',
      missionParagraph3: 'Bilo da ste vlasnik kuće koji želi smanjiti troškove energije ili komercijalni developer koji planira veliku instalaciju, imamo stručnost i inventar za podršku vašeg projekta.',
      experienceYears: '10+ godina',
      experienceInSolar: 'Iskustva u solarnoj industriji',
      projectsCompleted: 'Završenih projekata',
      equipmentSupplied: 'Isporučene opreme',
      valuesTitle: 'Naše vrijednosti',
      qualityFirstTitle: 'Kvaliteta na prvom mjestu',
      qualityFirstDescription: 'Svaki dio opreme je temeljito testiran i provjeren prije nego što se ponudi za prodaju.',
      expertKnowledgeTitle: 'Stručno znanje',
      expertKnowledgeDescription: 'Godine iskustva u solarnoj industriji pomažu nam pružiti najbolja rješenja za vaše potrebe.',
      customerFocusTitle: 'Fokus na kupce',
      customerFocusDescription: 'Dajemo prioritet izgradnji dugoročnih odnosa s našim kupcima kroz pouzdanu uslugu.',
      sustainableFutureTitle: 'Održiva budućnost',
      sustainableFutureDescription: 'Doprinošenje čišćem planetu čineći solarnu tehnologiju dostupnijom i pristupačnijom.',
      whatWeOfferTitle: 'Što nudimo',
      solarInvertersOfferTitle: 'Solarni inverteri',
      solarInvertersOfferDescription: 'Novi i korišteni string inverteri od 3kW do 22kW, uključujući KACO, Danfoss i Diehl modele',
      solarPanelsOfferTitle: 'Solarni paneli',
      solarPanelsOfferDescription: 'Velike količine testiranih Trina Solar modula, savršenih za velike komercijalne instalacije',
      completeSystemsOfferTitle: 'Kompletni sustavi',
      completeSystemsOfferDescription: 'Paketi invertera za 500kWp do 1MWp instalacije s količinskim cijenama',
      whyChooseUsTitle: 'Zašto odabrati Polovni Paneli?',
      qualityAssurance: 'Osiguranje kvalitete',
      customerService: 'Korisnička služba',
      allUsedEquipmentTested: 'Sva korištena oprema temeljito testirana',
      detailedConditionReports: 'Detaljni izvještaji o stanju pruženi',
      transparentEquipmentHistory: 'Transparentnost o povijesti opreme',
      expertTechnicalSupport: 'Stručna tehnička podrška',
      fastResponseTimes: 'Brza vremena odgovora',
      competitivePricingVolumeDiscounts: 'Konkurentne cijene i količinski popusti'
    },
    contact: {
      title: 'Kontakt Polovni Paneli',
      subtitle: 'Spremni kupiti solarnu opremu? Kontaktirajte nas direktno da razgovaramo o dostupnosti, dostavi i cijenama za vaše specifične potrebe.',
      getTouchTitle: 'Stupite u kontakt',
      businessHoursTitle: 'Radno vrijeme',
      businessHoursSubtitle: 'Kada smo dostupni',
      mondayFriday: 'Ponedjeljak - Petak',
      saturday: 'Subota',
      sunday: 'Nedjelja',
      closed: 'Zatvoreno',
      responseTime: 'Vrijeme odgovora:',
      responseTimeDescription: 'Obično odgovaramo na upite u roku od 24 sata tijekom radnih dana.',
      serviceAreaTitle: 'Područje usluge',
      serviceAreaSubtitle: 'Gdje djelujemo',
      primaryMarket: 'Primarno tržište:',
      shipping: 'Dostava:',
      specialization: 'Specijalizacija:',
      shippingDescription: 'Možemo organizirati dostavu diljem Europe. Kontaktirajte nas za specifične ponude dostave i logistiku.',
      howToPurchaseTitle: 'Kako kupiti',
      step1Title: 'Pregledajte katalog',
      step1Description: 'Pronađite solarnu opremu koju trebate u našem katalogu proizvoda',
      step2Title: 'Kontaktirajte nas',
      step2Description: 'Obratite nam se putem e-maila ili telefona s vašim specifičnim zahtjevima',
      step3Title: 'Dobijte ponudu',
      step3Description: 'Primite detaljne cijene uključujući dostavu i dostupnost',
      step4Title: 'Završite kupovinu',
      step4Description: 'Finalizirajte svoju narudžbu i organizirajte dostavu ili preuzimanje',
      importantInfoTitle: 'Važne informacije o kupovini',
      termsConditionsTitle: 'Uvjeti i odredbe',
      usedEquipmentSoldAsSeen: 'Korištena oprema se prodaje "kako se vidi" - nema garancije osim ako nije navedeno',
      newEquipmentWarranty: 'Nova oprema uključuje proizvođačku garanciju',
      pricesExcludeShipping: 'Sve cijene ne uključuju dostavu i carinske pristojbe',
      paymentTermsDiscussed: 'Uvjeti plaćanja se razgovaraju nakon potvrde narudžbe',
      inquiryIncludeTitle: 'Što uključiti u svoj upit',
      specificProductQuantity: 'Specifičan naziv proizvoda i potrebna količina',
      deliveryLocation: 'Vaša lokacija dostave za ponude dostave',
      projectTimeline: 'Vremenski okvir za vaš projekt ili instalaciju',
      technicalQuestions: 'Bilo koja tehnička pitanja o kompatibilnosti'
    },
    footer: {
      description: 'Vaš pouzdani partner za kvalitetnu korištenu i novu solarnu opremu. Nudimo širok asortiman invertera, panela i pribora po konkurentnim cijenama za stambene i komercijalne instalacije.',
      quickLinks: 'Brze veze',
      categories: 'Kategorije',
      allProducts: 'Svi proizvodi',
      inverters: 'Inverteri',
      solarPanels: 'Solarni paneli',
      accessories: 'Pribor',
      usedEquipment: 'Korištena oprema',
      kacoInverters: 'KACO inverteri',
      stringInverters: 'String inverteri',
      pvModules: 'PV moduli',
      commercialSystems: 'Komercijalni sustavi',
      residentialSolutions: 'Stambena rješenja',
      allRightsReserved: '© 2025 Polovni Paneli. Sva prava pridržana.',
      privacyPolicy: 'Pravila privatnosti',
      termsOfService: 'Uvjeti korištenja',
      shippingInfo: 'Informacije o dostavi',
      qualityTested: 'Testirano kvalitete',
      certifiedEquipment: 'Certificirana oprema',
      fastDelivery: 'Brza dostava',
      solarExperts: 'Solarni stručnjaci'
    }
  }
};