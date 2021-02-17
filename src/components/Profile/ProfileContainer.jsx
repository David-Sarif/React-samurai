import React from 'react'
import Profile from './Profile'
import * as axios from 'axios'
import {connect} from 'react-redux'
import {setUserProfile} from '../../redux/profileReducer'
import { withRouter } from 'react-router-dom'

class ProfileContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.match.params.userId
        if (!userId) {
            userId = 2;
        }
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/`+userId)
        .then(res => {
          this.props.setUserProfile(res.data);
          
  
        });

        
    }

    render() {
        return <Profile {...this.props}/>
    }
}

const mapStateToProps = (state) => ({
    profile: state.profilePage.profile
})

let withUrlDataContainerCompinent = withRouter(ProfileContainer)
export default connect(mapStateToProps, {setUserProfile})(withUrlDataContainerCompinent)