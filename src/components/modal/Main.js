import React, { Component } from "react";
import { Button } from "semantic-ui-react";
import ModalComp from "./ModalComp";

export class Main extends Component {
  constructor(props) {
    super(props);

    this.state = {
      modalOpen: false,
      dimmer: "", // This is to make background blur when modal is opened (Nice Look)
    };
  }

  show = (dimmer) => () => this.setState({ dimmer, modalOpen: true });

  render() {
    return (
      <>
        <Button
          style={{ marginTop: "50px" }}
          positive
          onClick={this.show("inverted")}
        >
          Open Modal
        </Button>
        <ModalComp
          modalOpen={this.state.modalOpen}
          dimmer={this.state.dimmer}
          handleClose={() => {
            this.setState({ modalOpen: false });
          }}
        />
      </>
    );
  }
}

export default Main;
