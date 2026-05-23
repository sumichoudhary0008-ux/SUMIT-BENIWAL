import { Product } from './types';

export const CATEGORIES = [
  'Fruits & Veggies',
  'Dairy & Bread',
  'Snacks & Munchies',
  'Beverages',
  'Personal Care'
];

export const PRODUCTS: Product[] = [
  {
    id: 'p1',
    name: 'Fresh Organic Bananas',
    price: 3.50,
    originalPrice: 4.00,
    category: 'Fruits & Veggies',
    image: 'https://images.unsplash.com/photo-1571501478200-26425b0f597c?q=80&w=600&auto=format&fit=crop',
    rating: 4.8,
    unit: '1 kg',
    discount: 12
  },
  {
    id: 'p2',
    name: 'Whole Milk - Farm Fresh',
    price: 2.20,
    category: 'Dairy & Bread',
    image: 'https://images.unsplash.com/photo-1550583724-b2692b85b150?q=80&w=600&auto=format&fit=crop',
    rating: 4.9,
    unit: '1 L'
  },
  {
    id: 'p3',
    name: 'Farm Fresh Brown Eggs',
    price: 4.50,
    category: 'Dairy & Bread',
    image: 'https://images.unsplash.com/photo-1582722872445-44dc5f7e3c8f?q=80&w=600&auto=format&fit=crop',
    rating: 4.7,
    unit: '12 pack'
  },
  {
    id: 'p4',
    name: 'Crunchy Potato Chips',
    price: 1.80,
    category: 'Snacks & Munchies',
    image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?q=80&w=600&auto=format&fit=crop',
    rating: 4.5,
    unit: '150 g'
  },
  {
    id: 'p5',
    name: 'Fresh Red Apples',
    price: 4.00,
    originalPrice: 5.00,
    category: 'Fruits & Veggies',
    image: 'https://images.unsplash.com/photo-1560806887-1e4cd0b6fac6?q=80&w=600&auto=format&fit=crop',
    rating: 4.6,
    unit: '1 kg',
    discount: 20
  },
  {
    id: 'p6',
    name: 'Orange Juice 100%',
    price: 3.20,
    category: 'Beverages',
    image: 'https://images.unsplash.com/photo-1600271886742-f049cd451bba?q=80&w=600&auto=format&fit=crop',
    rating: 4.4,
    unit: '1 L'
  },
  {
    id: 'p7',
    name: 'Whole Wheat Bread',
    price: 2.50,
    category: 'Dairy & Bread',
    image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?q=80&w=600&auto=format&fit=crop',
    rating: 4.5,
    unit: '400 g'
  },
  {
    id: 'p8',
    name: 'Sparkling Mineral Water',
    price: 1.50,
    category: 'Beverages',
    image: 'https://images.unsplash.com/photo-1556881286-fc6915169722?q=80&w=600&auto=format&fit=crop',
    rating: 4.8,
    unit: '1 L'
  }
];
