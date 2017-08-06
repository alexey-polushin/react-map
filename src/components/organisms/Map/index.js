import React, { PropTypes } from 'react'
import { Block } from 'components'
import GoogleMapReact from 'google-map-react'
import config from 'config'

const Map = ({ points, center, zoom }) => {
  const { key } = config.map
  return (
    <Block className="map">
      <GoogleMapReact
        bootstrapURLKeys={key}
        defaultCenter={center}
        defaultZoom={zoom}
      />
    </Block>
  )
}

Map.propTypes = {
  points: PropTypes.array,
  center: PropTypes.object,
  zoom: PropTypes.number,
}

export default Map
