import Responsive from 'react-responsive';
import React from 'react';

const style = {
            main: {
                minWidth: '480px',
                width: '70%',
                textIndent:'50px',
                background: '#000a12',
                float: 'left',
                marginBottom:'20px'
            },
            longText:{
                textAlign:'justify',
                margin:'20px',
                fontFamily:'Open Sans, sans-serif',
                fontSize:'1.5em',
                color:'white'
            }
}

const styleTablet = {
    main: {
        width: '90%',
        textIndent:'30px',
        background: '#000a12',
        float: 'left',
        marginBottom:'20px',
        margin:'20px'
    },
    longText:{
        textAlign:'justify',
        fontFamily:'Open Sans, sans-serif',
        fontSize:'1.3em',
        color:'white'
    }
}

const styleMobile = {
    main: {
        width:'80%',
        textIndent:'30px',
        float: 'left',
        marginBottom:'20px',
        marginLeft:'2%',
        paddingBottom:'130px'
    },
    longText:{
        textAlign:'justify',
        fontFamily:'Open Sans, sans-serif',
        fontSize:'1em',
        color:'white',
        marginBottom:'30px'
    }
}

const Desktop = props => <Responsive {...props} minWidth={992} />;
const Tablet = props => <Responsive {...props} minWidth={768} maxWidth={991} />;
const Mobile = props => <Responsive {...props} maxWidth={767} />;

const AboutText = (props) => (
    <div>
    <Desktop>
        <div style={style.main}>

        <p style={style.longText}>
        Hey, I am Karolis and welcome to my page.
        </p>
        </div>
    </Desktop>
    <Tablet>
    <div style={styleTablet.main}>


    <p style={styleTablet.longText}>
    Hey, I am Karolis and welcome to my page.
    </p>
    </div>
</Tablet>   
<Mobile>
    <div style={styleMobile.main}>

    <p style={styleMobile.longText}>
    Hey, I am Karolis and welcome to my page.
    </p>
    </div>
</Mobile>      
    </div>
);

export default AboutText;