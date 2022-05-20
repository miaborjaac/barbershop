import React, { Component } from "react";
import * as PropTypes from "prop-types";
import { GoogleMap, LoadScript } from '@react-google-maps/api';
import {Col} from "antd";

class Map extends Component {
  constructor (props) {
    super(props);

    this.state = {
      map: null,
    };
  };

  render() {
    const { coordinates } = this.props;
    const center = {
      lat: coordinates.lat,
      lng: coordinates.lng
    };
    const containerStyle = {
      width: '400px',
      height: '400px'
    };

    return (
      <Col xs={24} md={24} className={"map-container"}>
        <LoadScript googleMapsApiKey="your-key">
          <GoogleMap
            mapContainerStyle={containerStyle}
            center={center}
            zoom={10}
            onLoad={map => {
              const bounds = new window.google.maps.LatLngBounds(center);

              map.fitBounds(bounds);
              this.setState({ map: map });
            }}
            onUnmount={() => this.setState({ map: null })}
          >
            { /* Child components, such as markers, info windows, etc. */ }
            <></>
          </GoogleMap>
        </LoadScript>
      </Col>
    );
  }
}

Map.propTypes = {
  comments: PropTypes.array,
  coordinates: PropTypes.object
};

export default Map;