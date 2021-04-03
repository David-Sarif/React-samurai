import React from 'react'
import Profile from './Profile'
import { connect } from 'react-redux'
import { setUserProfile, getUserProfileThunk } from '../../redux/profileReducer'
import { withRouter } from 'react-router-dom'
import { withAuthRedirect } from '../../hoc/withAuthRedirect'
import { compose } from 'redux'

class ProfileContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.match.params.userId
        if (!userId) {
            userId = 2;
        }
        this.props.getUserProfileThunk(userId);
        
    }

    render() {

        return <Profile {...this.props} />
    }
}

const mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
})

export default compose(
    connect(mapStateToProps, { getUserProfileThunk }),
    withRouter,
    withAuthRedirect
)(ProfileContainer)


// let AuthRedirectComponent = withAuthRedirect(ProfileContainer)
// let withUrlDataContainerCompinent = withRouter(AuthRedirectComponent)
// export default connect(mapStateToProps, { getUserProfileThunk })(withUrlDataContainerCompinent)