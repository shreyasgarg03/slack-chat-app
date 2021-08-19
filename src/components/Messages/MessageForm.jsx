import React, { Component } from 'react';
import { Button, ButtonGroup, Input, Segment } from 'semantic-ui-react';

import firebase from '../../utils/firebase';

export default class MessageForm extends Component {
  state = {
    message: '',
    loading: false,
    channel: this.props.currentChannel,
    user: this.props.currentUser,
    errors: [],
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  createMessage = () => {
    const {
      message,
      user: { uid, displayName, photoURL },
    } = this.state;
    const messageBody = {
      timestamp: firebase.database.ServerValue.TIMESTAMP,
      content: this.state.message,
      user: {
        id: this.state.user.uid,
        name: displayName,
        avatar: photoURL,
      },
    };
    return messageBody;
  };

  sendMessage = () => {
    const { messagesRef } = this.props;
    const { message, channel } = this.state;
    if (message) {
      this.setState({ loading: true });
      messagesRef
        .child(channel.id)
        .push()
        .set(this.createMessage())
        .then(() => {
          this.setState({ loading: false, message: '', errors: [] });
        })
        .catch((err) => {
          console.error(err);
          this.setState({
            loading: false,
            errors: this.state.errors.contact(err),
          });
        });
    } else {
      this.setState({
        errors: this.state.errors.concat({ message: 'Add a message' }),
      });
    }
  };
  render() {
    const { message, errors } = this.state;
    return (
      <Segment className='message__form'>
        <Input
          fluid
          style={{ marginBottom: '0.7em' }}
          label={<Button icon={'add'} />}
          placeholder='Write Your Message'
          name='message'
          value={message}
          onChange={this.handleChange}
          className={errors.length > 0 ? 'error' : ''}
        />
        <ButtonGroup icon width='2'>
          <Button
            color='orange'
            content='Add Reply'
            labelPosition='left'
            icon='edit'
            onClick={this.sendMessage}
          />
          <Button
            color='teal'
            content='Upload Media'
            labelPosition='right'
            icon='cloud upload'
          />
        </ButtonGroup>
      </Segment>
    );
  }
}
