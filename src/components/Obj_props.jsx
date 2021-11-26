import React from 'react'

const Objetos = (x)=>{
    return(
        <p>
            hola {x.userInfo.nombre} <br />
             tu edad es {x.userInfo.edad} <br />
             tu color favorito es {x.userInfo.color}
        </p>
    )
}

export default Objetos;