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
            fontSize: '3em',
            height: '50px',
            left: '45%',
            margin: '-25px 0 0 -100px',
            padding: '10px 0px',
            position: 'relative',
            top: '50%',
            width: '400px',
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


class ContactMessage extends React.Component {
    constructor(props){
        super(props);
        this.title = 'contactMessage';
        this.state ={
            message:''
        }
        this.handleChange=(event)=>{
            this.props.onChange(event.target.value);
            this.setState({message: event.target.value});
        }
    }
    
    render(){

        return(
        <div>
        <Desktop>
                <div style={style.main}>
                    <h1 style={style.text}> So,{this.props.name} what do you want to tell me?</h1>
                    <form onSubmit={this.handleSubmit}>
                        <input style={style.input} type="textfield" value={this.state.message}
                        placeholder={this.props.placeholder}
                        onChange={this.handleChange} />
                  </form>
                </div>
        </Desktop> 
        <Tablet>
            <div style={styleTablet.main}>
            <h1 style={styleTablet.text}> So,{this.props.name} what do you want to tell me?</h1>
            <form onSubmit={this.handleSubmit}>
                <input style={styleTablet.input} type="textfield" value={this.state.message}
                placeholder={this.props.placeholder}
                onChange={this.handleChange} />
            </form>
        </div>
        </Tablet> 
        <Mobile>
            <div style={styleMobile.main}>
                <h1 style={styleMobile.text}> So,{this.props.name} what do you want to tell me?</h1>
                <form onSubmit={this.handleSubmit}>
                    <input style={styleMobile.input} type="textfield" value={this.state.message}
                    placeholder={this.props.placeholder}
                    onChange={this.handleChange} />
                </form>
            </div>
        </Mobile> 
        </div>

        );
    }
}


export default ContactMessage;