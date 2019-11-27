import React, { Component } from 'react';
class Counter extends Component {
    constructor(props) {
        super(props)
        this.state={
            count:0
        }}
        rzn(){    
        this.setState({
            count:this.state.count+1
        })
        console.log(this.state.count)
    }
        reset(){
            this.setState({
                count:0
            })
            console.log(this.state.count)
        }
        
    
    render() {
        return (
        <div>
    <p>{this.state.count}</p>
    <button onClick={()=>this.rzn()}>Increment</button>
    <button onClick={()=>this.reset()}>Reset</button>
        </div> 
        );
    }
}

export default Counter;