import { http, HttpResponse } from 'msw';

export const handlers = [
  http.get('/api/data/featured', () => {
    // ...and respond to them using this JSON response.
    return HttpResponse.json([
      {
        id: '1',
        picture: 'house1.jpg',
        address: '1234 Main Street Onett, Eagleland',
        price: '340000',
        beds: '4',
        baths: '2',
        title: 'Charming Family Home on Main Street',
        description:
          'A cozy 4-bedroom, 2-bathroom family home located in the heart of Onett. Features spacious living areas and a welcoming atmosphere, perfect for families.',
      },
      {
        id: '4',
        picture: 'house4.jpg',
        address: '426a HAL Lab Ln Onett, Eagleland',
        price: '550000',
        beds: '4',
        baths: '3',
        title: 'Charming Family Home on HAL Lab Lane',
        description:
          'This delightful 4-bedroom, 3-bathroom home at 426a HAL Lab Ln offers comfort and convenience in the heart of Onett, Eagleland. It’s the perfect blend of spacious living and a serene, family-friendly neighborhood.',
      },
      {
        id: '9',
        picture: 'house9.jpg',
        address: '2 Pokey Place Onett, Eagleland',
        price: '802000',
        beds: '5',
        baths: '5',
        title: 'Spacious Elegance in the Heart of Onett',
        description:
          'Discover a luxurious 5-bedroom, 5-bathroom home at 2 Pokey Place in Onett, Eagleland. This spacious residence offers elegance, comfort, and a serene location perfect for family living or entertaining guests.',
      },
    ]);
  }),
  http.get('/api/data', () => {
    // ...and respond to them using this JSON response.
    return HttpResponse.json([
      {
        id: '1',
        picture: 'house1.jpg',
        address: '1234 Main Street Onett, Eagleland',
        price: '340000',
        beds: '4',
        baths: '2',
        title: 'Charming Family Home on Main Street',
        description:
          'A cozy 4-bedroom, 2-bathroom family home located in the heart of Onett. Features spacious living areas and a welcoming atmosphere, perfect for families.',
      },
      {
        id: '2',
        picture: 'house2.jpg',
        address: '555 Buzz Buzz Ave Onett, Eagleland',
        price: '450000',
        beds: '3',
        baths: '3',
        title: 'Buzzing with Comfort on Buzz Buzz Ave',
        description:
          "This charming 3-bedroom, 3-bathroom home at 555 Buzz Buzz Ave offers cozy living in the heart of Onett, Eagleland. It's the perfect space for those seeking comfort and convenience in a peaceful neighborhood.",
      },
      {
        id: '3',
        picture: 'house3.jpg',
        address: '666 Gygas Court Onett, Eagleland',
        price: '666000',
        beds: '6',
        baths: '1',
        title: 'Spacious Fixer-Upper on Gygas Court',
        description:
          '6-bedroom, 1-bathroom home is a unique opportunity in Onett, Eagleland. It offers plenty of space and potential for creative renovations to make it truly your own.',
      },
      {
        id: '4',
        picture: 'house4.jpg',
        address: '426a HAL Lab Ln Onett, Eagleland',
        price: '550000',
        beds: '4',
        baths: '3',
        title: 'Charming Family Home on HAL Lab Lane',
        description:
          'This delightful 4-bedroom, 3-bathroom home at 426a HAL Lab Ln offers comfort and convenience in the heart of Onett, Eagleland. It’s the perfect blend of spacious living and a serene, family-friendly neighborhood.',
      },
      {
        id: '5',
        picture: 'house5.jpg',
        address: '42 Saturn Circle Onett, Eagleland',
        price: '777000',
        beds: '3',
        baths: '3',
        title: 'Modern Elegance on Saturn Circle',
        description:
          'Discover this stunning 3-bedroom, 3-bathroom home at 42 Saturn Circle in Onett, Eagleland. It offers sophisticated living with a spacious and inviting design.',
      },
      {
        id: '6',
        picture: 'house6.jpg',
        address: '10 Paula Place Onett, Eagleland',
        price: '653000',
        beds: '5',
        baths: '4',
        title: 'Spacious Family Retreat on Paula Place',
        description:
          'This beautiful 5-bedroom, 4-bathroom home at 10 Paula Place is perfect for large families or entertaining. It blends comfort and functionality in a serene setting.',
      },
      {
        id: '7',
        picture: 'house5.jpg',
        address: '50 Jeff Jct Onett, Eagleland',
        price: '252000',
        beds: '2',
        baths: '2',
        title: 'Cozy Charm on Jeff Junction',
        description:
          'Located at 50 Jeff Jct, this cozy 2-bedroom, 2-bathroom home offers an inviting space for anyone seeking a peaceful retreat. It’s an ideal starter home or investment opportunity.',
      },
      {
        id: '8',
        picture: 'house8.jpg',
        address: '4040 Tessie Ter Onett, Eagleland',
        price: '333000',
        beds: '3',
        baths: '3',
        title: 'Classic Comfort on Tessie Terrace',
        description:
          'This lovely 3-bedroom, 3-bathroom home at 4040 Tessie Ter provides both charm and convenience in Onett, Eagleland. It’s the perfect balance of value and style for your next home.',
      },
      {
        id: '9',
        picture: 'house9.jpg',
        address: '2 Pokey Place Onett, Eagleland',
        price: '802000',
        beds: '5',
        baths: '5',
        title: 'Spacious Elegance in the Heart of Onett',
        description:
          'Discover a luxurious 5-bedroom, 5-bathroom home at 2 Pokey Place in Onett, Eagleland. This spacious residence offers elegance, comfort, and a serene location perfect for family living or entertaining guests.',
      },
    ]);
  }),
];
