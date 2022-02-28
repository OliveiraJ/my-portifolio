import styled from "styled-components";

export const MainWrapper = styled.div`
	display: grid;
	@media screen and (max-width: 600px) {
		grid-template-rows: 15vh 77vh 8vh;
	}
	@media screen and (min-width: 601px) {
		grid-template-columns: 30vw 70vw;
	}
`;

export const ProfileInfo = styled.div`
	@media screen and (max-width: 600px) {
		margin-top: 4.5em;
		display: flex;
		justify-content: space-around;
	}
	align-items: center;
	justify-content: space-around;
	padding: 10px;
	margin-bottom: 10px;
`;
