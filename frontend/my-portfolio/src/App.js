import { GlobalStyle } from "./foundation/global/index";
import { TopBar } from "./components/title-bar";
import { ThemeProvider } from "styled-components";

import { darkTheme, lightTheme } from "./foundation/global/themes";

function App() {
	return (
		<ThemeProvider theme={darkTheme}>
			<div>
				<GlobalStyle />
				{/* <button value={theme} onClick={handleClick}>
					Mude o tema
				</button> */}
				<TopBar />
			</div>
		</ThemeProvider>
	);
}

export default App;
