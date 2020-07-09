import styled from 'styled-components/native'

export const BannerContent = styled.View`
    display: flex;
    position: relative;
`;

export const BannerImage = styled.Image`
	display: flex;
    height: ${({ theme }) => theme.screen.width * 1.5}px;
    width: ${({ theme }) => theme.screen.width}px;
`;

export const BannerInfoBox = styled.View`
    display: flex;
    width: ${({ theme }) => theme.screen.width}px;
    position: absolute;
    bottom: 0;
    padding-top: 20px;
    padding-bottom: 50px;
    background: rgba(0, 0, 0, .5);
    flex-direction: row;
    justify-content: center;
    align-content: center;
    align-items: center;
`;

export const BannerInfoBoxButton = styled.TouchableOpacity`
    display: flex;
    padding: 10px 15px;
    border-radius: 5px;
    background: ${({ theme }) => theme.white};
    flex-direction: row;
`;

export const BannerInfoBoxButtonText = styled.Text`
    display: flex;
    font-weight: bold;
    text-transform: uppercase;
    margin-left: 5px;
    color: ${({ theme }) => theme.black};
`;