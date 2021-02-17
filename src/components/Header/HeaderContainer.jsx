import React from 'react'
import * as axios from 'axios'
import { connect } from 'react-redux'
import Header from './Header'
import { setUserData, setUserAvatarSmall } from '../../redux/authReducer'

class HeaderContainer extends React.Component {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, { withCredentials: true })
            .then(res => {
                if (res.data.resultCode === 0) {
                    let { id, email, login } = res.data.data
                    this.props.setUserData(id, email, login);
                    axios.get(`https://social-network.samuraijs.com/api/1.0/profile/` + id)
                        .then(res => {
                            this.props.setUserAvatarSmall(res.data.photos.small);


                        })
                }
            })
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

export default connect(mapStateToProps, { setUserData, setUserAvatarSmall })(HeaderContainer)