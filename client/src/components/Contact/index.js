import React from 'react';
import './style.css';
import GitHubIcon from '@material-ui/icons/GitHub';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import PhoneIcon from '@material-ui/icons/Phone';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import emailjs from 'emailjs-com';

const Contact = () => {

    const sendForm = (e) => {
        emailjs.sendForm('service_6aye2mn', 'gmail', e.target, 'user_LR7YADQ0A7jf2cMkz67lv')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
        e.target.reset();
    }
    return (
        <div className='contact row'>
            <div className='col-md-2'/>
            
            <div className=' email-input col-md-8'>
                <a className='icon' href='https://github.com/RryanWilsonW' target='_blank'>
                    <GitHubIcon style={{color: 'white', fontSize: '50px', margin: '20px'}} />
                </a>
                <a className='icon' href='https://www.linkedin.com/in/ryan-wilson-9287bb1b6/' target='_blank'>
                    <LinkedInIcon style={{color: 'white', fontSize: '50px', margin: '20px'}} />
                </a>
                    <div className='col-md-12 contact-info'>
                        <h1 className='email-head'>Contact Info:</h1>
                        <div className='information'>
                            <p><MailOutlineIcon /> RryanWilsonW@gmail.com</p>
                            <p><PhoneIcon /><br/>(216)-210-7624</p>
                            <p><LocationOnIcon /><br/>Thompson Ohio, 44086.</p>
                        </div>
                        <h5 className='thank-you'>Thankyou for taking the time to get to know me. I look forward to hearing from you! 
                        </h5>
                    </div>
            </div>
        </div>
    )
}

export default Contact;