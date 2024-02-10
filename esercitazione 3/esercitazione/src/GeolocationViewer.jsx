

import { useState } from "react";

export function GeolocationViewer(){
    const [latitude,changedLatitude]= useState(null)
    const [longitude,changedLongitude]= useState(null)

    function ShowCoords(){
           changedLatitude((c)=>23)
    }
  
    function ShowCoords2(){
        changedLongitude((c)=>56)
 }

    return(
        <div>
            <h1>Your Latitude is {latitude}</h1>
            <h2>your Longitude is {longitude}</h2>
            <button onClick={ShowCoords}>Send</button>
            <button onClick={ShowCoords2}>Send</button>
        </div>
    )

}