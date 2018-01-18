import React from 'react';
import { Link} from 'react-router-dom';

const style = {
    main: {
        position: 'absolute',
        bottom: '5%',
        left:'5%',
        backgroundColor: 'rgba(2, 4, 2, 0.1)',
        letterSpacing: '5px',
        fontFamily: 'Open Sans, sans-serif',
        border:'1px solid white',
        color:'white',
        fontSize:'1em',
        borderRadius:'3px',
        textTransform:'uppercase',
        paddingRight:'20px',
        paddingLeft:'20px'
        }
}

const Cta = (props) => (
    <Link to={props.link}>
        <button primary style={style.main} > {props.text} </button>
    </Link>
);

export default Cta;