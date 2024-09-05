import React from 'react';
import './Hero.css'
import profile_img from '../../assets/profile_img.jpg'

const Hero = () => {
    return (
        <div className='hero'>
            <img src={profile_img} alt='' />
            <h1><span>I'm Apou Datto,</span> web developer based in USA.</h1>
            <p>I am a web developer with 5 years experince</p>
            <div className='hero-action'>
                <div className='hero-connect'>Connect with me</div>
                <div className='hero-resume'>My resume</div>
            </div>
        </div>
    );
};

export default Hero;