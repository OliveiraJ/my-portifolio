import styled from "styled-components";

import { StyledSettings } from "../../elements/icons";
import ThemeSwitcher from "../../elements/theme-switcher";
import { useState } from "react";

const StyledTopBar = styled.div`
	display: flex;
	flex-direction: row;
	justify-self: flex-end;
	grid-area: header;
	align-items: center;
	font-size: x-large;
`;

const SettingsWrapper = styled.div`
	background-color: ${props => props.theme.cardBackground};
	padding: 5px;
	border-radius: 5%;
	margin-right: 20px;
	display: inherit;
`;

export default function TopBar({ handleThemeSwitch, isDark }) {
	const [openSettings, setOpenSettings] = useState(false);
	function handleOpenSettings() {
		setOpenSettings(!openSettings);
	}
	return (
		<StyledTopBar>
			<SettingsWrapper openSettings>
				{openSettings && (
					<ThemeSwitcher
						handleThemeSwitch={handleThemeSwitch}
						isDark={isDark}
					/>
				)}
				<StyledSettings size='25' onClick={handleOpenSettings} />
			</SettingsWrapper>
		</StyledTopBar>
	);
}
