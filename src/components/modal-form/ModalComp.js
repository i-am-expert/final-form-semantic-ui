import React, { Component } from "react";
import { Modal, Header, Button, Input, Divider } from "semantic-ui-react";
import { Form, Field } from "react-final-form";

const required = (value) => (value ? undefined : "Required");
const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

class ModalComp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      error_id: false,
    };
  }

  showResults = async (values) => {
    await sleep(500);
    window.alert(JSON.stringify(values, undefined, 2));
    this.props.handleClose();
  };

  render() {
    return (
      <Modal
        dimmer={this.props.dimmer}
        open={this.props.modalOpen}
        size="small"
      >
        <Header icon="browser" content="Sign In" />
        <Modal.Content scrolling>
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
                // subscription={{ submitting: true, pristine: true }}
              >
                <div>
                  <Field
                    name="olm_id"
                    placeholder="OLM ID"
                    validate={required}
                    component={Input}
                    icon="users"
                    iconPosition="left"
                    error={this.state.error_id}
                    parse={(value) => {
                      this.setState({
                        error_id: value === "" ? true : false,
                      });
                      return value;
                    }}
                  />
                </div>
                {/* {this.setState({
                  untouched: pristine === true ? true : false,
                })} */}
                {/* {!pristine &&
                  this.setState({
                    untouched: true,
                  })} */}
                <Divider />
                <Modal.Actions>
                  <Button
                    negative
                    type="button"
                    icon="remove"
                    labelPosition="right"
                    onClick={this.props.handleClose}
                    content="Cancel"
                  />
                  <Button
                    positive
                    type="submit"
                    icon="check"
                    labelPosition="right"
                    // onClick={this.confirmClick}
                    content="Sign In"
                    disabled={this.state.error_id || pristine}
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
