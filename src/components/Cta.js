import React from 'react';
import { Link} from 'react-router-dom';
import Responsive from 'react-responsive';

const style = {
    main: {
        position: 'absolute',
        bottom: '5%',
        left:'5%',
        backgroundColor: 'rgba(2, 4, 2, 0.3)',
        letterSpacing: '4px',
        fontFamily: 'Open Sans, sans-serif',
        border:'1px solid white',
        fontSize:'1em',
        borderRadius:'3px',
        textTransform:'lowercase',
        paddingRight:'20px',
        paddingLeft:'20px',
        paddingTop:'8px',
        paddingBottom:'8px',
        cursor: 'pointer',
        color:'white'
        }
}

const styleMobile = {
    main: {
        position: 'absolute',
        bottom: '5%',
        textAlign:'center',
        left:'5%',
        backgroundColor: 'rgba(2, 4, 2, 0.1)',
        letterSpacing: '3px',
        fontFamily: 'Open Sans, sans-serif',
        border:'1px solid white',
        color:'white',
        fontSize:'1em',
        borderRadius:'3px',
        textTransform:'lowercase',
        paddingRight:'13px',
        paddingLeft:'13px',
        paddingTop:'4px',
        paddingBottom:'4px',
        cursor: 'pointer'
        }
}


const Desktop = props => <Responsive {...props} minWidth={992} />;
const Tablet = props => <Responsive {...props} minWidth={768} maxWidth={991} />;
const Mobile = props => <Responsive {...props} maxWidth={767} />;


const Cta = (props) => (
    <div>
    <Desktop><Link to={props.link}><button style={{...style.main, color:props.color, border:'1px solid '+props.color}} > {props.text} </button></Link></Desktop>
    <Tablet><Link to={props.link}><button style={{...style.main, color:props.color, border:'1px solid '+props.color}} > {props.text} </button></Link></Tablet>
    <Mobile><Link to={props.link}><button style={{...styleMobile.main, color:props.color, border:'1px solid '+props.color}} > {props.text} </button></Link></Mobile>   
    </div>
);

export default Cta;