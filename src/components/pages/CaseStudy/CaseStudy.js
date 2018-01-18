import React from 'react';
import HeaderComponent from '../../Header/HeaderComponent';
import FooterComponent from '../../FooterComponent';
import RelatedComponent from './RelatedComponent';
import TextContainer from './TextContainer';
import ImagesContainer from './ImagesContainer';
import Cta from '../../Cta';
import CaseHeader from './CaseHeader';
import WorkDone from './WorkDone'

const style = {
        main:{
            backgroundColor: '#000a12',
            color:'white'
        },
        container:{
            width: '90%',
            backgroundColor: '#000a12',
            margin: 'auto',
            padding: '30px',
            display:'inline-block'
        }
}

class CaseStudy extends React.Component {
    constructor(props){
        super(props);
        this.type = this.props.location.state.type;
        this.title = this.props.location.state.title;
        this.description = this.props.location.state.description;
        this.longDescription = this.props.location.state.projectDescriptionLong;
        this.pointsOfInterest = this.props.pointsOfInterest;
        this.projectWork = this.props.location.state.projectWork;
        this.linkToProject = this.props.location.state.linkToProject;
        //images
        this.titleImg = props.titleImg;
    }

    componentWillReceiveProps(props){
        window.scrollTo(0, 0)
        this.type = props.location.state.type;
        this.title = props.location.state.title;
        this.description = props.location.state.description;
        this.longDescription = props.location.state.projectDescriptionLong;
        this.pointsOfInterest = props.pointsOfInterest;
        this.projectWork = props.location.state.projectWork;
        this.linkToProject = props.location.state.linkToProject;
        //images
        this.titleImg = props.titleImg;
    }

    render(){

        return (
        <div>
            <HeaderComponent title={`projects/${this.title}`} />
            <div style = {style.main}>
                <CaseHeader title={this.title} type={this.type} linkToProject={this.linkToProject} />
                <div style={style.container}>
                    <TextContainer description={this.description} longDescription={this.longDescription}/>
                    <ImagesContainer />
                    <WorkDone projectWork={this.projectWork} />    
                </div>           
                <RelatedComponent type={this.type} title={this.title} />
            </div>
            <FooterComponent />
         </div>
        );
    }

}

export default CaseStudy;