import React, {useState, useLayoutEffect} from 'react';
import '../styles/menu.css';
import menu_icon from '../icons/icons8-menu-100.png';

export function Menu(props){

    const[viewMenu, setMenu]=useState("hidden");

     const animateMenu = () => {
           switch(viewMenu) {
           case "visible":
           setMenu("hidden");
           break;
           case "hidden":
           setMenu("visible");
           break;
           default:
           setMenu("visible");
           }
        }

    useLayoutEffect(() => {
            switch(viewMenu){
            case "visible":
            document.getElementById("items").style.visibility = "visible";
            break;
            case "hidden":
            document.getElementById("items").style.visibility = "hidden";
            break;
            default:
            document.getElementById("items").style.visibility = "visible";
            break;
            }
        }, [viewMenu]);

    const handleItemOneClick = () => {
        animateMenu();
    }

    const handleItemTwoClick = () => {
        animateMenu();
    }

    const handleItemThreeClick = () => {
        animateMenu();
    }
    return(
    <div id="menu">
    <div id="icon-holder">
        <div id="d-menu-icon" onClick={animateMenu}>
             <img id="img-menu-icon"src={menu_icon}/>
        </div>
    </div>
     <div id="items" onClick={handleItemOneClick}>
      <div id="menu-item">
       Education
      </div>
      <div id="menu-item" onClick={handleItemTwoClick}>
       Menu Item 2
      </div>
      <div id="menu-item-last" onClick={handleItemThreeClick}>
       Menu Item 3
      </div>
     </div>
    </div>
    );
}