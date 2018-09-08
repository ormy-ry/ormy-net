import React from 'react'
import SponsorListItem from './SponsorListItem'
import { node } from 'prop-types'

const SponsorList = props => {
  let sponsorList = []
  props.sponsorsArr.edges[0].node.frontmatter.sponsorlogos.forEach((logo, i) =>
    sponsorList.push(
      <SponsorListItem logo={logo.logo} url={logo.url} key={i} />
    )
  )
  return <div className="columns">{sponsorList}</div>
}

export default SponsorList
