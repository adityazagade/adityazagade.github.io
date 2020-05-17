import React from 'react'
import styles from './../styles/personalInfo.module.css'

var heading = [
    "1. How am I doing ?"
];

const PersonalInfo = props => (
<div className={styles.personalInfo}>
        <h3>About me</h3>
        <p style={{textIndent: "50px"}}>Alright people, you have been successfully lured onto a website relatively alien to the human kind. Another way to put it would be you are amongst top .0001% people to do so! Take a moment to appreciate it. Take a deep breath and relax. Its going to be long read about a journey of a man and his love for coding!</p>

        <h4>Work</h4>
        <p>Currently, I work as <b>Software Specialist at PTC Inc.</b>, a global computer software and services company. I joined them in 12th July, 2018 with little to knowledge on coding. In about an year, I have done good enough to get an <b>excellence certificate</b> for the work that I put up. The kind of the work I do here is code-sustainence for a legacy IOT products( namely 'Axeda'), root cause analysis (RCA) when customers report outages and some passion projects to migrate existing stack to latest frameworks   
            
        </p>
        <p>About PTC : The Company offers a portfolio of CAD modeling, product lifecycle management (PLM) and service lifecycle management (SLM) solutions for manufacturers to create, operate, and service products. It offers a suite of Internet of Things (IoT) solutions that enables its customers to connect, manage and analyze data, and create applications.</p>
        <h4>College</h4>
        <p>I graduated with a <b>dual degree in mechanical engineering from IIT-Bombay</b> in year 2018. I have a CPI of 7.5 :).  Well the placement process is random and I got placed into an IT company and a Mechanical company named Fauresia. As you can see, things have taken a U-turn since then and I am leaving no stones unturned.</p>

        <h4>My permanent Location:</h4>
        <p>Have you ever heard of Kolad? Probably not. You won't find it on the map on India either. Even tinder does work here. Its a small village on the Konkan belt: also known as the Konkan Coast. Well, don't get too excited, you won't see a beach if you climb onto the highest point in Kolad.</p>

        <h4>Interests</h4>
        <p>Hmm. This is interesting. I have never had a hobby as such. But if you insist, I must say I play <b>football</b> for recreational purpose. You can find me playing football on some turf in Pune, if not on desk ! A Leo Messi fan but secretly in love with Liverpool football Club. I spend more time on Udemy that Netflix/Prime. But I shall certainly not give you a nerd vibe when you're around me!
        </p>
        <p>I code over codechef when I get bored of my work in Office. My rating is ~1723</p>
    </div>
)

export default PersonalInfo