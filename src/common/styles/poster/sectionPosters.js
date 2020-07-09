import styled from 'styled-components/native'

export const Content = styled.View`
	display: flex;
	flex-direction: column;
`;

export const SectionPosterScroll = styled.ScrollView.attrs({
	horizontal: true,
	contentContainerStyle: {
		paddingLeft: 10,
		paddingRight: 10
	},
	showsHorizontalScrollIndicator: false
})``;

export const SectionPosterTitle = styled.Text`
	font-size: 22px;
	font-weight: bold;
	padding: 10px;
	color: ${({ theme }) => theme.white};
`;
