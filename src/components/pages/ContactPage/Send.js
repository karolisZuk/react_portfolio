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
            text:{
                fontSize:'3.6em',
                textAlign:'center',
                textTransform:'uppercase',
                fontFamily:'Open Sans, sans-serif',
                letterSpacing:'7px'
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
        text:{
                fontSize:'3.6em',
                textAlign:'center',
                textTransform:'uppercase',
                fontFamily:'Open Sans, sans-serif',
                letterSpacing:'7px'
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
        text:{
                fontSize:'3em',
                textAlign:'center',
                textTransform:'uppercase',
                fontFamily:'Open Sans, sans-serif',
                letterSpacing:'3px'
        }

}

const Desktop = props => <Responsive {...props} minWidth={992} />;
const Tablet = props => <Responsive {...props} minWidth={768} maxWidth={991} />;
const Mobile = props => <Responsive {...props} maxWidth={767} />;

const Send = () => (
        <div>
        <Desktop>
                <div style={style.wrapper}>
                    <h1  style={style.text}> Your message was sent. Will get back at you soon.</h1>
                </div>
        </Desktop> 
        <Tablet>
                <div style={styleTablet.wrapper}>
                        <p  style={styleTablet.text}>Your message was sent. Will get back at you soon.</p>
                </div>
        </Tablet> 
        <Mobile>
                <div style={styleMobile.wrapper}>
                        <h1  style={styleMobile.text}>Your message was sent. Will get back at you soon.</h1>
                </div>
        </Mobile> 
        </div>

);

export default Send;