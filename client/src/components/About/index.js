import React from 'react';
import './style.css'
import me from '../../imgs/me.jpg';
const About = () => {
    return (
    <div className='about row'>
        <div className='col-md-6 intro'>
            <h1>Ryan Wilson</h1>
            <p>Full Stack MERN Developer</p>
            <img className='me' src={me}></img>

        </div>
        <div className='col-md-5 about-section'>
            <h2>Hello! My name is Ryan, and I would like to tell you a bit about myself.</h2>

            <p className='about-text'>
                With a strong affiliation for science, and a full-stack web development certificate from Case Western 
                the power of complexity in coding becomes simplified. Highly disciplined, with a genuine passion for problem
                solving, and a multigenerational perspective of trends innovative complexity from front to back end development 
                comes naturally. 
            </p>
            <h3 className='credential-head'>Full Stack</h3>
            <ul className='credentials row'>
                <li className='col-md-3'>HTML5/CSS3</li>
                <li className='col-md-3'>Javascript</li>
                <li className='col-md-3'>React</li>
                <li className='col-md-3'>Node</li>
                <li className='col-md-3'>Express</li>
                <li className='col-md-3'>MongoDB</li>
                <li className='col-md-3'>SQL</li>
                <li className='col-md-3'>API</li>
            </ul>
        </div>
    </div>
    )
}

export default About;