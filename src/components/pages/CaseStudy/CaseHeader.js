import Responsive from 'react-responsive';
import React from 'react';
import ReadPointer from '../../ReadPointer';

const style = {
    main:{
        height:'100vh'
    },
    title: {
        fontFamily:'PT Sans Narrow, sans-serif',
        textTransform:'uppercase',
        fontSize:'8em',
        letterSpacing:'20px',
        textAlign: 'center',
        marginBottom:'-50px',
        marginTop:'4%',
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
        fontSize:'0.8em',
        marginTop:'-60px',
    },
    link: {
        textDecoration:'none',
        fontSize:'0.8em',
        display: 'inline-block',
        color:'#4f5b62',
        marginBottom:'40px'
    },
}

const styleMobile = {
    main:{
        height:'100vh'
    },
    title: {
        fontFamily:'PT Sans Narrow, sans-serif',
        textTransform:'uppercase',
        fontSize:'2.2em',
        letterSpacing:'5px',
        textAlign: 'center',
        marginLeft:'1%',
        marginTop:'60px',
        lineHeight:'100%'
    },
    subtitle: {
        fontFamily:'Open Sans, sans-serif',
        textTransform:'uppercase',
        fontSize:'1.2em',
        letterSpacing:'8px',
        textAlign: 'center',
        paddingTop:'5%'
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

const styleTablet = {
    main:{
        height:'100vh'
    },
    title: {
        fontFamily:'PT Sans Narrow, sans-serif',
        textTransform:'uppercase',
        fontSize:'2.5em',
        letterSpacing:'5px',
        textAlign: 'center',
        marginLeft:'1%',
        marginTop:'80px'
    },
    subtitle: {
        fontFamily:'Open Sans, sans-serif',
        textTransform:'uppercase',
        fontSize:'1.2em',
        letterSpacing:'8px',
        textAlign: 'center',
        paddingTop:'100px'
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

const Desktop = props => <Responsive {...props} minWidth={992} />;
const Tablet = props => <Responsive {...props} minWidth={768} maxWidth={991} />;
const Mobile = props => <Responsive {...props} maxWidth={767} />;

const CaseHeader = (props) => (
    <div style={style.main}>
    <Desktop>
        <h1 style={style.title}> {props.title}</h1>

        <div style={style.subtitle}>
            <h3 style={style.subtitleText}>type:{props.type}</h3>
            {props.linkToProject ? <div><p style={style.go}>Visit </p><a target="blank" style={style.link} href={`http://${props.linkToProject}`}>{props.title}</a></div> : ''}

        </div>
        <ReadPointer />
    </Desktop>
    <Tablet>
        <h1 style={styleTablet.title}> {props.title}</h1>

        <div style={styleTablet.subtitle}>
            <h3 style={styleTablet.subtitleText}>type:{props.type}</h3>
            {props.linkToProject ? <div><p style={style.go}>Visit </p><a target="blank" style={styleTablet.link} href={`http://${props.linkToProject}`}>{props.title}</a></div> : ''}

        </div>
        <ReadPointer />
    </Tablet>
    <Mobile>
        <h1 style={styleMobile.title}> {props.title}</h1>

        <div style={styleMobile.subtitle}>
            <h3 style={styleMobile.subtitleText}>type:{props.type}</h3>
            {props.linkToProject ? <div><p style={styleMobile.go}>Visit </p><a target="blank" style={styleMobile.link} href={`http://${props.linkToProject}`}>{props.title}</a></div> : ''}

        </div>
        <ReadPointer />
    </Mobile>
    </div>
);



export default CaseHeader;