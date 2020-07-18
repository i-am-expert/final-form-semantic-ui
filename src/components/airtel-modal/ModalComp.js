import React, { Component } from "react";
import {
  Modal,
  Header,
  Button,
  Input,
  Grid,
  Dropdown,
  Divider,
} from "semantic-ui-react";
import { Form, Field } from "react-final-form";
import "./css/ModalStyle.css";

const required = (value) => (value ? undefined : "Required");
const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const colorOptions = [
  { key: "R", value: "R", text: "Red" },
  { key: "B", value: "B", text: "Blue" },
  { key: "G", value: "G", text: "Green" },
  { key: "Bl", value: "Bl", text: "Black" },
  { key: "O", value: "O", text: "Orange" },
  { key: "V", value: "V", text: "Violet" },
  { key: "Y", value: "Y", text: "Yellow" },
  { key: "P", value: "P", text: "Purple" },
  { key: "Br", value: "rl", text: "Brown" },
  { key: "C", value: "C", text: "Cyan" },
];

class ModalComp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      error_id: false,
      error_name: false,
      error_designation: false,
    };
  }

  showResults = async (values) => {
    await sleep(500);
    window.alert(JSON.stringify(values, undefined, 2));
    this.props.handleClose();
  };

  handleChange = (e, data) => {
    console.log(data.value);
    console.log(this.state.colors);
    this.setState({
      colors: data.value,
    });
  };

  render() {
    return (
      <Modal
        dimmer={this.props.dimmer}
        open={this.props.modalOpen}
        size="small"
      >
        <Header content="Add New Dedupe Officer" />
        <Modal.Content scrolling style={{ width: "100%" }}>
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
                autoCorrect="off"
                spellCheck="false"
              >
                <Grid>
                  <Grid.Row columns={2}>
                    <Grid.Column>
                      <label className="labelClass">OLMs ID</label>
                      {this.state.error_id === true && (
                        <span className="fieldError">Required</span>
                      )}
                      <Field
                        name="olm_id"
                        placeholder="B0******"
                        validate={required}
                        component={Input}
                        error={this.state.error_id}
                        parse={(value) => {
                          this.setState({
                            error_id: value === "" ? true : false,
                          });
                          return value;
                        }}
                      />
                    </Grid.Column>
                    <Grid.Column>
                      <label className="labelClass">Name</label>
                      {this.state.error_name === true && (
                        <span className="fieldError">Required</span>
                      )}
                      <Field
                        name="name"
                        placeholder="Enter Name"
                        validate={required}
                        component={Input}
                        error={this.state.error_name}
                        parse={(value) => {
                          this.setState({
                            error_name: value === "" ? true : false,
                          });
                          return value;
                        }}
                      />
                    </Grid.Column>
                  </Grid.Row>
                  <Grid.Row columns={2}>
                    <Grid.Column>
                      {this.state.colors !== undefined &&
                        this.state.colors.length === 0 && (
                          <span className="fieldError">Required</span>
                        )}
                      <label className="labelClass">Group(s)</label>
                      <Dropdown
                        placeholder="Select Group"
                        fluid
                        multiple
                        search
                        selection
                        options={colorOptions}
                        onChange={this.handleChange}
                        style={{ width: "50%" }}
                      />
                    </Grid.Column>
                    <Grid.Column>
                      <label className="labelClass">Designation</label>
                      {this.state.error_designation === true && (
                        <span className="fieldError">Required</span>
                      )}
                      <Field
                        name="designation"
                        placeholder="Enter Designation"
                        validate={required}
                        component={Input}
                        error={this.state.error_designation}
                        parse={(value) => {
                          this.setState({
                            error_designation: value === "" ? true : false,
                          });
                          return value;
                        }}
                      />
                    </Grid.Column>
                  </Grid.Row>
                  <Grid.Row columns={2}>
                    <Grid.Column></Grid.Column>
                    <Grid.Column>
                      <fieldset>
                        <legend>HRMS DATA</legend>
                        <h4>Name:</h4>
                        <br />
                        <h4>Designation:</h4>
                      </fieldset>
                    </Grid.Column>
                  </Grid.Row>
                </Grid>

                <Divider />
                <Modal.Actions>
                  <Button
                    inverted
                    color="grey"
                    type="button"
                    onClick={this.props.handleClose}
                    content="Cancel"
                  />
                  <Button
                    positive
                    type="submit"
                    content="Add"
                    disabled={
                      this.state.error_id ||
                      this.state.error_name ||
                      this.state.error_designation ||
                      pristine ||
                      invalid ||
                      this.state.colors === undefined ||
                      this.state.colors.length === 0
                    }
                  />
                </Modal.Actions>
              </form>
            )}
          />
        </Modal.Content>
      </Modal>
    );
  }
}

export default ModalComp;
