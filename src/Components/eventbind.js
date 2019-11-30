import React, { Component } from 'react';
class Eventbind extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            message:'hii'
         }
         this.rzn=this.rzn.bind(this)
    }
    rzn(){
        this.setState({
            message:'hello'
        },console.log(this))
    }
    render() { 
        return (
            <div>
    <h1>{this.state.message}</h1>
    <button onClick={()=>this.rzn()}>Click me</button>
            </div>
         );
    }
}
 
export default Eventbind;