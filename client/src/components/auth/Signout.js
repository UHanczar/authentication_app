import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions/index';

import Header from '../Header';

class Signout extends Component {
  componentWillMount() {
    this.props.signoutUser();
  }

  render() {
    return <div><Header /> <div>Sorry to see you go...</div></div>;
  }
}

export default connect(null, actions)(Signout);
