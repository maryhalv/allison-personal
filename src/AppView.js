import React, {useState, useLayoutEffect} from 'react';
import {Menu} from './components/Menu';
import {Landing} from './components/Landing';
import './styles/appView.css';

export function AppView(props){

    const[view, setView]=useState('landing');
    const[display, setDisplay]=useState(<Landing/>);

    return(
     <div id="main-container">
      <Menu/>
      <Landing/>
     </div>
    );

}