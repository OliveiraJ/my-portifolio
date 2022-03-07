//https://api.github.com/users/OliveiraJ/repos?public
import { useState } from "react";
import styled from "styled-components";

const CardStyled = styled.div`
	margin: 10px;
	border: 1px solid ${props => props.theme.secondaryColor};
	border-radius: 3px;
	padding: 10px;
	max-width: 330px;
`;

const ProjectDescription = styled.p`
	margin-top: 0.5em;
	margin-bottom: 0.5em;
	font-size: 0.8em;
	color: ${props => props.theme.secondaryColor};
`;

const ProjectTitle = styled.h3`
	font-size: 1.2em;
`;

const ProjectLink = styled.a``;

export default function Card({ repo }) {
	return (
		<CardStyled>
			<ProjectLink href={repo.html_url}>
				<ProjectTitle>{repo.name}</ProjectTitle>
			</ProjectLink>
			<ProjectDescription>
				{repo.description === null
					? "No description available"
					: repo.description}
			</ProjectDescription>
		</CardStyled>
	);
}