import React from 'react';
import createClass from 'create-react-class';
import 'react-select/dist/react-select.css';

var FormControl = require('react-bootstrap').FormControl

const ServiceAreas = createClass({
  getInitialState: function() {
     return {
       areas: ["loading ... "],
       selectedArea: ''
     };
  },

  createOption(area) {
    return <option key={area} value={area}>{area}</option>
  },
  componentWillMount() {
     this.getAreas();
  },

  handleChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
    console.log(this.state);
  },

  getAreas() {
    var that = this;
    fetch(`http://localhost:3000/pathways/service_areas`).then(function(response) {
      var contentType = response.headers.get("content-type");
      if(contentType && contentType.includes("application/json")) {
        return response.json();
      }
      throw new TypeError("Oops, we haven't got JSON!");
    })
    .then(function(json) {
      that.setState({areas:json});
    })
    .catch(function(error) { console.log(error); });
	},

  render() {
    return (
      <FormControl name="selectedArea" value={this.state.selectedArea} componentClass="select" placeholder="select" onChange={this.handleChange}>
        {this.state.areas.map(this.createOption)}
      </FormControl>
    );
  }
});

export default ServiceAreas;
