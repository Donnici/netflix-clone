import React, { useContext, useState, useEffect } from 'react';
import { ThemeContext } from 'styled-components';
import LinearGradient from 'react-native-linear-gradient';
import {
	BannerContent,
	BannerImage,
	BannerInfoBoxButton,
	BannerInfoBoxButtonText
} from '~/common/styles/banner/banner';
import Icon from '~/assets/icons/Icon';
import { StyleSheet } from 'react-native';
import { request } from '~/services/request';
import { API_KEY, LANG, BASE_URL_IMG } from '~/config/consts';

const Banner = ({ nav }) => {
	const theme = useContext(ThemeContext);
	const [movie, setMovie] = useState({});
	const styles = StyleSheet.create({
		linearGradient: {
			display: 'flex',
			width: theme.screen.width,
			position: 'absolute',
			bottom: 0,
			paddingTop: 60,
			paddingBottom: 60,
			flexDirection: 'row',
			justifyContent: 'center',
			alignContent: 'center',
			alignItems: 'center'
		}
	});

	useEffect(() => {
		async function getMovies() {
			try {
				const { data: dataMovies } = await request.get(
					`/trending/movie/day?api_key=${API_KEY}&language=${LANG}`
				);
				setMovie(dataMovies.results[0]);
			} catch (error) {
				console.log(error);
				console.log(error.request);
			}
		}
		getMovies();
	}, []);

	return (
		<BannerContent>
			<BannerImage
				source={{
					uri: `${BASE_URL_IMG}${movie.poster_path}`
				}}
			/>
			<LinearGradient
				colors={['transparent', theme.black]}
				style={styles.linearGradient}
			>
				<BannerInfoBoxButton
					onPress={() =>
						nav.navigate('Details', {
							data: movie
						})
					}
				>
					<Icon
						name='play'
						color={theme.black}
						size={20}
						style={{ display: 'flex' }}
					/>
					<BannerInfoBoxButtonText>Assistir</BannerInfoBoxButtonText>
				</BannerInfoBoxButton>
			</LinearGradient>
		</BannerContent>
	);
};

export default Banner;
