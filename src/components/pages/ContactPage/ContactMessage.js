import React from 'react';
import Responsive from 'react-responsive';

const style = {
        main:{
                margin:'0 auto',
                width:'100%'
            },
            buttonWrapper:{
                marginLeft:'40%'
            },
        text:{
            fontSize:'3.3em',
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
            height: '160px',
            left: '32%',
            margin: '-25px 0 0 -100px',
            padding: '10px 0px',
            paddingTop:80,
            position: 'relative',
            top: '50%',
            width: '700px',
            outline: 'none',  
            textAlign: 'center',
            lineHeight: '60px'
          },
    button:{
            border:'1px solid white',
            color:'white',
            textAlign:'center',
            backgroundColor: 'rgba(2, 4, 2, 0.1)',
            letterSpacing: '6px',
            fontFamily: 'Open Sans, sans-serif',
            fontSize:'2em',
            borderRadius:'3px',
            textTransform:'lowercase',
            paddingTop:'4px',
            paddingBottom:'4px',
            cursor: 'pointer',
            margin:'30px',
            paddingRight:'13px',
            paddingLeft:'13px'
        },
        buttonDisabled:{
            border:'1px solid rgb(23,23,23)',
            textAlign:'center',
            left:'5%',
            backgroundColor: 'rgba(2, 4, 2, 0.1)',
            letterSpacing: '6px',
            fontFamily: 'Open Sans, sans-serif',
            fontSize:'2em',
            borderRadius:'3px',
            textTransform:'lowercase',
            paddingRight:'13px',
            paddingLeft:'13px',
            paddingTop:'4px',
            paddingBottom:'4px',
            margin:'30px'
        }
}

const styleTablet = {
    main:{
            margin:'0 auto',
            width:'100%'
        },
        buttonWrapper:{
            marginLeft:'25%'
        },
    text:{
        fontSize:'3.3em',
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
            height: '160px',
            left: '18%',
            margin: '-25px 0 0 -100px',
            padding: '10px 0px',
            paddingTop:80,
            position: 'relative',
            top: '50%',
            width: '700px',
            outline: 'none',  
            textAlign: 'center',
            lineHeight: '60px'
      },
    button:{
        border:'1px solid white',
        color:'white',
        textAlign:'center',
        backgroundColor: 'rgba(2, 4, 2, 0.1)',
        letterSpacing: '6px',
        fontFamily: 'Open Sans, sans-serif',
        fontSize:'2em',
        borderRadius:'3px',
        textTransform:'lowercase',
        paddingTop:'4px',
        paddingBottom:'4px',
        cursor: 'pointer',
        margin:'30px',
        paddingRight:'13px',
        paddingLeft:'13px'
    },
    buttonDisabled:{
        border:'1px solid rgb(23,23,23)',
        textAlign:'center',
        left:'5%',
        backgroundColor: 'rgba(2, 4, 2, 0.1)',
        letterSpacing: '6px',
        fontFamily: 'Open Sans, sans-serif',
        fontSize:'2em',
        borderRadius:'3px',
        textTransform:'lowercase',
        paddingRight:'13px',
        paddingLeft:'13px',
        paddingTop:'4px',
        paddingBottom:'4px',
        margin:'30px'
    }
}

const styleMobile= {
    main:{
            margin:'0 auto',
            width:'100%'
        },
        buttonWrapper:{
            marginLeft:'25%'
        },
    text:{
        fontSize:'3.3em',
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
        height: '160px',
        paddingTop:80,
        position: 'relative',
        top: '50%',
        width: '100%',
        outline: 'none',  
        textAlign: 'center',
        lineHeight: '60px'
      },
    button:{
            border:'1px solid white',
            color:'white',
            textAlign:'center',
            backgroundColor: 'rgba(2, 4, 2, 0.1)',
            letterSpacing: '4px',
            fontFamily: 'Open Sans, sans-serif',
            fontSize:'1.8em',
            borderRadius:'3px',
            textTransform:'lowercase',
            paddingTop:'3px',
            paddingBottom:'3px',
            cursor: 'pointer',
            margin:'20px',
            paddingRight:'10px',
            paddingLeft:'10px'
    },
    buttonDisabled:{
        border:'1px solid rgb(23,23,23)',
        textAlign:'center',
        left:'5%',
        backgroundColor: 'rgba(2, 4, 2, 0.1)',
        letterSpacing: '4px',
        fontFamily: 'Open Sans, sans-serif',
        fontSize:'1.8em',
        borderRadius:'3px',
        textTransform:'lowercase',
        paddingRight:'10px',
        paddingLeft:'10px',
        paddingTop:'3px',
        paddingBottom:'3px',
        margin:'20px'
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
            message:'',
            buttonDisabled:true,
            btnColor:'black',
            borderColor:'black'
        }

        this.validate=(txt)=>{
            //validate string needs changing!!!

            return txt;
        }

        this.handleChange=(event)=>{
            let validatedString = this.validate(event.target.value);
            this.props.onChange(validatedString);
            this.setState({message: validatedString});
            if(validatedString.length===1){
                this.setState({buttonDisabled:true})
                this.setState({btnColor:'rgb(23,23,23)'})
                this.setState({borderColor:'rgb(23,23,23)'})
            }else if(validatedString.length===2){
                this.setState({buttonDisabled:true})
                this.setState({btnColor:'rgb(50,50,50)'})
                this.setState({borderColor:'rgb(50,50,50)'})
            }else if(validatedString.length>=3){
            this.setState({buttonDisabled:false})
            this.setState({btnColor:'white'})
            this.setState({borderColor:'white'})
            }else {
                this.setState({buttonDisabled:true})
                this.setState({btnColor:'black'})
                this.setState({borderColor:'black'})
            }
        }
    }
    
    render(){

        return(
        <div>
        <Desktop>
                <div style={style.main}>
                    <h1 style={style.text}> So, what do you want to tell me?</h1>
                        <textarea style={style.input} name="message" value={this.state.message}
                        placeholder={this.props.placeholder}
                        onChange={this.handleChange} />
                </div>
                <div style={style.buttonWrapper}>
                    <button primary style={style.button} onClick={this.props.callback} >  Back </button>
                    <button primary style={{...this.state.buttonDisabled?style.buttonDisabled:style.button, 
                        color:this.state.btnColor, borderColor:this.state.borderColor}} 
                        onClick={this.props.callfront} 
                        disabled={this.state.buttonDisabled}> Send </button>
                </div>
        </Desktop> 
        <Tablet>
            <div style={styleTablet.main}>
            <h1 style={styleTablet.text}> So, what do you want to tell me?</h1>
                <textarea style={styleTablet.input} name="message" value={this.state.message}
                placeholder={this.props.placeholder}
                onChange={this.handleChange} />
        </div>
        <div style={styleTablet.buttonWrapper}>
            <button primary style={style.button} onClick={this.props.callback} >  Back </button>
            <button primary style={{...this.state.buttonDisabled?styleTablet.buttonDisabled:styleTablet.button, 
                color:this.state.btnColor, borderColor:this.state.borderColor}} 
                onClick={this.props.callfront} 
                disabled={this.state.buttonDisabled}> Send </button>
        </div>
        </Tablet> 
        <Mobile>
            <div style={styleMobile.main}>
                <h1 style={styleMobile.text}> So, what do you want to tell me?</h1>
                    <input style={styleMobile.input} name="message" value={this.state.message}
                    placeholder={this.props.placeholder}
                    onChange={this.handleChange} />
            </div>
        <div style={styleMobile.buttonWrapper}>
            <button primary style={styleMobile.button} onClick={this.props.callback} >  Back </button>
            <button primary style={{...this.state.buttonDisabled?styleMobile.buttonDisabled:styleMobile.button, 
                color:this.state.btnColor, borderColor:this.state.borderColor}} 
                onClick={this.props.callfront} 
                disabled={this.state.buttonDisabled}> Send </button>
        </div>
        </Mobile> 
        </div>

        );
    }
}


export default ContactMessage;