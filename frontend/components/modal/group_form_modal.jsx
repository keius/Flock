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
    backgroundColor : 'rgba(255, 255, 255, 0.75)',
    zIndex          : 10
  },
  content : {
    position        : 'fixed',
    top             : '100px',
    left            : '400px',
    right           : '400px',
    bottom          : '340px',
    border          : '1px solid #ccc',
    padding         : '20px',
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
        <button className="button" onClick={this.openModal}>Create Group</button>

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
