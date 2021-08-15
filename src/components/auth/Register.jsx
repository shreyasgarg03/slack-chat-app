import React, { Component } from 'react';
import firebase from '../../utils/firebase';

import {
  Grid,
  Form,
  Header,
  Message,
  Icon,
  Segment,
  Button,
  GridColumn,
} from 'semantic-ui-react';
import { Link } from 'react-router-dom';

export default class Register extends Component {
  state = {
    username: '',
    email: '',
    password: '',
    passwordConfirm: '',
    errors: [],
  };

  displayErrors = (errors) =>
    errors.map((err, index) => <p key={index}>{err.message}</p>);

  isFormValid = () => {
    let errors = [];
    let error;

    if (this.isFormEmpty(this.state)) {
      // throw error //
      error = { message: 'Fill in all fields' };
      this.setState({ errors: errors.concat(error) });
      // should not execute handleSubmit //
      return false;
    } else if (!this.isPasswordValid(this.state)) {
      // throw error //
      error = { message: 'Password is not valid' };
      this.setState({ errors: errors.concat(error) });
    } else {
      return true;
    }
  };

  isFormEmpty = ({ username, email, password, passwordConfirm, errors }) => {
    // check if any of the string value has a length of 0 means empty, if empty return true //
    return (
      !username.length ||
      !email.length ||
      !password.length ||
      !passwordConfirm.length
    );
  };

  isPasswordValid = ({ password, passwordConfirm }) => {
    if (password.length < 6 || passwordConfirm.length < 6) {
      return false;
    }
    if (password !== passwordConfirm) {
      return false;
    }
    return true;
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    if (this.isFormValid()) {
      e.preventDefault();
      firebase
        .auth()
        .createUserWithEmailAndPassword(this.state.email, this.state.password)
        .then((userCreated) => console.log(userCreated))
        .catch((err) => console.error(err));
    }
  };

  render() {
    const { username, email, password, passwordConfirm, errors } = this.state;
    return (
      <>
        <Grid textAlign='center' verticalAlign='middle' className='app'>
          <GridColumn style={{ maxWidth: 450 }}>
            <Header as='h2' icon color='orange' textAlign='center'>
              <Icon name='puzzle piece' color='orange' />
              Register For DevChat
            </Header>
            <Form onSubmit={this.handleSubmit} size='large'>
              <Segment stacked>
                <Form.Input
                  fluid
                  name='username'
                  icon='user'
                  value={username}
                  iconPosition='left'
                  placeholder='Username'
                  onChange={this.handleChange}
                  type='text'
                />
                <Form.Input
                  fluid
                  name='email'
                  icon='mail'
                  value={email}
                  iconPosition='left'
                  placeholder='Email'
                  onChange={this.handleChange}
                  type='email'
                />
                <Form.Input
                  fluid
                  name='password'
                  icon='lock'
                  value={password}
                  iconPosition='left'
                  placeholder='Password'
                  onChange={this.handleChange}
                  type='password'
                />
                <Form.Input
                  fluid
                  name='passwordConfirm'
                  icon='repeat'
                  value={passwordConfirm}
                  iconPosition='left'
                  placeholder='Password Confirm'
                  onChange={this.handleChange}
                  type='password'
                />

                <Button color='orange' fluid size='large'>
                  Submit
                </Button>
              </Segment>
            </Form>
            {errors.length > 0 && (
              <Message error>
                <h3>Error</h3>
                {this.displayErrors(errors)}
              </Message>
            )}
            <Message>
              Already A User? <Link to='/login'>Login</Link>{' '}
            </Message>
          </GridColumn>
        </Grid>
      </>
    );
  }
}
