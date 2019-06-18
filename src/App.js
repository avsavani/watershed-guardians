import React from 'react';
import Map from './components/Map/Map.js'
import InfoPane from './components/InfoPane/infopane.js'
import Chart from './components/Chart/chart.js'
import data from './data'

import './App.css';



// why we use super(props): https://overreacted.io/why-do-we-write-super-props/
class App extends React.Component {
  state = {
    selectedMarker: null // later is set to something like: {lat: __, long: __}.
  }

  markerClicked = (lat, long) => {
    // there is nothing set yet: 
    if (!this.state.selectedMarker) {
      this.setState({ selectedMarker: {lat, long} })
      return
    }

    // this marker is already set, so unset:
    if (this.state.selectedMarker.lat === lat && this.state.selectedMarker.long == long) {
      this.setState({ selectedMarker: null })
      return
    }

    // different marker set, so update to this marker:
    if (this.state.selectedMarker && 
        this.state.selectedMarker.lat !== lat && 
        this.state.selectedMarker.long !== long
      ) {
      this.setState({ selectedMarker: {lat, long}})
      return
    }
  }
  
  render() {
    var chart = null;
    if (this.state.selectedMarker) {
      let key = this.state.selectedMarker.lat.toString(10) + " " + this.state.selectedMarker.long.toString(10)
      chart = <Chart 
        data={data[key]}
      />
    }
   /* return (
       <div className="App">

         <div className="map-and-chart-container">
           <Map 
             selectedMarker={this.state.selectedMarker}
             markerClicked={this.markerClicked}
           />
           {chart ? (chart) : ""}
         </div>
        <InfoPane />
      </div>
    );
  }
} */
    return (
      <div className="map-and-chart-container">
        <Chart 
          data={data["36.4755 -121.7345"]}
        />
      </div>
    )
  }
} 

export default App;
