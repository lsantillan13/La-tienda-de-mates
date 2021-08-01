import React from 'react';
import NavBar from '../../components/Navbar/navBar';
import Combos from '../Home/Combos/Combos';
import GiftBox from '../Home/GiftBox/GiftBox';
import TopProducts from '../Home/TopProducts/TopProducts';

function Default (){
    return(
        <main className="App">
            <section className="my-hero-container container-fluid">
            <div className="my-hero container-fluid"/>
            </section>
            <NavBar/><TopProducts/><Combos/><GiftBox/>
        </main>)}
export default Default;

