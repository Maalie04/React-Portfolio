import React, { useEffect } from "react";

export default function About(props) {
    useEffect(() => {
        document.title = `${props.title}`;
    });
    return (
        <div> 
          <div className="px-4 py-5 my-5 text-center">
				<img
					className="profile-pic d-block mx-auto mb-4"
					src=""
					alt=""
				/>
				<h1 className="display-5 fw-bold">About</h1>
				<div className="col-lg-6 mx-auto">
            <p>




            </p>
        </div>
        </div>
        </div>
    );
}