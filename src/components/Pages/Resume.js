import React from "react";

export default function Resume() {
    return (
        <div> 
            <div className="px-4 py-5 my-5 text-center">

        <h1 className="display-5 fw-bold"> Resume Page </h1>
        <div className="col-lg-6 mx-auto"> 
        <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">

        <a href={process.env.PUBLIC_URL+"/Jamaal_Lawson_RESUME.pdf"} download="Jamaal_Lawson_RESUME.pdf" className="btn btn-outline-secondary btn-lg px-4">
              Download PDF
            </a>
					</div>
				</div>
			</div>
        </div>
    );
}