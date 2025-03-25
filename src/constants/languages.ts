import { languages } from 'countries-list';

export const languageList = Object.entries(languages).map(([code, { name, native }]) => ({
    label: native,
    englishLabel: name,
    iso2: code
}));
