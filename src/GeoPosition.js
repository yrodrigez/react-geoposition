import React, {Component} from "react";
import PropTypes from "prop-types";

class GeoPosition extends Component {
  static childContextTypes = {
    latitude: PropTypes.number.isRequired,
    longitude: PropTypes.number.isRequired,
  };

  getChildContext() {
    return this.state.coords
  }

  state = {
    coords: null,
    error: null
  };

  componentDidMount() {
    this.geoId = navigator.geolocation.watchPosition(
      (position) => {
        const {latitude, longitude} =  position.coords;
        this.setState({
          coords: {latitude, longitude}
        })
      },
      (error) => {
        this.setState({error})
      }
    )
  }

  componentWillUnmount() {
    navigator.geolocation.clearWatch(this.geoId)
  }

  render() {
    return this.props.render(this.state);
  }
}

export default GeoPosition;