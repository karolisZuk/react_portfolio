import Responsive from 'react-responsive';
import React from 'react';
import { spring, AnimatedSwitch } from 'react-router-transition';
import ContactName from './ContactName';
import ContactInfo from './ContactInfo';
import ContactMessage from './ContactMessage';
import Send from './Send';

const style = {
       main:{
        marginTop:'200px',
        color:'white',
        overflow:'hidden',
        width: '100vw',
        minHeight:'400px'
       },
       buttonPanel:{
        position:'fixed',
        top:'140%'
       },
        button:{
                border:'1px solid white',
                color:'white',
                textAlign:'center',
                left:'5%',
                backgroundColor: 'rgba(2, 4, 2, 0.1)',
                letterSpacing: '3px',
                fontFamily: 'Open Sans, sans-serif',
                fontSize:'1em',
                borderRadius:'3px',
                textTransform:'lowercase',
                paddingRight:'13px',
                paddingLeft:'13px',
                paddingTop:'4px',
                paddingBottom:'4px',
                cursor: 'pointer',
                margin:'30px'
            }
}

const styleMobile = {
    main:{
        marginTop:'150px',
        color:'white'
    }
}

const styleTablet = {
   main:{
    marginTop:'200px',
    color:'white'
   }
}

const Desktop = props => <Responsive {...props} minWidth={992} />;
const Tablet = props => <Responsive {...props} minWidth={768} maxWidth={991} />;
const Mobile = props => <Responsive {...props} maxWidth={767} />;

class ContactPage extends React.Component {
    constructor(props){
        super(props);
        this.title = 'contact';
        this.state = {
            stage:0,
            message:'Your message',
            name: 'Your Name',
            email: 'Your@email.com'
        }
        this.setName=(e)=>{this.setState({name:e});}
        this.setMessage=(e)=>{this.setState({message:e});}
        this.setEmail=(e)=>{this.setState({email:e});}

        this.nextStage=()=>{if(this.state.stage < 3){this.setState({stage:this.state.stage+1})} }
        this.previousStage=()=>{if(this.state.stage >= 1){this.setState({stage:this.state.stage-1})}}
        
        this.sendMessage=(event)=>{
            console.log(event.target.value);

            fetch('https://www.enformed.io/akygwu7z', {
                method: 'POST',
                headers:{
                    'Accept':'application/json',
                    'Content-Type':'application/json'
                },
                data:JSON.stringify(this.state)
                })
                .then(data=>data.json())
                .then(result=> console.log(result))
                .catch(err=>console.log(err));

            if(this.state.stage >= 1){
                this.setState({stage:this.state.stage+1})
            }
        }

        this.stage = [
            <ContactName onChange={this.setName} placeholder={this.state.name} callback={this.nextStage}/>,
            <ContactInfo onChange={this.setEmail} placeholder={this.state.email} callfront={this.nextStage} callback={this.previousStage} />,
            <ContactMessage name={this.state.name} onChange={this.setMessage} placeholder={this.state.message} callfront={this.sendMessage} callback={this.previousStage} />,
            <Send />
        ]
    }

    render(){

        return (
            <div>
                <Desktop>
                    <div style={style.main}>{this.stage[this.state.stage]}</div>
                </Desktop>
                <Tablet>
                    <div style={styleTablet.main}>{this.stage[this.state.stage]}</div>
                </Tablet>
                <Mobile>
                    <div style={styleMobile.main}>{this.stage[this.state.stage]}</div>    
                </Mobile>
            </div>
        );
    }

}

export default ContactPage;