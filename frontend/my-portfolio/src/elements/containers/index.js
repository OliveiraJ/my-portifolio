import styled from "styled-components";

const ContentWrapper = styled.div`
	grid-area: main;
	display: grid;
	margin: 20px;
	@media screen and (min-width: 600px) {
		grid-template-columns: 1fr 2fr;
		column-gap: 10px;
	}
	@media screen and (max-width: 599px) {
		grid-template-rows: 10vr 90vr;
	}
`;

const MainWarapper = styled.div`
	display: grid;
	grid-gap: 10px;
	grid-template-columns: 1fr;
	grid-template-areas: "header" "main" "footer";
	grid-template-rows: 50px 1fr 40px;
	::-webkit-scrollbar {
		/*-webkit browsers*/
		display: none;
	}
	-ms-overflow-style: none; /* IE and Edge */
	scrollbar-width: none; /* Firefox */
`;

export { MainWarapper, ContentWrapper };
