import React, {useState, useLayoutEffect, useEffect} from 'react';
import '../styles/landing.css';
import {Loading} from './Loading';

export function Introduction(props){
    return(
    <div id="d-intro">
    About
    </div>
    );
}

export function Landing(props){

    const[view, setView]=useState('loading');
    const[display, setDisplay]=useState(<Loading/>);

//   useEffect(() => {
//    setTimeout(() => {
//      setDisplay(<Introduction/>);
//  }, 3000);
// });


    return(
    <div id="d-landing">
     {display}
    </div>
    );
}

