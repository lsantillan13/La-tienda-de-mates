import React from 'react';
import { ItemDetailContainer } from '../ItemDetailContainer/ItemDetail/ItemDetail';
import NavBar from '../Navbar/navBar';
import { useParams } from 'react-router';
import {database} from '../../Firebase/Firebase';
const CatContainer = () => {
let {CategoryId} = useParams()
const [myProds, setMyProds] = React.useState([]);
React.useEffect(() => {
const PRODUCTOS = database.collection('mates');
     PRODUCTOS
     .get()
     .then((query) => 
     setMyProds(
          query.docs.map((doc) => {
               return {...doc.data(), id: doc.id};
          })
     ))
})
return(
     <>
     <NavBar/>
                   

     </>      
)}
export default CatContainer;