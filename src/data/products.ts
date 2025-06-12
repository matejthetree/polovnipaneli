export interface Product {
  id: string;
  name: string;
  price: number;
  currency: string;
  category: 'inverter' | 'panel' | 'accessory';
  condition: 'new' | 'used' | 'refurbished';
  description: string;
  specifications: { [key: string]: string };
  image: string;
  warranty?: string;
  features: string[];
}

export const products: Product[] = [
  {
    id: 'danfoss-tlx-15kw',
    name: 'Danfoss TLX 15 KW Inverter, used',
    price: 300.00,
    currency: '€',
    category: 'inverter',
    condition: 'used',
    description: 'A three-phase transformerless string inverter (used) with 15,000 W grid power. Sold "without warranty or liability" (used condition).',
    specifications: {
      'Grid Power': '15,000 W',
      'DC Input': '15.5 kW',
      'Nominal Voltage': '700 V',
      'MPP Efficiency': '99.9%',
      'Output': '3-phase',
      'Weight': '35 kg'
    },
    image: 'https://images.pexels.com/photos/9799725/pexels-photo-9799725.jpeg?auto=compress&cs=tinysrgb&w=800',
    features: ['Three-phase output', 'Transformerless design', 'High efficiency', 'Industrial grade']
  },
  {
    id: 'trina-solar-container',
    name: '910–1040 × Trina Solar TSM-225-255PC05',
    price: 16640.00,
    currency: '€',
    category: 'panel',
    condition: 'used',
    description: 'Used Trina Solar polycrystalline modules (225–255 Wp each) sold in volume. 40 ft container of used PV modules. Suitable for off-grid/self-consumption systems.',
    specifications: {
      'Power Range': '225–255 Wp each',
      'Cell Type': '60 cells polycrystalline',
      'Manufacturing Years': '2012–2015',
      'Load Rating': 'Wind/snow load rated',
      'Quantity': '910–1040 modules',
      'Container Size': '40 ft'
    },
    image: 'https://images.pexels.com/photos/9875395/pexels-photo-9875395.jpeg?auto=compress&cs=tinysrgb&w=800',
    features: ['Bulk quantity available', 'CO₂ savings', 'Off-grid suitable', 'Cost-effective solution']
  },
  {
    id: 'kaco-50x-10kw',
    name: '500 kWp – 50 × New KACO blueplanet 10.0 NX3 M2',
    price: 14950.00,
    currency: '€',
    category: 'inverter',
    condition: 'new',
    description: 'Fifty brand-new KACO blueplanet 10.0 NX3 solar inverters (10 kW each). 3-phase, multi-MPPT inverter for residential/small commercial PV plants with Wi-Fi monitoring.',
    specifications: {
      'Power per Unit': '10 kW',
      'Total Power': '500 kWp',
      'Quantity': '50 units',
      'Phase': '3-phase',
      'MPPT': 'Multi-MPPT',
      'Dimensions': '376×355×145 mm',
      'Weight': '22 kg each'
    },
    image: 'https://images.pexels.com/photos/9799735/pexels-photo-9799735.jpeg?auto=compress&cs=tinysrgb&w=800',
    warranty: '10-year manufacturer warranty',
    features: ['Wi-Fi monitoring', 'Multi-MPPT', 'Residential/commercial', 'Bulk pricing']
  },
  {
    id: 'kaco-100x-10kw',
    name: '1 MWp – 100 × New KACO blueplanet 10.0 NX3 M2',
    price: 29900.00,
    currency: '€',
    category: 'inverter',
    condition: 'new',
    description: 'One hundred new KACO 10.0 NX3 inverters (same model as above). Large-scale installation package with 10-year warranty and multi-MPPT technology.',
    specifications: {
      'Power per Unit': '10 kW',
      'Total Power': '1 MWp',
      'Quantity': '100 units',
      'Phase': '3-phase',
      'MPPT': 'Multi-MPPT',
      'Pallet Dimensions': '1120×920×2150 mm',
      'Pallet Weight': '471 kg'
    },
    image: 'https://images.pexels.com/photos/9799735/pexels-photo-9799735.jpeg?auto=compress&cs=tinysrgb&w=800',
    warranty: '10-year manufacturer warranty',
    features: ['Large-scale solution', 'Pallet delivery', 'Industrial grade', 'Best bulk pricing']
  },
  {
    id: 'diehl-ako-22kw',
    name: 'Diehl AKO Platinum 22.000 TL Inverter',
    price: 360.00,
    currency: '€',
    category: 'inverter',
    condition: 'refurbished',
    description: 'A used 22 kW three-phase string inverter by Diehl AKO (German-made). Listed as refurbished/used for optimal conversion of DC to AC. Fault-free, functional.',
    specifications: {
      'AC Power': '20.7 kW',
      'Nominal Power': '22 kW',
      'Phase': '3-phase',
      'Origin': 'German-made',
      'Condition': 'Refurbished/used',
      'Application': 'Grid-tie/off-grid'
    },
    image: 'https://images.pexels.com/photos/9799725/pexels-photo-9799725.jpeg?auto=compress&cs=tinysrgb&w=800',
    features: ['German engineering', 'High power output', 'Versatile application', 'Tested functionality']
  },
  {
    id: 'kaco-3kw-nx3',
    name: '1 × New KACO blueplanet 3.0 NX3 M2',
    price: 450.00,
    currency: '€',
    category: 'inverter',
    condition: 'new',
    description: 'One new 3 kW KACO inverter, 3-phase, multi-MPPT. Includes Wi-Fi app and easy installation.',
    specifications: {
      'Power': '3 kW',
      'Phase': '3-phase',
      'MPPT': 'Multi-MPPT',
      'Connectivity': 'Wi-Fi enabled',
      'Installation': 'Easy installation'
    },
    image: 'https://images.pexels.com/photos/9799742/pexels-photo-9799742.jpeg?auto=compress&cs=tinysrgb&w=800',
    warranty: '10-year manufacturer warranty',
    features: ['Compact design', 'Wi-Fi monitoring', 'Residential perfect', 'German quality']
  },
  {
    id: 'kaco-5kw-nx3',
    name: '1 × New KACO blueplanet 5.0 NX3 M2',
    price: 460.00,
    currency: '€',
    category: 'inverter',
    condition: 'new',
    description: 'One new 5 kW KACO inverter, 3-phase. Same series reliability with enhanced power output.',
    specifications: {
      'Power': '5 kW',
      'Phase': '3-phase',
      'MPPT': 'Multi-MPPT',
      'Series': 'NX3 M2',
      'Type': 'Residential/small commercial'
    },
    image: 'https://images.pexels.com/photos/9799742/pexels-photo-9799742.jpeg?auto=compress&cs=tinysrgb&w=800',
    warranty: '10-year manufacturer warranty',
    features: ['Mid-range power', 'Proven reliability', 'Smart monitoring', 'Professional grade']
  },
  {
    id: 'kaco-8kw-nx3',
    name: '1 × New KACO blueplanet 8.0 NX3 M2',
    price: 470.00,
    currency: '€',
    category: 'inverter',
    condition: 'new',
    description: 'One new 8 kW KACO inverter, 3-phase, multi-MPPT. 10-year warranty with app control.',
    specifications: {
      'Power': '8 kW',
      'Phase': '3-phase',
      'MPPT': 'Multi-MPPT',
      'Control': 'App-controlled',
      'Application': 'Commercial ready'
    },
    image: 'https://images.pexels.com/photos/9799742/pexels-photo-9799742.jpeg?auto=compress&cs=tinysrgb&w=800',
    warranty: '10-year manufacturer warranty',
    features: ['High performance', 'App control', 'Commercial grade', 'Advanced MPPT']
  },
  {
    id: 'kaco-10kw-nx3-single',
    name: '1 × New KACO blueplanet 10.0 NX3 M2',
    price: 480.00,
    currency: '€',
    category: 'inverter',
    condition: 'new',
    description: 'One new 10 kW KACO inverter, 3-phase, multi-MPPT. 10-year warranty with Wi-Fi monitoring.',
    specifications: {
      'Power': '10 kW',
      'Phase': '3-phase',
      'MPPT': 'Multi-MPPT',
      'Monitoring': 'Wi-Fi enabled',
      'Grade': 'Professional'
    },
    image: 'https://images.pexels.com/photos/9799742/pexels-photo-9799742.jpeg?auto=compress&cs=tinysrgb&w=800',
    warranty: '10-year manufacturer warranty',
    features: ['Maximum single unit', 'Professional monitoring', 'Peak performance', 'Long warranty']
  },
  {
    id: 'kaco-5kw-nx1',
    name: '1 × New KACO blueplanet 5.0 NX1 M2',
    price: 450.00,
    currency: '€',
    category: 'inverter',
    condition: 'new',
    description: 'One new 5 kW KACO inverter, single-phase (NX1 series). Wi-Fi enabled with 5-year warranty.',
    specifications: {
      'Power': '5 kW',
      'Phase': 'Single-phase',
      'Series': 'NX1 M2',
      'Connectivity': 'Wi-Fi enabled',
      'Application': 'Residential'
    },
    image: 'https://images.pexels.com/photos/9799742/pexels-photo-9799742.jpeg?auto=compress&cs=tinysrgb&w=800',
    warranty: '5-year warranty',
    features: ['Single-phase design', 'Residential perfect', 'Wi-Fi monitoring', 'Compact solution']
  },
  {
    id: 'kaco-4kw-nx1',
    name: '1 × New KACO blueplanet 4.0 NX1 M2',
    price: 440.00,
    currency: '€',
    category: 'inverter',
    condition: 'new',
    description: 'One new 4 kW KACO inverter, single-phase. 5-year warranty with app monitoring.',
    specifications: {
      'Power': '4 kW',
      'Phase': 'Single-phase',
      'Monitoring': 'App-controlled',
      'Warranty': '5 years',
      'Installation': 'Plug & play'
    },
    image: 'https://images.pexels.com/photos/9799742/pexels-photo-9799742.jpeg?auto=compress&cs=tinysrgb&w=800',
    warranty: '5-year warranty',
    features: ['Compact power', 'Easy installation', 'Home perfect', 'Smart monitoring']
  },
  {
    id: 'kaco-37kw-nx1',
    name: '1 × New KACO blueplanet 3.7 NX1 M2',
    price: 430.00,
    currency: '€',
    category: 'inverter',
    condition: 'new',
    description: 'One new 3.7 kW KACO inverter, single-phase. 5-year warranty with Wi-Fi connectivity.',
    specifications: {
      'Power': '3.7 kW',
      'Phase': 'Single-phase',
      'Connectivity': 'Wi-Fi',
      'Size': 'Compact',
      'Efficiency': 'High efficiency'
    },
    image: 'https://images.pexels.com/photos/9799742/pexels-photo-9799742.jpeg?auto=compress&cs=tinysrgb&w=800',
    warranty: '5-year warranty',
    features: ['Small installations', 'Wi-Fi ready', 'German quality', 'Space efficient']
  },
  {
    id: 'kaco-3kw-nx1',
    name: '1 × New KACO blueplanet 3.0 NX1 M2',
    price: 420.00,
    currency: '€',
    category: 'inverter',
    condition: 'new',
    description: 'One new 3 kW KACO inverter, single-phase. 5-year warranty with Wi-Fi capability.',
    specifications: {
      'Power': '3 kW',
      'Phase': 'Single-phase',
      'Connectivity': 'Wi-Fi',
      'Application': 'Small residential',
      'Type': 'Entry-level professional'
    },
    image: 'https://images.pexels.com/photos/9799742/pexels-photo-9799742.jpeg?auto=compress&cs=tinysrgb&w=800',
    warranty: '5-year warranty',
    features: ['Entry-level perfect', 'Affordable quality', 'Wi-Fi monitoring', 'Reliable performance']
  }
];

export const getProductById = (id: string): Product | undefined => {
  return products.find(product => product.id === id);
};

export const getProductsByCategory = (category: string): Product[] => {
  return products.filter(product => product.category === category);
};

export const getProductsByCondition = (condition: string): Product[] => {
  return products.filter(product => product.condition === condition);
};