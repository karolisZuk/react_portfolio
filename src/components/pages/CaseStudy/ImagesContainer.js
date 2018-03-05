import React from 'react';
import Responsive from 'react-responsive';
import Image from '../../ImageComponent';

const style = {
        main: {
            minWidth: '480px',
            margin:'20px',
            minHeight:'600px',
            marginLeft: '50.5%'
        }
}

const styleMobile = {
    main: {
        minHeight:'100%',
        margin:'5px'
    }
}

const styleTablet = {
    main: {
        minWidth: '98%',
        margin:'5px',
        minHeight:'600px'
    }
}

const Desktop = props => <Responsive {...props} minWidth={992} />;
const Tablet = props => <Responsive {...props} minWidth={768} maxWidth={991} />;
const Mobile = props => <Responsive {...props} maxWidth={767} />;

const ImagesContainer = (props) => (

<div>
    <Desktop>
    <div style={style.main}>
        {props.images.map(item => <Image key={item} imageUrl={item} /> )}
    </div>
    </Desktop>
    <Tablet>
    <div style={styleTablet.main}>
        {props.images.map(item => <Image key={item} imageUrl={item} /> )}
    </div>
    </Tablet>
    <Mobile>
    <div style={styleMobile.main}>
        {props.images.map(item => <Image key={item} imageUrl={item} /> )}
    </div>
    </Mobile>
</div>
);

export default ImagesContainer;