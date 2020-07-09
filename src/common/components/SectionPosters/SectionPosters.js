import React from 'react';

import {
	Content,
	SectionPosterTitle,
	SectionPosterScroll
} from '~/common/styles/poster/sectionPosters';
import { Poster } from '~/common/styles/poster/poster';
import { BASE_URL_IMG } from '~/config/consts';

const SectionPosters = ({ title, movies }) => {
	const renderPosters = () => {
		return movies.map((movie) => (
			<Poster
				key={movie.id}
				source={{
					uri: `${BASE_URL_IMG}${movie.poster_path}`
				}}
			/>
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
