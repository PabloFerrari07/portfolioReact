import React from 'react'
import './style.css'
import {Link} from 'react-scroll'
function NavBar() {
  return (
    <div>
        <section className='section-navbar'>
            <nav className='nav_flex'>
                <div className='nav-title'>
                <h1>PABLO FERRARI</h1>   
                  </div>
                <ul className='flex-ul'>
                  <Link to="about" spy={true} smooth={true} offset={50} duration={500}>SOBRE MI</Link>
                  <Link to="proyects" spy={true} smooth={true} offset={50} duration={500}>PROYECTOS</Link>
                  <Link to="proyects" spy={true} smooth={true} offset={1000} duration={500}>CONTACTO</Link>
                </ul>
                <div className='btn-cv'>
                  <a href="https://drive.google.com/file/d/1MsWfa5JxM9anYOqOimtCRl4h-Hq2FsqU/view?usp=sharing" target='_blank'>ver cv</a>
                </div>
            </nav>
        </section>
    </div>
  )
}

export default NavBar