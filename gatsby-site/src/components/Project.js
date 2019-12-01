import React from 'react'

const Project = (props) => {

    let dwnLink = null;
    if (props.downloadLink) {
        dwnLink = (<a href={props.downloadLink} download>Download PPT</a>);
    }

    return (
        <div>
            <h3>{props.title + " (" + props.date + ")"}</h3>
            <p>{props.desc}</p>
            {dwnLink}
            <hr></hr>
        </div>
    )
}

export default Project