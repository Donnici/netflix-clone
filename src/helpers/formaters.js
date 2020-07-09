export const movieByGenre = (movies, genres) => {
	const newMovieByGenre = {};
	for (const movie of movies) {
		for (const id of movie.genre_ids) {
			const genre = genres.find((g) => g.id === id);
			const name = genre.name;
			
			if (!newMovieByGenre.hasOwnProperty(name)) {
				newMovieByGenre[name] = [];
			}
	
			newMovieByGenre[name].push({
				id: movie.id,
				title: movie.title,
				poster_path: movie.poster_path,
				original_title: movie.original_title,
				overview: movie.overview,
				release_date: movie.release_date
			});
		}
	}

	return newMovieByGenre;
};
