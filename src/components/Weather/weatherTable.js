import React from 'react';
import $ from 'jquery';

export default class WeatherTable extends React.Component {
  constructor(props) {
    super(props);

    this.handleZipCodeSubmit = this.handleZipCodeSubmit.bind(this);
  }

  handleZipCodeSubmit(event) {
    event.preventDefault();
    console.log('here');
    console.log(this.refs.zip.value);


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

