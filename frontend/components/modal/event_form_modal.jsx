import React from 'react';
import Modal from 'react-modal';
import EventFormContainer from '../event/event_form_container';

const style = {
  overlay : {
    position        : 'fixed',
    top             : 0,
    left            : 0,
    right           : 0,
    bottom          : 0,
    backgroundColor : 'rgba(124,177,178,0.75)',
    zIndex          : 10
  },
  content : {
    position        : 'fixed',
    transform       : 'translate(-50%, -50%)',
    top             : '50%',
    left            : '50%',
    width           : '420px',
    minWidth        : '420px',
    height          : '420px',
    minHeight       : '420px',
    border          : '1px solid #ccc',
    padding         : '20px',
    zIndex          : 11
  }
};

class EventFormModal extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      modalOpen: false,
    };

    this.closeModal = this.closeModal.bind(this);
    this.openModal = this.openModal.bind(this);
  }

  closeModal() {
    this.setState({ modalOpen: false });
  }

  openModal() {
    this.setState({ modalOpen: true });
  }

  render() {
    return(
      <div>
        <button className="event-button" onClick={this.openModal}>
          <i className="fa fa-calendar-plus-o" aria-hidden="true"></i>&nbsp;&nbsp;Create Event
        </button>

        <Modal
          isOpen={this.state.modalOpen}
          onRequestClose={this.closeModal}
          style={style}
          contentLabel="eventForms">

          <EventFormContainer closeModal={this.closeModal}/>

        </Modal>
      </div>
    );
  }
}

export default EventFormModal;
