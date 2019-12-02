import React, { Component } from 'react';
class Propstyle extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            come:false
         }
    }
    render() { 
    
        const hello={
            color:'yellow'
        }
        const hii={
            color:'red'
        }
        const classstyle=this.state.come ? hello:hii
        return ( 
            <div>
                <h1 style={classstyle}>Welcome</h1>
            </div>
         );
    }
}
 
export default Propstyle;