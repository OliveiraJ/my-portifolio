import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./foundation/global/index";
import { MainWarapper, ContentWrapper } from "./elements/containers";
import { AboutMe } from "./components/about-me";
import Portifolio from "./components/portfolio";
import { Footer } from "./components/footer";
import { darkTheme, lightTheme } from "./foundation/global/themes";
import { useState } from "react";
import TopBar from "./components/top-bar";

function App() {
	const [theme, setTheme] = useState(lightTheme);
	const [isDark, setIsDark] = useState(false);

	function handleThemeSwitch() {
		theme === darkTheme ? setTheme(lightTheme) : setTheme(darkTheme);
		setIsDark(!isDark);
	}

	return (
		<ThemeProvider theme={theme}>
			<GlobalStyle />
			<MainWarapper>
				<TopBar handleThemeSwitch={handleThemeSwitch} isDark={isDark} />
				<ContentWrapper>
					<AboutMe />
					<Portifolio />
				</ContentWrapper>
				<Footer />
			</MainWarapper>
		</ThemeProvider>
	);
}

export default App;
