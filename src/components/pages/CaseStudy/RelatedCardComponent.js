import React from 'react';
import Responsive from 'react-responsive';
import { Link } from 'react-router-dom';


const style={
            relatedCardComponent:{
                backgroundColor:'#263238',
                width:'300px',
                minHeight:'300px',
                margin:'20px',
                float:'left',
                backgroundSize:'100%',
                backgroundRepeat: 'no-repeat'
            },
            relatedCardTitle: {
               fontFamily: 'PT Sans Narrow, sans-serif',
               fontSize:'2em',
               margin:'20px',
               textAlign:'center',
            },
            relatedCardText:{
                margin:'20px',
                fontFamily:'Open Sans, sans-serif',
                fontSize:'1.4em'
            },
            link:{
                textTransform:'uppercase',
                letterSpacing:'4px',
                textDecoration:'none'
            }
}

const styleMobile={
    relatedCardComponent:{
        width:'60%',
        minHeight:'200px',
        marginBottom:'50px',
        marginLeft:'20%',
        backgroundSize: '100%',
        backgroundRepeat: 'no-repeat'
    },
    relatedCardTitle: {
       paddingTop:'10px',
       fontFamily: 'PT Sans Narrow, sans-serif',
       fontSize:'1em',
       margin:'20px',
       textAlign:'center',
    },
    relatedCardText:{
        margin:'20px',
        fontFamily:'Open Sans, sans-serif',
        fontSize:'1em',
        letterSpacing:'3px',
        textAlign:'center'
    },
    link:{
        textTransform:'uppercase',
        letterSpacing:'4px',
        textDecoration:'none',
        color:'#4f5b62'
    }
}

const Desktop = props => <Responsive {...props} minWidth={992} />;
const Tablet = props => <Responsive {...props} minWidth={768} maxWidth={991} />;
const Mobile = props => <Responsive {...props} maxWidth={767} />;

export default class RelatedCardComponent extends React.Component {
        constructor(props){
            super(props);
            this.type = this.props.type;
            this.title = this.props.title;
            this.client = this.props.client;
            this.date = this.props.date;
            this.description = this.props.description;
            this.pointsOfInterest = this.props.pointsOfInterest;
            this.backgroundImg = this.props.backgroundImg;
            this.caseImages = this.props.caseImages;
        }

        render (){
        return (
            <div>
            <Desktop>
                <div  style={{...style.relatedCardComponent, backgroundImage: `url(http://${window.location.host}/${this.props.cardImageUrl})`}}>
                    <h1 style={{...style.relatedCardTitle, color:this.props.color}}>
                    <Link style={{...style.link, color:this.props.color}} to={{
                            pathname:`/projects/${this.props.link}`,
                            state:{ //achtung!!!!
                                title: this.title,
                                type: this.type,
                                description:this.props.description,
                                projectWork:this.props.projectWork,
                                linkToProject:this.props.linkToProject,

                                projectContext:this.props.context,
                                projectProcess:this.props.process,
                                projectResult:this.props.result,

                                projectLink:this.props.projectLink,
                                cardImageUrl:this.props.cardImageUrl,
                                caseImages:this.props.projectImages
                            }}
                            }>{this.props.title}</Link></h1>
                    <p style={{...style.relatedCardText, color:this.props.color}}>{this.props.description}</p>
                </div>
            </Desktop>
            <Tablet>
            <div  style={{...style.relatedCardComponent, backgroundImage: `url(http://${window.location.host}/${this.props.cardImageUrl})`}}>
                <h1 style={style.relatedCardTitle}>
                <Link style={{...style.link, color:this.props.color}} to={{
                        pathname:`/projects/${this.props.link}`,
                        state:{
                            title: this.title,
                            type: this.type,
                            description:this.props.description,
                            projectWork:this.props.projectWork,
                            linkToProject:this.props.linkToProject,
                            projectDescriptionLong:this.props.projectDescriptionLong,
                            projectLink:this.props.projectLink,
                            cardImageUrl:this.props.cardImageUrl,
                            caseImages:this.props.projectImages
                        }}
                        }>{this.props.title}</Link></h1>
                <p style={{...style.relatedCardText, color:this.props.color}}>{this.props.description}</p>
                </div>
            </Tablet>
            <Mobile>
            <div  style={{...styleMobile.relatedCardComponent, backgroundImage: `url(http://${window.location.host}/${this.props.cardImageUrl})`}} >
                <h1 style={styleMobile.relatedCardTitle}>
                <Link style={{...styleMobile.link, color:this.props.color}} to={{
                        pathname:`/projects/${this.props.link}`,
                        state:{
                            title: this.title,
                            type: this.type,
                            description:this.props.description,
                            projectWork:this.props.projectWork,
                            linkToProject:this.props.linkToProject,
                            projectDescriptionLong:this.props.projectDescriptionLong,
                            projectLink:this.props.projectLink,
                            cardImageUrl:this.props.cardImageUrl,
                            caseImages:this.props.projectImages
                        }}
                        }>{this.props.title}</Link></h1>
                <p style={{...styleMobile.relatedCardText, color:this.props.color}}>{this.props.description}</p>
                </div>
            </Mobile>
        </div>
                );
        }
}