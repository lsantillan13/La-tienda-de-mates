import React from 'react';
import './App.css';
import Navbar from './components/Navbar/navBar';
import Section from './components/Section/section';
import Slider from './components/Slider/Slider';
import ListedItems from './components/ListedItems/ListedItems';
import Cart  from './components/Cart/Cart';
// import {MyCount} from './components/Contador/Contador';





function App( props ) {

  return (
  /*INITIAL MAIN TAG FOR ENTIRE APP*/
    <main className="App container">
      {/*HEADER PLUS NAV SECTIONS*/}
      <Navbar/>
      {/*Slider*/}
      <Slider/>
     {/*MAIN SECTION - 1ST SECTION*/}
     <Section>
       
     </Section>
    
     <ListedItems/>
     <Cart>
     </Cart>
     <div/>


    </main>);
    
  }


export default App;
