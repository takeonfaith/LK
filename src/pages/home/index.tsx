import React from "react";
import { userModel } from "../../entities/user";
import UserInfo from "../../features/home/ui/organisms/user-info";
import { Title, Wrapper } from "../../shared/ui/atoms";
import { Content } from "./ui/atoms/content";

export default Home;

function Home() {
	const { currentUser: user } = userModel.selectors.useUser();

	return (
		<Wrapper loading={!user}>
			<Content>
				{user && (
					<div>
						<UserInfo user={user} />
						<section></section>
						<section>
							<article>
								<Title size={3}>
									<div></div>
								</Title>
							</article>
							<article></article>
							<article></article>
							<article></article>
						</section>
					</div>
				)}
			</Content>
		</Wrapper >
	)
}