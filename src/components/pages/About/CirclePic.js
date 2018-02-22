import Responsive from 'react-responsive';
import React from 'react';

const style = {
        main:{        
                color:'white',
                border:'1px solid white',
                width:'250px',
                height:'250px',
                borderRadius:'250px',
                margin:'20px',
                backgroundColor:'#000a12'
            }
}

const styleTablet = {
        main:{        
                color:'white',
                border:'1px solid white',
                width:'180px',
                height:'180px',
                borderRadius:'250px',
                margin:'20px',
                backgroundColor:'#000a12'
            }
}


const Desktop = props => <Responsive {...props} minWidth={992} />;
const Tablet = props => <Responsive {...props} minWidth={768} maxWidth={991} />;
const Mobile = props => <Responsive {...props} maxWidth={767} />;

const CirclePic = (props) => (
        <div>
        <Desktop>
                <img src={props.src} alt={props.alt} style={style.main}/>
        </Desktop>
        <Tablet>
                <img src={props.src} alt={props.alt} style={styleTablet.main}/>
        </Tablet>
        <Mobile />
        </div>
);

export default CirclePic;