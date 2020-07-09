import React, { useContext } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from '~/assets/icons/Icon';
import { Home, Search } from '~/screens';

import { ThemeContext } from 'styled-components';

const Tab = createBottomTabNavigator();

const Routes = () => {
	const theme = useContext(ThemeContext);
	return (
		<Tab.Navigator
			tabBarOptions={{
				activeTintColor: theme.white,
				inactiveTintColor: theme.gray,
				style: {
					backgroundColor: theme.background,
					borderTopColor: 'transparent'
				}
			}}
		>
			<Tab.Screen
				name='Home'
				component={Home}
				options={{
					tabBarLabel: 'Home',
					tabBarIcon: ({ color, size }) => (
						<Icon name='home' color={color} size={size} />
					)
				}}
			/>
			<Tab.Screen
				name='Buscar'
				component={Search}
				options={{
					tabBarLabel: 'Buscar',
					tabBarIcon: ({ color, size }) => (
						<Icon name='search' color={color} size={size} />
					)
				}}
			/>
		</Tab.Navigator>
	);
};

export default Routes;
