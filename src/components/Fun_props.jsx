import React from 'react'

const Fun_props = (props)=>{
    const {saludar, userInfo} = props
    const {nombre, edad, color} = userInfo

    return(
        <button onClick={()=> saludar(nombre)}>Saludar</button>
    )
}

export default Fun_props;