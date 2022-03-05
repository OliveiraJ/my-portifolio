import styled from "styled-components";
import { Avatar } from "../../elements/avatar";
import { Title, Subtitle } from "../../elements/text";
import SocialIcons from "../../elements/icons/index";

const TitleBar = styled.div`
	display: flex;
	align-content: center;
	align-items: center;
	margin-top: 10px;
`;

function TopBar() {
	return (
		<TitleBar>
			<Avatar src='https://github.com/OliveiraJ.png' />
			<div>
				<Title>Jordan</Title>
				<Subtitle>Silva Oliveira</Subtitle>
				<SocialIcons />
			</div>
		</TitleBar>
	);
}

export { TopBar };
