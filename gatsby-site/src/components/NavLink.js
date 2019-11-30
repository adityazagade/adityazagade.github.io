import React from 'react'
import { Link } from "gatsby"
const NavLink = props => (
            <Link to={props.to}>{props.label}</Link>
)

export default NavLink;