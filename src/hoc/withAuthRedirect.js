import React from 'react'
import { connect } from 'react-redux'
import { Redirect } from "react-router"

let mapStateToPropsForRedirect = (state) => ({
    isAuth: state.auth.isAuth,
})

export const withAuthRedirect = (Component) => {

    class RedirectComponent extends React.Component{
        render(){
            if (!this.props.isAuth){
                return <Redirect to={'/login'}/>
            }
            return <Component {...this.props}/>
        }
    }
    let ConnectedWithAuthRedirect = connect(mapStateToPropsForRedirect)(RedirectComponent)

    return ConnectedWithAuthRedirect
}