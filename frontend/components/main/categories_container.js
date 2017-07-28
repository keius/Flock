import {connect} from 'react-redux';
import {fetchCategoryGroups} from '../actions/group_actions';
import MainCategory from './categories';

const mapStateToProps = ({groups}) => ({
  groups: Object.keys(groups.groups).map(id => groups.groups[id])
});

const mapDispatchToProps = dispatch => ({
  fetchCategoryGroups: (id) => dispatch(fetchCategoryGroups(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(MainCategory);
