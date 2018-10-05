import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

import Header from '../../components/Header/Header';

class Layout extends Component {
  render() {
    return (
      <Fragment>
        <Header />
        { this.props.children }
      </Fragment>
    );
  }
}

Layout.propTypes = {
  children: PropTypes.element.isRequired,
};

export default Layout;
