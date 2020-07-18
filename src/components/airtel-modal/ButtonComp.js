import React, { Component } from "react";
import { Button } from "semantic-ui-react";
import ModalComp from "./ModalComp";

class ButtonComp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      modalOpen: false,
      dimmer: "",
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
          Launch Form
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

export default ButtonComp;
