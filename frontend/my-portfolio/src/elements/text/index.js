import styled from "styled-components";

const Title = styled.h2`
	font-size: 1.5em;
`;

const Subtitle = styled.h4`
	font-size: 1em;
	color: ${props => props.theme.secondaryColor};
`;

const Description = styled.p`
	overflow-wrap: break-word;
`;

export { Title, Subtitle, Description };
