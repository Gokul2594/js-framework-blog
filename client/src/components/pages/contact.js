import React from "react";

function Contact() {
    return (
        <div className="container">
            <h1 className="page-heading">Contact Page</h1>
            <div className="row">
                <div className="card contact-card fade-in">
                    <div className="card-body text-center">
                        <h4>Gokul Viswanathan</h4>
                        <h6 className="card-title">Software Developer</h6>
                        <span className="bold">Email:</span>
                        <span className="bold">gokul@hogwartz.com</span><br />
                        <span className="bold">Owls: </span>
                        <span className="bold">Hedwig </span>
                    </div>
                </div>

                <div className="card contact-card">
                    <div className="card-body text-center fade-in-2">
                        <h4>Matthew D Augustino</h4>
                        <h6 className="card-title">Software Developer</h6>
                        <span className="bold">Email:</span>
                        <span className="bold">matthew@hogwartz.com</span><br />
                        <span className="bold">Owls: </span>
                        <span className="bold">Pigwidgeon </span>
                    </div>
                </div>
            </div>
        </div>
        );
}

export default Contact;