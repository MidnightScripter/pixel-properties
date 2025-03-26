const formatNumber = (number: number | string) =>
  typeof number === 'string' ? Number(number) : number;
export const formatter = {
  price: (number: number | string) =>
    new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(formatNumber(number)),

  number: (number: number | string) =>
    new Intl.NumberFormat('en-US', {
      style: 'decimal',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(formatNumber(number)),
};
