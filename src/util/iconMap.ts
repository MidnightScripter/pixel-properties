import { ComponentType } from 'react';
import {
  AC,
  Bed,
  Garage,
  Heating,
  HOA,
  HouseType,
  Payments,
  School,
  Shower,
  SqFt,
} from '../assets/icons';
export const iconMap: { [key: string]: ComponentType } = {
  sqFt: SqFt,
  beds: Bed,
  baths: Shower,
  propertyType: HouseType,
  garage: Garage,
  lotSize: SqFt,
  squareFootage: SqFt,
  heating: Heating,
  cooling: AC,
  HOA: HOA,
  taxAnnualAmount: Payments,
  schoolDistrict: School,
};
