import React from 'react'
import NavLink from './NavLink'

const Navigation = props => (
            <div>
                <NavLink to="/" label="Home"></NavLink>
                <NavLink to="/about" label="About me"></NavLink>
                <NavLink to="/projects" label="Projects"></NavLink>
            </div>
)
export default Navigation;