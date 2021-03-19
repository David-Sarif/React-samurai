import { connect } from 'react-redux';
import {
  setCurrentPage,
  getUsers,
  followThunk,
  unFollowThunk,
} from '../../redux/usersReducer';
import React from 'react';
import Users from './Users'
import Spinner from '../Spinner/Spinner';


class UsersAPIComponent extends React.Component {

  componentDidMount() {
    this.props.getUsers(this.props.currentPage, this.props.pageSize)

  }

  onPageChange = (pageNumber) => {

    this.props.getUsers(pageNumber, this.props.pageSize)

    this.props.setCurrentPage(pageNumber);
  }

  render() {
    return (
      <>
        {this.props.isFetching ? <Spinner /> : undefined}
        <Users {...this.props} onPageChange={this.onPageChange}/>
      </>)
  }

}


const mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage,
    isFetching: state.usersPage.isFetching,
    followingInProgress: state.usersPage.followingInProgress
  }
}
// const mapDispatchToProps = (dispatch) => {
//   return {
//     follow: (userId) => {
//       dispatch(followAC(userId))
//     },
//     unFollow: (userId) => {
//       dispatch(unFollowAC(userId))
//     },
//     setUsers: (users) => {
//       dispatch(setUsersAC(users))
//     },
//     setCurrentPage: (currentPage) => {
//       dispatch(setCurrentPageAC(currentPage))
//     },
//     setTotalUsersCount: (totalUsersCount) => {
//       dispatch(setTotalUsersCountAC(totalUsersCount))
//     },
//     toggleIsFetching: (isFetching) => {
//       dispatch(toggleIsFetchingAC(isFetching))
//     },
//   }
// }

const UsersContainer = connect(mapStateToProps, {
  setCurrentPage,
  getUsers,
  followThunk,
  unFollowThunk
})(UsersAPIComponent)

export default UsersContainer