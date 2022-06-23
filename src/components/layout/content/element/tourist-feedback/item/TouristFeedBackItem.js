import React from "react";

const TouristFeedBackItem = (props) => {
	return (
		<div className="tourist-feedback-item">
			<div className="char__gray">
				<img
					src={props.avatar}
					alt="Avatar"
					className="width--100 border__rds--50pc border__all--2--gray-lighter"
				/>
				<div className="space__height--10 hide__on-mobile"></div>
				<div className="detail-author">
					<div className="char__black font__size--25 font__weight--600">
						{props.author}
					</div>
					<div className="space__height--5 hide__on-mobile"></div>
					<div className="char__gray font__size--15">{props.job}</div>
				</div>
			</div>
			<div className="space__height--20 hide__on-mobile"></div>
			<div className="char__gray">
				<span className="font__size--15">{`"${props.comment}"`}</span>
			</div>
		</div>
	);
};

export default TouristFeedBackItem;
