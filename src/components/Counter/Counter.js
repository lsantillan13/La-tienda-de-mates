import React from 'react';


const Counter = ({stock, count, setCount}) => {
    const cannotAnymore = 1;
    return (
    <div className="Counter-buttons">
        <button onClick={() => setCount(count < stock ? count + 1 : count + 0)}  className="add"><p>+</p></button>
        <p>{count}</p>
        <button onClick={() => setCount(count >= 2 ? count - 1 : cannotAnymore)}  className="decrease"><p>-</p></button>
    </div>
    )
}


export default Counter