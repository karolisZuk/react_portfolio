import React from 'react';
import Responsive from 'react-responsive';
import ReadPointer from '../../ReadPointer';

const style = {
    main:{
        height:'100vh'
    },
    title: {
        fontFamily:'PT Sans Narrow, sans-serif',
        textTransform:'uppercase',
        fontSize:'7em',
        letterSpacing:'20px',
        textAlign: 'center'
    },
    subtitle:{
        marginTop:'-40px',
        letterSpacing:'2px',
        fontSize:'1.5em',
        fontFamily:'Open Sans, sans-serif',
        textAlign:'center'
    }
}

const styleTablet = {
    main:{
        height:'100vh'
    },
    title: {
        fontFamily:'PT Sans Narrow, sans-serif',
        textTransform:'uppercase',
        fontSize:'5em',
        letterSpacing:'20px',
        textAlign: 'center'
    },
    subtitle:{
        marginTop:'-40px',
        letterSpacing:'2px',
        fontSize:'1.3em',
        fontFamily:'Open Sans, sans-serif',
        textAlign:'center'
    }
}

const styleMobile = {
    main:{
        height:'100vh'
    },
    title: {
        fontFamily:'PT Sans Narrow, sans-serif',
        textTransform:'uppercase',
        fontSize:'4em',
        letterSpacing:'5px',
        textAlign: 'center'
    },
    subtitle:{
        marginTop:'-40px',
        letterSpacing:'2px',
        fontSize:'1.3em',
        fontFamily:'Open Sans, sans-serif',
        textAlign:'center'
    }
}

const Desktop = props => <Responsive {...props} minWidth={992} />;
const Tablet = props => <Responsive {...props} minWidth={768} maxWidth={991} />;
const Mobile = props => <Responsive {...props} maxWidth={767} />;

const NoteHeader = (props) => (
    <div>
    <Desktop>
    <div style={style.main}>
        <h1 style={style.title}> {props.title} </h1>
        <p style={style.subtitle}> {props.subtitle} </p>
        <ReadPointer />
    </div>
    </Desktop>
    <Tablet>
    <div style={styleTablet.main}>
        <h1 style={styleTablet.title}> {props.title} </h1>
        <p style={styleTablet.subtitle}> {props.subtitle} </p>
        <ReadPointer />

    </div>
    </Tablet>
    <Mobile>
    <div style={styleMobile.main}>
        <h1 style={styleMobile.title}> {props.title} </h1>
        <p style={styleMobile.subtitle}> {props.subtitle} </p>
        <ReadPointer />

    </div>
    </Mobile>
    </div>
);



export default NoteHeader;