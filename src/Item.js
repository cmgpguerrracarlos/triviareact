import React, {Component} from 'react'

class Item extends Component{
    constructor(props){
        super(props);
        this.state = {color:"yellow"}
        //const {name, sol} = this.props;
        //console.log(props);
        
    }
    
    handlerClick = ()=>{
        let cant;
        console.log(this.props);
            if(this.props.sol === this.props.name){
                this.setState( {color:"green"});
                cant=4;
            }else{
                this.setState({color:"red"});
                cant=-2;
            }
        return cant;
    }

    render(){
        return(
            <div className="item" key={this.props.key} style={{backgroundColor:this.state.color}} >
                <button  onClick={()=>{this.props.handlerF(this.handlerClick())}}><label>{this.props.respuesta}</label></button>
            </div>
        )
    }
}


export default Item;