import React, { PropTypes } from 'react'
import { Block } from 'components'

const Marker = (point) => {
  const activeClass = (point.active) ? 'active' : ''
  return (
    <Block className={`marker ${activeClass}`} />
  )
}

Marker.propTypes = {
  point: PropTypes.object,
}

export default Marker
