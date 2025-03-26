import { languages } from 'countries-list';

export const LANGUAGES = Object.entries(languages).map(([code, { name, native }]) => ({
    label: native,
    englishLabel: name,
    code
}));
