import React from 'react'
import styles from './../styles/contactMe.module.css'
import fb from './../images/fbIcon.png'
import ig from './../images/igIcon.jpg'
import gmail from './../images/gmailIcon.png'
import SocialMediaLink from './SocialMediaLink'

class ContactMe extends React.Component {

    render(){
        return(
            <div className={styles.contactMe}>
                <SocialMediaLink image={fb} url="https://www.facebook.com/aditya.zagade.18/"/>
                <SocialMediaLink image={ig} url="https://www.instagram.com/aditya_zagade/"/>
                <SocialMediaLink image={gmail} url="mailto: adityazagade1@gmail.com"/>
                {/* <p>Find Me!</p>  */}
            </div>
        )
    }
}

export default ContactMe;