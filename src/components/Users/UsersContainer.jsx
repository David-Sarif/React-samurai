import { connect } from 'react-redux';
import { unFollowAC, followAC, setUsersAC } from '../../redux/usersReducer';
import Users from './Users'
const mapStateToProps = (state) => {
    return {
        users: state.usersPage.users
    }
  }
  
  const mapDispatchToProps = (dispatch) => {
    return {   
      follow:(userId) => {
        dispatch(followAC(userId))
      },
      unFollow:(userId) => {
          dispatch(unFollowAC(userId))
      },
      setUsers:(users) => {
          dispatch(setUsersAC(users))
      }
    }
  }
  
  const UsersContainer = connect(mapStateToProps,mapDispatchToProps)(Users)
  
  export default UsersContainer