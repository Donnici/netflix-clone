import React, { useContext, useState, useEffect } from 'react';
import {
	Container,
	SearchInput,
	SearchInputBox,
	ContentScroll
} from '~/common/styles/screens/search';

import { SafeAreaView } from 'react-native-safe-area-context';
import { ThemeContext } from 'styled-components';
import Icon from '~/assets/icons/Icon';
import { PosterTouchable, Poster } from '~/common/styles/poster/poster';
import { request } from '~/services/request';
import { API_KEY, LANG, BASE_URL_IMG } from '~/config/consts';

const Search = ({ navigation }) => {
	const theme = useContext(ThemeContext);
	const [searchText, setSearchText] = useState('');
	const [movies, setMovies] = useState([]);

	async function searchMovies(query) {
		try {
			const { data: dataMovies } = await request.get(
				`/search/movie?api_key=${API_KEY}&language=${LANG}&query=${query}`
			);
			setMovies(dataMovies.results);
		} catch (error) {
			console.log(error);
			console.log(error.request);
		}
	}

	useEffect(() => {
		if (searchText.trim() !== '') {
			searchMovies(searchText);
		}
	}, [searchText, searchMovies]);

	const renderMovies = () => {
		return movies.map((movie) => (
			<PosterTouchable key={movie.id} onPress={() =>
				navigation.navigate('Details', {
					data: movie
				})
			}>
				<Poster
					source={{
						uri: `${BASE_URL_IMG}${movie.poster_path}`
					}}
				/>
			</PosterTouchable>
		));
	};

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
						value={searchText}
						onChangeText={(text) => setSearchText(text)}
					/>
				</SearchInputBox>
				<ContentScroll>
					{renderMovies()}
				</ContentScroll>
			</Container>
		</SafeAreaView>
	);
};

export default Search;
