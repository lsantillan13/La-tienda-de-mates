import React from 'react';

const FirebaseChild = ({product}) => {
    return(
        <div key={product.id}>
        <img style={{width: '200px'}} src={product.img} alt={product.name}/>
        <h3>{product.name}</h3>
        <h2>{product.id}</h2>
        </div>
    )
}

export default FirebaseChild;