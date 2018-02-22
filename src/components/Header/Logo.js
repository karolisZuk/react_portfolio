import React from 'react';
import Responsive from 'react-responsive';
import { Link } from 'react-router-dom';

const Desktop = props => <Responsive {...props} minWidth={992} />;
const Tablet = props => <Responsive {...props} minWidth={768} maxWidth={991} />;
const Mobile = props => <Responsive {...props} maxWidth={767} />;

const style = {
        logo:{        
                display:'inline-block',
                marginTop:'10px',
                marginBottom:'-9px',
                paddingRight:'8px',
                color:'white',
                fontFamily:'PT Sans Narrow, sans-serif',
                textDecoration: 'none'
            }
}

const styleMobile = {
        logo:{        
                display:'inline-block',
                marginTop:'16px',
                marginBottom:'-20px',
                paddingRight:'4px',
                color:'white',
                fontFamily:'PT Sans Narrow, sans-serif',
                textDecoration: 'none',
                fontSize:'1.2em'
            }
}

const Logo = () => (
        <div>
        <Desktop><h1 style={style.logo}><Link style={style.logo} to = "/">LOGO</Link></h1></Desktop>
        <Tablet><h1 style={style.logo}><Link style={style.logo} to = "/">LOGO</Link></h1></Tablet>
        <Mobile><h1 style={styleMobile.logo}><Link style={style.logo} to = "/">LOGO</Link></h1></Mobile>
        </div>
);

export default Logo;