import React from "react";
import PropTypes from "prop-types";

class FormInput extends React.Component {
  constructor() {
    super();

    this.state = {
      focused: false,
      error: false
    };

    this.onFocus = this.onFocus.bind(this);
    this.onBlur = this.onBlur.bind(this);
  }

  onFocus(e) {
    this.setState({ focused: true, error: false });
  }

  onBlur(e) {
    this.setState({
      focused: false,
      error: this.props.errors[this.props.name] ? true : false
    });
  }

  render() {
    const inputClassName =
      "formField-input" +
      (this.props.value.length !== 0 ? " active" : "") +
      (this.props.disabled ? " disabled" : "") +
      (this.props.errors[this.props.name] ? " error" : "") +
      (this.state.focused ? " focus" : "");

    return (
      <div className={inputClassName}>
        <div className="input">
          <input
            type="text"
            name={this.props.name}
            value={this.props.value}
            onChange={this.props.onChangeInputField}
            onFocus={this.onFocus}
            onBlur={this.onBlur}
            disabled={this.props.disabled ? true : false}
            autoComplete="off"
          />
          <label htmlFor={this.props.name}>{this.props.label}</label>
        </div>
      </div>
    );
  }
}

FormInput.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChangeInputField: PropTypes.func.isRequired,
  disabled: PropTypes.bool
};

export default FormInput;
