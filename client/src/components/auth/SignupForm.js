import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Field, reduxForm } from 'redux-form';

import * as actions from '../../actions';
import { validate } from '../../helpers/helpers';

class SignupForm extends Component {
  static contextTypes = {
      router: PropTypes.object
  }
  
  handleFormSubmit(formProps) {
    // Call action creator to sign up the user!
    this.props.signupUser(formProps, () =>  this.context.router.history.push('/feature'));
  }

  renderAlert() {
    if (this.props.errorMessage) {
      return (
        <div className="alert alert-danger">
          <strong>Oops!</strong> {this.props.errorMessage}
        </div>
      );
    }
  }

  render() {
    const { handleSubmit, signupForm } = this.props;
    console.log('SF', signupForm);
    return (
      <form onSubmit={handleSubmit((props) => this.handleFormSubmit(props))}>
        <div className='form-group'>
          <label htmlFor="email">Email:</label>
          <Field name="email" component='input' type="email" className='form-control' />
          {signupForm && signupForm.syncErrors && signupForm.syncErrors.email && signupForm.fields && signupForm.fields.email && signupForm.fields.email.touched ? <div className='danger'>{signupForm.syncErrors.email}</div> : false}
        </div>
        <div className='form-group'>
          <label htmlFor="password">Password:</label>
          <Field name="password" component='input' type="password" className='form-control' />
          {signupForm && signupForm.syncErrors && signupForm.syncErrors.password && signupForm.fields && signupForm.fields.password && signupForm.fields.password.touched ? <div className='danger'>{signupForm.syncErrors.password}</div> : false}
        </div>
        <div className='form-group'>
          <label htmlFor="passwordConfirm">Confirm Password:</label>
          <Field name="passwordConfirm" component='input' type="password" className='form-control' />
          {signupForm && signupForm.syncErrors && signupForm.syncErrors.passwordConfirm && signupForm.fields && signupForm.fields.passwordConfirm && signupForm.fields.passwordConfirm.touched ? <div className='danger'>{signupForm.syncErrors.passwordConfirm}</div> : false}
        </div>
        {this.renderAlert()}
        <button action="submit" className="btn btn-primary">Sign up!</button>
      </form>
    );
  }
}

function mapStateToProps(state) {
  return { errorMessage: state.auth.error };
}

export default reduxForm({
  form: 'signup',
  validate
}, mapStateToProps, actions)(SignupForm);
