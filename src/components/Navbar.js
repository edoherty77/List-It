import React from 'react'
import { Link } from 'react-router-dom'
import Icon from '@mdi/react'
import { mdiHome, mdiPlus } from '@mdi/js'

const Navbar = () => {
  return (
    <nav className="navbar">
      <div>
        <input className="input" placeholder="Search" />
      </div>
      <div>
        <Link to="/items/new">
          <Icon className="icon" path={mdiPlus} size={2} color="#2E3131" />
        </Link>
      </div>
      <div>
        <Link to="/">
          {' '}
          <Icon
            className="icon"
            path={mdiHome}
            size={2}
            color="#fa7c30"
            // horizontal
            // vertical
            // rotate={90}
            // spin
          />
        </Link>
      </div>
    </nav>
  )
}

export default Navbar
