import styled from 'styled-components/native';

export const Container = styled.View`
    display: flex;
    flex: 1;
    background: ${(props) => props.theme.background};
`;

export const SearchInputBox = styled.View`
    display: flex;
    margin: 10px;
    padding-left: 10px;
    background: ${(props) => props.theme.gray};
    flex-direction: row;
    align-items: center;
`;


export const SearchInput = styled.TextInput.attrs({
    placeholderTextColor: 'white'
})`
    height: 40px;
    width: ${({ theme }) => theme.screen.width - 50}px;
    font-size: 18px;
    color: ${(props) => props.theme.white};    
`

export const ContentScroll = styled.ScrollView.attrs({
	contentContainerStyle: {
		display: 'flex'
	}
})`
	padding-bottom: 10px;
	background: ${(props) => props.theme.background};
`;