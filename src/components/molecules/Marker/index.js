import React from 'react'
import PropTypes from 'prop-types'
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
