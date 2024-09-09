import React from 'react';
import './Hero.css'
import profile_img from '../../assets/profile_img.jpg'
import AnchorLink from 'react-anchor-link-smooth-scroll';

const Hero = () => {

    const openPdf = () => {
        const pdfUrl = `${process.env.PUBLIC_URL}/resume-of-apou-datto.pdf`;
        window.open(pdfUrl, '_blank');
    };

    return (
        <div id='home' className='hero'>
            <img src={profile_img} alt='' />
            <h1><span>I'm Apou Datto,</span> Full-Stack Web Developer</h1>
            <p>Specializing in Dynamic, Responsive and Scalable Web Applications | Laravel, MySQL, JS, React Expert.</p>
            <div className='hero-action'>
                <div className='hero-connect'>
                    <AnchorLink className='anchor-link' offset={50} href='#contact'>
                        Connect with me
                    </AnchorLink>
                </div>
                <div onClick={openPdf} className='hero-resume'>My resume</div>
            </div>
        </div>
    );
};

export default Hero;