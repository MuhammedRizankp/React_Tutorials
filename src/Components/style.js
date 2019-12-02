import React, { Component } from 'react';
class Style extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            color:'black'
         }
    }
    rzn(){
        this.setState({
            color:'red'
        })

    }

    render() { 
        const divstyle={
            color:this.state.color
        }
        return ( 
            <div>
                <h1 style={divstyle}>Welcome</h1>
                <button onClick={()=>this.rzn()}>Click me</button>
            </div>
         );
    }
}
 
export default Style;