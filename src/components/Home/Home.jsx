
import React, { useState } from "react"; import { useHistory } from "react-router-dom";


const Home = ({allEntry}) => {
    const name = localStorage.getItem("name"); // Retrieve name from local storage
    const email = localStorage.getItem("email"); // Retrieve email from local storage

    return (
        <div>
            {
                allEntry.map((currElem,index)=>{
                    return(
                        <div className="ShowDataStyles" key={index} >
                            <p>{currElem.email}</p>
                            <p>{currElem.password}</p>
                            </div>
                    )
                })
            }
        </div>
    );
};

export default Home;

