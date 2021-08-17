import React, { Component } from 'react';
import {
  Dropdown,
  Grid,
  GridColumn,
  GridRow,
  Header,
  HeaderContent,
  Icon,
} from 'semantic-ui-react';
import firebase from '../../utils/firebase';

import { clearUser } from '../../actions/index';

export default class UserPanel extends Component {
  handleSignout = () => {
    firebase
      .auth()
      .signOut()
      .then(() => console.log('signed out!!'))
      .catch((err) => console.error(err));
  };
  dropDownOptions = () => [
    {
      text: (
        <span>
          Signed in as <strong>User</strong>
        </span>
      ),
      disabled: true,
      key: 'user',
    },
    {
      text: <span>Change Avatar</span>,
      key: 'avatar',
    },
    {
      text: <span onClick={this.handleSignout}>Sign Out</span>,
      key: 'signout',
    },
  ];
  render() {
    return (
      <Grid style={{ background: '#4c3c4c' }}>
        <GridColumn>
          <GridRow style={{ padding: '1.2em', margin: 0 }}>
            {/* App Header */}
            <Header inverted floated='left' as='h2'>
              <Icon name='code'></Icon>
              <HeaderContent>DevChat</HeaderContent>
            </Header>
          </GridRow>

          {/* User Dropdown */}
          <Header style={{ padding: '0.25em' }} as='h4' inverted>
            <Dropdown
              trigger={<span>User</span>}
              options={this.dropDownOptions()}
            />
          </Header>
        </GridColumn>
      </Grid>
    );
  }
}
