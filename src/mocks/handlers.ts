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
        id: '2',
        picture: 'house2.jpg',
        address: '555 Buzz Buzz Ave Onett, Eagleland',
        price: '450000',
        beds: '3',
        baths: '3',
        title: 'Modern Retreat on Buzz Buzz Ave',
        description:
          'This stunning 3-bedroom, 3-bathroom property offers a modern design with luxurious amenities. Nestled in a quiet neighborhood, it’s a perfect retreat.',
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
          'A unique opportunity to own a spacious 6-bedroom, 1-bathroom home. Bring your creative touch to transform this property into your dream home!',
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
      },
      {
        id: '2',
        picture: 'house2.jpg',
        address: '555 Buzz Buzz Ave Onett, Eagleland',
        price: '450000',
        beds: '3',
        baths: '3',
      },
      {
        id: '3',
        picture: 'house3.jpg',
        address: '666 Gygas Court Onett, Eagleland',
        price: '666000',
        beds: '6',
        baths: '1',
      },
      {
        id: '4',
        picture: 'house4.jpg',
        address: '426a HAL Lab Ln Onett, Eagleland',
        price: '550000',
        beds: '4',
        baths: '3',
      },
      {
        id: '5',
        picture: 'house5.jpg',
        address: '42 Saturn Circle Onett, Eagleland',
        price: '777000',
        beds: '3',
        baths: '3',
      },
      {
        id: '6',
        picture: 'house6.jpg',
        address: '10 Paula Place Onett, Eagleland',
        price: '653000',
        beds: '5',
        baths: '4',
      },
      {
        id: '7',
        picture: 'house5.jpg',
        address: '50 Jeff Jct Onett, Eagleland',
        price: '252000',
        beds: '2',
        baths: '2',
      },
      {
        id: '8',
        picture: 'house8.jpg',
        address: '4040 Tessie Ter Onett, Eagleland',
        price: '333000',
        beds: '3',
        baths: '3',
      },
      {
        id: '9',
        picture: 'house9.jpg',
        address: '2 Pokey Place Onett, Eagleland',
        price: '802000',
        beds: '5',
        baths: '5',
      },
    ]);
  }),
];
