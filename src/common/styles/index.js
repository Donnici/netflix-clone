import { Dimensions } from 'react-native';

export const theme = {
    primary: {
        main: '#E50914',
        contrastText: '#ffffff'
    },
    background: '#000000',
    white: "#ffffff",
    gray: "#808080",
    screen: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height
    }
};