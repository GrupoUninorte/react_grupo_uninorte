import React, { useState } from 'react'


const Contar = ()=>{
    const [count, setCount] = useState(0)// hacemos el hook el cual usamos para actualizar

    return(
        <>
            <button onClick={()=> setCount(count + 1)}>Click</button>
            <p>numero de clicks {count}</p>
        </>
    )
}

export default Contar;