import styled from "styled-components";
import Card from "../../elements/cards";
import { useState, useEffect } from "react";

const PortifolioStyled = styled.div`
	border: 2px solid ${props => props.theme.secondaryColor};
	border-radius: 4px;
	width: 100%;
	padding: 8px;
	max-height: 650px;
	overflow: auto;
`;

export default function Portifolio() {
	const [respos, setRepos] = useState([]);
	useEffect(() => {
		async function fetchData() {
			const response = await fetch(
				"https://api.github.com/users/OliveiraJ/repos?public"
			);
			const data = await response.json();
			setRepos(data);
		}

		fetchData();
	}, []);

	return (
		<PortifolioStyled>
			{respos.map(repo => (
				<Card key={repo.id} repo={repo} />
			))}
		</PortifolioStyled>
	);
}
