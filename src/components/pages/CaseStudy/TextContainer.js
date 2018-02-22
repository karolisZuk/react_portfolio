import React from 'react';
import Responsive from 'react-responsive';

const style = {
            main: {
                minWidth: '480px',
                width: '47.7%',
                textIndent:'50px',
                float: 'left',
                marginBottom:'20px'
            },
            longText:{
                textAlign:'justify',
                margin:'20px',
                fontFamily:'Open Sans, sans-serif',
                fontSize:'1.5em'
            },
            description:{
                fontFamily:'PT Sans Narrow, sans-serif',
                letterSpacing:"2px",
                fontSize:'2em',
                marginLeft:'20px'
            },
            headers:{
                fontFamily: 'PT Sans Narrow, sans-serif',
                textTransform:'uppercase'
            }
}

const styleMobile = {
    main: {
        minWidth: '98%',
        width: '98%',
        textIndent:'20px',
        marginBottom:'20px'
    },
    longText:{
        textAlign:'justify',
        margin:'5px',
        fontFamily:'Open Sans, sans-serif',
        fontSize:'1em'
    },
    description:{
        fontFamily:'PT Sans Narrow, sans-serif',
        letterSpacing:"2px",
        fontSize:'2em',
        marginLeft:'20px'
    }
}

const styleTablet = {
    main: {
        minWidth: '98%',
        width: '98%',
        textIndent:'20px',
        marginBottom:'20px'
    },
    longText:{
        textAlign:'justify',
        margin:'5px',
        fontFamily:'Open Sans, sans-serif',
        fontSize:'1em'
    },
    description:{
        fontFamily:'PT Sans Narrow, sans-serif',
        letterSpacing:"2px",
        fontSize:'2em',
        marginLeft:'20px'
    }
}

const Desktop = props => <Responsive {...props} minWidth={992} />;
const Tablet = props => <Responsive {...props} minWidth={768} maxWidth={991} />;
const Mobile = props => <Responsive {...props} maxWidth={767} />;

const TextContainer = (props) => (
    <div>
        <Desktop>
            <div style={style.main}>
            <p style={style.description} >"-{props.description}."</p>
            <h2 style={style.headers} >THE context: </h2>
            <p style={style.longText} >{props.context}</p>
            <h2 style={style.headers} >THE process: </h2>
            <p style={style.longText} >{props.process}</p>
            <h2 style={style.headers} >THE result: </h2>
            <p style={style.longText} >{props.result}</p>

            </div>
        </Desktop>
        <Tablet>
        <div style={styleTablet.main}>
        <p style={styleTablet.description} >"-{props.description}."</p>
        <h2 style={style.headers} >THE context: </h2>
        <p style={styleTablet.longText} >{props.context}</p>
        <h2 style={style.headers} >THE process: </h2>
        <p style={styleTablet.longText} >{props.process}</p>
        <h2 style={style.headers} >THE result: </h2>
        <p style={styleTablet.longText} >{props.result}</p>
        </div>
        </Tablet>
        <Mobile>
    <div style={styleMobile.main}>
    <p style={styleMobile.description} >"-{props.description}."</p>
    <h2 style={style.headers} >THE context: </h2>
    <p style={styleMobile.longText} >{props.context}</p>
    <h2 style={style.headers} >THE process: </h2>
    <p style={styleMobile.longText} >{props.process}</p>
    <h2 style={style.headers} >THE result: </h2>
    <p style={styleMobile.longText} >{props.result}</p>
    </div>
        </Mobile>
    </div>
);

export default TextContainer;