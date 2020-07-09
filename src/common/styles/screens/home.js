import styled from 'styled-components/native';

export const ContainerScroll = styled.ScrollView.attrs({
	contentContainerStyle: {
		display: 'flex'
	}
})`
	padding-bottom: 10px;
	background: ${(props) => props.theme.background};
`;
