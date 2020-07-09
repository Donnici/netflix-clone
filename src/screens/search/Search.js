import React, { useContext } from 'react';
import {
	Container,
	SearchInput,
	SearchInputBox
} from '~/common/styles/screens/search';

import { SafeAreaView } from 'react-native-safe-area-context';
import { ThemeContext } from 'styled-components';
import Icon from '~/assets/icons/Icon';

const Search = () => {
	const theme = useContext(ThemeContext);
	return (
		<SafeAreaView style={{ flex: 1, backgroundColor: theme.background }}>
			<Container>
				<SearchInputBox>
					<Icon
						name='search'
						color={theme.white}
						size={18}
						style={{ display: 'flex' }}
					/>
					<SearchInput
						placeholder='Buscar'
					/>
				</SearchInputBox>
			</Container>
		</SafeAreaView>
	);
};

export default Search;
