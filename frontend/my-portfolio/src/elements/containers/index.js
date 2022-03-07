import styled from "styled-components";

const MainContainer = styled.div`
	margin-top: 20px;
	grid-template-rows: 10% 85% 5%;
	@media screen and (min-width: 600px) {
		grid-template-columns: 30% 70%;
	}
`;

export { MainContainer };
