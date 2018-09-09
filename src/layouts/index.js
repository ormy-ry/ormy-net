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
    <Helmet
      title="ÖRMY"
      meta={[
        {
          name: 'viewport',
          content: 'width=device-width, initial-scale=1.0, shrink-to-fit=no',
        },
        { name: 'theme-color', content: '#181818' },
      ]}
    />
    <Navbar />
    <div>{children()}</div>
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
