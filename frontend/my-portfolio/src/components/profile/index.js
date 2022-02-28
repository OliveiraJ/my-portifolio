import { Title } from "../../shared/typo/h1";
import { ProfileInfo } from "../../shared/section/wrapper";
import { Avatar } from "./avatar";

export function Profile() {
	return (
		<ProfileInfo>
			<Avatar />
			<Title>Jordan Oliveira</Title>
		</ProfileInfo>
	);
}
