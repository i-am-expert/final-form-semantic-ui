import React, { Component } from "react";
import { Modal, Header, Button } from "semantic-ui-react";

class ModalComp extends Component {
  confirmClick = () => {
    this.props.handleClose();
  };

  render() {
    return (
      <Modal
        dimmer={this.props.dimmer}
        open={this.props.modalOpen}
        size="small"
      >
        <Header icon="browser" content="Confirm?" />
        <Modal.Content scrolling>
          <h3>Please confirm:</h3>
          <h3>Please confirm:</h3>
          <h3>Please confirm:</h3>
          <h3>Please confirm:</h3>
          <h3>Please confirm:</h3>
          <h3>Please confirm:</h3>
          <h3>Please confirm:</h3>
          <h3>Please confirm:</h3>
          <h3>Please confirm:</h3>
          <h3>Please confirm:</h3>
          <h3>Please confirm:</h3>
          <h3>Please confirm:</h3>
        </Modal.Content>
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
            type="button"
            icon="checkmark"
            labelPosition="right"
            onClick={this.confirmClick}
            content="Confirm"
          />
        </Modal.Actions>
      </Modal>
    );
  }
}

export default ModalComp;
