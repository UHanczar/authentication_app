import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Field, reduxForm } from 'redux-form';

class SigninForm extends Component {
  
  static contextTypes = {
      router: PropTypes.object
  }
  
  handleFormSubmit(props) {
    this.props.signinUser(props, () => this.props.authenticated? this.context.router.history.push('/feature') : false);
    console.log('Data have sended!', props);
  }
  
  render() {
    const { handleSubmit } = this.props;
    return (
      <form 
        onSubmit={handleSubmit((props) => this.handleFormSubmit(props))}
      >
        <h3>Create A New Post</h3>
          <div className='form-group'>
            <label htmlFor="email">Email:</label>
            <Field name="email" component='input' type="email" className='form-control' />
          </div>
          <div className='form-group'>
            <label htmlFor="password">Password:</label>
            <Field name="password" component='input' type="password" className='form-control' />
          </div>
          {this.props.errorMessage ? 
            <div className='alert alert-danger'>
              <strong>Oops!</strong>{this.props.errorMessage}
            </div> : null}
          <button action="submit" className='btn btn-primary'>Sign in</button>
      </form>
    );
  }
}

export default reduxForm({
  form: 'signin'
})(SigninForm);
