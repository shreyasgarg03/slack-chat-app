import React, { Component } from 'react';
import {
  Menu,
  MenuItem,
  MenuMenu,
  Icon,
  Modal,
  ModalHeader,
  ModalContent,
  Form,
  FormField,
  Input,
  ModalActions,
  Button,
} from 'semantic-ui-react';

import firebase from '../../utils/firebase';

class Channels extends Component {
  state = {
    user: this.props.currentUser,
    channels: [],
    channelName: '',
    channelDetail: '',
    modal: false,
    channelRef: firebase.database().ref('channles'),
  };

  isFormValid = ({ channelName, channelDetail }) => {
    return channelName && channelDetail ? true : false;
  };

  addChannle = () => {
    const { channelRef, channelDetail, channelName, user } = this.state;

    const key = channelRef.push().key;
    const newChannel = {
      id: key,
      name: channelName,
      details: channelDetail,
      createdBy: {
        name: user.displayName,
        avatar: user.photoURL,
      },
    };
    channelRef
      .child(key)
      .update(newChannel)
      .then(() => {
        this.setState({ channelName: '', channelDetail: '' });
        this.closeModal();
        console.log('channel added');
      })
      .catch((err) => {
        console.error(err);
      });
  };

  openModal = () => {
    this.setState({ modal: true });
  };
  closeModal = () => {
    this.setState({ modal: false });
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    if (this.isFormValid(this.state)) {
      this.addChannle();
    }
  };

  render() {
    const { channels, modal } = this.state;
    return (
      <>
        <MenuMenu style={{ paddingBottom: '2em' }}>
          <MenuItem>
            <span>
              <Icon name='exchange' /> CHANNELS
            </span>{' '}
            ({channels.length}) <Icon name='add' onClick={this.openModal} />
          </MenuItem>
        </MenuMenu>
        {/* all channels */}
        <Modal basic open={modal} onClose={this.closeModal}>
          <ModalHeader>Add a Channel</ModalHeader>
          <ModalContent>
            <Form onSubmit={this.handleSubmit}>
              <FormField>
                <Input
                  fluid
                  label='Name of Channel'
                  name='channelName'
                  onChange={this.handleChange}
                />
              </FormField>
              <FormField>
                <Input
                  fluid
                  label='About the Channel'
                  name='channelDetail'
                  onChange={this.handleChange}
                />
              </FormField>
            </Form>
          </ModalContent>
          {/* action */}
          <ModalActions>
            <Button color='green' inverted onClick={this.handleSubmit}>
              <Icon name='checkmark' /> Add
            </Button>

            <Button color='red' inverted onClick={this.closeModal}>
              <Icon name='remove' /> Cancel
            </Button>
          </ModalActions>
        </Modal>
      </>
    );
  }
}

export default Channels;
