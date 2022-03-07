import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./foundation/global/index";
import { MainContainer } from "./elements/containers";
import { TopBar } from "./components/title-bar";
import Portifolio from "./components/portfolio";
import { Footer } from "./components/footer";
import { darkTheme, lightTheme } from "./foundation/global/themes";
import { useState } from "react";

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
			<MainContainer>
				{/* <ThemeSwitcher handleThemeSwitch={handleThemeSwitch} isDark={isDark} /> */}
				<TopBar handleThemeSwitch={handleThemeSwitch} isDark={isDark} />
				<Portifolio />
				<Footer />
			</MainContainer>
		</ThemeProvider>
	);
}

export default App;
