import { countries } from 'countries-list';

export const countryList = Object.entries(countries).map(([code, { name, native }]) => ({
    label: native,
    englishLabel: name,
    iso2: code
}));
