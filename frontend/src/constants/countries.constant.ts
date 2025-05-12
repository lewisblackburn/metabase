import { TCountryCode, countries, getEmojiFlag } from 'countries-list';

export const COUNTRIES = Object.entries(countries).map(([code, { name, native }]) => ({
    label: native,
    englishLabel: name,
    code,
    flagEmoji: getEmojiFlag(code as TCountryCode)
}));
