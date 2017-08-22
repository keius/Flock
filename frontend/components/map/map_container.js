import {connect} from 'react-redux';
import {fetchCoordinates} from '../../actions/map_actions';
import Map from './map';

const mapStateToProps = ({map}) => {
  return {
    coordinates: map.coordinates
  };
};

const mapDispatchToProps = dispatch => ({
  fetchCoordinates: (location) => dispatch(fetchCoordinates(location))
});

export default connect(mapStateToProps, mapDispatchToProps)(Map);
