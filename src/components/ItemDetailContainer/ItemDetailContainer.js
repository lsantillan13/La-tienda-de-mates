import React from 'react';
import { useParams } from 'react-router';
import {ItemDetailContainer} from './ItemDetail/ItemDetail';
import NavBar from '../Navbar/navBar';
import Footer from '../Footer/Footer';
import {database} from '../../Firebase/Firebase';

function ItemDetailMain( props ){
     /*LLAMADO AL FIRESTORE*/
     const [productoVisible, setProductoVisible] = React.useState([]);
     React.useEffect(() =>{
     const productos = database.collection("mates")
     productos.get().then((query) =>
             setProductoVisible(
                 query.docs.map((doc) => {
                         return {...doc.data(), id: doc.id};
                 })
             )
         );
         });
    const {id} = useParams();
    return(
    <main>
        <NavBar/>
        {productoVisible.map((item) => item.id === id && <ItemDetailContainer item={item}/>)}
        <Footer/>
    </main>      
    )}

export default ItemDetailMain;