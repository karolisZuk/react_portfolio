import Responsive from 'react-responsive';
import React from 'react';

const style = {
        image: {
            minHeight: 450,
            width:'100%',
            backgroundSize:'100%',
            backgroundRepeat: 'no-repeat',
            transition:'all 0.8s',
            marginBottom:'15px'

        }
}

const styleTablet = {
    image: {
        maxHeight:'100%',
        minHeight:'400px',
        position: 'relative',
        backgroundSize: '100%',
        backgroundRepeat: 'no-repeat',
        marginBottom:'15px'
    }
}

const styleMobile = {
    image: {
        maxHeight:'100%',
        minHeight:'300px',
        position: 'relative',
        backgroundSize: '100%',
        backgroundRepeat: 'no-repeat',
        marginBottom:'15px'
    }
}

const Desktop = props => <Responsive {...props} minWidth={992} />;
const Tablet = props => <Responsive {...props} minWidth={768} maxWidth={991} />;
const Mobile = props => <Responsive {...props} maxWidth={767} />;

class ImageComponent extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            scale:'110%'
        }
    }

    render(){
        return (
            <div>
                <Desktop>
                    <div style={{...style.image, backgroundImage: "url(/"+ this.props.imageUrl + ")"}} >
                    </div>
                </Desktop>
                
                <Tablet>
                    <div style={{...styleTablet.image, backgroundImage: "url(/" + this.props.imageUrl + ")"}} >
                    </div>
                </Tablet>

                <Mobile>
                    <div style={{...styleMobile.image, backgroundImage: "url(/" + this.props.imageUrl + ")"}} >
                    </div>
                </Mobile>
            </div>
        );
    }

}

export default ImageComponent;