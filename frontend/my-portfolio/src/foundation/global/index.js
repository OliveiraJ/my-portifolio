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
		@media screen and (min-width: 600px){
			grid-template-columns: 30% 70%;

		}
		grid-template-rows: 30% 70%;
		align-content: center;
	    width: 100vw;
	}
	li{
		list-style: none ;
	}
`;

export { GlobalStyle };
