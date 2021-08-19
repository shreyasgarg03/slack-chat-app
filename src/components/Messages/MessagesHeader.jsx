import React, { Component } from 'react';
import {
  HeaderSubheader,
  Icon,
  Input,
  Segment,
  Header,
} from 'semantic-ui-react';

class MessagesHeader extends Component {
  render() {
    return (
      <Segment clearing>
        {/* channel search title */}
        <Header fluid='true' as='h2' floated='left' style={{ marginBottom: 0 }}>
          <span>
            Channel
            <Icon name={'star outline'} color='black' />
          </span>
          <HeaderSubheader>2 Users</HeaderSubheader>
        </Header>
        {/* channel search input */}
        <Header floated='right'>
          <Input
            size='mini'
            icon='search'
            name='searchTer'
            placeholder='Search Messages'
          />
        </Header>
      </Segment>
    );
  }
}

export default MessagesHeader;
