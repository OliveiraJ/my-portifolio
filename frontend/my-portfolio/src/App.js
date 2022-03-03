import styled, { createGlobalStyle } from "styled-components";
import { Profile } from "./components/profile/index";
import { MainWrapper } from "./shared/section/wrapper";

const GlobalStyle = createGlobalStyle`
	*{
		padding: 0;
		margin: 0;
		box-sizing: border-box;
		background-color: #2D3047;
		font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
	}
`;

function App() {
	return (
		<MainWrapper>
			<Profile />
			<GlobalStyle />
		</MainWrapper>
	);
}

export default App;
