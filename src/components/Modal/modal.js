import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Chart from '../Chart/chart'


class ChartModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  }

  render() {
    return (
      <div>
        <Button color="danger" onClick={this.toggle}>{this.props.buttonLabel}</Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}>Location title</ModalHeader>
          <ModalBody>
            <Chart />
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.toggle}>CLOSE</Button>{' '}
            
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default ChartModal;