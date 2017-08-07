import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Block, Loader } from 'components'
import { Button, Form, FormGroup, Label, Input } from 'reactstrap'
import { sendData } from 'utils/helpers'

class InfoForm extends Component {
  constructor(props) {
    super(props)
    const { name, routeName, lat, lon } = props.point
    this.state = {
      name,
      routeName,
      lat,
      lon,
      load: false,
    }
    this.onSubmit = this.onSubmit.bind(this)
    this.handleInputChange = this.handleInputChange.bind(this)
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      lat: nextProps.point.lat,
      lon: nextProps.point.lon,
    })
  }

  onSubmit(e) {
    e.preventDefault()
    this.setState({ load: true })
    sendData(this.state).then((data) => {
      console.log('response', data)
      this.setState({ load: false })
    })
  }

  handleInputChange(event) {
    const target = event.target
    const value = target.value
    const name = target.name
    this.setState({
      [name]: value,
    })
  }

  render() {
    const { name, routeName, lat, lon, load } = this.state
    return (
      <Block className="info-form">
        { load && <Block className="load-wrapper">
          <Loader />
        </Block> }
        <h5 className="title">Инфо</h5>
        <Form className="form" onSubmit={this.onSubmit}>
          <FormGroup>
            <Label>Имя</Label>
            <Input type="text" name="name" id="name" value={name} onChange={this.handleInputChange} />
          </FormGroup>
          <FormGroup>
            <Label>Путь</Label>
            <Input type="text" name="routeName" id="routeName" value={routeName} onChange={this.handleInputChange} />
          </FormGroup>
          <FormGroup>
            <Label>Lat</Label>
            <Input type="text" name="lat" id="lat" value={lat} disabled />
          </FormGroup>
          <FormGroup>
            <Label>Lng</Label>
            <Input type="text" name="lon" id="lon" value={lon} disabled />
          </FormGroup>
          <Button>Сохранить</Button>
        </Form>
        <Button onClick={this.props.hideInfo}>Закрыть</Button>
      </Block>
    )
  }

}

InfoForm.propTypes = {
  point: PropTypes.object,
  hideInfo: PropTypes.func,
}

export default InfoForm
