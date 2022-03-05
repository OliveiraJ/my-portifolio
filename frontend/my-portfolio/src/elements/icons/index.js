import styled from "styled-components";
import {
	FiGithub,
	FiGitlab,
	FiTwitter,
	FiLinkedin,
	FiMail,
} from "react-icons/fi";

const SocialIconsStyled = styled.div`
	display: flex;
	justify-content: space-between;
	margin-top: 10px;
`;

const ListStyled = styled.li`
	border: 2px solid ${props => props.theme.color};
	border-radius: 10%;
	padding: 5px 8px 1px 8px;
	margin: 0px 10px 0px 0px;
`;

export default function SocialIcons() {
	return (
		<SocialIconsStyled>
			<ListStyled>
				<a href='https://github.com/OliveiraJ'>
					<FiGithub />
				</a>
			</ListStyled>
			<ListStyled>
				<a href='https://gitlab.com/OliveiraJordan'>
					<FiGitlab />
				</a>
			</ListStyled>
			<ListStyled>
				<a href='https://www.linkedin.com/in/jordansoliveira/'>
					<FiLinkedin />
				</a>
			</ListStyled>
			<ListStyled>
				<a href='https://twitter.com/JordanSOliveira'>
					<FiTwitter />
				</a>
			</ListStyled>
			<ListStyled>
				<a href='jordansvaoliveira@gmail.com'>
					<FiMail />
				</a>
			</ListStyled>
		</SocialIconsStyled>
	);
}
