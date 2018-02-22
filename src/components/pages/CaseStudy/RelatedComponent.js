import React from 'react';
import Responsive from 'react-responsive';
import RelatedCardComponent from './RelatedCardComponent';

const style={
        main:{
        },
        holder:{
            minHeight:'340px'
        },
        title:{
            fontFamily:'Open Sans, sans-serif',
            letterSpacing:'4px',
            textTransform:'upperCase',
            textAlign:'center'
    
        }
}

const styleMobile={
    main:{
    },
    holder:{
        maxHeight:'250px',
        marginBottom:'250px'
    },
    title:{
        fontFamily:'Open Sans, sans-serif',
        letterSpacing:'4px',
        textTransform:'upperCase',
        textAlign:'center'

    }
}

const Desktop = props => <Responsive {...props} minWidth={992} />;
const Tablet = props => <Responsive {...props} minWidth={768} maxWidth={991} />;
const Mobile = props => <Responsive {...props} maxWidth={767} />;

class RelatedComponent extends React.Component {
    constructor(props){
        super(props);
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
          //change this if url has changed!!!!
        fetch(`http://${window.location.host}/data/portfolioPieces.json`,this.jsonHeader)
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

    returnSimilar(item){
        if(item.projectType===this.props.type && item.projectTitle !== this.props.title){
        return (
            <RelatedCardComponent 
                key = {item.projectTitle} 
                type = {item.projectType} 
                title = {item.projectTitle}
                description = {item.projectDescription}
                context = {item.projectContext}
                process = {item.projectProcess}
                result ={item.projectResult}
                projectWork = {item.projectWork}
                link = {item.projectLink}
                linkToProject = {item.linkToProject}
                cardImageUrl = {item.cardImageUrl}
                projectImages = {item.projectImages}
                color = {item.color}
                />
        )
    }}

render(){

    return (
        <div style={style.main}>
        <Desktop>
            <h3 style={style.title}>Other projects you might like</h3>
            <div style={style.holder}>
                {this.state.projects.map(item => this.returnSimilar(item) )}
            </div>
        </Desktop>
        <Tablet>
            <h3 style={style.title}>Other projects you might like</h3>
            <div style={style.holder}>
                {this.state.projects.map(item => this.returnSimilar(item) )}
            </div>
        </Tablet>
        <Mobile>
        <div style={styleMobile.main}>
            <h3 style={styleMobile.title}>Other projects you might like</h3>
            <div style={styleMobile.holder}>
                {this.state.projects.map(item => this.returnSimilar(item) )}
            </div>
        </div>
        </Mobile>
        </div>
    );
}

}

export default RelatedComponent;