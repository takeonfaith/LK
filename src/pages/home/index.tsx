import React from "react";
import { userModel } from "../../entities/user";
import ScheduleAndNotification from "../../features/home/ui/organisms/schedule-and-notification";
import ShortCutLinks from "../../features/home/ui/organisms/short-cut-links";
import UserInfo from "../../features/home/ui/organisms/user-info";
import { Wrapper } from "../../shared/ui/atoms";
import { Content } from "./ui/atoms/content";

export default Home;

function Home() {
	const { currentUser: user } = userModel.selectors.useUser();

	return (
		<Wrapper loading={!user}>
			<Content>
				{user && (
					<div className="home-page-content-inner">
						<UserInfo user={user} />
						<ScheduleAndNotification />
						<ShortCutLinks />
					</div>
				)}
			</Content>
		</Wrapper>
	);
}
