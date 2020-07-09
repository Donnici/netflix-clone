import styled from 'styled-components/native';

export const Container = styled.View`
    display: flex;
    flex: 1;
    position: relative;
    background: ${(props) => props.theme.background};
    align-items: center;
`;

export const Backgound = styled.ImageBackground.attrs({
    blurRadius: 10
})`
    display: flex;
    position: relative;
    width: ${({ theme }) => theme.screen.width}px;
    padding-bottom: 0;
    padding-top: 80px;
    justify-content: center;
    align-content: center;
    align-items: center;
`;

export const BackContent = styled.View`
    position: absolute;
    top: 60px;
    left: 20px;
`;
export const BackContentButton = styled.TouchableWithoutFeedback``;

export const Poster = styled.Image`
    display: flex;
    height: 225px;
    width: 150px;
`;


export const PosterInfoBox = styled.View`
    display: flex;
    width: ${({ theme }) => theme.screen.width}px;
    padding-top: 20px;
    flex-direction: row;
    justify-content: center;
    align-content: center;
    align-items: center;
`;

export const PosterInfoBoxButton = styled.TouchableOpacity`
    display: flex;
    width: ${({ theme }) => theme.screen.width - 20}px;
    padding: 10px 15px;
    border-radius: 5px;
    background: ${({ theme }) => theme.white};
    flex-direction: row;
    align-content: center;
    align-items: center;
    justify-content: center;
`;

export const PosterInfoBoxButtonText = styled.Text`
    display: flex;
    font-weight: bold;
    text-transform: uppercase;
    margin-left: 5px;
    color: ${({ theme }) => theme.black};
`;

export const ContentKeyValue = styled.View`
    display: flex;
    width: ${({ theme }) => theme.screen.width - 60}px;
    flex-direction: row;
    padding: 0 30px;
    align-items: center;
`;

export const KeyText = styled.Text`
    display: flex;
    font-size: 16px;
    font-weight: bold;
    margin-right: 10px;
    color: ${({ theme }) => theme.white};
`;

export const ValueText = styled.Text`
    display: flex;
    flex-wrap: wrap;
    font-size: 16px;
    
    color: ${({ theme }) => theme.white};
`;

export const Description = styled.Text`
    display: flex;
    text-align: justify;
    width: ${({ theme }) => theme.screen.width }px;
    padding: 0 30px;
    padding-top: 5px;
    padding-bottom: 15px;
    font-size: 16px;
    color: ${({ theme }) => theme.white};
`;

// export const SearchInput = styled.TextInput.attrs({
//     placeholderTextColor: 'white'
// })`
//     height: 40px;
//     width: ${({ theme }) => theme.screen.width - 50}px;
//     font-size: 18px;
//     color: ${(props) => props.theme.white};    
// `

// export const ContentScroll = styled.ScrollView.attrs({
// 	contentContainerStyle: {
// 		display: 'flex'
// 	}
// })`
// 	padding-bottom: 10px;
// 	background: ${(props) => props.theme.background};
// `;