import React from 'react'
import { Link } from 'react-router'

const routes = [
  { path: '/', name: 'Home' }
]

const Nav = () => (
  <ul className='navigator'>
    {routes.map((route) => (
      <li>
        <Link to={route.path}>{route.name}</Link>
      </li>
    ))}
  </ul>
)

const Navigator = (props) => (
  <div>
    <Nav />
    {props.children}
  </div>
)

Navigator.propTypes = {
  children: React.PropTypes.element.isRequired
}

export default Navigator
