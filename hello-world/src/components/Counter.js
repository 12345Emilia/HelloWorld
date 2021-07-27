import React, { Component } from 'react'

class Counter extends Component {

    constructor(props) {
        super(props)

        this.state = {
            count = 0
        }
    }
    // Will increase with 1 at the time
    increment () {
    //     this.setState({
    //         count = this.state.count + 1
    //     }, () => {console.log('Callback value', this.state.count)
    // }
    // )

    // Will increase with 5 at the time
    this.setState((prevState, props) =>({
        count:prevState.count + 1
    }))
        console.log(this.state.count)
    }

    incrementFive () {
        this.increment ()
        this.increment ()
        this.increment ()
        this.increment ()
        this.increment ()

    }
    render() {
        return (
            <div> 
            <div>Count - {this.state.count}</div>
            <button onClick={() => this.incrementFive()}>Increment</button>
            </div>
        )
    }
}

export default Counter
