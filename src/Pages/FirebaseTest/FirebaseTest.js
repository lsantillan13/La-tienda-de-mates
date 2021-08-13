import React from 'react';
import {database} from "../../Firebase/Firebase";
import FirebaseChild from '../FirebaseChild/FirebaseChild';


const FirebaseTest = () => {
    const [productoVisible, setProductoVisible] = React.useState([]);
     const type = "Combo";
     const type2 = "Combo"
    const mostrarProductos = () => {
    // const productos = database.collection("mates")
     const productos = database.collection("mates").where("type","==", type,);
        productos.get().then((query) =>
            setProductoVisible(
                query.docs.map((doc) => {
                        return {...doc.data(), id: doc.id};
                })
            )
        );
    };

    return(
        <div>
            <h1>TITULO</h1>
            <button onClick={mostrarProductos}>Llamada a Firebase</button>
            
        {productoVisible.length ? (
            productoVisible.map((product) => <FirebaseChild product={product} > </FirebaseChild>)
        ) : (<h3>Cargando</h3>)}
    
        </div>
    )
}


export default FirebaseTest;