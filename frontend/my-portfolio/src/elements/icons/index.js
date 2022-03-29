import styled, { keyframes } from "styled-components";
import { rotateIn } from "react-animations";
import { Settings } from "@styled-icons/feather/Settings";

import {
	FiGithub,
	FiGitlab,
	FiTwitter,
	FiLinkedin,
	FiMail,
} from "react-icons/fi";

const StyledSocialIcons = styled.div`
	display: flex;
	justify-content: space-between;
	margin-top: 10px;
`;

const StyledList = styled.li`
	border: 1px solid ${props => props.theme.color};
	border-radius: 3px;
	padding: 5px 8px 1px 8px;
	margin: 0px 10px 0px 0px;
`;

function SocialIcons() {
	return (
		<StyledSocialIcons>
			<StyledList>
				<a href='https://github.com/OliveiraJ'>
					<FiGithub />
				</a>
			</StyledList>
			<StyledList>
				<a href='https://gitlab.com/OliveiraJordan'>
					<FiGitlab />
				</a>
			</StyledList>
			<StyledList>
				<a href='https://www.linkedin.com/in/jordansoliveira/'>
					<FiLinkedin />
				</a>
			</StyledList>
			<StyledList>
				<a href='https://twitter.com/JordanSOliveira'>
					<FiTwitter />
				</a>
			</StyledList>
			<StyledList>
				<a href='jordansvaoliveira@gmail.com'>
					<FiMail />
				</a>
			</StyledList>
		</StyledSocialIcons>
	);
}

const settingsAnimation = keyframes`${rotateIn}`;

const StyledSettings = styled(Settings)`
	@media screen and (min-width: 500px) {
		&:hover {
			animation: 0.7s ${settingsAnimation};
		}
	}
	&:active {
		animation: 0.7s ${settingsAnimation};
		transition-property: animation;
		transition-duration: 1s;
	}
	background-color: inherit;
	cursor: pointer;
`;

export { StyledSettings, SocialIcons };
