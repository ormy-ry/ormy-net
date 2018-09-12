import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope, faLink, faUser } from '@fortawesome/free-solid-svg-icons'

import Navbar from '../components/Navbar'
import './all.sass'
import styled from 'styled-components'

library.add(fab, faEnvelope, faLink, faUser)

const styles = {
  gatsby: {
    height: '100%',
  },
}

const Credit = styled.span`
  position: absolute !important;
  right: 8px !important;
  bottom: 8px !important;
  padding: 0.4rem;
  color: gray;
  transition: 0.5s ease;
  :hover {
    filter: drop-shadow(16px 16px 20px red) invert(75%);
  }
`

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
    <Credit className="is-pulled-right">Panu Linnala 2018</Credit>
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
