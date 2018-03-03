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
            email:'',
            buttonDisabled:true,
            btnColor:'black',
            borderColor:'black'
        }

        this.validate=(txt)=>{
            //validate email nneds changing regex
            let outString;
            const specialChars= "!@#$^&%*()+=-[]\/{}|:<>?,.";
            for (let i = 0; i < specialChars.length; i++) {
               outString = txt.replace(/[`~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/]/gi, '');
                }
            return outString;
        }

        this.validate2=(txt)=>{
            const re = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;
            return re.test(String(txt).toLowerCase());
        }

        this.handleChange=(event)=>{
            let isValid = this.validate2(event.target.value);
            let str = event.target.value;
            this.props.onChange(str);
            this.setState({email: str});
            if(str.length>=2&&str.length<4&&!isValid){
                this.setState({buttonDisabled:true})
                this.setState({btnColor:'rgb(23,23,23)'})
                this.setState({borderColor:'rgb(23,23,23)'})
            }else if(str.length>=4&&str.length<6&&!isValid){
                this.setState({buttonDisabled:true})
                this.setState({btnColor:'rgb(50,50,50)'})
                this.setState({borderColor:'rgb(50,50,50)'})
            }else if(str.length>=6&&isValid){
            this.setState({buttonDisabled:false})
            this.setState({btnColor:'white'})
            this.setState({borderColor:'white'})
            }else {
                this.setState({buttonDisabled:true})
                this.setState({btnColor:'rgb(50,50,50)'})
                this.setState({borderColor:'rgb(50,50,50)'})
            }
        }
    }
    
    render(){

        return(
        <div>
        <Desktop>
                <div style={style.main}>
                    <h1 style={style.text}>How can I get back at you?</h1>
                        <input style={style.input} type="email" name="_replyto" value={this.state.email} placeholder={this.props.placeholder}
                        onChange={this.handleChange} />
                        <span />
                </div>
                <div>
                    <button primary style={style.button} onClick={this.props.callback} >  Back </button>
                    <button primary style={{...this.state.buttonDisabled?style.buttonDisabled:style.button, 
                        color:this.state.btnColor, borderColor:this.state.borderColor}} 
                        onClick={this.props.callfront} 
                        disabled={this.state.buttonDisabled}> Forward </button>
                </div>
        </Desktop> 
        <Tablet>
            <div style={styleTablet.main}>
                <h1 style={styleTablet.text}>How can I get back at you?</h1>
                    <input style={styleTablet.input} type="email" name="_replyto" value={this.state.email} placeholder={this.props.placeholder}
                    onChange={this.handleChange} />
                    <span />
            </div>
            <div>
                <button primary style={style.button} onClick={this.props.callback} >  Back </button>
                <button primary style={{...this.state.buttonDisabled?style.buttonDisabled:style.button, 
                    color:this.state.btnColor, borderColor:this.state.borderColor}} 
                    onClick={this.props.callfront} 
                    disabled={this.state.buttonDisabled}> Forward </button>
            </div>
        </Tablet> 
        <Mobile>
            <div style={styleMobile.main}>
                <h1 style={styleMobile.text}>How can I get back at you?</h1>
                    <input style={styleMobile.input} type="email" name="_replyto" value={this.state.email} placeholder={this.props.placeholder}
                    onChange={this.handleChange} />
                    <span />
            </div>
            <div>
                <button primary style={style.button}  onClick={this.props.callback} >  Back </button>
                <button primary style={{...this.state.buttonDisabled?style.buttonDisabled:style.button, 
                color:this.state.btnColor, borderColor:this.state.borderColor}} 
                onClick={this.props.callfront} 
                disabled={this.state.buttonDisabled}> Forward </button>
            </div>
        </Mobile> 
        </div>

        );
    }
}


export default ContactInfo;