import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as actions from '../../actions/index';

import Header from '../Header';
import SignupForm from './SignupForm';

class Signup extends Component {
  
  render() {
    return (
      <div className='container'>
        <Header />
        <SignupForm
          signupUser={this.props.signupUser}
          errorMessage={this.props.errorMessage}
          signupForm={this.props.signupForm}
          // syncerrors={this.props.syncerrors}
          // authenticated={this.props.authenticated}
        />
      </div>
    );
  }
};

const mapStateToProps = (state) => {
  console.log('STATE', state.form.signup);
  return { 
    errorMessage: state.auth.error,
    signupForm: state.form.signup
  };
};

export default connect(mapStateToProps, actions)(Signup);
