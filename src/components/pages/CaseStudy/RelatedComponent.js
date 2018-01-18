import React from 'react';
import RelatedCardComponent from './RelatedCardComponent';
import theme from '../../theme';
import {projects} from '../../data/portfolioPieces';

const style={
        main:{
            backgroundColor:'#000a12',
            minWidth:'100%'
        },
        holder:{
            minWidth:'100%',
            minHeight:'340px',
            backgroundColor:'#000a12'
        },
        title:{
            fontFamily:'Open Sans, sans-serif',
            letterSpacing:'4px',
            textTransform:'upperCase',
            textAlign:'center',
            backgroundColor:'#4f5b62'
    
        }
}

class RelatedComponent extends React.Component {

    returnSimilar(item){
        if(item.projectType===this.props.type && item.projectTitle !== this.props.title){
        return (
            <RelatedCardComponent 
                key = {item.projectId} 
                type = {item.projectType} 
                title = {item.projectTitle}
                description = {item.projectDescription}
                projectDescriptionLong = {item.projectDescriptionLong}
                projectWork = {item.projectWork}
                link = {item.projectLink}
                linkToProject = {item.linkToProject}
                />
        )
    }}

render(){

    return (
        <div style={style.main}>
                <h3 style={style.title}>Other projects you might like</h3>
            <div style={style.holder}>
            {projects.map(item => this.returnSimilar(item) )}
            </div>
        </div>
    );
}

}

export default RelatedComponent;