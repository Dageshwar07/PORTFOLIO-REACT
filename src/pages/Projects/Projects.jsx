import React from "react";
import "./Projects.css";
import Wobble from "react-reveal/Wobble";
const Projects = () => {
    return (
        <>
            <div className="continer project" id="projects">
                <h1 className="gradient-text col-12 mt-3 mb-1 text-center">
                    Projects
                </h1>
                <hr />
                <p className="pb-3 text-center">
                    Led the creation of a dynamic e-commerce platform using HTML, CSS, and JavaScript, optimizing for responsiveness and smooth user experience. Integrated secure payment gateway and curated extensive product catalog. Employed RESTful APIs to enhance functionality and collaborated closely with cross-functional teams to deliver within tight deadlines. This initiative led to a notable increase in online sales, heightened user engagement, and positive customer feedback, underscoring the project's significant contribution to the company's digital growth strategy.
                </p>
                {/* card design */}
                <div className="row" id="ads">
                    <Wobble>
                        <div className="col-md-4">
                            <div className="card rounded">
                                <div className="card-image">
                                    <span className="card-notify-badge">Full stack</span>
                                    <img
                                        src="https://unctad.org/sites/default/files/2021-03/2021-03-15_eCommerceCOVID19report-1-1220x675px.jpg"
                                        alt="project1"
                                    />
                                </div>
                                <div className="card-image-overly m-auto mt-3">
                                    <span className="card-detail-badge">Node</span>
                                    <span className="card-detail-badge">Express</span>
                                    <span className="card-detail-badge">react</span>
                                    <span className="card-detail-badge">Mongodb</span>
                                </div>
                                <div className="card-body text-center">
                                    <div className="ad-title m-auto">
                                        <h5 className="text-uppercase">
                                            E-commerce Website
                                        </h5>
                                    </div>
                                    <a
                                        className="ad-btn"
                                        href="https://github.com/techinfo-youtube/ecommerce-app-2023"
                                    >
                                        View
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card rounded">
                                <div className="card-image">
                                    <span className="card-notify-badge">Full stack</span>
                                    <img
                                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR356D-1YtSagN4-_ZdjZ5H9o6PKUO4h12dvw&usqp=CAU"
                                        alt="project2"
                                    />
                                </div>
                                <div className="card-image-overly m-auto mt-3">
                                    <span className="card-detail-badge">Node</span>
                                    <span className="card-detail-badge">Express</span>
                                    <span className="card-detail-badge">react</span>
                                    <span className="card-detail-badge">Node</span>
                                    <span className="card-detail-badge">Redux</span>
                                </div>
                                <div className="card-body text-center">
                                    <div className="ad-title m-auto">
                                        <h5 className="text-uppercase">BloodBank web-App</h5>
                                    </div>
                                    <a
                                        className="ad-btn"
                                        href="https://github.com/techinfo-youtube/ecommerce-app-2023"
                                    >
                                        View
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card rounded">
                                <div className="card-image">
                                    <span className="card-notify-badge">Backend</span>
                                    <img
                                        src="https://www.nextwebi.com/assets/img/img-source/mobile-top-banner-28.png"
                                        alt="project1"
                                    />
                                </div>
                                <div className="card-image-overly m-auto mt-3">
                                    <span className="card-detail-badge">Node</span>
                                    <span className="card-detail-badge">Express</span>

                                    <span className="card-detail-badge">NoSQL</span>
                                </div>
                                <div className="card-body text-center">
                                    <div className="ad-title m-auto">
                                        <h5 className="text-uppercase">Job Portal</h5>
                                    </div>
                                    <a className="ad-btn" href="view">
                                        View
                                    </a>
                                </div>
                            </div>
                        </div>
                    </Wobble>
                </div>
            </div>
        </>
    );
};

export default Projects;
