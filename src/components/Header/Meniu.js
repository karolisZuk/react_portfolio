import React from 'react';
import Responsive from 'react-responsive';
import { Link } from 'react-router-dom';

const style = {
        overlayOpen:{
                height: '100%',
                width: '100%',
                position: 'fixed',
                zIndex: 999,
                top: 0,
                left: 0,
                backgroundColor: 'rgba(0,0,0, 0.9)',
                overflowX: 'hidden',
                transition: '0.3s cubic-bezier(.66,.37,.78,.57)',
                fontFamily:'Open Sans, sans-serif',
                color:'white',
                letterSpacing:'3px',
        },
        overlayClose:{
                height: '0%',
                width: '100%',
                position: 'fixed',
                zIndex: 1,
                top: 0,
                left: 0,
                backgroundColor: 'rgba(0,0,0, 0.9)',
                overflowX: 'hidden',
                fontFamily:'Open Sans, sans-serif'
                },
        overlayContent:{
                position: 'relative',
                top: '25%',
                width: '100%',
                textAlign: 'center',
                marginTop: '30px',
                letterSpacing:'12px'
        },
        linkStyle:{
                padding: '8px',
                textDecoration: 'none',
                fontSize: '2em',
                color: '#818181',
                display: 'block',
                transition: '0.3s'
        },
        closebtn: {
                position: 'absolute',
                top: '20px',
                left:'47%',
                cursor: 'pointer',
                fontSize:'2.4em',
                border: '2px solid white',
                padding:'3px',
                paddingLeft:'17px',
                paddingRight:'17px',
                borderRadius:'30px',
            }
};

const styleMobile = {
        closebtn: {
                position: 'absolute',
                top: '2%',
                left:'45%',
                cursor: 'pointer',
                fontSize:'1.8em',
                border: '2px solid white',
                padding:'1.2%',
                paddingLeft:'3%',
                paddingRight:'2.8%',
                borderRadius:'60px',
            }
};

const Desktop = props => <Responsive {...props} minWidth={992} />;
const Tablet = props => <Responsive {...props} minWidth={768} maxWidth={991} />;
const Mobile = props => <Responsive {...props} maxWidth={767} />;

class Meniu extends React.Component {
        constructor(props){
                super(props);
               this.state = {
                       menuStyle:style.overlayClose
                };

}

 
componentWillReceiveProps(nextProps) {

        if(nextProps.menuOpen){
                this.setState({menuStyle:style.overlayOpen});
        }else{
                this.setState({menuStyle:style.overlayClose});
        }
}

        render(){

                document.body.style.minHeight = '100%';
                document.body.style.maxHeight = '100%';

                return(
                        <div style={ this.state.menuStyle }>
                        <Desktop><a style={style.closebtn} onClick={this.props.closeMenu} >&times;</a></Desktop> 
                        <Tablet><a style={style.closebtn} onClick={this.props.closeMenu} >&times;</a></Tablet> 
                        <Mobile><a style={styleMobile.closebtn} onClick={this.props.closeMenu} >&times;</a></Mobile> 

                                <div style={style.overlayContent}>
                                <Link style={style.linkStyle} to = "/" onClick={this.props.closeMenu} >WORK</Link>
                                <Link style={style.linkStyle} to = "/about" onClick={this.props.closeMenu} >ABOUT</Link>
                                <Link style={style.linkStyle} to = "/notes" onClick={this.props.closeMenu} >NOTES</Link>
                                <Link style={style.linkStyle} to = "/contact" onClick={this.props.closeMenu} >CONTACT</Link>
                                </div>
                        </div>
                );
        }

}

export default Meniu;