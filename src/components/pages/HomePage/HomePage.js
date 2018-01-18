import React from 'react';
import HeaderComponent from '../../Header/HeaderComponent';
import CardComponent from './CardComponent';
import {projects} from '../../data/portfolioPieces';
import FooterComponent from '../../FooterComponent';

const style = {
        main:{
            backgroundColor:'#000a12',
            color:'white',
            fontFamily:'Open Sans, sans-serif',
            height:'100vh'
        },
        appear: {
            marginLeft:0,
            transition:'all 700ms ease-out'
        },
        cardHolder: {
            display: 'flex',
            backgroundColor:'#4f5b62',
            overflowY:'hidden'
        }
}

class HomePage extends React.Component {
    constructor(props){
        super(props);
        this.title = 'projects';
    }

    render(){

    return (
        <div style={style.main}>
            <HeaderComponent title={this.title} />
                <div style={style.cardHolder}>
                    {projects.map(item => <CardComponent 
                        key = {item.projectId} 
                        type = {item.projectType} 
                        title = {item.projectTitle}
                        description = {item.projectDescription}
                        projectDescriptionLong = {item.projectDescriptionLong}
                        projectWork = {item.projectWork}
                        link = {item.projectLink}
                        linkToProject = {item.linkToProject}
                        /> )}
                </div>
            <FooterComponent />
        </div>
        );
    }

}

export default HomePage;