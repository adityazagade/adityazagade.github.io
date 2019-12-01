import React from 'react'
import Layout from '../components/layout'
import Project from './../components/Project'
class Projects extends React.Component {

    constructor(props) {
        super(props);
        this.projectInfo = {
            pr1: {
                title: "NGO Application",
                date: "July 2018",
                desc: "This was our first project at PTC Software where we were divided in a team of 4 and asked to make a 3 tier web application from scratch. Starting with next to 0 knowledge of coding, I think we did a fairly well.",
                downloadLink: "./../Files/Sample.ppt"
            },
            pr2: {
                title: "Multi-threaded Chat Application",
                date: "Aug 2018",
                desc: "This was my very First Side Project aimed to bring me up the mark with other developers. The idea was to understand multi-threading and other usedful concepts in java, while getting some hands on experience on java. I still remember, how I couldn't run the program on while presentation because the file-system paths were hardcoded into my code."
            },
            pr3: {
                title: "Movie Ticket Booking System",
                date: "Sept 2018",
                desc: "My Second hands on Project."
            },
            pr4: {
                title: "ThingWorx Voice Activated System",
                date: "Jan 2019",
                desc: "It was HACKATHON time in PTC Software. The theme was AI. We came up with an idea to support Thingworx with a  voice assistant. ThingWorks is a platform for the rapid development and deployment of smart, connected devices. Its set of integrated IoT development tools support connectivity, analysis, production and other aspects of IoT development. We used MicroSoft Azure's Language Understanding(LUIS), which is a cloud based API service that applies custom ML to natural language text to predict overall meaning, pull out relevant detailed information. There was a servlet based web-application which was deployed on cloud, which interacted with Azure and TWX."
            },
            pr5: {
                title: "Migrating from Adobe flex to JavaScript based front end tech",
                date: "November 2019",
                desc: ""
            },
        };
    }

    render() {
        let projectInfoElem = null;
        projectInfoElem = ((Object.keys(this.projectInfo)).reverse()).map((igKey) => {
            let projObj = this.projectInfo[igKey];
            let title = projObj.title;
            let desc = projObj.desc;
            let date = projObj.date;
            let downloadLink = projObj.downloadLink;
            return (<Project title={title} desc={desc} downloadLink={downloadLink} date={date}></Project>)
        });

        return (
            <Layout>
                {projectInfoElem}
            </Layout>
        )
    }

}

export default Projects