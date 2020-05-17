import React from 'react'
import LinkedInBadge from './../components/LinkedInBadge'
import PersonalInfo from'./../components/PersonalInfo'
import styles from './../styles/about.module.css'
class About extends React.Component {
    render() {
        return (
        <div>
            <div className={styles.about}>
                <PersonalInfo/>
                <LinkedInBadge/>
            </div>
            {/* <ContactMe/> */}
        </div>)
    }
}

export default About