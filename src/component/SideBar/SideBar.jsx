import React, { useState } from 'react'
import addImage from "../../assets/add.png"
import "./SideBar.css"

const SideBar = (props) => {
    const [isActive, setActive] = useState(false);

    const colorList = [ '#C4DFAA', '#F5F0BB', '#D6EFED', '#FBA1A1', '#DCD6F7', '#FFC7C7' ];


  return (
    <div className='sidebar'>
        <img 
            src={addImage} 
            onClick={()=>setActive(!isActive)}
            className='sidebar__add-img'
        />

        <ul className={`sidebar__colorlist ${isActive? "sidebar__colorlist_active" : ""}`}>
            {isActive && colorList.map((color,inx)=>
            (
                <li
                    className='sidebar__colorlist_color'
                    key={inx}
                    style={{backgroundColor: color}}
                    onClick={()=> props.addTheme(color)}
                ></li>
            ))}

        </ul>
        
    </div>
  )
}

export default SideBar
