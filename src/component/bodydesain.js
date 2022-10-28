import React from "react";
import ThreeScene from "./threejs-scene";
import { SideMenu } from "./sidemenu";
import {Summary} from './summary';

export const Bodydesain = (props) => {
    return(
        <div>
            
            <SideMenu/>
            {/* <Summary/> */}
            <br></br>
            <ThreeScene/>
        </div>
        
    )
}
