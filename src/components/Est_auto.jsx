import React, { useState, useEffect } from 'react'

const Auto = ()=>{
    const [auto, setauto] = useState(false)

    //////////////////////////////////////
     const [contar, setContar] = useState(0)
    useEffect(()=>{
        console.log(contar);
    },[auto])

    //////////////////////////////77

    const encenderApagar= ()=>{
        setauto(!auto)
        setContar(contar + 1)
    }

    return(
        <>
            <button onClick={encenderApagar}>Encender/Apagar</button>
            <p>el auto esta {auto ? 'encendido' : 'apagado'}</p>
            <h4>clicks {contar}</h4>
        </>
    )
}

export default Auto;