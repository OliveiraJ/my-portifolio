import styled, { createGlobalStyle } from "styled-components";
import { Profile } from "./components/profile/index";
import { MainWrapper } from "./shared/section/wrapper";

const GlobalStyle = createGlobalStyle`
	*{
		padding: 0;
		margin: 0;
		box-sizing: border-box;
		background-color: #121212;
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
