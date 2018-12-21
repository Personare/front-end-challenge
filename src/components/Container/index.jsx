import React from 'react'
import PropTypes from 'prop-types'

const Container = ({ children, classes }) => (
  <div className={`container ${classes}`}>
    {children}
  </div>
)

Container.defaultProps = {
  classes: '',
}

Container.propTypes = {
  children: PropTypes.node.isRequired,
  classes: PropTypes.string,
}

export default Container
