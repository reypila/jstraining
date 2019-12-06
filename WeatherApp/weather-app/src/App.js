import React, { Component } from 'react';
import LocationList from './components/LocationList';
import './App.css';
import { MuiThemeProvider, } from '@material-ui/core';
import { Grid, Row, Col } from 'react-flexbox-grid';
import Paper from '@material-ui/core/Paper';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';
import ForecastExtended from './components/ForecastExtend';

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
      //   <Grid>
      //     <Row>
      //       <Col xs={12}>
      //         <AppBar position='static' title='Weather App'></AppBar>
      //       </Col>
      //     </Row>
      //     <Row>
      //       <Col xs={12} md={6}>
      //         <LocationList cities={cities}>
      //           onSelectedLocation={this.handleSelectedLocation}>
      //         </LocationList>
      //       </Col>
      //       <Col xs={12} md={6}>
      //         <Paper elevation={4}>
      //           <div className='detail'></div>
      //         </Paper>
      //       </Col>
      //     </Row>
      //   </Grid>
      // </MuiThemeProvider>

      <Grid>
        <Row>
          <AppBar position='sticky'>
            <Toolbar>
              <Typography variant='h4' color='inherit'>
                Weather App
              </Typography>
            </Toolbar>
          </AppBar>
        </Row>
        <Row>
          <Col xs={12} md={6}>
            <LocationList
              cities={cities}
              onSelectedLocation={this.handleSelectionLocation}>
            </LocationList>
          </Col>
          <Col xs={12} md={6}>
            <Paper elevation={4}>
              <div className='detail'></div>
            </Paper>
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default App;
