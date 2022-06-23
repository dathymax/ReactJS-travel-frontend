import React from "react";
import ShowerImg from "../../../../../../image/tour-destination/shower.png";
import BedImg from "../../../../../../image/tour-destination/bed.png";
import BeachImg from "../../../../../../image/tour-destination/beach.png";
import MountainImg from "../../../../../../image/tour-destination/mountains.png";
import DestinationImg from "../../../../../../image/tour-destination/destination.png";

const TourDestinationItem = (props) => {
	return (
		<div
			data-aos="fade-up"
			data-aos-duration="2000"
			className="tour-destination__wrapper"
		>
			<div className="hover__scale--wrapper">
				<img
					src={props.srcItem}
					alt={props.altItem}
					className="tour-destination__img width--100pc hover__scale--effect"
				/>
			</div>
			<div className="tour-destination__info padding__lr--20 padding__tb--30">
				<div className="tour-destination__price padding--10 font__size--15">
					{props.priceItem}
				</div>
				<div className="char__gray">{props.dayItem}</div>
				<div className="space__height--10 hide__on-mobile"></div>
				<div className="char__black font__size--25">
					{props.destinationItem}
				</div>
				<div className="space__height--10 hide__on-mobile"></div>
				<div className="char__gray df__center--align">
					<img
						src={DestinationImg}
						alt="DestinationImg"
						className="width--15"
					/>
					<span className="margin__l--10">
						{props.destinationItem}
					</span>
				</div>
				<div className="space__height--15 hide__on-mobile"></div>
				<div className="tour-destination__descriptions df">
					<div className="tour-destination__descriptions-item margin__r--15 df__center--align">
						<img
							src={ShowerImg}
							alt="ShowerImg"
							className="width--15"
						/>
						<span className="padding__lr--5">
							{props.showerItem}
						</span>
					</div>
					<div className="tour-destination__descriptions-item margin__r--15 df__center--align">
						<img
							src={BedImg}
							alt="ShowerImg"
							className="width--15"
						/>
						<span className="padding__lr--5">{props.bedItem}</span>
					</div>
					{props?.nearWhereItem === "Near Beach" ? (
						<div className="tour-destination__descriptions-item margin__r--15 df__center--align">
							<img
								src={BeachImg}
								alt="BeachImg"
								className="width--15"
							/>
							<span className="padding__lr--5">Near Beach</span>
						</div>
					) : (
						<div className="tour-destination__descriptions-item margin__r--15 df__center--align">
							<img
								src={MountainImg}
								alt="BeachImg"
								className="width--15"
							/>
							<span className="padding__lr--5">
								Near Mountain
							</span>
						</div>
					)}
				</div>
			</div>
		</div>
		// <div className="tour-destination">
		// 	<div className="tour-destination__thumb">
		// 		<img src={props.srcItem} alt={props.altItem} />
		// 	</div>
		// 	<div className="tour-destination__content">
		// 		<p class="df__center--align">
		// 			{props.nameItem}
		// 			<a className="tour-destination__link" href={props.pathItem}>
		// 				{props.placeNumberItem}
		// 			</a>
		// 		</p>
		// 	</div>
		// </div>
	);
};

export default TourDestinationItem;
