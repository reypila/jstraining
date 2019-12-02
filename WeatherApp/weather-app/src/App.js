import React, { Component } from 'react';
import LocationList from './components/LocationList';
import './App.css';
import { MuiThemeProvider } from '@material-ui/core';

const cities = [
  'Buenos Aires,ar',
  'Washington,us',
  'Bogota,col',
  'Mexico city,mx',
  'Madrid,es',
  'Lima,pe'
];

class App extends Component {
  
  handleSelection = city => {
    console.log(`handleSelectionLocation ${city}`);
  }

  render() {
    return (
      <MuiThemeProvider>

        <div className="App">
          <LocationList cities={cities}
            onSelectedLocation={this.handleSelection}></LocationList>
        </div>

      </MuiThemeProvider>
    );
  }
}

export default App;
