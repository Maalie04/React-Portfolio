import React, { useEffect } from "react";
import '../css/Home.css';


export default function Home(props) {
    useEffect(() => {
        document.title = `${props.title}`;
    });
    return (
        <div> 
        <h1 className="display-5 fw-bold home-title"> Jamaal Lawson</h1>
        </div>
    );
}