import React from 'react'
import { Link } from 'react-router-dom'

const Sidebar = ({toggle, setToggle}) => {
  return (
    <>
   { toggle && <div id="layoutSidenav_nav">
    <nav className="sb-sidenav accordion sb-sidenav-dark" id="sidenavAccordion">
      <div className="sb-sidenav-menu">
        <div className="nav">
          <div className="sb-sidenav-menu-heading">Auto-Solu</div>
          <Link className="nav-link" to="/admin" onClick={() => setToggle(false)}>
            <div className="sb-nav-link-icon"><i className="fas fa-tachometer-alt" /></div>
            Dashboard
          </Link>
          <Link className="nav-link" to="/position" onClick={() => setToggle(false)}>
            <div className="sb-nav-link-icon"><i className="fas fa-columns"></i></div>
            Catégories
          </Link>

          <Link className="nav-link" to="/brand" onClick={() => setToggle(false)}>
            <div className="sb-nav-link-icon"><i className="fas fa-book-open"></i></div>
            Models
          </Link>

          <Link className="nav-link" to="/product" onClick={() => setToggle(false)}>
            <div className="sb-nav-link-icon"><i className="fas fa-chart-area"></i></div>
            produits
          </Link>
          {/* <Link className="nav-link" to="/commande">
            <div className="sb-nav-link-icon"><i className="fas fa-table"></i></div>
            Commandes
          </Link> */}
        </div>
      </div>
        
    </nav>
  </div>}
  </>
  )

}

export default Sidebar
