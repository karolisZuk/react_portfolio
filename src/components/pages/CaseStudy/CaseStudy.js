import React from 'react';
import Responsive from 'react-responsive';
import RelatedComponent from './RelatedComponent';
import TextContainer from './TextContainer';
import ImagesContainer from './ImagesContainer';
import CaseHeader from './CaseHeader';
import WorkDone from './WorkDone';

const style = {
        main:{
            color:'white',
            overflowX:'hidden'
        },
        container:{
            maxWidth: '90%',
            margin: 'auto',
            padding: '30px',
            display:'inline-block'
        }
}

const styleMobile = {
    main:{
        color:'white',
        overflowX:'hidden'
    },
    container:{
        maxWidth: '100%',
        margin: 'auto',
        padding: '30px'
    }
}

const styleTablet = {
    main:{
        color:'white',
        overflowX:'hidden'
    },
    container:{
        maxWidth: '100%',
        margin: 'auto',
        padding: '30px'
    }
}

const Desktop = props => <Responsive {...props} minWidth={992} />;
const Tablet = props => <Responsive {...props} minWidth={768} maxWidth={991} />;
const Mobile = props => <Responsive {...props} maxWidth={767} />;

class CaseStudy extends React.Component {
    constructor(props){
        super(props);
        this.type = this.props.location.state.type;
        this.title = this.props.location.state.title;
        this.description = this.props.location.state.description;

        this.context = this.props.location.state.projectContext;
        this.process = this.props.location.state.projectProcess;
        this.result = this.props.location.state.projectResult;

        this.pointsOfInterest = this.props.pointsOfInterest;
        this.projectWork = this.props.location.state.projectWork;
        this.linkToProject = this.props.location.state.linkToProject;
        //images
        this.titleImg = props.titleImg;
        this.images = props.location.state.caseImages;
        this.caseCard = props.location.state.caseCard;
    }

    componentWillReceiveProps(props){
        window.scrollTo(0, 0)
        this.type = props.location.state.type;
        this.title = props.location.state.title;
        this.description = props.location.state.description;

        this.context = props.location.state.projectContext;
        this.process = props.location.state.projectProcess;
        this.result = props.location.state.projectResult;

        this.pointsOfInterest = props.pointsOfInterest;
        this.projectWork = props.location.state.projectWork;
        this.linkToProject = props.location.state.linkToProject;
        //images
        this.titleImg = props.titleImg;
        this.images = props.location.state.caseImages;
        this.caseCard = props.location.state.caseCard;
    }

    render(){
        window.scrollTo(0, 0);
        return (
        <div>
            <Desktop>
            <div style = {style.main}>
                <CaseHeader 
                title={this.title} 
                type={this.type} 
                linkToProject={this.linkToProject} />
                <div style={style.container}>
                    <TextContainer 
                    description={this.description} 
                    context={this.props.location.state.projectContext}
                    process={this.props.location.state.projectProcess}
                    result={this.props.location.state.projectResult} />
                    <ImagesContainer images={this.images} /> 
                </div>
                <WorkDone projectWork={this.projectWork} />     
                <RelatedComponent type={this.type} title={this.title} />
            </div>
            </Desktop>

            <Tablet>
            <div style = {styleTablet.main}>
                <CaseHeader title={this.title} type={this.type} linkToProject={this.linkToProject} />
                <div style={styleTablet.container}>
                <TextContainer 
                description={this.description} 
                context={this.props.location.state.projectContext}
                process={this.props.location.state.projectProcess}
                result={this.props.location.state.projectResult} />
                    <ImagesContainer images={this.images} /> 
                </div>
                <WorkDone projectWork={this.projectWork} />              
                <RelatedComponent type={this.type} title={this.title} />
            </div>
            </Tablet>

            <Mobile>
            <div style = {styleMobile.main}>
                <CaseHeader title={this.title} type={this.type} linkToProject={this.linkToProject} />
                <div style={styleMobile.container}>
                <TextContainer 
                description={this.description} 
                context={this.props.location.state.projectContext}
                process={this.props.location.state.projectProcess}
                result={this.props.location.state.projectResult} />
                    <ImagesContainer images={this.images} /> 
                </div>
                <WorkDone projectWork={this.projectWork} />              
                <RelatedComponent type={this.type} title={this.title} />
            </div>
            </Mobile>
         </div>
        );
    }

}

export default CaseStudy;