import React, {useState} from 'react';

export function MyCount(){
    const [state, useState] = useState(1)

    const handleButton = () => {  setState( state +1) }
    const reset = () => {setState(1)}

    return(
        <div>
            <button onClick={handleButton}>HOLA</button>
            <h2>clicks : {state}</h2>
            <button onClick={reset}>reset</button>


        </div>


    )
}


export default MyCount  