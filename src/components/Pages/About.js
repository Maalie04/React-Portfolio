import React, { useEffect } from "react";
export default function About(props) {
  useEffect(() => {
    document.title = `${props.title}`;
  }); 
  return (
    <div>
      <div className="px-4 py-5 my-5 text-center">
      
        <h1 className="display-5 fw-bold">About</h1>
        <img className="picture" src={process.env.PUBLIC_URL+"/images/profilepic.jpg"} alt= "Jamaal Lawson"/>

        <div className="col-lg-6 mx-auto">
          <p>
            Hello, my name is Jamaal Lawson and I am a full-stack web developer. With background
            in management, I learned how to solve problems and be a natural leader. Currently looking to bring my knowledge,
            communication, and technical skills to an organization
            while focusing on continuous learning and engaging in my community
            to give back in the field of web development.
          </p>
        </div>
      </div>
    </div>
  );
}
