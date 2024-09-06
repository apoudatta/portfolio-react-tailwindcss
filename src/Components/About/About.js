import React from 'react';
import './About.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import profile_image from '../../assets/profile_img.jpg'

const About = () => {
    return (
        <div className='about'>
            <div className='about-title'>
                <h1>About me</h1>
                <img src={theme_pattern} alt="" />
            </div>
            <div className='about-sections'>
                <div className='about-left'>
                    <img src={profile_image} alt="" width="400" />
                </div>
                <div className="about-right">
                    <div className='about-para'>
                        <p>I am a passionate and skilled web developer from Bangladesh with a strong foundation in HTML, CSS, Tailwind CSS, and Bootstrap for creating responsive and visually appealing designs. I have extensive experience in backend development using PHP, Laravel, and working with both SQL and MongoDB databases. My proficiency with Git ensures streamlined version control and collaborative workflows.</p>
                        <p>I'm eager to take on new challenges and look forward to providing exceptional service in my future freelancing journey.</p>
                    </div>
                    <div className='about-skills'>
                        <div className='about-skill'><p>HTML & CSS</p> <hr style={{ width: "50%" }} /></div>
                        <div className='about-skill'><p>React JS</p> <hr style={{ width: "50%" }} /></div>
                        <div className='about-skill'><p>JavaScript</p> <hr style={{ width: "50%" }} /></div>
                        <div className='about-skill'><p>Laraevel</p> <hr style={{width:"50%"}} /></div>
                    </div>
                </div>
            </div>
            <div className='about-achievements'>
                <div className='about-achievement'>
                    <h1>10+</h1>
                    <p>YEARS OF EXPERIENCE</p>
                </div>
                <hr />
                <div className='about-achievement'>
                    <h1>90+</h1>
                    <p>PROJECTS COMPLETED</p>
                </div>
                <hr />
                <div className='about-achievement'>
                    <h1>15+</h1>
                    <p>HAPPY CLIENTS</p>
                </div>
            </div>
        </div>
    );
};

export default About;