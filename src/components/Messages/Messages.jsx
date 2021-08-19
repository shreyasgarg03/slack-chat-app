import React, { Component } from 'react';
import { Fragment } from 'react';
import { CommentGroup, Segment } from 'semantic-ui-react';
import MessageForm from './MessageForm';

import firebase from '../../utils/firebase';

// component //
import MessagesHeader from './MessagesHeader';
import Message from './Message';

export default class Messages extends Component {
  state = {
    messagesRef: firebase.database().ref('messages'),
    currentChannel: this.props.currentChannel,
    currentUser: this.props.currentUser,
    messages: [],
    messagesLoading: true,
  };
  componentDidMount = () => {
    const { currentChannel, currentUser } = this.state;
    if (currentChannel && currentUser) {
      this.addListners(currentChannel.id);
    }
  };

  addListners = (channelId) => {
    this.addMessageListener(channelId);
  };

  addMessageListener = (id) => {
    let loadedMessages = [];
    this.state.messagesRef.child(id).on('child_added', (snap) => {
      loadedMessages.push(snap.val());
      this.setState({
        messages: loadedMessages,
        messagesLoading: false,
      });
    });
  };

  displayMessages = (messages) =>
    messages.length > 0 &&
    messages.map((message) => (
      <Fragment>
        <Message
          key={message.timestamp}
          message={message}
          user={this.state.currentUser}
        />
      </Fragment>
    ));

  render() {
    const {
      messagesRef,
      currentChannel,
      currentUser,
      messages,
      messagesLoading,
    } = this.state;
    return (
      <Fragment>
        <MessagesHeader />
        <Segment>
          <CommentGroup className='messages'>
            {this.displayMessages(messages)}
          </CommentGroup>
        </Segment>

        {/* form */}
        <MessageForm
          currentUser={currentUser}
          currentChannel={currentChannel}
          messagesRef={messagesRef}
        />
      </Fragment>
    );
  }
}
