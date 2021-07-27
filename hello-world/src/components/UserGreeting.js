import React, { Component } from 'react'

class UserGreeting extends Component {

    constructor(props) {
        super(props)

        this.state = {
            isLoggedIn: false
        }
    }
    render() {

        // Fourth Approch - Short Circuit Operator - (Built on the 3rd Approch)
        // return this.state.isLoggedIn && <div>Welcome Emilia</div>
        
        
        // Third Approch - Ternary Conditional Operator - (Most common)
        return this.state.isLoggedIn ? (
            <div>Welcome Emilia</div> 
        ) : ( 
            <div>Welcome Guest</div>
        )
        
        //Second Approch - Element Variables
        // let Message
        // if (this.state.isLoggedIn) {
        //     message = <div>Welcome Emilia</div>
        // } else {
        //     message = <div>Welcome Guest</div>
        // }
        // return <div>{message}</div>
        
        //First Approch - if/else statement
        // if(this.state.isLoggedIn) {
        //     return (<div>Welcome Emilia</div>)
        // } else {
        //     return (<div>Welcome Guest</div>)
        // }
        // return (
        //     <div>
        //         <div>Welcome Emilia</div>
        //         <div>Welcome Guest</div>
        //     </div>
        // )
    }
}

export default UserGreeting
