import React, { Component } from 'react';
import { Fragment } from 'react';
import { CommentGroup, Segment } from 'semantic-ui-react';
import MessageForm from './MessageForm';

import firebase from '../../utils/firebase';

// component //
import MessagesHeader from './MessagesHeader';

export default class Messages extends Component {
  state = {
    messagesRef: firebase.database().ref('messages'),
    currentChannel: this.props.currentChannel,
    currentUser: this.props.currentUser,
  };
  render() {
    const { messagesRef, currentChannel, currentUser } = this.state;
    return (
      <Fragment>
        <MessagesHeader />
        <Segment>
          <CommentGroup className='messages'>{/* messages */}</CommentGroup>
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
