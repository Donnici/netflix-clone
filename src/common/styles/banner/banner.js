import styled from 'styled-components/native'

export const BannerContent = styled.View`
	display: flex;
    height: ${({ theme }) => Math.round(theme.screen.height * 0.5)}px;
    width: ${({ theme }) => theme.screen.width}px;
    background: red;
`;