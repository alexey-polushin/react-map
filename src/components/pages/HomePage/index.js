import React, { Component } from 'react'
import { PageTemplate, Footer, Map, Loader } from 'components'
import { Container } from 'reactstrap'
import { getData } from 'utils/helpers'


class HomePage extends Component {
  constructor() {
    super()
    this.state = {
      points: null,
      center: [55.755122, 37.621766],
      zoom: 9,
    }
  }

  componentWillMount() {
    getData().then((data) => {
      this.setState({ points: this.filterGeoPoints(data) })
    })
  }

  filterGeoPoints = (points) => {
    const markers =
     Object.assign(...points.map(item => ({ [item.id]: item })))
    return markers
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
