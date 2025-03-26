import { AC, Garage, HOA, House, Payments, School } from '../assets/icons';

export const propertyCategories = [
  {
    name: 'Heating and Cooling',
    icon: AC,
    keys: ['heating', 'cooling'],
  },
  {
    name: 'Interior Features',
    icon: House,
    keys: ['flooring', 'squareFootage', 'yearBuilt'],
  },
  {
    name: 'Garage',
    icon: Garage,
    keys: ['garage', 'garageSize', 'garageAttached'],
  },
  {
    name: 'Lot Information',
    icon: HOA,
    keys: ['lotSize', 'HOA'],
  },
  {
    name: 'Tax Details',
    icon: Payments,
    keys: ['taxAnnualAmount', 'taxYear'],
  },
  {
    name: 'School District',
    icon: School,
    keys: ['schoolDistrict'],
  },
];
export const friendlyFeatureNames = {
  mlsNo: 'MLS #',
  sqFt: 'Sq. Ft.',
  city: 'City',
  state: 'State',
  county: 'County',
  price: 'Price',
  beds: 'Beds',
  baths: 'Baths',
  yearBuilt: 'Year Built',
  propertyType: 'Property Type',
  garage: 'Garage',
  garageSize: 'Garage Size',
  garageAttached: 'Garage Attached',
  lotSize: 'Lot Size',
  squareFootage: 'Sq. Ft.',
  heating: 'Heating',
  cooling: 'Cooling',
  flooring: 'Flooring',
  HOA: 'HOA',
  taxAnnualAmount: 'Taxes Annual Amount',
  taxYear: 'Tax Year',
  schoolDistrict: 'School District',
};
