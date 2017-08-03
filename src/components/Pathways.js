import React, { Component } from 'react';
import ServiceAreas from './ServiceAreas';
import 'react-select/dist/react-select.css';

var Button = require('react-bootstrap').Button
var Form = require('react-bootstrap').Form
var FormGroup = require('react-bootstrap').FormGroup
var ControlLabel = require('react-bootstrap').ControlLabel
var FormControl = require('react-bootstrap').FormControl
var HelpBlock = require('react-bootstrap').HelpBlock
var Panel = require('react-bootstrap').Panel

const Pathways = React.createClass({
  getInitialState() {
    return {
      keywords: '',
      limit: 0
    };
  },

  handleChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
    console.log(this.state)
  },

  render() {
    return (
      <Panel>
        <Form action='http://localhost:3000/pathways' method='post'>
          <FormGroup controlId="pathwaysForm">
            <ControlLabel>Location</ControlLabel>
            <ServiceAreas />
            <HelpBlock>Select the Area you are in.</HelpBlock>
          </FormGroup>
          <FormGroup controlId="pathwaysForm">
            <ControlLabel>Keywords</ControlLabel>
            <FormControl type="text" name="keywords" value={this.state.keywords} placeholder="immigrant education youth" onChange={this.handleChange}/>
            <HelpBlock>Enter keywords for searching.</HelpBlock>
          </FormGroup>
          <FormGroup controlId="pathwaysForm">
            <ControlLabel>Limit</ControlLabel>
            <FormControl type="number" name="limit" value={this.state.limit} placeholder="Enter number" onChange={this.handleChange}/>
            <HelpBlock>Number of Records you want back.</HelpBlock>
          </FormGroup>
          <Button type="submit">
            Submit
          </Button>
        </Form>
      </Panel>
    );
  }
});

export default Pathways;
