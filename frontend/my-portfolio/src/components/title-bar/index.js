import styled from "styled-components";
import { Avatar } from "../../elements/avatar";
import { Title, Subtitle } from "../../elements/text";
import SocialIcons from "../../elements/icons/index";
import ThemeSwitcher from "../../elements/theme-switcher";

const TitleBar = styled.header`
	@media screen and (min-width: 600px) {
		max-height: 90vh;
	}
	display: flex;
	align-content: center;
	align-items: center;
	margin-bottom: 30px;
`;

function TopBar({ handleThemeSwitch, isDark }) {
	return (
		<TitleBar>
			<Avatar src='https://github.com/OliveiraJ.png' />
			<div>
				<Title>Jordan</Title>
				<Subtitle>Silva Oliveira</Subtitle>
				<SocialIcons />
			</div>
			<ThemeSwitcher handleThemeSwitch={handleThemeSwitch} isDark={isDark} />
		</TitleBar>
	);
}

export { TopBar };
