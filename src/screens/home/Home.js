import React, { useState, useEffect } from 'react';

import { SectionPosters, Banner } from '~/common/components';
import { ContainerScroll } from '~/common/styles/screens/home';
import { request } from '~/services/request';
import { movieByGenre } from '~/helpers/formaters';
import { API_KEY, LANG } from '~/config/consts';

const Home = ({ navigation }) => {
	const [moviesByGenres, setMoviesByGenres] = useState({});

	useEffect(() => {
		async function getMovies() {
			try {
				const { data: dataGenres } = await request.get(
					`/genre/movie/list?api_key=${API_KEY}&language=${LANG}`
				);
				const { data: dataMovies } = await request.get(
					`/discover/movie?api_key=${API_KEY}&language=${LANG}`
				);
				const newMovieByGenre = movieByGenre(
					dataMovies.results,
					dataGenres.genres
				);
				setMoviesByGenres(newMovieByGenre);
			} catch (error) {
				console.log(error);
				console.log(error.request);
			}
		}
		getMovies();
	}, []);

	const renderSections = () => {
		return Object.keys(moviesByGenres)
			.map((genre) => {
				console.log(genre);

				return (
					<SectionPosters
						title={genre}
						key={genre}
						nav={navigation}
						movies={moviesByGenres[genre]}
					/>
				);
			});
	};

	return (
		<ContainerScroll>
			<Banner nav={navigation} />
			{renderSections()}
		</ContainerScroll>
	);
};

export default Home;
