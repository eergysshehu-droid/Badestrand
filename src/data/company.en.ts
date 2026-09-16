import { company } from './company';

export const companyEn = {
  ...company,
  address: {
    ...company.address,
    countryName: 'Germany'
  },
  serviceHours: {
    days: 'Monday–Friday',
    time: '8:00 AM–1:00 PM'
  }
};
