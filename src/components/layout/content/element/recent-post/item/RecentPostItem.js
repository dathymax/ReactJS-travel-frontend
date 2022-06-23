import React from "react";
import { Link } from "react-router-dom";

const RecentPostItem = (props) => {
	return (
		<div className="recent-post__wrapper">
			<div className="hover__scale--wrapper">
				<img
					src={props.srcItem}
					alt={props.altItem}
					className="recent-post__img width--100pc hover__scale--effect"
				/>
				<div className="recent-post__date padding__lr--10 df__center--all font__size--15">
					<div className="recent-post__day margin__r--10 font__size--30">
						{props.dayItem}
					</div>
					<div className="recent-post__year-and-month">
						<div className="recent-post__year">
							{props.yearItem}
						</div>
						<div className="recent-post__month">
							{props.monthItem}
						</div>
					</div>
				</div>
			</div>
			<div className="recent-post__info padding__lr--20 padding__tb--30">
				<Link
					to={props.path}
					className="char__black recent-post__heading cursor__pointer font__size--20 font__weight--600"
				>
					{props.headingPostItem}
				</Link>
				<div className="space__height--20 hide__on-mobile"></div>
				<div className="char__black font__size--15">
					{props.detailPostItem}
				</div>
			</div>
		</div>
	);
};

export default RecentPostItem;
