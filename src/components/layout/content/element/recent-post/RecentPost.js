import React from "react";
import RecentPostItem from "./item/RecentPostItem";
import BGPost1 from "../../../../../image/recent-post/bg-post-1.webp";
import BGPost2 from "../../../../../image/recent-post/bg-post-2.webp";
import BGPost3 from "../../../../../image/recent-post/bg-post-3.webp";
import { Grid } from "@mui/material";

const RecentPost = () => {
	const datas = [
		{
			id: 1,
			srcItem: BGPost1,
			dayItem: 21,
			monthItem: "August",
			yearItem: 2019,
			headingPostItem: "Why Lead Generation is Key for Business Growth",
			detailPostItem:
				"A small river named Duden flows by their place and supplies it with the necessary regelialia.",
		},
		{
			id: 2,
			srcItem: BGPost2,
			dayItem: 21,
			monthItem: "August",
			yearItem: 2019,
			headingPostItem: "Why Lead Generation is Key for Business Growth",
			detailPostItem:
				"A small river named Duden flows by their place and supplies it with the necessary regelialia.",
		},
		{
			id: 3,
			srcItem: BGPost3,
			dayItem: 21,
			monthItem: "August",
			yearItem: 2019,
			headingPostItem: "Why Lead Generation is Key for Business Growth",
			detailPostItem:
				"A small river named Duden flows by their place and supplies it with the necessary regelialia.",
		},
	];

	return (
		<>
			<div className="container__wrapper--outer">
				<h1
					data-aos="fade-up"
					data-aos-duration="2000"
					className="font__size--40 font__weight--600 df__center--all"
				>
					Recent Posts
				</h1>
				<Grid container spacing={4}>
					{datas.map((data) => (
						<Grid item xs={6} md={4} lg={4}>
							<div data-aos="fade-up" data-aos-duration="2000">
								<RecentPostItem
									path={`/detail-blog/${data?.id}`}
									srcItem={data?.srcItem}
									dayItem={data?.dayItem}
									monthItem={data?.monthItem}
									yearItem={data?.yearItem}
									headingPostItem={data?.headingPostItem}
									detailPostItem={data?.detailPostItem}
								/>
							</div>
						</Grid>
					))}
				</Grid>
			</div>
		</>
	);
};

export default RecentPost;
