import React, { Component } from 'react';
import Child from 'child.js';
class Parent extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            message:'parent'
       }
    }
    rzn()
     {
       alert('{this.state.message}')
     }

    render() { 
        return (
        <div>
         <Child/>
        </div> );
    }
}
 
export default Parent;