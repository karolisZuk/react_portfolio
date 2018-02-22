import Responsive from 'react-responsive';
import React from 'react';
import CirclePic from './CirclePic';
import AboutText from './AboutText';

const style = {
        content:{
            width:'90%',
            marginTop:'5%',
            marginLeft:'5%',
            display:'flex'
        }
}

const styleMobile = {
    content:{
        marginLeft:'10%',
        width:'90%',
        marginTop:'15%'
    }
}

const styleTablet = {
    content:{
        width:'90%',
        marginTop:'40px',
        marginLeft:'5%',
        display:'flex'
    }
}

const Desktop = props => <Responsive {...props} minWidth={992} />;
const Tablet = props => <Responsive {...props} minWidth={768} maxWidth={991} />;
const Mobile = props => <Responsive {...props} maxWidth={767} />;

class AboutPage extends React.Component {
    constructor(props){
        super(props);
        this.title = 'about';
    }

    render(){

        return (
            <div>
                <Desktop>
                    <div style={style.content}>
                    <CirclePic />
                    <AboutText />
                    </div>
                </Desktop>
                <Tablet>
                        <div style={styleTablet.content}>
                            <CirclePic />
                            <AboutText />
                        </div>
                </Tablet>
                <Mobile>
                        <div style={styleMobile.content}>
                            <AboutText />
                        </div>
                </Mobile>
            </div>
        );
    }

}

export default AboutPage;