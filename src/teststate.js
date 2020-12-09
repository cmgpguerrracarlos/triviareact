import React, { Component } from 'react'

export class teststate extends Component {
    constructor(props){
        super();
        this.state ={
            name:"Carlos",
            count:0
        }
        this.handlerClick3  = this.handlerClick3.bind(this);
    }

 handlerClick(){
        this.setState((prevState)=>({
            count:prevState.count + 1
        }));
    }

    handlerClick2(){
        this.setState((prevState)=>({
            count:prevState.count + 2
        }));
    }

    handlerClick3(){
        this.setState((prevState)=>({
            count:prevState.count + 3
        }));
    }

    handlerClick4 = ()=>{
        this.setState({
                count:this.state.count + 4
        });
    }
    
    render() {
        return (
            <div>
                <h1>{this.state.count}</h1>
                <button onClick={this.handlerClick.bind(this)}>1</button>
                <button onClick={()=>(this.handlerClick2())}>2</button>
                <button onClick={this.handlerClick3}>3</button>
                <button onClick={this.handlerClick4}>4</button>
            </div>
        )
    }
}

export default teststate
