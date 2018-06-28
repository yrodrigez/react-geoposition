import PropTypes from "prop-types";
import {Component} from "react";
import getAddressFromCoords from "./getAddressFromCoords";

class GeoAddress extends Component {

  static contextTypes = {
    latitude: PropTypes.number,
    longitude: PropTypes.number,
  };

  state = {address: 'Loading address'};

  async componentWillMount() {
    await this.getAddress();
  }

  async componentDidUpdate() {
    await this.getAddress()
  }

  async getAddress() {
    const {latitude, longitude} = this.context;
    if (latitude && longitude) {
      let address = await getAddressFromCoords(latitude, longitude);
      this.setState({address: address})
    }
  }

  render() {
    return this.props.render(this.state.address);
  }
}

export default GeoAddress;