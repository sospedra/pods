import React from 'react'
import { Link } from 'react-router'

const routes = [
  { path: '/', name: 'Home' },
  { path: '/info', name: 'More info' }
]

const Nav = () => (
  <ul className='navigator'>
    {routes.map((route, idx) => (
      <li key={idx}>
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
  children: React.PropTypes.oneOfType([
    React.PropTypes.element.isRequired,
    React.PropTypes.arrayOf(React.PropTypes.element.isRequired)
  ])
}

export default Navigator
