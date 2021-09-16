import React from 'react';
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
}, []);

const {category} = useParams();

const myFilter0 = myProds.filter((x) => x.type === "Mate");
const myFilter1 = myProds.filter((x) => x.type === "Combo");
const myFilter2 = myProds.filter((x) => x.type === "Giftbox");
console.log(myFilter0)

return(
     <>
     <NavBar/>

     {/*MATES*/}
     {category === "Mate" ?   <>
     <div className="title title-container">  <h2 className="title-main-title">La Tienda de Mates</h2> <h2 className="subtitle">Productos destacados</h2></div>
     <div className="top-products container-fluid"> {myFilter0.map((x) => <div className="product" key={x.id}><Item nombre={x.name} precio={x.price} img={x.img} info={x.description} id={x.id}> </Item>
    </div>)}
    </div>
    </>
    : <div className="title title-container 404">404 Not found</div>}

     {/*COMBOS*/}
     {category === "Combo" ?   <>
     <div className="title title-container"><h2 className="title-main-title">La Tienda de Mates</h2><h2 className="subtitle">Productos destacados</h2></div>
     <div className="top-products container-fluid">
        {myFilter1.map((x) => <div className="product" key={x.id}><Item nombre={x.name} precio={x.price} img={x.img} info={x.description} id={x.id}> </Item>
    </div>)}
    </div>
    </>
    : <div className="title title-container 404">404 Not found</div>}

    {/*Giftbox*/}
    {category === "Giftbox" ?   <>
     <div className="title title-container"><h2 className="title-main-title">La Tienda de Mates</h2><h2 className="subtitle">Productos destacados</h2></div>
     <div className="top-products container-fluid">
        {myFilter2.map((x) => <div className="product" key={x.id}><Item nombre={x.name} precio={x.price} img={x.img} info={x.description} id={x.id}> </Item>
    </div>)}
    </div>
    </>
    : <div className="title title-container 404">404 Not found</div>}
     </>

)}
export default CatContainer;
