////////////////////////////////////////////////////////////////////////////////
// Exercise:
// - Now create a <GeoAddress> component that also uses a render
//   prop callback with the current address. You will use
//   `getAddressFromCoords(latitude, longitude)` to get the
//   address. It returns a promise.
// - You should be able to compose <GeoPosition> and <GeoAddress>
//   beneath it to naturally compose both the UI and the state
//   needed to render
// - Make sure <GeoAddress> supports the user moving positions
import './index.css'
import React, {Component} from 'react'
import LoadingDots from './LoadingDots'
import Map from './Map'
import GeoPosition from './GeoPosition';
import GeoAddress from './GeoAdress';

class App extends Component {
  render() {
    return (
      <div className="app">
        <GeoPosition
          render={({error, coords}) => error ? (
            <div>Error: {error.message}</div>
          ) : coords ? (
            <GeoAddress
              render={address => (
                <Map
                  lat={coords.latitude}
                  lng={coords.longitude}
                  info={error || address}
                />
              )}
            />
          ) : (
            <LoadingDots/>
          )}
        />
      </div>
    )
  }
}

export default App

