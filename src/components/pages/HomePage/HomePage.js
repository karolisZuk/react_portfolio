import React from 'react';
import Responsive from 'react-responsive';
import CardComponent from './CardComponent';


const style = {
        main:{
            paddingTop:'60px',
            paddingBottom:'60px',
            backgroundColor:'#000a12',
            color:'white',
            fontFamily:'Open Sans, sans-serif',
            columnCount: 3,
            columnGap:2
        }
}

const styleMobile = {
    main:{
        paddingTop:'30px',
        paddingBottom:'30px',
        backgroundColor:'#000a12',
        color:'white',
        fontFamily:'Open Sans, sans-serif',
        columnCount: 1,
        columnGap:2
    }
}


const styleTablet = {
    main:{
            paddingTop:'60px',
            paddingBottom:'60px',
            backgroundColor:'#000a12',
            color:'white',
            fontFamily:'Open Sans, sans-serif',
            columnCount: 2,
            columnGap:2
    }
}

const Desktop = props => <Responsive {...props} minWidth={992} />;
const Tablet = props => <Responsive {...props} minWidth={768} maxWidth={991} />;
const Mobile = props => <Responsive {...props} maxWidth={767} />;

class HomePage extends React.Component {
    constructor(props){
        super(props);
        this.title = 'projects';
        this.projectCount = 8;
        this.jsonHeader={
            method: 'get',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json',
                    }
        }
        this.state = {
            projects:[]
        }
    }


    componentDidMount=()=> {
        for(let i=0; i<this.projectCount; i++)
        {
            this.loadProject(i);
        }
      }       
    
      loadProject=(projectNumber)=>{
        fetch('/data/portfolioPieces.json', this.jsonHeader)
        .then(r=>r.json())
        .then((data)=> {
            let projects = this.state.projects.slice()
            projects.push(data.projects[projectNumber])
            this.setState({ projects: projects })
        })
        .catch((error)=> {
            console.log(error);
  });
      }
    

    render(){

    return (
        <div>
            <Desktop>
                <div style={style.main}>
                    {this.state.projects.map(item => <CardComponent
                        key = {item.projectTitle} 
                        type = {item.projectType} 
                        title = {item.projectTitle}
                        description = {item.projectDescription}

                        context = {item.projectContext}
                        process = {item.projectProcess}
                        result = {item.projectResult}

                        projectWork = {item.projectWork}
                        link = {item.projectLink}
                        linkToProject = {item.linkToProject}
                        color = {item.color}
                        caseImages = {item.projectImages}
                        cardImageUrl = {item.cardImageUrl}

                        /> )}
                </div>
            </Desktop>
            <Tablet>
                <div style={styleTablet.main}>
                    {this.state.projects.map(item => <CardComponent 
                        key = {item.projectTitle} 
                        type = {item.projectType} 
                        title = {item.projectTitle}
                        description = {item.projectDescription}

                        context = {item.projectContext}
                        process = {item.projectProcess}
                        result = {item.projectResult}

                        projectWork = {item.projectWork}
                        link = {item.projectLink}
                        linkToProject = {item.linkToProject}
                        color = {item.color}
                        cardImageUrl = {item.cardImageUrl}
                        caseImages = {item.projectImages}
                        /> )}
                </div>
            </Tablet>
        <Mobile>
                <div style={styleMobile.main}>
                {this.state.projects.map(item => <CardComponent 
                    key = {item.projectTitle} 
                    type = {item.projectType} 
                    title = {item.projectTitle}
                    description = {item.projectDescription}

                    context = {item.projectContext}
                    process = {item.projectProcess}
                    result = {item.projectResult}

                    projectWork = {item.projectWork}
                    link = {item.projectLink}
                    linkToProject = {item.linkToProject}
                    color = {item.color}
                    cardImageUrl = {item.cardImageUrl}
                    caseImages = {item.projectImages}
                    /> )}
                </div>
        </Mobile>
        </div>
        );
    }

}

export default HomePage;