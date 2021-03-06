import React from 'react';
import Modal from 'react-modal';
import GroupFormContainer from '../group/group_form_container';

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
    width           : '400px',
    minWidth        : '400px',
    height          : '360px',
    minHeight       : '360px',
    border          : '1px solid #ccc',
    zIndex          : 11
  }
};

class GroupFormModal extends React.Component {
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
        <button className="group-form-button" onClick={this.openModal}>
          create group
        </button>

        <Modal
          isOpen={this.state.modalOpen}
          onRequestClose={this.closeModal}
          style={style}
          contentLabel="groupForms">

          <GroupFormContainer closeModal={this.closeModal}/>

        </Modal>
      </div>
    );
  }
}

export default GroupFormModal;
