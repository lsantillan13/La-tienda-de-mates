import './App.css';
import Navbar from './components/Navbar/navBar';
import Section from './components/Section/section';
import Slider from './components/Slider/Slider';
import ListedItems from './components/ListedItems/ListedItems';
import { render } from '@testing-library/react';

let prueba = prompt('Ingrese su nombre')

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
    
     <ListedItems greetings={'Hola ' + prueba }/>


    </main>);
    
  }


export default App;
