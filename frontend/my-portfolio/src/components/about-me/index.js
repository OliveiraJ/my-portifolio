import styled from "styled-components";
import { Avatar } from "../../elements/avatar";
import { Title, Subtitle } from "../../elements/text";
import { SocialIcons } from "../../elements/icons/index";

const TitleBar = styled.div`
	@media screen and (min-width: 600px) {
		flex-direction: column;
	}
	display: flex;
	align-content: center;
	align-items: center;
	margin-bottom: 30px;
`;

function AboutMe() {
	return (
		<TitleBar>
			<Avatar
				src='https://github.com/OliveiraJ.png'
				alt='Jordan Silva Oliveira'
			/>
			<div>
				<Title>Jordan</Title>
				<Subtitle>Silva Oliveira</Subtitle>
				<SocialIcons />
			</div>
		</TitleBar>
	);
}

export { AboutMe };
