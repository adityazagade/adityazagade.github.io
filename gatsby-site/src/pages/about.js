import React from 'react'
import LinkedInBadge from './../components/LinkedInBadge'
import PersonalInfo from'./../components/PersonalInfo'

class About extends React.Component {
    render() {
        return (
            <div style={{
                display:"flex",
                flexDirection: "row",
                justifyContent: "center"
            }}>
                <PersonalInfo/>
                <LinkedInBadge/>
            </div>
        )
    }
}

export default About