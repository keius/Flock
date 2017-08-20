import React from 'react';
import _ from 'lodash';
import {withGoogleMap, GoogleMap, Marker} from 'react-google-maps';

class EventMap extends React.Component {
  render(){
    const markers = this.props.markers || [];
    console.log(this.props);
    return (

      <GoogleMap
        defaultZoom={12}
        defaultCenter={{lat: -44.85055029999999, lng: 168.3881969}}
        onClick={_.noop}
        onRightClick={_.noop}
        onDragStart={_.noop}
      >
        {markers.map((marker, index) => (
          <Marker
            {...marker}
          />
        ))}
      </GoogleMap>
    );
  }
}

export default withGoogleMap(EventMap);
