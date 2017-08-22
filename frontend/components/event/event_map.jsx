import React from 'react';
import _ from 'lodash';
import {withGoogleMap, GoogleMap, Marker} from 'react-google-maps';

class EventMap extends React.Component {
  render(){
    const markers = this.props.markers || [];
    return (

      <GoogleMap
        defaultZoom={12}
        defaultCenter={this.props.center}
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
