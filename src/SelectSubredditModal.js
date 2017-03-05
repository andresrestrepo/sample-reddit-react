import React from "react"

var Modal = require('react-bootstrap/lib/Modal');
var Button = require('react-bootstrap/lib/Button');
var FormControl = require('react-bootstrap/lib/FormControl');

const SelectSubredditModal = React.createClass({

  getInitialState() {
    return { showModal: true };
  },

  close() {
    this.setState({ showModal: false });
  },

  loadSubrreddit() {
    this.setState({ showModal: false });
  },

  open() {
    this.setState({ showModal: true });
  },

  render(){
    return (
      <div>
        <Modal show={this.state.showModal} onHide={this.close}>
          <Modal.Header closeButton>
            <Modal.Title>Select Subrredit</Modal.Title>
          </Modal.Header>
          <Modal.Body>
          <FormControl type="text" placeholder="example: playstation"/>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.loadSubrreddit}>Ok</Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
});

export default SelectSubredditModal
