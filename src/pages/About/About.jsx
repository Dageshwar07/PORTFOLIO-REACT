import React from 'react'
import { useTypewriter } from "react-simple-typewriter";
import './about.css'
import Bounce from "react-reveal/Bounce";

import Rotate from "react-reveal/Rotate";
const About = () => {

    const [text] = useTypewriter({
        words: ["Hello, i m Dageshwar Das.A MERN stack developer skilled in creating dynamic web applications. Proficient in HTML, CSS, and JavaScript, I build intuitive front-end interfaces using React.js. My expertise in Node.js and Express.js enables me to develop robust server-side APIs, while MongoDB handles data efficiently. I'm passionate about delivering seamless user experiences and thrive on solving complex challenges. Eager to contribute my skills and drive innovation in any MERN development team.."],
        loop: true,
        typeSpeed: 30,
        deleteSpeed: 10,
        delaySpeed: 2000,

    });

    return (
        <>
            <Bounce top cascade>
                <div className="about" id="about">
                    <div className="row ">

                        <div className="col-md-6 col-xl-6 col-lg-6 col-xs-12 about-img">
                            <img
                                src='profile.png'
                                alt="profile_pic"
                            />
                        </div>
                        <div className="col-md-6 col-xl-6 col-lg-6 col-xs-12 about-content">
                            <h1 className='gradient-text'>About me</h1>
                            <hr />

                            <Rotate>

                                <p>
                                    {text}
                                </p>
                            </Rotate>

                        </div>
                    </div>
                </div>
            </Bounce>

        </>
    )
}

export default About