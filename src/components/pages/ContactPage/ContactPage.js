import Responsive from 'react-responsive';
import React from 'react';
import ContactName from './ContactName';
import ContactInfo from './ContactInfo';
import ContactMessage from './ContactMessage';
import Send from './Send';

const style = {
       main:{
        marginTop:'60px',
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
        marginTop:'60px',
        color:'white'
    }
}

const styleTablet = {
   main:{
    marginTop:'60px',
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
        this.setName=(e)=>{
            this.setState({name:e});
        }
        this.setMessage=(e)=>{
            this.setState({message:e});
        }
        this.setEmail=(e)=>{
            this.setState({email:e});
        }

        this.nextStage=()=>{
            if(this.state.stage < 3){
                this.setState({stage:this.state.stage+1})
            }
        }
        this.previousStage=()=>{
            if(this.state.stage >= 1){
                this.setState({stage:this.state.stage-1})
            }
        }
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

          //  document.getElementById('ghostForm').submit();

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
                <form id='ghostForm' style={style.debug} method='POST' action='https://formspree.io/kar.zukas@gmail.com'>
                    <input id='ghostName' type="text" value={this.state.name} />
                    <input id='ghostEmail' type="email"  value={this.state.email} />
                    <input id='ghostMessage' type="email"  value={this.state.message} />
                </form>
                    <div style={style.main}>
                        <p>
                        Stage: {this.state.stage}, 
                        Email: {this.state.email}, 
                        Name: {this.state.name},
                        Message: {this.state.message}
                        </p><br />

                        {this.stage[this.state.stage]}

                    </div>
                    <div style={style.buttonPanel} >
                        <button primary style={style.button} onClick={this.previousStage}> Previous </button>
                        <button primary style={style.button} onClick={this.nextStage}> Next </button>
                    </div>
                </Desktop>
                <Tablet>
                    <div style={styleTablet.main}>
                        <p>
                        Stage: {this.state.stage}, 
                        Email: {this.state.email}, 
                        Name: {this.state.name},
                        Message: {this.state.message}
                        </p><br />

                        {this.stage[this.state.stage]}

                    </div>
                    <div style={style.buttonPanel} >
                        <button primary style={style.button} onClick={this.previousStage}> Previous </button>
                        <button primary style={style.button} onClick={this.nextStage}> Next </button>
                    </div>
                </Tablet>
                <Mobile>
                    <div style={styleMobile.main}>
                        <p>Stage: {this.state.stage}, Email: {this.state.email}, Name: {this.state.name},Message: {this.state.message}</p><br />

                        {this.stage[this.state.stage]}

                    </div>
                    <div style={style.buttonPanel} >
                        <button primary style={style.button} onClick={this.previousStage}> Previous </button>
                        <button primary style={style.button} onClick={this.nextStage}> Next </button>
                    </div>     
                </Mobile>
            </div>
        );
    }

}

export default ContactPage;