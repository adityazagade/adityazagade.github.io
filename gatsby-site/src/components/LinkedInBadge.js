import React from 'react'
import ContactMe from './../components/ContactMe'

class LinkedInBadge extends React.Component {

    componentDidMount () {
        const script = document.createElement("script");
        script.src = "https://platform.linkedin.com/badges/js/profile.js";
        script.async = true;
    
        document.body.appendChild(script);
    }

    render() {
        return (
                <div className="LI-profile-badge" style={{backgroundColor:"none"}} data-version="v1" data-size="medium" data-locale="en_US" data-type="vertical" data-theme="light" data-vanity="aditya-zagade-a2a01b93">
                    <a className="LI-simple-link" href='https://in.linkedin.com/in/aditya-zagade-a2a01b93?trk=profile-badge'>Aditya Zagade</a>
                    <ContactMe/>
                </div>
                )
    }
}

export default LinkedInBadge