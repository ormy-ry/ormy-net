import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import Navbar from '../components/Navbar'
import './all.sass'

const styles = {
  gatsby: {
    height: '100%',
  },
}

const TemplateWrapper = ({ children }) => (
  <div style={styles.gatsby}>
    <Helmet title="ÖRMY" />
    <Navbar />
    <div>{children()}</div>
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
