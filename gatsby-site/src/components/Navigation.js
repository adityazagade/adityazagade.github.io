import React from 'react'
import NavLink from './NavLink'

const Navigation = props => (
            <div style={{marginBottom:"15px"}}>
                <NavLink to="/" label="Home"></NavLink>
                <NavLink to="/projects" label="Projects"></NavLink>
            </div>
)
export default Navigation;