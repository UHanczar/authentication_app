import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as actions from '../../actions/index';

import Header from '../Header';
import SigninForm from './SigninForm';

class Signin extends Component {
  
  render() {
    return (
      <div className='container'>
        <Header />
        <SigninForm
          signinUser={this.props.signinUser}
          errorMessage={this.props.errorMessage}
          authenticated={this.props.authenticated}
        />
      </div>
    );
  }
};

const mapStateToProps = (state) => {
  return { 
    errorMessage: state.auth.error,
    authenticated: state.auth.authenticated
   };
};

export default connect(mapStateToProps, actions)(Signin);
