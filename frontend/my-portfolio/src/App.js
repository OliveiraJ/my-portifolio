import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
	*{
		padding: 0;
		margin: 0;
		box-sizing: border-box;
		background-color: #12121e;
	}
`;

const MainWrapper = styled.div``;

const Title = styled.h1`
	font-size: 1.5em;
	text-align: center;
	color: #ce86e7;
	font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
		"Lucida Sans", Arial, sans-serif;
`;

function App() {
	return (
		<MainWrapper>
			<GlobalStyle />
			<Title>Hello World!</Title>
		</MainWrapper>
	);
}

export default App;
