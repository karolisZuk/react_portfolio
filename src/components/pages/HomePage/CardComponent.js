import React from 'react';
import { Link } from 'react-router-dom';
import Cta from '../../Cta';

const style = {
        card:{
            backgroundColor: '#000a12',
            minHeight: 450,
            minWidth: 450,
            display: 'flex',
            padding:'10px',
            paddingTop: '130px',
            paddingBottom: '135px'
        },
        cardContent: {
            transition: 'all 0.2s ease',
            borderRadius:'5px',
            backgroundColor: '#4f5b62',
            minHeight: 450,
            minWidth:'100%',
            position: 'relative'
        },
        title: {
            textTransform: 'uppercase',
            marginLeft: '20px',
            marginRight:'20px',
            fontFamily: 'PT Sans Narrow, sans-serif',
            fontSize:'4.4em',
            marginTop:'-10px',
            marginBottom:'-10px'
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
            fontSize:'1em',
            letterSpacing: '2px'
        }
}

class CardComponent extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            scale:1
        }
    }

onMouseEnterHandler(){
    this.setState({scale: 1.02});

}

onMouseLeaveHandler(){
    this.setState({scale: 1});
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
                projectDescriptionLong:this.props.projectDescriptionLong
                                        }

        }

        return (
                    <div style={style.card}>
                        <div style={{...style.cardContent, transform:'scale('+this.state.scale+')'}} 
                        onMouseEnter={this.onMouseEnterHandler.bind(this)}
                        onMouseLeave={this.onMouseLeaveHandler.bind(this)}>
                            <h4 style={style.type}> {this.props.type} </h4>
                            <h2 style={style.title}> {this.props.title} </h2>
                            <p style={style.description}>- {this.props.description}. </p>
                            
                            <Cta text={'CASE STUDY >'} link={linkTo} />
                        </div>
                    </div>
        );
    }

}

export default CardComponent;