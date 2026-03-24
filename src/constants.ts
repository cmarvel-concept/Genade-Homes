export interface Property {
  id: string;
  name: string;
  location: string;
  title: string;
  status: 'Presale' | 'Selling' | 'Completed';
  price: string;
  description: string;
  image: string;
  sizes?: { size: string; price: string }[];
}

export const PROPERTIES: Property[] = [
  {
    id: 'primesgate',
    name: 'Primesgate Residence',
    location: 'Airport Road, Before Centenary City, Abuja',
    title: 'FCDA C of O',
    status: 'Presale',
    price: 'From ₦6.48M',
    description: 'A strategically located estate along the Airport Road growth corridor, designed for future homeowners and investors positioning early.',
    image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&q=80&w=1000',
    sizes: [
      { size: '150sqm', price: '₦6.48M' },
      { size: '250sqm', price: '₦10.8M' },
      { size: '350sqm', price: '₦15.48M' },
      { size: '500sqm', price: '₦21.6M' },
      { size: '1000sqm', price: '₦43.2M' },
    ]
  },
  {
    id: 'verdant',
    name: 'The Verdant',
    location: 'Behind Centenary City, Kuje, Abuja',
    title: 'Verified R of O',
    status: 'Selling',
    price: 'From ₦3.25M',
    description: 'An emerging residential community in the fast-developing Kuje axis, ideal for buyers seeking affordable entry into Abuja property.',
    image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&q=80&w=1000',
    sizes: [
      { size: '180sqm', price: '₦3.25M' },
      { size: '250sqm', price: '₦4.55M' },
      { size: '500sqm', price: '₦7.80M' },
    ]
  },
  {
    id: 'addis-city',
    name: 'Addis City',
    location: 'Sheretti Kabusa, Abuja',
    title: 'FCDA C of O Fully Paid',
    status: 'Selling',
    price: 'From ₦5.85M',
    description: 'A fully secured estate in Kabusa offering structured residential planning within one of Abuja’s expanding urban belts.',
    image: 'https://images.unsplash.com/photo-1480074568708-e7b720bb3f09?auto=format&fit=crop&q=80&w=1000',
    sizes: [
      { size: '150sqm', price: '₦5.85M' },
      { size: '250sqm', price: '₦9.75M' },
      { size: '350sqm', price: '₦13.65M' },
      { size: '500sqm', price: '₦19.5M' },
      { size: '750sqm', price: '₦37.05M' },
    ]
  },
  {
    id: 'white-plains',
    name: 'White Plains',
    location: 'Galadimawa, Abuja',
    title: 'Completed',
    status: 'Completed',
    price: '₦150M',
    description: 'A premium residential development in Galadimawa designed for buyers seeking finished homes in a prime city location.',
    image: 'https://images.unsplash.com/photo-1600607687940-c52af096999c?auto=format&fit=crop&q=80&w=1000',
  },
  {
    id: 'peace-ville',
    name: 'Peace Ville',
    location: 'Lokogoma, Abuja',
    title: 'FCDA Approved',
    status: 'Presale',
    price: '₦70M',
    description: 'A family-friendly development in Lokogoma combining accessibility with residential comfort.',
    image: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&q=80&w=1000',
  }
];
