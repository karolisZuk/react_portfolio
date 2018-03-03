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
        fontSize: '2.5em',
        height: '50px',
        left: '45%',
        margin: '-25px 0 0 -100px',
        padding: '10px 0px',
        position: 'relative',
        top: '50%',
        width: '300px',
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

class ContactName extends React.Component {
    constructor(props){
        super(props);
        this.title = 'contactName';
        this.state ={
            name:'',
            buttonDisabled:true,
            btnColor:'black',
            borderColor:'black'
        }

        this.validate=(txt)=>{
            //validate string
            let outString;
            const specialChars= "!@#$^&%*()+=-[]\/{}|:<>?,.";
            for (let i = 0; i < specialChars.length; i++) {
               outString = txt.replace(/[`~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/]/gi, '');
                }
            return outString;
        }


        this.handleChange=(event)=>{
            let validatedString = this.validate(event.target.value);
            this.props.onChange(validatedString);
            this.setState({name: validatedString});
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
                    <h1 style={style.text}> Hey, how should I call you?</h1>
                        <input style={style.input} 
                        type="text"
                        name="name" 
                        value={this.state.name}
                        onChange={this.handleChange} 
                        placeholder={this.props.placeholder} />
                        <span />
                </div>
                <button primary style={{...this.state.buttonDisabled?style.buttonDisabled:style.button, 
                                         color:this.state.btnColor, borderColor:this.state.borderColor}} 
                                onClick={this.props.callback} 
                                disabled={this.state.buttonDisabled}> forward </button>

        </Desktop> 
        <Tablet>
            <div style={styleTablet.main}>
            <h1 style={styleTablet.text}> Hey, how should I call you?</h1>
                <input style={styleTablet.input} type="text" name="name" value={this.state.name}
                onChange={this.handleChange} placeholder={this.props.placeholder} />
                <span />
        </div>
        <button primary style={{...this.state.buttonDisabled?style.buttonDisabled:style.button, 
            color:this.state.btnColor, borderColor:this.state.borderColor}} 
        onClick={this.props.callback} 
        disabled={this.state.buttonDisabled}> forward </button>

        </Tablet> 
        <Mobile>
            <div style={styleMobile.main}>
                <h1 style={styleMobile.text}> Hey, how should I call you?</h1>
                    <input style={styleMobile.input} type="text" name="name" value={this.state.name}
                    onChange={this.handleChange} placeholder={this.props.placeholder} />
            </div>
            <button primary style={{...this.state.buttonDisabled?style.buttonDisabled:style.button, 
                                         color:this.state.btnColor, borderColor:this.state.borderColor}} 
            onClick={this.props.callback} 
            disabled={this.state.buttonDisabled}> forward </button>

        </Mobile> 
        </div>

        );
    }
}

export default ContactName;