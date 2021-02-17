import { connect } from 'react-redux';
import { unFollow, follow, setUsers, setCurrentPage, setTotalUsersCount, toggleIsFetching } from '../../redux/usersReducer';
import axios from 'axios';
import React from 'react';
import Users from './Users'
import Spinner from '../Spinner/Spinner';


class UsersAPIComponent extends React.Component {

  componentDidMount() {
    this.props.toggleIsFetching(true)
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`, {withCredentials: true})
      .then(res => {

        this.props.setUsers([...res.data.items]);
        this.props.setTotalUsersCount(res.data.totalCount);
        this.props.toggleIsFetching(false);

      });


  }

  onPageChange = (pageNumber) => {

    this.props.setCurrentPage(pageNumber);
    this.props.toggleIsFetching(true)
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`,{withCredentials: true})
      .then(res => {
        this.props.setUsers([...res.data.items]);
        this.props.toggleIsFetching(false);
      });
  }

  render() {
    return (
      <>
        {this.props.isFetching ? <Spinner /> : undefined}
        <Users totalUsersCount={this.props.totalUsersCount}
          pageSize={this.props.pageSize}
          currentPage={this.props.currentPage}
          onPageChange={this.onPageChange}
          users={this.props.users}
          follow={this.props.follow}
          unFollow={this.props.unFollow} />

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
  follow,
  unFollow,
  setUsers,
  setCurrentPage,
  setTotalUsersCount,
  toggleIsFetching,
})(UsersAPIComponent)

export default UsersContainer