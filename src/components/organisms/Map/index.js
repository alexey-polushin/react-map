import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Block, Marker, InfoForm } from 'components'
import GoogleMapReact from 'google-map-react'
import config from 'config'

class Map extends Component {
  constructor(props) {
    super(props)
    this.state = {
      points: (props.points) ? props.points : null,
      activeInfo: false,
      activeMarkerId: null,
      activePointInfo: null,
      draggable: true,
    }
  }

  componentWillReceiveProps(props) {
    this.setState({ points: (props.points && this.state.points === null) ? props.points : null })
  }

  onChildClick = (childKey, childProps) => {
    this.setState({
      activeInfo: true,
      activeMarkerId: childKey,
      activePointInfo: (!this.state.activeInfo) ? childProps : this.state.activePointInfo,
      draggable: false,
    })
  }

  onDrag = (childKey, childProps, mouse) => {
    if (!this.state.draggable) {
      this.state.points[childKey].lat = mouse.lat
      this.state.points[childKey].lon = mouse.lng
      this.setState({
        points: this.state.points,
        activeMarkerId: childKey,
        activePointInfo: this.state.points[childKey],
      })
    }
  }

  onDrop = () => {
    this.setState({ draggable: true })
  }

  hideInfo = () => {
    this.setState({
      activeInfo: false,
      activeMarkerId: null,
      activePointInfo: null,
      draggable: true,
    })
  }

  render() {
    const { key } = config.map
    const { center, zoom } = this.props
    const { activeMarkerId, activePointInfo, draggable, points } = this.state
    return (
      <Block className="map">
        <GoogleMapReact
          bootstrapURLKeys={key}
          defaultCenter={center}
          defaultZoom={zoom}
          onChildClick={this.onChildClick}
          onClick={this.hideInfo}
          onChange={this.hideInfo}
          draggable={draggable}
          onChildMouseDown={this.onDrag}
          onChildMouseUp={this.onDrop}
          onChildMouseMove={this.onDrag}
        >
          { points && Object.keys(points).map((item) => {
            const active = (activeMarkerId === points[item].id)
            return <Marker key={points[item].id} lng={points[item].lon} lat={points[item].lat} active={active} {...points[item]} />
          })
          }
        </GoogleMapReact>
        { this.state.activeInfo && <InfoForm point={activePointInfo} hideInfo={this.hideInfo} /> }
      </Block>
    )
  }

}

Map.propTypes = {
  points: PropTypes.object,
  center: PropTypes.array,
  zoom: PropTypes.number,
}

export default Map
