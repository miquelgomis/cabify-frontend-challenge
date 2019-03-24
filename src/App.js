import React, { Component } from "react";
import cabifyLogo from "./images/cabify-logo.svg";
import "./styles/App.css";

import FormInput from "./components/forms/FormInput";
import FormPhonePrefixSelect from "./components/forms/FormPhonePrefixSelect";
import Card from "./components/modules/Card";
import Title from "./components/modules/Title";

class App extends Component {
  constructor() {
    super();

    this.state = {
      card: {
        fullname: "",
        jobdescription: "",
        phonenumber: "",
        email: "",
        website: "www.cabify.com",
        address: "",
        prefix: ""
      },
      errors: {
        fullname: false,
        jobdescription: false,
        phonenumber: false,
        email: false,
        website: false,
        address: false,
        prefix: false
      }
    };

    this.onChangeInputField = this.onChangeInputField.bind(this);
    this.onChangePrefixField = this.onChangePrefixField.bind(this);
  }

  onChangeInputField(e) {
    this.setState({
      card: Object.assign(this.state.card, {
        [e.currentTarget.name]: e.currentTarget.value
      }),
      errors: Object.assign(this.state.errors, {
        [e.currentTarget.name]: e.currentTarget.value.length ? false : true
      })
    });
  }

  onChangePrefixField(e) {
    this.setState({
      card: Object.assign(this.state.card, {
        [e.name]: e.value
      }),
      errors: Object.assign(this.state.errors, {
        [e.name]: false
      })
    });
  }

  render() {
    const submitButtonClass =
      "button button-full button-primary " +
      (Object.values(this.state.errors).every(item => item === false) &&
      Object.values(this.state.card).every(item => item !== "")
        ? "active"
        : "disabled");

    return (
      <div className="mainWrapper row">
        <article className="businessCard col col6">
          <figure className="businessCard-badge">
            <a className="businessCard-badge-logo" href="http://www.cabify.com">
              <img src={cabifyLogo} alt="Cabify" />
            </a>
          </figure>
          <Title content="Request your business card" />
          <Card content={this.state.card} />
        </article>
        <article className="builder col col6">
          <form className="form" action="" autoComplete="cabify-challenge">
            <div className="row">
              <div className="col col12">
                <FormInput
                  name="fullname"
                  label="Full name"
                  value={this.state.card.fullname}
                  errors={this.state.errors}
                  onChangeInputField={this.onChangeInputField}
                />
              </div>
            </div>
            <div className="row row-separationMedium">
              <div className="col col12">
                <FormInput
                  name="jobdescription"
                  label="Job description"
                  value={this.state.card.jobdescription}
                  errors={this.state.errors}
                  onChangeInputField={this.onChangeInputField}
                />
              </div>
            </div>
            <div className="row row-separationMedium row-gutterMedium">
              <div className="col col3">
                <FormPhonePrefixSelect
                  name="prefix"
                  label="Prefix"
                  value={this.state.card.prefix}
                  errors={this.state.errors}
                  onChangeInputField={this.onChangeInputField}
                  onChangePrefixField={this.onChangePrefixField}
                />
              </div>
              <div className="col col9">
                <FormInput
                  name="phonenumber"
                  label="Phone number"
                  value={this.state.card.phonenumber}
                  errors={this.state.errors}
                  onChangeInputField={this.onChangeInputField}
                />
              </div>
            </div>
            <div className="row row-separationMedium">
              <div className="col col12">
                <FormInput
                  name="email"
                  label="E-mail"
                  value={this.state.card.email}
                  errors={this.state.errors}
                  onChangeInputField={this.onChangeInputField}
                />
              </div>
            </div>
            <div className="row row-separationMedium">
              <div className="active disabled col col12">
                <FormInput
                  name="website"
                  label="Website"
                  disabled={true}
                  value={this.state.card.website}
                  errors={this.state.errors}
                  onChangeInputField={this.onChangeInputField}
                />
              </div>
            </div>
            <div className="row row-separationMedium">
              <div className="active col col12">
                <FormInput
                  name="address"
                  label="Address"
                  value={this.state.card.address}
                  errors={this.state.errors}
                  onChangeInputField={this.onChangeInputField}
                />
              </div>
            </div>
            <div className="row row-separationHuge">
              <input
                className={submitButtonClass}
                type="submit"
                value="Request"
              />
            </div>
          </form>
        </article>
      </div>
    );
  }
}

export default App;
