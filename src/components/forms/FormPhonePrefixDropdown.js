import React from "react";
import PropTypes from "prop-types";

import countries from "./../../data/prefixes.json";

class PrefixesList extends React.Component {
  constructor() {
    super();

    this.state = countries;

    this.printCountry = this.printCountry.bind(this);
  }

  printCountry(obj, i) {
    const countryClassName =
      obj.code + (this.props.current === obj.prefix ? " current" : "");

    return (
      <li
        key={i}
        className={countryClassName}
        data-prefix={obj.prefix}
        onClick={this.props.onSelectCountry}
      >
        {obj.country}
      </li>
    );
  }

  render() {
    return (
      <ul className="prefixlist">
        {this.state.countries.map(this.printCountry)}
      </ul>
    );
  }
}

PrefixesList.propTypes = {
  onSelectCountry: PropTypes.func.isRequired,
  current: PropTypes.string.isRequired
};

export default PrefixesList;
