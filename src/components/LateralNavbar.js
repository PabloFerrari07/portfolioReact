import React from 'react';
import github from './assets/github.svg'
import linkedin from './assets/linkedin.svg'
import email from './assets/email.svg'
import whatsapp from'./assets/whatsapp.svg'
import './style.css'
function LateralNavbar() {
  return (
    <div className='lateralnavbar_img'>
      <span></span>
        <a href="https://www.linkedin.com/in/pablo-ferrari-895527235/" target='_blank'><img src={linkedin} alt="linkedinimg" /></a>
        <a href="https://github.com/PabloFerrari07" target='_blank'><img src={github} alt="githubimg" /></a>
        <a href="mailto:pablo.ferrari019@gmail.com" target='_blank'><img src={email} alt="emailimg" /></a>
        <a href="https://api.whatsapp.com/send/?phone=5491128159708&text&type=phone_number&app_absent=0" target='_blank'><img src={whatsapp} alt="emailimg" /></a>

    </div>
  )
}

export default LateralNavbar