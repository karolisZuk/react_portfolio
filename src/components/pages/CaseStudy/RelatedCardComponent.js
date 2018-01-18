import React from 'react';
import { Link } from 'react-router-dom';


const style={
            relatedCardComponent:{
                backgroundColor:'#263238',
                width:'300px',
                minHeight:'300px',
                margin:'20px',
                float:'left'
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
                textDecoration:'none',
                color:'#4f5b62'
            }
}

export default class RelatedCardComponent extends React.Component {
        constructor(props){
            super(props);
            this.type = this.props.type;
            this.title = this.props.title;
            this.client = this.props.client;
            this.date = this.props.date;
            this.description = this.props.description;
            this.pointsOfInterest = this.props.pointsOfInterest;
        }

        render (){
        return (
        <div  style={style.relatedCardComponent}>
                <h1 style={style.relatedCardTitle}>
                <Link style={style.link} to={{
                        pathname:`/projects/${this.props.link}`,
                        state:{
                            title: this.title,
                            type: this.type,
                            description:this.props.description,
                            projectWork:this.props.projectWork,
                            linkToProject:this.props.linkToProject,
                            projectDescriptionLong:this.props.projectDescriptionLong
                        }}
                        }>{this.props.title}</Link></h1>
                <p style={style.relatedCardText}>{this.props.description}</p>
        </div>
                );
        }
}