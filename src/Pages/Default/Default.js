import React from 'react';
import NavBar from '../../components/Navbar/navBar';
import ItemContainer from '../../components/ItemContainer/ItemContainer';
function Default (){
    return(
        <main className="App">
             <NavBar/>
            <section className="my-hero-container container-fluid">
            <div className="my-hero container-fluid"/>
            <ItemContainer/>
            </section>
        </main>)}
export default Default;

