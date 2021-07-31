import React from 'react';
import NavBar from '../../components/Navbar/navBar';
import { useParams } from 'react-router';
import mates from './Mates.json'
const prodMates = 
"Mates"[
    {"Nombre": "Mate1", "id": "0"},
    {"nombre": "mate2", "id": "1"},
    {"nombre": "mate3", "id": "2"},
    {"nombre": "mate4", "id": "3"},
    {"nombre": "mate5", "id": "4"},
    {"nombre": "mate6", "id": "5"}]
    
    /*CONTAINER*/
function MatesContainer( props ){
const {CategoryId} = useParams()
return(
    <>
    {/* <NavBar/> */}
    {prodMates}
    {/* {prodMates["Mates"].map((x) => x.CategoryId === CategoryId && <Mates x={x}></Mates>)} */}
    {mates.map((x, index) => x.CategoryId === CategoryId && <Yerbas x={x}/>)}
    </>)}
export {MatesContainer};
/*CHILDREN*/
function Mates ( props ) {
const {CategoryId} = useParams()
const {x} = props;

return(
    <main>
    <div style={{position: 'relative', top: '125px'}}>

            <div style={{position: 'relative', top: '50px', display: 'flex'}}>
                <div style={{position: 'relative', width: '100%', height: '12.5vh'}}>
                    <div key={x.id} style={{position: 'relative', width: '210px', height: '100px', outline: '2px solid black',textAlign: 'center'}}>{x.nombre}</div>
                </div>
            </div>
    </div>
</main>)}
export {Mates};
/*CHILDREN*/
function Yerbas ( props ){
const {CategoryId} = useParams()
const {x} = props;
return(
    <main>
      {/* <div style={{position: 'relative', top: '125px'}}>
        <center><h1 >{prodProd.nombre}</h1></center>
            <div style={{position: 'relative', top: '50px', display: 'flex'}}>
                {prodProd.Yerbas.map((x) => x.id != CategoryId &&
                    <div style={{position: 'relative', width: '100%', height: '12.5vh'}}>
                        <div key={x.id} style={{position: 'relative', width: '210px', height: '100px', outline: '2px solid black',textAlign: 'center'}}>{x.nombre}</div>
                    </div>)}
            </div>
    </div> */}
    </main>
)
}




