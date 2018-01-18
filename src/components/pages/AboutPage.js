import React from 'react';
import HeaderComponent from '../Header/HeaderComponent';
import FooterComponent from '../FooterComponent';

const style = {
        
}


class AboutPage extends React.Component {
    constructor(props){
        super(props);
        this.title = 'about';
    }

    render(){

        return (
            <div>
            <HeaderComponent title={this.title} />
            
            <div>
            <h2>About Page</h2>
            </div>
            <FooterComponent />
            </div>
        );
    }

}

export default AboutPage;