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

class Channels extends Component {
  state = {
    channels: [],
    channelName: '',
    channelDetails: '',
    modal: false,
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
            <Form>
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
            <Button color='green' inverted>
              <Icon name='checkmark' on /> Add
            </Button>

            <Button color='red' inverted>
              <Icon name='remove' onClick={this.closeModal} /> Cancel
            </Button>
          </ModalActions>
        </Modal>
      </>
    );
  }
}

export default Channels;
