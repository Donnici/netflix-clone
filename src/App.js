import 'react-native-gesture-handler';
import React from 'react';

import { NavigationContainer } from '@react-navigation/native';

import { LANG } from './config/consts';
import { theme } from './common/styles';
import { ThemeProvider as StyledTheme } from 'styled-components';
import Routes from './main/Routes';
import { StatusBar } from 'react-native';

const App = () => {
	return (
		<StyledTheme theme={theme}>
			<NavigationContainer>
				<StatusBar translucent backgroundColor='transparent' />
				<Routes />
			</NavigationContainer>
		</StyledTheme>
	);
};

export default App;
