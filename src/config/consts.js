import * as RNLocalize from 'react-native-localize';

export const API_KEY = '';

export const LANG = RNLocalize.findBestAvailableLanguage(['pt-BR', 'en-US'])?.languageTag;
export const BASE_URL = 'https://api.themoviedb.org/3';
export const BASE_URL_IMG = 'https://image.tmdb.org/t/p/w500';