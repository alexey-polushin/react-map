import React, { Component, PropTypes } from 'react'
import GoogleMapReact from 'google-map-react'

class HomePage extends Component {
  static defaultProps = {
    center: { lat: 59.95, lng: 30.33 },
    zoom: 11,
  }

  static propTypes = {
    center: PropTypes.object,
    zoom: PropTypes.number,
  }

  render() {
    return (
      <div className="wrapper">
        <div className="map-page">
          <div className="container">
            <div className="map">
              <GoogleMapReact
                bootstrapURLKeys={{ key: 'AIzaSyDRmxmhwt5mglUSf-6i2CwVEHp53WP2G50' }}
                defaultCenter={this.props.center}
                defaultZoom={this.props.zoom}
              />
            </div>
          </div>
        </div>
        <div className="footer">
          React Map
        </div>
      </div>
    )
  }


}

export default HomePage
