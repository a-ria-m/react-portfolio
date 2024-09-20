import React from 'react'

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark primary position-absolute w-100">
      <div className="container-fluid d-flex align-items-center"> 
        <a className="navbar-brand" href="/#">My Portfolio</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link active" href="#Portfolio">Portfolio</a>
            </li>
            <li className="nav-item">
            <a className="nav-link active" href="#Contactme">Contact Me</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar