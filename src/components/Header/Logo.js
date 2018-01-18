import React from 'react';
import { Link } from 'react-router-dom';

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

const Logo = () => (
        <h1 style={style.logo}><Link style={style.logo} to = "/">LOGO</Link></h1>
);

export default Logo;