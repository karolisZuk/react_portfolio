import React from 'react';
import Responsive from 'react-responsive';

const style = {
        main:{
                fontSize:'1.6em',
                textAlign:'center',
                textTransform:'uppercase',
                fontFamily:'Open Sans, sans-serif',
                letterSpacing:'7px'
            },
        wrapper:{
                marginTop:'50px',
                paddingBottom:'40px',
                marginLeft:'-1%'
        }
}

const styleTablet = {
        main:{
                fontSize:'1.2em',
                textAlign:'center',
                textTransform:'uppercase',
                fontFamily:'Open Sans, sans-serif',
                letterSpacing:'7px'
            },
        wrapper:{
                marginTop:'150px',
                paddingBottom:'40px',
                marginLeft:'2%'
        }
}

const styleMobile = {
        main:{
                fontSize:'1em',
                textAlign:'center',
                textTransform:'uppercase',
                fontFamily:'Open Sans, sans-serif',
                letterSpacing:'7px'
            },
        wrapper:{
                marginTop:'20%',
                paddingBottom:'20px',
                marginLeft:'2%'
        }
}

const Desktop = props => <Responsive {...props} minWidth={992} />;
const Tablet = props => <Responsive {...props} minWidth={768} maxWidth={991} />;
const Mobile = props => <Responsive {...props} maxWidth={767} />;

const ReadPointer = () => (
        <div>
        <Desktop>
                <div style={style.wrapper}>
                        <p  style={style.main}>read</p>
                        <p  style={style.main}>&#8675;</p>   
                </div>
        </Desktop> 
        <Tablet>
                <div style={styleTablet.wrapper}>
                        <p  style={styleTablet.main}>read</p>
                        <p  style={styleTablet.main}>&#8675;</p>   
                </div>
        </Tablet> 
        <Mobile>
                <div style={styleMobile.wrapper}>
                        <p  style={styleMobile.main}>read</p>
                        <p  style={styleMobile.main}>&#8675;</p>   
                </div>
        </Mobile> 
        </div>

);

export default ReadPointer;