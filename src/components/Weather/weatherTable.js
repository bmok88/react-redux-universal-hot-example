import React from 'react';
import jquery from 'jquery';
import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {reduxForm} from 'redux-form';
import * as weatherActions from 'redux/modules/weather';

export default class WeatherTable extends React.Component {
  constructor(props) {
    super(props);

    this.handleZipCodeSubmit = this.handleZipCodeSubmit.bind(this);
  }

  handleZipCodeSubmit(event) {
    event.preventDefault();
    console.log('here');
    console.log(this.refs.zip.value);
    const zipCode = {
      zip: this.refs.zip.value
    };
    console.log(zipCode, 'zipcode');
    jquery.post('/weather', zipCode).done(data => {
      console.log(data);
    });
    this.refs.zip.value = '';
  }

  render() {
    return (
      <div>
        <form type="submit" onSubmit={this.handleZipCodeSubmit}>
          <input type="text" required ref="zip" placeholder="Enter the zipcode"/>
          <input type="submit"/>
        </form>
      </div>
    );
  }
}

