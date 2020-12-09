import React from 'react'
import Item from './Item'


const Options = (props)=>{

    return(
       <div>
            <Item name="A" handlerF={props.h} sol={props.sol} respuesta={props.op.A} key={1}/>
            <Item name="B" handlerF={props.h} sol={props.sol} respuesta={props.op.B} key={2}/>
            <Item name="C" handlerF={props.h} sol={props.sol} respuesta={props.op.C} key={3}/>
            <Item name="D" handlerF={props.h} sol={props.sol} respuesta={props.op.D} key={4} />
            
        </div>
    )
} 

export default Options