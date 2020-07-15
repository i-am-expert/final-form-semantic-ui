import React, { Component } from "react";
import { Form } from "react-final-form";
import { Dropdown } from "semantic-ui-react";

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const colorOptions = [
  { key: "R", value: "R", text: "Red" },
  { key: "B", value: "B", text: "Blue" },
  { key: "G", value: "G", text: "Green" },
  { key: "Bl", value: "Bl", text: "Black" },
  { key: "O", value: "O", text: "Orange" },
];

export class MultiSelect extends Component {
  showResults = async (values) => {
    await sleep(500);
    window.alert(JSON.stringify(values, undefined, 2));
  };

  handleChange = (e, data) => {
    console.log(data.value);
    this.setState({
      colors: e.target.value,
    });
  };

  render() {
    return (
      <Form
        onSubmit={this.showResults}
        render={({ handleSubmit, values, submitting, invalid, pristine }) => (
          <form onSubmit={handleSubmit} spellCheck="false">
            <br />
            <br />
            <div style={{ justifyContent: "center", marginLeft: "30%" }}>
              <Dropdown
                placeholder="Color"
                fluid
                multiple
                search
                selection
                options={colorOptions}
                onChange={this.handleChange}
                style={{ width: "50%" }}
              />
            </div>
          </form>
        )}
      />
    );
  }
}

export default MultiSelect;
