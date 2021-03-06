import React from 'react';
import PropTypes from 'prop-types';
import "./SocialCard.css";
import { Avatar } from "./Avatar";
import { Logo } from "./Logo";
import { Title } from "./Title";

export const ImageArea = props => {
	return (
		<div className={props.layoutInner + ' card'} style={{backgroundColor: 'orange'}}>
			<div className="item1">
				<Logo logo={props.logo}	/>
			</div>
			<div className="item2">
				<Title appearance={'title-lg'} title={props.title} />
			</div>
			<div className="item3">
				<Avatar picture={props.picture} />
			</div>
		</div>
	);
};

ImageArea.propTypes = {
	layoutInner: PropTypes.string,
	logo: PropTypes.object,
	title: PropTypes.string,
	picture: PropTypes.object,
};
