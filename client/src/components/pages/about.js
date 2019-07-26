import React from "react";

function About() {
    return (
        <div className="container">
            <h1 className="page-heading">About Page</h1>
            <div className="row">
                <div className="col-lg-6 col-md-6 col-sm-12">
                    <div className="card shadow-none fade-in">
                        <div className="media">
                            <div className="media-body">
                                <h4 className="mt-0 mb-1">Gokul Viswanathah</h4>
                                <p>
                                    <span className="bold">Passions: </span>
                                    <span className="badge badge-dark">DataScience Enthusist</span>
                                    <span className="badge badge-dark">Open source</span>
                                    <span className="badge badge-dark">Programming</span>
                                    <span className="badge badge-dark">Soccer</span>
                                    <span className="badge badge-dark">Gaming</span>
                                </p>

                                <div className="mt-3">
                                    <h5><u>Education</u></h5>
                                    <div>
                                        <h6>Georgian College</h6>
                                        <span>Computer Programmer [2017-2019]</span>
                                    </div>
                                    <br/>
                                    <div>
                                        <h6>Anna University</h6>
                                        <span>Electronics and Communication Engineering [2012-2016]</span>
                                    </div>
                                </div>

                                <div className="mt-3">
                                    <h5><u>Skills:</u></h5>
                                    <p>
                                        <span className="badge badge-dark">JavaScript</span>
                                        <span className="badge badge-dark">Java</span>
                                        <span className="badge badge-dark">C#</span>
                                        <span className="badge badge-dark">Python</span>
                                        <span className="badge badge-dark">NodeJS</span>
                                        <span className="badge badge-dark">ReactJS</span>
                                        <span className="badge badge-dark">Grails</span>
                                        <span className="badge badge-dark">Asp.net</span>
                                        <span className="badge badge-dark">Spring boot</span>
                                        <span className="badge badge-dark">GIT</span>
                                        <span className="badge badge-dark">Heroku</span>
                                        <span className="badge badge-dark">Linux</span>
                                </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-lg-6 col-md-6 col-sm-12">
                    <div className="card shadow-none fade-in-2">
                        <div className="media">
                            <div className="media-body">
                                <h4 className="mt-0 mb-1">Matthew D'Agostino</h4>
                                <p>
                                    <span className="bold">Passions: </span>
                                    <span className="badge badge-dark">Programming</span>
                                    <span className="badge badge-dark">Sports</span>
                                    <span className="badge badge-dark">Gaming</span>
                                    <span className="badge badge-dark">Product Design</span>
                                    <span className="badge badge-dark">Travelling</span>
                                    <span className="badge badge-dark">Music</span>
                                </p>

                                {/* Education section */}
                                <section>
                                    <div class="mt-3">
                                        <h5><u>Education</u></h5>
                                        <div className="">
                                            <h6>Georgian College</h6>
                                            <span>Computer Programmer [2017-2019]</span>
                                        </div>
                                        <br/>
                                        <div>
                                            <h6>Lakehead University</h6>
                                            <span>Mechanical Engineering [2015-2017]</span>
                                        </div>
                                        <br/>
                                        <div>
                                            <h6>Georgian College</h6>
                                            <span>Mechanical Engineering: Automotive Design [2011-2014]</span>
                                        </div>
                                    </div>
                                </section>
                                {/* Skills section */}
                                <section>
                                    <div className="mt-3">
                                        <h5><u>Skills:</u></h5>
                                        <p>

                                            <span className="badge badge-dark">Java</span>
                                            <span className="badge badge-dark">JavaScript</span>
                                            <span className="badge badge-dark">NodeJS</span>
                                            <span className="badge badge-dark">ReactJS</span>
                                            <span className="badge badge-dark">Python</span>
                                            <span className="badge badge-dark">Asp.net</span>
                                            <span className="badge badge-dark">GIT</span>
                                            <span className="badge badge-dark">Heroku</span>
                                            <span className="badge badge-dark">Linux</span>
                                            <span className="badge badge-dark">AutoDesk</span>
                                            <span className="badge badge-dark">Photoshop</span>
                                        </p>
                                    </div>
                                </section>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default About;