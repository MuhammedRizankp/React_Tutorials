import React, { Component } from 'react';
class Child extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
        <div>
            <button onClick={()=>props.rzn()}>Click me</button>
        </div> );
    }
}
 
export default Child;