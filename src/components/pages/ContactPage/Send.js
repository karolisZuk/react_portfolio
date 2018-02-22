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

        }
}

const Desktop = props => <Responsive {...props} minWidth={992} />;
const Tablet = props => <Responsive {...props} minWidth={768} maxWidth={991} />;
const Mobile = props => <Responsive {...props} maxWidth={767} />;

const Send = () => (
        <div>
        <Desktop>
                <div style={style.wrapper}>
                    <p  style={style.main}> Send</p>
                </div>
        </Desktop> 
        <Tablet>
                <div style={styleTablet.wrapper}>
                        <p  style={styleTablet.main}> Send</p>
                </div>
        </Tablet> 
        <Mobile>
                <div style={styleMobile.wrapper}>
                        <p  style={styleMobile.main}> Send</p>

                </div>
        </Mobile> 
        </div>

);

export default Send;