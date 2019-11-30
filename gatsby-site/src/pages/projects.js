import React from 'react'
import Layout from '../components/layout'
import Project from './../components/Project'

class Projects extends React.Component {

    constructor(props){
        super(props);
        this.projectInfo = {
            pr1:{
                title:"NGO Application",
                desc:"This was our first project at PTC Software where we were divided in a team of 4 and asked to make a 3 tier web application from scratch. Starting with next to 0 knowledge of coding, I think we did a fairly well."
            }
        };
    }

    render(){
        let projectInfoElem = null;
        projectInfoElem = Object.keys(this.projectInfo).map((igKey) => {
            let projObj = this.projectInfo[igKey];
            let title = projObj.title;
            let desc = projObj.desc;
            return (<Project title={title} desc = {desc}></Project>)
        }); 

        return(
            <Layout>
                {projectInfoElem}
            </Layout>
            )
    }

}

export default Projects