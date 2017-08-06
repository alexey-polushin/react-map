import React, { Component, PropTypes } from 'react'
import GoogleMapReact from 'google-map-react'
import { PageTemplate, Footer, Block } from 'components'
import { Container } from 'reactstrap'
import config from 'config'

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
    const { key } = config.map
    return (
      <PageTemplate footer={<Footer />} className="map-page">
        <Container>
          <Block className="map">
            <GoogleMapReact
              bootstrapURLKeys={key}
              defaultCenter={this.props.center}
              defaultZoom={this.props.zoom}
            />
          </Block>
        </Container>
      </PageTemplate>
    )
  }
}

export default HomePage
