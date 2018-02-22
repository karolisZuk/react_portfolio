import React from 'react';
import Responsive from 'react-responsive';

const style = {
    main:{
            margin:'0 auto',
            width:'100%'
        },
    text:{
        fontSize:'3.6em',
        textAlign:'center',
        textTransform:'uppercase',
        fontFamily:'Open Sans, sans-serif',
        letterSpacing:'7px'
    },
    input: {
        backgroundColor: 'transparent',
        border: 'none',
        borderBottom: '2px solid #CCC',
        color: 'dodgerblue',
        boxSizing: 'border-box',
        fontFamily: 'Open Sans, sans-serif',
        fontSize: '2.6em',
        height: '50px',
        left: '40%',
        margin: '-25px 0 0 -100px',
        padding: '10px 0px',
        position: 'relative',
        top: '50%',
        width: '500px',
        outline: 'none',  
        textAlign: 'center'
      }
}

const styleTablet = {
    main:{
            margin:'0 auto',
            width:'100%'
        },
    text:{
        fontSize:'3.6em',
        textAlign:'center',
        textTransform:'uppercase',
        fontFamily:'Open Sans, sans-serif',
        letterSpacing:'7px'
    },
    input: {
        backgroundColor: 'transparent',
        border: 'none',
        borderBottom: '2px solid #CCC',
        color: 'dodgerblue',
        boxSizing: 'border-box',
        fontFamily: 'Open Sans, sans-serif',
        fontSize: '2.2em',
        height: '50px',
        left: '38%',
        margin: '-25px 0 0 -100px',
        padding: '10px 0px',
        position: 'relative',
        top: '50%',
        width: '400px',
        outline: 'none',  
        textAlign: 'center'
      }
}

const styleMobile = {
    main:{
            margin:'0 auto',
            width:'100%'
        },
    text:{
        fontSize:'3em',
        textAlign:'center',
        textTransform:'uppercase',
        fontFamily:'Open Sans, sans-serif',
        letterSpacing:'3px'
    },
    input: {
        backgroundColor: 'transparent',
        border: 'none',
        borderBottom: '2px solid #CCC',
        color: 'dodgerblue',
        boxSizing: 'border-box',
        fontFamily: 'Open Sans, sans-serif',
        fontSize: '2em',
        height: '30px',
        left: '40%',
        margin: '-25px 0 0 -100px',
        padding: '10px 0px',
        position: 'relative',
        top: '50%',
        width: '300px',
        outline: 'none',  
        textAlign: 'center'
      }
}

const Desktop = props => <Responsive {...props} minWidth={992} />;
const Tablet = props => <Responsive {...props} minWidth={768} maxWidth={991} />;
const Mobile = props => <Responsive {...props} maxWidth={767} />;


class ContactInfo extends React.Component {
    constructor(props){
        super(props);
        this.title = 'contactInfo';
        this.state ={
            email:''
        }
        this.handleChange=(event)=>{
            this.props.onChange(event.target.value);
            this.setState({email: event.target.value});
        }
    }
    
    render(){

        return(
        <div>
        <Desktop>
                <div style={style.main}>
                    <h1 style={style.text}>How can I get back at you?</h1>
                    <form onSubmit={this.handleSubmit}>
                        <input style={style.input} type="email" value={this.state.email} placeholder={this.props.placeholder}
                        onChange={this.handleChange} />
                        <span />
                  </form>
                </div>
        </Desktop> 
        <Tablet>
            <div style={styleTablet.main}>
                <h1 style={styleTablet.text}>How can I get back at you?</h1>
                <form onSubmit={this.handleSubmit}>
                    <input style={styleTablet.input} type="email" value={this.state.email} placeholder={this.props.placeholder}
                    onChange={this.handleChange} />
                    <span />
                </form>
            </div>
        </Tablet> 
        <Mobile>
            <div style={styleMobile.main}>
                <h1 style={styleMobile.text}>How can I get back at you?</h1>
                <form onSubmit={this.handleSubmit}>
                    <input style={styleMobile.input} type="email" value={this.state.email} placeholder={this.props.placeholder}
                    onChange={this.handleChange} />
                    <span />
                </form>
            </div>
        </Mobile> 
        </div>

        );
    }
}


export default ContactInfo;