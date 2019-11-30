import React from 'react'
import { Link } from "gatsby"
const NavLink = props => (
            <Link style = {{margin:"5px"}} to={props.to}>{props.label}</Link>
)

export default NavLink;