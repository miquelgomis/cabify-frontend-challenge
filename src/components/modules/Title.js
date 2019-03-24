import React from "react";
import PropTypes from "prop-types";

class Title extends React.Component {
  render() {
    return <h1 className="title-main">{this.props.content}</h1>;
  }
}

Title.propTypes = {
  content: PropTypes.string.isRequired
};

export default Title;
