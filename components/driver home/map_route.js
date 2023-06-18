import React, { Component } from 'react';
import { Map, GoogleApiWrapper, Marker, Polyline } from 'google-maps-react';
import styles from '@/styles/components/driver/map_current.module.css'

class MapContainer extends Component {
  state = {
    directions: null
  };

  componentDidMount() {
    const { google } = this.props;
    const directionsService = new google.maps.DirectionsService();

    const origin = { lat: -7.771609, lng: 110.377674 };
    const destination = { lat: -10.797068, lng: 120.370529 };

    directionsService.route(
      {
        origin,
        destination,
        travelMode: google.maps.TravelMode.DRIVING
      },
      (result, status) => {
        if (status === google.maps.DirectionsStatus.OK) {
          this.setState({
            directions: result
          });
        } else {
          console.error('Error fetching directions:', status);
        }
      }
    );
  }

  render() {
    const { google } = this.props;
    const { directions } = this.state;

    if (!google) {
      return <div>Loading...</div>;
    }

    const mapContainerStyles = {
      width: '100%',
      height: '300px',
      position: 'relative',
    };

    const mapStyles = {
      width: '100%',
      height: '100%',
      borderRadius: '20px',
    };


    return (
      <div style={mapContainerStyles}>
        <Map
        google={google}
        zoom={13}
        style={mapStyles}
        initialCenter={{ lat: -7.781609, lng: 110.375674 }}
        >
          {directions && (
            <Polyline
              path={directions.routes[0].overview_path}
              strokeColor="#FF0000"
              strokeOpacity={0.8}
              strokeWeight={2}
            />
          )}
        <Marker position={{ lat: -7.771609, lng: 110.377674 }} />
        <Marker position={{ lat: -7.797068, lng: 110.370529 }} />
        </Map>
      </div>
      
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'YOUR_GOOGLE_MAPS_API_KEY'
})(MapContainer);
