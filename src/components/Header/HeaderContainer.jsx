import React from 'react'
// import * as axios from 'axios'
import { connect } from 'react-redux'
import Header from './Header'
import { authMeThunk } from '../../redux/authReducer'
// import { authAPI } from '../../api/api'

class HeaderContainer extends React.Component {
    componentDidMount() {
        this.props.authMeThunk()
        // authAPI.authMe().then(res => {
        //         if (res.resultCode === 0) {
        //             let { id, email, login } = res.data
        //             this.props.setUserData(id, email, login);
        //             authAPI.setAvatar(id)
        //             // axios.get(`https://social-network.samuraijs.com/api/1.0/profile/` + id)
        //             //     .then(res => {
        //             //         this.props.setUserAvatarSmall(res);


        //             //     })
        //         }
        //     })
    }
    render() {
        return (
            <Header {...this.props} />
        )
    }
}
const mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth,
        login: state.auth.login,
        id: state.auth.id,
        avatarSmall: state.auth.avatarSmall
    }

}

export default connect(mapStateToProps, { authMeThunk })(HeaderContainer)