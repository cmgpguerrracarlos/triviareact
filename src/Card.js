import React, {Component} from 'react'
import Options from './Options'

class Card extends Component{
    constructor(props){
        super(props);
        this.state = {'id':1,'quest':'hola carlos',opcion:{'A':'uno','B':'dos','C':'tres','D':'cuatro'},'sol':'A',pto:0};

        
    }
    
    handler = (cant)=>{
        this.setState({
            pto:this.state.pto + cant
        })
    }

    render(){
        return(
                    <div className="container">
                        <div className="header">
                            <label>{this.state.quest}</label>
                        </div>
                        <div className="main">
                            <Options h={this.handler} sol={this.state.sol} op={this.state.opcion}/>
                            <hr/>
                            <h2>Puntuacion actual: {this.state.pto}</h2>
                        </div>
                    </div>
        )
    }
}

export default Card