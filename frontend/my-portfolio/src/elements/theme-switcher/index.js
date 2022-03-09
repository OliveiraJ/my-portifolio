import { FiMoon, FiSun } from "react-icons/fi";
import styled from "styled-components";

const StyledThemeSwitcher = styled.span`
	align-self: flex-start;
	font-size: 1.5em;
	color: ${props => props.theme.changeThemeIconColor};
`;

export default function ThemeSwitcher(props) {
	return (
		<StyledThemeSwitcher onClick={props.handleThemeSwitch}>
			{props.isDark ? <FiSun /> : <FiMoon />}
		</StyledThemeSwitcher>
	);
}
