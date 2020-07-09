import React, { useContext } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import Icon from '~/assets/icons/Icon';
import { Home, Movie, Search } from '~/screens';

import { ThemeContext } from 'styled-components';

const Tab = createBottomTabNavigator();
const HomeStack = createStackNavigator();
const SearchStack = createStackNavigator();

function HomeStackScreen() {
	return (
		<HomeStack.Navigator
			screenOptions={{
				headerShown: false
			}}
		>
			<HomeStack.Screen name='Home' component={Home} />
			<HomeStack.Screen name='Details' component={Movie} />
		</HomeStack.Navigator>
	);
}

function SearchStackScreen() {
	return (
		<SearchStack.Navigator
			screenOptions={{
				headerShown: false
			}}
		>
			<SearchStack.Screen name='Search' component={Search} />
			<SearchStack.Screen name='Details' component={Movie} />
		</SearchStack.Navigator>
	);
}

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
				component={HomeStackScreen}
				options={{
					tabBarLabel: 'Home',
					tabBarIcon: ({ color, size }) => (
						<Icon name='home' color={color} size={size} />
					)
				}}
			/>
			<Tab.Screen
				name='Buscar'
				component={SearchStackScreen}
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
