import React from 'react';
import Responsive from 'react-responsive';
import { Link } from 'react-router-dom';

const Desktop = props => <Responsive {...props} minWidth={992} />;
const Tablet = props => <Responsive {...props} minWidth={768} maxWidth={991} />;
const Mobile = props => <Responsive {...props} maxWidth={767} />;

const style = {
        logo:{        
                display:'inline-block',
                marginTop:'20px',
                paddingRight:'8px',
                color:'white',
                fontFamily:'PT Sans Narrow, sans-serif',
                textDecoration: 'none',
                marginLeft:'10px'
            },
        img:{
                maxWidth:'60px',
                marginBottom:'-10px'
        }
}

const styleTablet = {
        logo:{        
                display:'inline-block',
                marginTop:'20px',
                paddingRight:'8px',
                color:'white',
                fontFamily:'PT Sans Narrow, sans-serif',
                textDecoration: 'none',
                marginLeft:'10px'
            },
        img:{
                maxWidth:'60px',
                marginBottom:'-10px'
        }
}


const styleMobile = {
        logo:{        
                display:'inline-block',
                marginTop:'20px',
                paddingRight:'8px',
                color:'white',
                fontFamily:'PT Sans Narrow, sans-serif',
                textDecoration: 'none',
                marginLeft:'10px'
            },
        img:{
                maxWidth:'40px',
                marginBottom:'-10px'
        }
}

const Logo = () => (
        <div>
        <Desktop><Link style={style.logo} to = "/"><img src='data/img/logo.png' alt='Karolis Zukas portfolio logo' style={style.img} /></Link></Desktop>
        <Tablet><Link style={styleTablet.logo} to = "/"><img src='data/img/logo.png' alt='Karolis Zukas portfolio logo' style={styleTablet.img} /></Link></Tablet>
        <Mobile><Link style={styleMobile.logo} to = "/"><img src='data/img/logo.png' alt='Karolis Zukas portfolio logo' style={styleMobile.img} /></Link></Mobile>
        </div>
);

export default Logo;