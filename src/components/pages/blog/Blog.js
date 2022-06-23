import { Grid } from "@mui/material";
import { BackTop } from "antd";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import RecentPostItem from "../../layout/content/element/recent-post/item/RecentPostItem";
import FooterTravel from "../../layout/footer/Footer";
import Navigation from "../../layout/header/element/navigation/Navigation";
import HeaderTravel from "../../layout/header/Header";
import { datas } from "./data";

const Blog = () => {
	const { t } = useTranslation();

	const [postsToShow, setPostsToShow] = useState(6);

	const handleMorePost = () => {
		setPostsToShow((prevValue) => prevValue + 3);
	};

	return datas ? (
		<div className="wrapper-for-nav">
			<BackTop />
			<div className="header__nav">
				<Navigation />
			</div>
			<HeaderTravel descriptionHead={t("header.blog")} />
			<div className="space__height--100"></div>
			<div className="container__wrapper--outer margin--auto">
				<h1
					data-aos="fade-up"
					data-aos-duration="2000"
					className="font__size--40 font__weight--600 df__center--all"
				>
					Recent Posts
				</h1>
				<Grid container spacing={4}>
					{datas.slice(0, postsToShow).map((data) => (
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
			<button onClick={handleMorePost} className="btn">
				More posts
			</button>
			<div className="space__height--100"></div>
			<FooterTravel />
		</div>
	) : (
		<>
			<div>No post to show</div>
		</>
	);
};

export default Blog;
