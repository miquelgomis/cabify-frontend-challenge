import React from "react";
import PropTypes from "prop-types";

class Card extends React.Component {
  render() {
    const content = this.props.content;

    return (
      <div className="businessCard-cards">
        <div className="businessCard-cardBack" />
        <div className="businessCard-cardFront">
          <div>
            <p className="businessCard-cardFront-title">
              {content.fullname !== "" ? content.fullname : "Full Name"}
            </p>
            <p className="businessCard-cardFront-subtitle">
              {content.jobdescription !== ""
                ? content.jobdescription
                : "Job Description"}
            </p>
          </div>
          <div className="businessCard-cardFront-bottom">
            <p className="businessCard-icon-phone">
              {content.prefix !== "" ? content.prefix : "+00"}{" "}
              {content.phonenumber !== ""
                ? content.phonenumber
                : "600 00 00 00"}
            </p>
            <p className="businessCard-icon-email">
              {content.email !== "" ? content.email : "email@cabify.com"}
            </p>
            <p className="businessCard-icon-website">
              {content.website !== "" ? content.website : "www.cabify.com"}
            </p>
            <p className="businessCard-icon-address">
              {content.address !== "" ? content.address : "Address"}
            </p>
          </div>
        </div>
      </div>
    );
  }
}

Card.propTypes = {
  content: PropTypes.object
};

export default Card;
