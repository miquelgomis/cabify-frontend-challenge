import React from "react";
import PropTypes from "prop-types";
import FormPhonePrefixDropdown from "./FormPhonePrefixDropdown.js";

class FormPhonePrefixSelect extends React.Component {
  constructor() {
    super();

    this.state = {
      active: false
    };

    this.onSelectCountry = this.onSelectCountry.bind(this);
  }

  onSelectCountry(e) {
    this.setState({
      active: false
    });

    this.props.onChangePrefixField({
      name: this.props.name,
      value: e.currentTarget.dataset.prefix
    });
  }

  render() {
    const inputClassName =
      "formField-prefix" +
      (this.props.value.length !== 0 ? " active" : "") +
      (this.props.errors[this.props.name] ? " error" : "");

    return (
      <div className={inputClassName}>
        {/* active/focus/disabled */}
        <div className="input">
          <input
            type="text"
            name={this.props.name}
            value={this.props.value}
            onChange={this.props.onChangeInputField}
            onKeyPress={e => {
              this.setState({ active: false });
            }}
            onFocus={e => {
              this.setState({ active: true });
            }}
            onClick={e => {
              this.setState({ active: true });
            }}
            autoComplete="off"
          />
          <label htmlFor={this.props.name}>{this.props.label}</label>

          {this.state.active ? (
            <div
              className="formField-prefix-box"
              onMouseLeave={e => {
                this.setState({ active: false });
              }}
            >
              <FormPhonePrefixDropdown
                onSelectCountry={this.onSelectCountry}
                current={this.props.value}
              />
            </div>
          ) : null}
        </div>
      </div>
    );
  }
}

FormPhonePrefixSelect.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChangeInputField: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired
};

export default FormPhonePrefixSelect;
