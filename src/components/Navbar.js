import React from 'react'
import logo from '../public/img/LOGO2.webp';

export const Navbar = () => {
  return (
    <nav className='navbar fixed-top navbar-expand-lg navbar-dark bg-success'>
      <div className='container-fluid'>
        <a className='navbar-brand' href="/#"><img src={logo} alt="Logo" />Farma</a>
        <button
          className='navbar-toggler'
          type='button'
          data-bs-toggle='collapse'
          data-bs-target='#navbarContent'
          aria-controls='navbarContent'
          aria-expanded='false'
          aria-label='Menú de navegación'
        >
          <span className='navbar-toggler-icon'></span>
        </button>
        <div className='collapse navbar-collapse' id='navbarContent'>
          <ul className='navbar-nav me-auto mb-2 mb-lg-0'>
            <li className="nav-item"><a className="nav-link" href="/#">Inicio</a></li>
            <li className="nav-item"><a className="nav-link" href="/#">Sobre nosotros</a></li>
            <li className="nav-item"><a className="nav-link" href="/#">Catálogo</a></li>
            <li className="nav-item"><a className="nav-link" href="/#">Desarrollo de negocios</a></li>
            <li className="nav-item"><a className="nav-link" href="/#">Ubicación</a></li>
          </ul>
          <div className='d-flex form-check form-switch'>
            <input type="checkbox" name="" id="language" className='form-check-input'/>
            <label htmlFor="language" className='form-check-label'>Ingles</label>
            <label htmlFor="language" className='form-check-label'>Español</label>
          </div>
        </div>
      </div>
    </nav>
  );
}
