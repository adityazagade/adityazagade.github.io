import React from 'react'

const SocialMediaLink = props => (
    <a style={{ backgroundImage: "none", margin: "0px 5px 0px 5px"}} href={props.url} ><img style={{marginBottom: 0}}src={props.image}></img></a>
)
export default SocialMediaLink;