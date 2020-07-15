import React, { Component } from "react";
import { Form, Field } from "react-final-form";
import { Input, Button, Divider, Select } from "semantic-ui-react";

const required = (value) => (value ? undefined : "Required");

const colorOptions = [
  { value: "Red", text: "Red" },
  { value: "Blue", text: "Blue" },
  { value: "Green", text: "Green" },
];

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

class SimpleForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      color: "",
      agreed: false,
      error_id: false,
    };
  }

  showResults = async (values) => {
    await sleep(500);
    console.log("Color: " + this.state.color);
    console.log("Agreed: " + this.state.agreed);
    window.alert(JSON.stringify(values, undefined, 2));
  };

  handleSelect = (e, data) => {
    // console.log(data.value);
    this.setState({
      color: data.value,
    });
  };

  handleCheck = (e, data) => {
    this.setState((prevState) => ({
      agreed: !prevState.agreed,
    }));
  };

  handleIdChange = (e, data) => {
    console.log("ID: " + data.value);
    this.setState({
      error_id: e.target.value === "" ? true : false,
    });
  };

  render() {
    return (
      <div>
        <div>
          <Form
            onSubmit={this.showResults}
            render={({
              handleSubmit,
              values,
              submitting,
              invalid,
              pristine,
            }) => (
              <form
                onSubmit={handleSubmit}
                spellCheck="false"
                style={formStyle}
              >
                <div style={rowDivStyle}>
                  <Field
                    name="olm_id"
                    placeholder="OLM ID"
                    validate={required}
                    component={Input}
                    error={this.state.error_id}
                    icon="users"
                    iconPosition="left"
                    parse={(value) => {
                      this.setState({
                        error_id: value === "" ? true : false,
                      });
                      return value;
                    }}
                    onChange={this.handleIdChange}
                  />
                </div>
                <div style={rowDivStyle}>
                  <Field
                    name="password"
                    placeholder="Password"
                    // validate={required}
                    component={Input}
                    icon="lock"
                    type="password"
                    iconPosition="left"
                  />
                </div>
                <br />
                <div>
                  <label>Gender</label>
                  <>
                    <label>
                      <Field
                        name="gender"
                        component="input"
                        type="radio"
                        value="male"
                      />{" "}
                      Male
                    </label>
                    <label>
                      <Field
                        name="gender"
                        component="input"
                        type="radio"
                        value="female"
                      />{" "}
                      Female
                    </label>
                  </>
                </div>
                <br />
                <div>
                  <input
                    type="checkbox"
                    name="agreed"
                    onChange={this.handleCheck}
                  />
                  <label>I understand </label>
                </div>
                <br />

                <div>
                  <label>Favorite Color</label>
                  <Field
                    name="color"
                    component={Select}
                    placeholder="Favorite Color"
                    options={colorOptions}
                    onChange={this.handleSelect}
                    // value={this.state.color}
                  ></Field>
                </div>
                <br />
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <label>Notes</label>
                  <Field
                    name="notes"
                    component="textarea"
                    placeholder="Notes..."
                    style={{ minHeight: 100, padding: "10px" }}
                  />
                </div>

                <Divider style={{ width: "70%" }} />
                <Button
                  color="green"
                  type="submit"
                  disabled={
                    submitting ||
                    pristine ||
                    invalid ||
                    this.state.color === (undefined || "")
                  }
                >
                  Sign In
                </Button>
                <br />
                {/* <pre>{JSON.stringify(values, undefined, 2)}</pre> */}
              </form>
            )}
          />
        </div>
      </div>
    );
  }
}

const rowDivStyle = {
  alignItems: "center",
  height: "34px",
  width: "254px",
  marginTop: "10px",
  fontFamily: "tondo",
  borderRadius: "4px",
};

const formStyle = {
  textAlign: "-webkit-center",
};

export default SimpleForm;
