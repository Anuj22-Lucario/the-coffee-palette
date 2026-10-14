export const WHATSAPP_NUMBER = '918090753057';

export function whatsappLink(message: string): string {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export const CAFE_INFO = {
  name: 'The Coffee Palette',
  area: 'Gomti Nagar, Lucknow',
  address: '3/545, Vivek Khand 2, Gomti Nagar, Lucknow',
  phone: '+918090753057',
  phoneDisplay: '+91 80907 53057',
  hours: 'Open Daily 11:00 AM – 11:00 PM',
  rating: '4.4',
  reviewCount: '1,500+',
  mapsUrl: 'https://www.google.com/maps/search/?api=1&query=The+Coffee+Palette+Gomti+Nagar+Lucknow',
};

export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  category: 'Bestsellers' | 'Artisanal Coffee' | 'Cozy Comfort Food' | 'Art Session Packages';
  image: string;
  badge?: string;
  veg?: boolean;
}

export const menuItems: MenuItem[] = [
  {
    id: 'pink-pasta',
    name: 'Veg Pink Sauce Pasta',
    description: 'Creamy tomato-bechamel fusion with sautéed veggies and fresh basil.',
    price: 249,
    category: 'Bestsellers',
    image: 'https://images.pexels.com/photos/16525900/pexels-photo-16525900.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    badge: 'Bestseller',
    veg: true,
  },
  {
    id: 'kitkat-shake',
    name: 'KitKat Shake',
    description: 'Thick blended milkshake with crushed KitKat, chocolate drizzle & whipped cream.',
    price: 199,
    category: 'Bestsellers',
    image: 'https://images.pexels.com/photos/38178695/pexels-photo-38178695.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    badge: 'Bestseller',
    veg: true,
  },
  {
    id: 'four-season-pizza',
    name: 'Four Season Pizza',
    description: 'Wood-fired thin crust topped with four distinct seasonal flavor zones.',
    price: 349,
    category: 'Bestsellers',
    image: 'https://images.pexels.com/photos/29626982/pexels-photo-29626982.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    badge: 'Bestseller',
    veg: true,
  },
  {
    id: 'veg-lasagna',
    name: 'Veg Lasagna',
    description: 'Layered baked pasta with rich cheese, garden veggies & homemade marinara.',
    price: 279,
    category: 'Bestsellers',
    image: 'https://images.pexels.com/photos/9650082/pexels-photo-9650082.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    badge: 'Bestseller',
    veg: true,
  },
  {
    id: 'cafe-mocha',
    name: 'Café Mocha',
    description: 'Espresso meets dark chocolate with steamed milk and a cocoa dusting.',
    price: 169,
    category: 'Bestsellers',
    image: 'https://images.pexels.com/photos/8444426/pexels-photo-8444426.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    badge: 'Bestseller',
    veg: true,
  },
  {
    id: 'chilli-paneer',
    name: 'Chilli Paneer',
    description: 'Indo-Chinese style crispy paneer tossed in spicy sweet chilli glaze.',
    price: 229,
    category: 'Bestsellers',
    image: 'https://images.pexels.com/photos/28445829/pexels-photo-28445829.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    badge: 'Bestseller',
    veg: true,
  },
  {
    id: 'cappuccino',
    name: 'Classic Cappuccino',
    description: 'Single-origin espresso with velvety micro-foam & delicate latte art.',
    price: 149,
    category: 'Artisanal Coffee',
    image: 'https://images.pexels.com/photos/11385490/pexels-photo-11385490.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    veg: true,
  },
  {
    id: 'latte-art',
    name: 'Specialty Latte',
    description: 'Smooth espresso, silky steamed milk, topped with signature pour art.',
    price: 159,
    category: 'Artisanal Coffee',
    image: 'https://images.pexels.com/photos/765162/pexels-photo-765162.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    veg: true,
  },
  {
    id: 'hand-brewed',
    name: 'Hand-Brewed Filter',
    description: 'Slow pour-over highlighting bright, clean single-origin notes.',
    price: 139,
    category: 'Artisanal Coffee',
    image: 'https://images.pexels.com/photos/531663/pexels-photo-531663.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    veg: true,
  },
  {
    id: 'margherita-pizza',
    name: 'Margherita Pizza',
    description: 'Classic wood-fired: San Marzano sauce, fresh mozzarella & basil.',
    price: 299,
    category: 'Cozy Comfort Food',
    image: 'https://images.pexels.com/photos/6223172/pexels-photo-6223172.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    veg: true,
  },
  {
    id: 'penne-arrabbiata',
    name: 'Penne Arrabbiata',
    description: 'Spicy tomato garlic penne with chilli flakes & olive oil.',
    price: 239,
    category: 'Cozy Comfort Food',
    image: 'https://images.pexels.com/photos/34890641/pexels-photo-34890641.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    veg: true,
  },
  {
    id: 'canvas-painting-session',
    name: 'Canvas Painting Session',
    description: 'Guided 2-hour painting on a 12×16 canvas. All art supplies included.',
    price: 599,
    category: 'Art Session Packages',
    image: 'https://images.pexels.com/photos/9032443/pexels-photo-9032443.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    badge: 'Most Loved',
  },
  {
    id: 'tote-bag-art',
    name: 'Tote Bag Art Session',
    description: 'Design & paint your own canvas tote bag. Take your creation home!',
    price: 449,
    category: 'Art Session Packages',
    image: 'https://images.pexels.com/photos/19711251/pexels-photo-19711251.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    badge: 'New',
  },
];

export interface HeroCard {
  title: string;
  subtitle: string;
  image: string;
  accentText: string;
}

export const heroCards: HeroCard[] = [
  {
    title: 'Painting Date',
    subtitle: 'Two canvases, one memory. All supplies included.',
    image: 'https://images.pexels.com/photos/7719076/pexels-photo-7719076.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    accentText: 'Couples Favourite',
  },
  {
    title: 'Swiftie Playlist Vibe',
    subtitle: 'Midnight coffee with Taylor Swift on repeat. Pure cozy.',
    image: 'https://images.pexels.com/photos/765162/pexels-photo-765162.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    accentText: 'Mood: Midnight',
  },
  {
    title: 'Gourmet Pizzas',
    subtitle: 'Wood-fired, hand-stretched, loaded with flavour.',
    image: 'https://images.pexels.com/photos/29626982/pexels-photo-29626982.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    accentText: 'Chef Special',
  },
];

export const reviews = [
  {
    text: "The painting date was incredibly romantic. We laughed, painted terribly, and fell in love all over again over the best mocha I've had in Lucknow.",
    author: 'Ananya & Rohit',
    context: 'Anniversary Date',
  },
  {
    text: "I came alone stressed and left with a canvas and a calm mind. The therapeutic vibe here is real. Swiftie playlists on loop is just chef's kiss.",
    author: 'Priya S.',
    context: 'Solo Art Session',
  },
  {
    text: "Hands down the cosiest spot in Gomti Nagar. Wood-fired pizza, art on the walls, art on your table. The Coffee Palette gets it.",
    author: 'Karan M.',
    context: 'Weekend Hangout',
  },
];

export const bentoFeatures = [
  {
    icon: 'PawPrint',
    title: 'Pet-Friendly',
    description: 'Bring your furry friend. They deserve a day out too.',
  },
  {
    icon: 'Music',
    title: 'Swiftie Playlists',
    description: 'Curated feel-good music that matches the creative mood.',
  },
  {
    icon: 'Palette',
    title: 'All Art Supplies Included',
    description: 'Canvas, paints, brushes, aprons — everything is on us.',
  },
  {
    icon: 'TreePalm',
    title: 'Cozy Outdoor Patio',
    description: 'Open-air seating under warm string lights. Pure magic.',
  },
];

export const bookingExperiences = [
  {
    id: 'coffee-hangout',
    title: 'Coffee & Hangout',
    description: 'Reserve a table for great coffee, food & conversations.',
    icon: 'Coffee',
    duration: 'Flexible',
  },
  {
    id: 'canvas-painting',
    title: 'Canvas Painting Session',
    description: 'Guided 2-hour painting with all supplies included.',
    icon: 'Palette',
    duration: '2 hours',
  },
  {
    id: 'tote-bag-art',
    title: 'Tote Bag Art Session',
    description: 'Design & paint your own tote bag to take home.',
    icon: 'ShoppingBag',
    duration: '1.5 hours',
  },
];

export const timeSlots = [
  '11:00 AM', '12:00 PM', '1:00 PM', '2:00 PM',
  '4:00 PM', '5:00 PM', '6:00 PM', '7:00 PM',
  '8:00 PM', '9:00 PM',
];
