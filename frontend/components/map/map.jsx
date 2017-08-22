import React from 'react';
import _ from 'lodash';
import {withGoogleMap, GoogleMap, Marker} from 'react-google-maps';

class Map extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      coordinates: null
    };
  }

  componentDidMount() {
    this.props.fetchCoordinates(this.props.city).then(() => {
      this.setState({coordinates: this.props.coordinates});
    });
  }

  render(){
    const markers = this.props.markers || [];
    if (this.state.coordinates) {
      return (
        <GoogleMap
          defaultZoom={12}
          defaultCenter={this.state.coordinates}
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
    } else {
      return null;
    }
  }
}

export default withGoogleMap(Map);
