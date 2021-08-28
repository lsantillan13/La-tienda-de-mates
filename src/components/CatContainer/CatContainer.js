import React from 'react';
import { ItemDetailContainer } from '../ItemDetailContainer/ItemDetail/ItemDetail';
import NavBar from '../Navbar/navBar';
import { useParams } from 'react-router';
import {database} from '../../Firebase/Firebase';
import Item from '../../components/Item/Item';
const CatContainer = () => {
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

const {CategoryId} = useParams()

return(
     <>
     <NavBar/>
     {myProds.map((x) => x.type = {CategoryId} && 
    <section className="item-container">
        <div className="product" key={x.id}>
            <Item nombre={x.name} info={x.description} img={x.img} precio={x.price}/>
        </div>
    </section>)}
                   

     </>      
)}
export default CatContainer;