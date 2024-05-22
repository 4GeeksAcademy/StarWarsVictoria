import React, { useState , useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "../../img/star-wars-logo.png"
import "../../styles/characters.css";

export const Characters = () =>{

    const host = "https://www.swapi.tech/api/"
    const uid = ('1')
    const [name , setName] = useState('');

    async function charactersName () {

        const uri = `${host}/people/${uid}`
        const options = {method: "GET"}

        const response = await fetch (uri, options);

        if (!response.ok) {
            console.log("Error", response.status, response.statusText);
        };

        const data = await response.json();
        setName(data.name);
    };
    useEffect ( () => {
        charactersName();
    } , []);

    return (
    <>     
        <div className="container-flex card-deck mt-4">
          <div className="row lg-mx-4 md-mx-2">  
            <div className="card col-4 " >
                <img src={logo} alt="" />
                <div className="card-body">                                   
                <p>{name}</p>
                <a href="#" className="text-warning">Details</a>    
                </div>   
            </div>
         </div>
        </div>
   
    </>

    )
}