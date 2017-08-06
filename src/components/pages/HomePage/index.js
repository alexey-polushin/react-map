import React, { Component, PropTypes } from 'react'
import { PageTemplate, Footer, Map, Loader } from 'components'
import { Container } from 'reactstrap'
import { getData } from 'utils/helpers'

class HomePage extends Component {
  constructor() {
    super()
    this.state = {
      points: null,
      center: { lat: 59.95, lng: 30.33 },
      zoom: 11,
    }
  }

  componentWillMount() {
    getData().then((data) => {
      this.setState({ points: data })
    })
  }

  render() {
    const { points } = this.state
    return (
      <PageTemplate footer={<Footer />} className="map-page">
        { !points && <Loader /> }
        <Container>
          <Map {...this.state} />
        </Container>
      </PageTemplate>
    )
  }
}

export default HomePage
