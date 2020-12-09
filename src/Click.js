import React, {useState} from 'react'

const Click = ()=>{
    const [cant, setCant] = useState(0);
    return(
        <>
            <label>Cantidad de clicks {cant}</label><br/>
      <button onClick={()=>{setCant(cant+1)}} >click me</button>  

      <div className="form">
        <form>
          <input type="text" name="name" placeholder="name"/>
          <input type="text" name="title" placeholder="title"/>
          <input type="text" name="description" placeholder="description"/>
          <input type="text" name="url" placeholder="url foto"/>
          <button type="submit" onSubmit={()=>{}} >send</button>
        </form>
      </div>
        </>
    );
}

export default Click