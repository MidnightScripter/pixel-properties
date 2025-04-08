import { http, HttpResponse, delay } from 'msw';

//   {
//     id: 1,
//     picture: 'house1.jpg',
//     address: '1234 Main Street Onett, Eagleland',
//     price: '340000',
//     beds: '4',
//     baths: '2',
//     title: 'Charming Family Home on Main Street',
//     description:
//       'A cozy 4-bedroom, 2-bathroom family home located in the heart of Onett. Features spacious living areas and a welcoming atmosphere, perfect for families.',
//   },
//   {
//     id: 2,
//     picture: 'house2.jpg',
//     address: '555 Buzz Buzz Ave Onett, Eagleland',
//     price: '450000',
//     beds: '3',
//     baths: '3',
//     title: 'Buzzing with Comfort on Buzz Buzz Ave',
//     description:
//       "This charming 3-bedroom, 3-bathroom home at 555 Buzz Buzz Ave offers cozy living in the heart of Onett, Eagleland. It's the perfect space for those seeking comfort and convenience in a peaceful neighborhood.",
//   },
//   {
//     id: 3,
//     picture: 'house3.jpg',
//     address: '666 Gygas Court Onett, Eagleland',
//     price: '666000',
//     beds: '6',
//     baths: '1',
//     title: 'Spacious Fixer-Upper on Gygas Court',
//     description:
//       '6-bedroom, 1-bathroom home is a unique opportunity in Onett, Eagleland. It offers plenty of space and potential for creative renovations to make it truly your own.',
//   },
//   {
//     id: 4,
//     picture: 'house4.jpg',
//     address: '426a HAL Lab Ln Onett, Eagleland',
//     price: '550000',
//     beds: '4',
//     baths: '3',
//     title: 'Modern Elegance on HAL Lab Lane',
//     description:
//       'This delightful 4-bedroom, 3-bathroom home at 426a HAL Lab Ln offers comfort and convenience in the heart of Onett, Eagleland. It’s the perfect blend of spacious living and a serene, family-friendly neighborhood.',
//     featured: true,
//   },
//   {
//     id: 5,
//     picture: 'house5.jpg',
//     address: '42 Saturn Circle Onett, Eagleland',
//     price: '777000',
//     beds: '3',
//     baths: '3',
//     title: 'Modern Elegance on Saturn Circle',
//     description:
//       'Discover this stunning 3-bedroom, 3-bathroom home at 42 Saturn Circle in Onett, Eagleland. It offers sophisticated living with a spacious and inviting design.',
//   },
//   {
//     id: 6,
//     picture: 'house6.jpg',
//     address: '10 Paula Place Onett, Eagleland',
//     price: '653000',
//     beds: '5',
//     baths: '4',
//     title: 'Spacious Family Retreat on Paula Place',
//     description:
//       'This beautiful 5-bedroom, 4-bathroom home at 10 Paula Place is perfect for large families or entertaining. It blends comfort and functionality in a serene setting.',
//   },
//   {
//     id: 7,
//     picture: 'house5.jpg',
//     address: '50 Jeff Jct Onett, Eagleland',
//     price: '252000',
//     beds: '2',
//     baths: '2',
//     title: 'Cozy Charm on Jeff Junction',
//     description:
//       'Located at 50 Jeff Jct, this cozy 2-bedroom, 2-bathroom home offers an inviting space for anyone seeking a peaceful retreat. It’s an ideal starter home or investment opportunity.',
//     featured: true,
//   },
//   {
//     id: 8,
//     picture: 'house8.jpg',
//     address: '4040 Tessie Ter Onett, Eagleland',
//     price: '333000',
//     beds: '3',
//     baths: '3',
//     title: 'Classic Comfort on Tessie Terrace',
//     description:
//       'This lovely 3-bedroom, 3-bathroom home at 4040 Tessie Ter provides both charm and convenience in Onett, Eagleland. It’s the perfect balance of value and style for your next home.',
//   },
//   {
//     id: 9,
//     picture: 'house9.jpg',
//     address: '2 Pokey Place Onett, Eagleland',
//     price: '802000',
//     beds: '5',
//     baths: '5',
//     title: 'Spacious Elegance in the Heart of Onett',
//     description:
//       'Discover a luxurious 5-bedroom, 5-bathroom home at 2 Pokey Place in Onett, Eagleland. This spacious residence offers elegance, comfort, and a serene location perfect for family living or entertaining guests.',
//     featured: true,
//   },
// ];
const mockData = [
  {
    id: 1,
    mlsNo: 'X12345',
    sqFt: '1930',
    picture: 'house1.jpg',
    address: '1234 Main Street',
    city: 'Onett',
    state: 'Eagleland',
    county: 'Eagleland County',
    price: '340000',
    beds: '4',
    baths: '2',
    title: 'Charming Family Home on Main Street',
    description:
      'A cozy 4-bedroom, 2-bathroom family home located in the heart of Onett. Features spacious living areas and a welcoming atmosphere, perfect for families.',
    yearBuilt: 1995,
    propertyType: 'Single Family',
    garage: true,
    garageSize: '1',
    garageAttached: true,
    lotSize: '0.25 acres',
    squareFootage: '2000 sq ft',
    heating: 'Central Heating',
    cooling: 'Central Air Conditioning',
    flooring: 'Hardwood and Tile',
    HOA: false,
    taxAnnualAmount: 3200,
    taxYear: 2023,
    schoolDistrict: 'Onett School District',
  },
  {
    id: 2,
    mlsNo: 'X12345',
    sqFt: '2410',
    picture: 'house2.jpg',
    address: '555 Buzz Buzz Ave',
    city: 'Onett',
    state: 'Eagleland',
    county: 'Eagleland County',
    price: '450000',
    beds: '3',
    baths: '3',
    title: 'Buzzing with Comfort on Buzz Buzz Ave',
    description:
      "This charming 3-bedroom, 3-bathroom home at 555 Buzz Buzz Ave offers cozy living in the heart of Onett, Eagleland. It's the perfect space for those seeking comfort and convenience in a peaceful neighborhood.",
    yearBuilt: 2005,
    propertyType: 'Townhouse',
    garage: true,
    garageSize: '2',
    garageAttached: true,
    lotSize: '0.15 acres',
    squareFootage: '1800 sq ft',
    heating: 'Gas Furnace',
    cooling: 'None',
    flooring: 'Carpet',
    HOA: true,
    taxAnnualAmount: 3900,
    taxYear: 2023,
    schoolDistrict: 'Buzz Buzz Unified School District',
  },
  {
    id: 3,
    mlsNo: 'X12345',
    sqFt: '2900',
    picture: 'house3.jpg',
    address: '666 Gygas Court',
    city: 'Onett',
    state: 'Eagleland',
    county: 'Eagleland County',
    price: '666000',
    beds: '6',
    baths: '1',
    title: 'Spacious Fixer-Upper on Gygas Court',
    description:
      '6-bedroom, 1-bathroom home is a unique opportunity in Onett, Eagleland. It offers plenty of space and potential for creative renovations to make it truly your own.',
    yearBuilt: 1980,
    propertyType: 'Fixer-Upper',
    garage: false,
    lotSize: '0.4 acres',
    squareFootage: '2500 sq ft',
    heating: 'Electric Baseboards',
    cooling: 'Central AC',
    flooring: 'Linoleum and Carpet',
    HOA: false,
    taxAnnualAmount: 4500,
    taxYear: 2023,
    schoolDistrict: 'Onett School District',
  },
  {
    id: 4,
    mlsNo: 'X12345',
    sqFt: '2530',
    picture: 'house4.jpg',
    address: '426a HAL Lab Ln',
    city: 'Onett',
    state: 'Eagleland',
    county: 'Eagleland County',
    price: '550000',
    beds: '4',
    baths: '3',
    title: 'Modern Elegance on HAL Lab Lane',
    description:
      'This delightful 4-bedroom, 3-bathroom home at 426a HAL Lab Ln offers comfort and convenience in the heart of Onett, Eagleland. It’s the perfect blend of spacious living and a serene, family-friendly neighborhood.',
    yearBuilt: 2015,
    propertyType: 'Single Family',
    garage: true,
    garageSize: '1',
    garageAttached: false,
    lotSize: '0.3 acres',
    squareFootage: '2400 sq ft',
    heating: 'Gas Furnace',
    cooling: 'Central Air Conditioning',
    flooring: 'Hardwood',
    HOA: false,
    taxAnnualAmount: 5200,
    taxYear: 2023,
    schoolDistrict: 'HAL Lab Unified School District',
    featured: true,
  },
  {
    id: 5,
    mlsNo: 'X12345',
    sqFt: '1750',
    picture: 'house5.jpg',
    address: '42 Saturn Circle',
    city: 'Onett',
    state: 'Eagleland',
    county: 'Eagleland County',
    price: '777000',
    beds: '3',
    baths: '3',
    title: 'Modern Elegance on Saturn Circle',
    description:
      'Discover this stunning 3-bedroom, 3-bathroom home at 42 Saturn Circle in Onett, Eagleland. It offers sophisticated living with a spacious and inviting design.',
    yearBuilt: 2020,
    propertyType: 'Condominium',
    garage: true,
    garageSize: '2',
    garageAttached: true,
    lotSize: '0.1 acres',
    squareFootage: '1500 sq ft',
    heating: 'Radiant Floor Heating',
    cooling: 'Central Air Conditioning',
    flooring: 'Tile and Carpet',
    HOA: true,
    taxAnnualAmount: 5800,
    taxYear: 2023,
    schoolDistrict: 'Saturn Unified School District',
  },
  {
    id: 6,
    mlsNo: 'X12345',
    sqFt: '2255',
    picture: 'house6.jpg',
    address: '10 Paula Place',
    city: 'Onett',
    state: 'Eagleland',
    county: 'Eagleland County',
    price: '653000',
    beds: '5',
    baths: '4',
    title: 'Spacious Family Retreat on Paula Place',
    description:
      'This beautiful 5-bedroom, 4-bathroom home at 10 Paula Place is perfect for large families or entertaining. It blends comfort and functionality in a serene setting.',
    yearBuilt: 1998,
    propertyType: 'Single Family',
    garage: true,
    garageSize: '1',
    garageAttached: false,
    lotSize: '0.45 acres',
    squareFootage: '3000 sq ft',
    heating: 'Forced Air Heating',
    cooling: 'Central AC',
    flooring: 'Hardwood and Carpet',
    HOA: false,
    taxAnnualAmount: 4700,
    taxYear: 2023,
    schoolDistrict: 'Paula Unified School District',
  },
  {
    id: 7,
    mlsNo: 'X12345',
    sqFt: '1233',
    picture: 'house7.jpg',
    address: '50 Jeff Jct',
    city: 'Onett',
    state: 'Eagleland',
    county: 'Eagleland County',
    price: '252000',
    beds: '2',
    baths: '2',
    title: 'Cozy Charm on Jeff Junction',
    description:
      'Located at 50 Jeff Jct, this cozy 2-bedroom, 2-bathroom home offers an inviting space for anyone seeking a peaceful retreat. It’s an ideal starter home or investment opportunity.',
    yearBuilt: 1975,
    propertyType: 'Single Family',
    garage: false,
    lotSize: '0.2 acres',
    squareFootage: '1200 sq ft',
    heating: 'Gas Furnace',
    cooling: 'Split Unit',
    flooring: 'Vinyl',
    HOA: false,
    taxAnnualAmount: 2100,
    taxYear: 2023,
    schoolDistrict: 'Jeff Unified School District',
    featured: true,
  },
  {
    id: 8,
    mlsNo: 'X12345',
    sqFt: '1610',
    picture: 'house8.jpg',
    address: '4040 Tessie Ter',
    city: 'Onett',
    state: 'Eagleland',
    county: 'Eagleland County',
    price: '333000',
    beds: '3',
    baths: '3',
    title: 'Classic Comfort on Tessie Terrace',
    description:
      'This lovely 3-bedroom, 3-bathroom home at 4040 Tessie Ter provides both charm and convenience in Onett, Eagleland. It’s the perfect balance of value and style for your next home.',
    yearBuilt: 1987,
    propertyType: 'Single Family',
    garage: true,
    garageSize: '2',
    garageAttached: true,
    lotSize: '0.3 acres',
    squareFootage: '1600 sq ft',
    heating: 'Central Heating',
    cooling: 'Central Air Conditioning',
    flooring: 'Carpet',
    HOA: false,
    taxAnnualAmount: 3400,
    taxYear: 2023,
    schoolDistrict: 'Tessie Unified School District',
  },
  {
    id: 9,
    mlsNo: 'X12345',
    sqFt: '3366',
    picture: 'house9.jpg',
    address: '2 Pokey Place',
    city: 'Onett',
    state: 'Eagleland',
    county: 'Eagleland County',
    price: '802000',
    beds: '5',
    baths: '5',
    title: 'Spacious Elegance in the Heart of Onett',
    description:
      'Discover a luxurious 5-bedroom, 5-bathroom home at 2 Pokey Place in Onett, Eagleland. This spacious residence offers elegance, comfort, and a serene location perfect for family living or entertaining guests.',
    yearBuilt: 2023,
    propertyType: 'Luxury Home',
    garage: true,
    garageSize: '3',
    garageAttached: true,
    lotSize: '0.5 acres',
    squareFootage: '4000 sq ft',
    heating: 'Geothermal Heating',
    cooling: 'Central Air Conditioning',
    flooring: 'Marble and Hardwood',
    HOA: true,
    taxAnnualAmount: 6200,
    taxYear: 2023,
    schoolDistrict: 'Pokey Unified School District',
    featured: true,
  },
];
interface FavoritesRequestBody {
  favorites: number[];
}
export const handlers = [
  http.get('/api/data/featured', () => {
    const featuredProperties = mockData.filter(
      (property) => property.featured === true
    );
    return HttpResponse.json(featuredProperties);
  }),
  http.get('/api/data', () => {
    return HttpResponse.json(mockData);
  }),
  http.get('/api/data/:propertyId', async ({ params }) => {
    const { propertyId } = params;
    const property = mockData.find((item) => item.id.toString() === propertyId);
    if (property) {
      await delay();
      return HttpResponse.json(property); // Return the matching property
    } else {
      return new HttpResponse(null, { status: 404 }); // Handle missing property
    }
  }),
  http.post('/api/data/favorites', async ({ request }) => {
    const { favorites } = (await request.json()) as FavoritesRequestBody;
    const matchedProps = mockData.filter((item) => favorites.includes(item.id));
    if (matchedProps.length > 0) {
      await delay();
      return HttpResponse.json(matchedProps); // Return the matching property
    } else {
      return new HttpResponse(null, { status: 404 }); // Handle missing property
    }
  }),
];
