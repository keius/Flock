import {connect} from 'react-redux';
import {fetchGroups, fetchCategoryGroups} from '../../actions/group_actions';
import CategoryDetail from './category_detail';

const mapStateToProps = ({groups}, ownProps) => ({
  category: ownProps.match.params.category,
  groups: Object.keys(groups.groups).map(id => groups.groups[id])
});

const mapDispatchToProps = dispatch => ({
  fetchGroups: () => dispatch(fetchGroups()),
  fetchCategoryGroups: (category) => dispatch(fetchCategoryGroups(category)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CategoryDetail);
