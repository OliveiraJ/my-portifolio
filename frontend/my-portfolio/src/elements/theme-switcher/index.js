import styled, { keyframes } from "styled-components";
import { Moon } from "@styled-icons/feather/Moon";
import { Sun } from "@styled-icons/feather/Sun";
import { slideInRight } from "react-animations";

const themeSwitcherAnimation = keyframes`${slideInRight}`;

const StyledMoon = styled(Moon)`
	animation: 0.3s ${themeSwitcherAnimation};
	background-color: transparent;
	cursor: pointer;
	margin-right: 8px;
`;

const StyledSun = styled(Sun)`
	animation: 0.3s ${themeSwitcherAnimation};
	background-color: transparent;
	cursor: pointer;
	margin-right: 8px;
`;

export default function ThemeSwitcher(props) {
	return props.isDark ? (
		<StyledSun onClick={props.handleThemeSwitch} size='25' />
	) : (
		<StyledMoon onClick={props.handleThemeSwitch} size='25' />
	);
}
