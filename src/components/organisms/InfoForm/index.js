import React, { PropTypes } from 'react'
import { Block } from 'components'
import { Button, Form, FormGroup, Label, Input } from 'reactstrap'


const Map = ({ point }) => {
  const { name, routeName, routeNumber, lat, lon } = point
  return (
    <Block className="info-form">
      <h5 className="title">Инфо</h5>
      <Form>
        <FormGroup>
          <Label>Имя</Label>
          <Input type="text" name="address" id="address" value={name} onChange={value => this.onChange(value)} />
        </FormGroup>
        <FormGroup>
          <Label>Путь</Label>
          <Input type="text" name="routeName" id="routeName" value={routeName} onChange={value => this.onChange(value)} />
        </FormGroup>
        <FormGroup>
          <Label>Номер пути</Label>
          <Input type="text" name="routeNumber" id="routeName" value={routeNumber} onChange={value => this.onChange(value)} />
        </FormGroup>
        <FormGroup>
          <Label>Lat</Label>
          <Input type="text" name="lat" id="lat" value={lat} disabled />
        </FormGroup>
        <FormGroup>
          <Label>Lng</Label>
          <Input type="text" name="lng" id="lng" value={lon} disabled />
        </FormGroup>
        <Button>Сохранить</Button>
      </Form>
    </Block>
  )
}

Map.propTypes = {
  point: PropTypes.object,
}

export default Map
