import styled from "styled-components";

const FooterStyled = styled.footer`
	grid-area: footer;
	font-size: x-small;
	font-weight: 550;
	text-align: center;
	margin-top: 10px;
	margin-bottom: 10px;
	width: 100%;
	p {
		color: ${props => props.theme.secondaryColor};
	}
`;

function Footer() {
	return (
		<FooterStyled>
			<p>&copy; 2022 Jordan. All rights reserved</p>
		</FooterStyled>
	);
}

export { Footer };
