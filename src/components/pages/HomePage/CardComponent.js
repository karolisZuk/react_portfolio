import Responsive from 'react-responsive';
import React from 'react';
import Cta from '../../Cta';

const style = {
        card:{
            backgroundColor: '#000a12',
            display: 'inline-block',
            marginTop:'-16px'
        },
        cardContent: {
            backgroundColor: '#4f5b62',
            height: '400px',
            minWidth:'100%',
            position: 'relative',
            backgroundSize:'95%',
            transition:'all 0.8s',
            backgroundRepeat: 'no-repeat'

        },
        title: {
            textTransform: 'uppercase',
            marginLeft: '20px',
            marginRight:'20px',
            fontFamily: 'PT Sans Narrow, sans-serif',
            fontSize:'4.4em',
            marginTop:'10px',
            marginBottom:'-30px',
            lineHeight: '80%'
        },
        type: {
            marginLeft: '20px',
            marginTop: '20px',
            fontFamily: 'Open Sans, sans-serif',
            letterSpacing: '2px'
        },
        description: {
            marginLeft: '20px',
            marginRight:'20px',
            fontFamily: 'Open Sans, sans-serif',
            fontSize:'1.5em',
            letterSpacing: '3px',
            fontWeight: 'bold'
        }
}

const styleTablet = {
    card:{
        backgroundColor: '#000a12',
        display: 'inline-block',
        marginTop:'-16px'
    },
    cardContent: {
        backgroundColor: '#4f5b62',
        minHeight: 400,
        maxWidth:'100%',
        position: 'relative'
    },
    title: {
        textTransform: 'uppercase',
        marginLeft: '15px',
        marginRight:'15px',
        fontFamily: 'PT Sans Narrow, sans-serif',
        fontSize:'4em',
        marginTop:'-10px',
        marginBottom:'-10px',
        lineHeight: '90%'
    },
    type: {
        marginLeft: '20px',
        marginTop: '20px',
        fontFamily: 'Open Sans, sans-serif',
        letterSpacing: '2px'
    },
    description: {
        marginLeft: '20px',
        marginRight:'20px',
        fontFamily: 'Open Sans, sans-serif',
        fontSize:'1.2em',
        letterSpacing: '2px',
        fontWeight: 'bold'
    }
}

const styleMobile = {
    card:{
        width:'100%',
        maxHeight:'500px',
        backgroundColor: '#000a12',
        display: 'inline-block',
        marginTop:'-16px'
    },
    cardContent: {
        maxWidth:'100%',
        maxHeight:'30%',
        minHeight:'300px',
        position: 'relative',
        backgroundSize:'100%',
        backgroundRepeat: 'no-repeat'
    },
    title: {
        textAlign:'center',
        textTransform: 'uppercase',
        marginLeft: '1%',
        marginRight:'1%',
        fontFamily: 'PT Sans Narrow, sans-serif',
        fontSize:'3em',
        marginTop:'-10px',
        marginBottom:'-10px',
        lineHeight: '100%'
    },
    type: {
        marginLeft: '20px',
        marginTop: '20px',
        fontFamily: 'Open Sans, sans-serif',
        letterSpacing: '2px'
    },
    description: {
        marginLeft: '20px',
        marginRight:'20px',
        fontFamily: 'Open Sans, sans-serif',
        fontSize:'1.2em',
        fontWeight: 'bold',
        letterSpacing: '2px'
    }
}

const Desktop = props => <Responsive {...props} minWidth={992} />;
const Tablet = props => <Responsive {...props} minWidth={768} maxWidth={991} />;
const Mobile = props => <Responsive {...props} maxWidth={767} />;

class CardComponent extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            scale:'110%'
        }
    }

    onMouseEnterHandler(){
        this.setState({scale: '100%'});
    
    }
    
    onMouseLeaveHandler(){
        this.setState({scale: '110%'});
    }

    render(){

        const linkTo= {
            pathname:`/projects/${this.props.link}`,
            state:{
                title: this.props.title,
                type: this.props.type,

                description:this.props.description,
                projectWork:this.props.projectWork,
                linkToProject:this.props.linkToProject,

                projectContext:this.props.context,
                projectProcess:this.props.process,
                projectResult:this.props.result,

                caseImages:this.props.caseImages,
                caseCard:this.props.cardImageUrl
                                        }

        }

        return (
            <div>
                <Desktop>
                    <div style={{...style.card, color:this.props.color}}>
                        <div style={{...style.cardContent, 
                            backgroundImage: "url(" + this.props.cardImageUrl + ")", 
                            backgroundSize: this.state.scale}} 
                            onMouseEnter={this.onMouseEnterHandler.bind(this)}
                            onMouseLeave={this.onMouseLeaveHandler.bind(this)}>
                            <h4 style={style.type}> {this.props.type} </h4>
                            <h2 style={style.title}> {this.props.title}</h2>
                            <p style={style.description}>- {this.props.description}. </p>
                            
                            <Cta text={'CASE STUDY >'} link={linkTo} color= {this.props.color} />
                        </div>
                    </div>
                </Desktop>
                
                <Tablet>
                    <div style={{...styleTablet.card, color:" "+this.props.color+" "}}>
                    <div style={{...styleTablet.cardContent, backgroundImage: "url(" + this.props.cardImageUrl + ")"}} >
                            <h4 style={styleTablet.type}> {this.props.type}</h4>
                            <h2 style={styleTablet.title}> {this.props.title} </h2>
                            <p style={styleTablet.description}>- {this.props.description}. </p>
                            
                            <Cta text={'CASE STUDY >'} link={linkTo} color= {this.props.color}/>
                        </div>
                    </div>
                </Tablet>

                <Mobile>
                    <div style={{...styleMobile.card, color:" "+this.props.color+" "}}>
                    <div style={{...styleMobile.cardContent, backgroundImage: "url(" + this.props.cardImageUrl + ")"}} >
                            <h4 style={styleMobile.type}> {this.props.type}</h4>
                            <h2 style={styleMobile.title}> {this.props.title} </h2>
                            <p style={styleMobile.description}>- {this.props.description}. </p>
                    
                            <Cta text={'CASE STUDY >'} link={linkTo} color= {this.props.color}/>
                        </div>
                    </div>
                </Mobile>
            </div>
        );
    }

}

export default CardComponent;