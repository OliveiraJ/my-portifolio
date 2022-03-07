import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
	*{
		padding: 0;
		margin: 0;
		box-sizing: border-box;
		background-color: ${props => props.theme.backgroundColor};
		color: ${props => props.theme.color};
		font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
	}

	body{
		display: grid;
		align-items: center;
		justify-items: center;
	 	}
	li{
		list-style: none ;
	}
	a{
		text-decoration: none ;
	}
`;

export { GlobalStyle };
