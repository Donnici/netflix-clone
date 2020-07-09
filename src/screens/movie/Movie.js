import React, { useContext } from 'react';
import { ThemeContext } from 'styled-components';
import LinearGradient from 'react-native-linear-gradient';
import {
	Container,
	BackContent,
	BackContentButton,
	Backgound,
	Poster,
	PosterInfoBox,
	PosterInfoBoxButton,
	PosterInfoBoxButtonText,
    Description,
    ContentKeyValue,
    KeyText,
    ValueText
} from '~/common/styles/screens/movie';
import { BASE_URL_IMG } from '~/config/consts';
import Icon from '~/assets/icons/Icon';

const Movie = ({ navigation, route }) => {
	const theme = useContext(ThemeContext);
	const data = route.params.data;

	return (
		<Container>
			<Backgound source={{ uri: `${BASE_URL_IMG}${data.poster_path}` }}>
				<BackContent>
					<BackContentButton onPress={() => navigation.goBack()}>
						<Icon name='arrow_back' color={theme.white} size={30} />
					</BackContentButton>
				</BackContent>
				<Poster
					source={{ uri: `${BASE_URL_IMG}${data.poster_path}` }}
				/>
				<PosterInfoBox>
					<PosterInfoBoxButton>
						<Icon
							name='play'
							color={theme.black}
							size={20}
							style={{ display: 'flex' }}
						/>
						<PosterInfoBoxButtonText>
							Assistir
						</PosterInfoBoxButtonText>
					</PosterInfoBoxButton>
				</PosterInfoBox>
				<LinearGradient colors={['transparent', theme.black]} style={{marginTop: 10}}>
                    <ContentKeyValue>
                        <KeyText>Título original:</KeyText>
                        <ValueText>{data.original_title}</ValueText>
                    </ContentKeyValue>
					<Description>{data.overview}</Description>
				</LinearGradient>
			</Backgound>
		</Container>
	);
};

export default Movie;
