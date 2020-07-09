import * as RNLocalize from 'react-native-localize';

export const API_KEY = '85246b38adc1ac9774d4e92ab6266d69';

export const LANG = RNLocalize.findBestAvailableLanguage(['pt-BR', 'en-US'])?.languageTag;
export const BASE_URL = 'https://api.themoviedb.org/3';
export const BASE_URL_IMG = 'https://image.tmdb.org/t/p/w500';