import React, { Component } from 'react';
import LocationList from './components/LocationList';
import './App.css';
import { MuiThemeProvider, } from '@material-ui/core';
import { Grid, Row, Col } from 'react-flexbox-grid';

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

      // <MuiThemeProvider>
      //   <Grid fluid>
      //     <Row>
      //       <h1>Grid System: xs ,sm ,md, lg</h1>
      //     </Row>
      //     <Row>
      //       <h5>Las columnas se muestran en la misma fila mientras sumen 12</h5>
      //     </Row>
      //     <Row>
      //       <Col xs={12} sm={6} md={4} lg={3}>
      //         <div className='red'></div>
      //       </Col>
      //       <Col xs={12} sm={6} md={4} lg={3}>
      //         <div className='green'></div>
      //       </Col>
      //       <Col xs={12} sm={6} md={4} lg={3}>
      //         <div className='blue'></div>
      //       </Col>
      //       <Col xs={12} sm={6} md={4} lg={3}>
      //         <div className='yellow'></div>
      //       </Col>
      //     </Row>
      //   </Grid>
      // </MuiThemeProvider>

      <Grid>
        <Row>
          Titulo
        </Row>
        <Row>
          <Col xs={12} md={6}>
            <LocationList
              cities={cities}
              onSelectedLocation={this.handleSelectionLocation}>
            </LocationList>
          </Col>
          <Col xs={12} md={6}>
            <div className='details'></div>
          </Col>
        </Row>
      </Grid>

      // <div className="App">
      //   <LocationList cities={cities}
      //     onSelectedLocation={this.handleSelection}></LocationList>
      // </div>
      
    );
  }
}

export default App;
