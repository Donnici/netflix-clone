import React from 'react';

import {
	Content,
	SectionPosterTitle,
	SectionPosterScroll
} from '~/common/styles/poster/sectionPosters';
import { PosterTouchable, Poster } from '~/common/styles/poster/poster';
import { BASE_URL_IMG } from '~/config/consts';

const SectionPosters = ({ nav, title, movies }) => {
	const renderPosters = () => {
		return movies.map((movie) => (
			<PosterTouchable key={movie.id} onPress={() =>
				nav.navigate('Details', {
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
		<Content>
			<SectionPosterTitle>{title}</SectionPosterTitle>
			<SectionPosterScroll nestedScrollEnabled>
				{renderPosters()}
			</SectionPosterScroll>
		</Content>
	);
};

export default SectionPosters;
