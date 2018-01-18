import React from 'react';
import ReadPointer from './ReadPointer';

const style = {
    main:{
        height:'100vh'
    },
    title: {
        fontFamily:'PT Sans Narrow, sans-serif',
        textTransform:'uppercase',
        fontSize:'9em',
        letterSpacing:'20px',
        textAlign: 'center',
        marginBottom:'-60px',
        marginLeft:'2%'
    },
    subtitle: {
        fontFamily:'PT Sans Narrow, sans-serif',
        textTransform:'uppercase',
        fontSize:'3em',
        letterSpacing:'10px',
        textAlign: 'center',
        marginBottom:'-30px'
    },
    go:{
        display: 'inline-block',
        fontSize:'0.8em'
    },
    link: {
        textDecoration:'none',
        fontSize:'0.8em',
        display: 'inline-block',
        color:'#4f5b62'
    },
}

const CaseHeader = (props) => (
    <div style={style.main}>
        <h1 style={style.title}> {props.title}</h1>

        <div style={style.subtitle}>
            <h3 style={style.subtitleText}>type:{props.type}</h3>
            {props.linkToProject ? <div><p style={style.go}>Visit </p><a target="blank" style={style.link} href={`http://${props.linkToProject}`}>{props.title}</a></div> : ''}
        <ReadPointer />
        </div>
    </div>
);



export default CaseHeader;