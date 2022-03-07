import styled from "styled-components";
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
	border: 2px solid ${props => props.theme.color};
	border-radius: 3px;
	padding: 5px 8px 1px 8px;
	margin: 0px 10px 0px 0px;
`;

export default function SocialIcons() {
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
