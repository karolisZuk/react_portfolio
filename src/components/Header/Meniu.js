import React from 'react';
import { Link } from 'react-router-dom';

const style = {
        overlayOpen:{
        height: '100%',
        width: '100%',
        position: 'fixed',
        zIndex: 1,
        top: 0,
        left: 0,
        backgroundColor: 'rgba(0,0,0, 0.9)',
        overflowX: 'hidden',
        transition: '0.7s ease',
        fontFamily:'Open Sans, sans-serif',
        color:'white',
        letterSpacing:'3px'
        },
        overlayClose:{
                height: '100%',
                width: '0%',
                position: 'fixed',
                zIndex: 1,
                top: 0,
                left: 0,
                backgroundColor: 'rgba(0,0,0, 0.9)',
                overflowX: 'hidden',
                transition: '0.3s',
                fontFamily:'Open Sans, sans-serif'
                },
        overlayContent:{
                position: 'relative',
                top: '25%',
                width: '100%',
                textAlign: 'center',
                marginTop: '30px',
                letterSpacing:'3px'
        },
        linkStyle:{
                padding: '8px',
                textDecoration: 'none',
                fontSize: '36px',
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
                padding:'4px',
                paddingLeft:'19px',
                paddingRight:'19px',
                borderRadius:'30px',
            }
};


class Meniu extends React.Component {
        constructor(props){
                super(props);
               this.state = {
                       menuStyle:style.overlayClose
                };
        this.HandleMenu=(menuOpen)=>{
                if(menuOpen){
                        this.setState({menuStyle:style.overlayOpen});
                        menuOpen = !menuOpen;
                }else {
                        this.setState({menuStyle:style.overlayClose});
                        menuOpen = !menuOpen;
                        }
                }
        this.closeMenu=()=> {
                        this.setState({menuStyle:style.overlayClose});
                }
        }

 
componentWillReceiveProps(nextProps) {this.HandleMenu(nextProps.menuOpen);}

        render(){

                document.body.style.minHeight = '100%';
                document.body.style.maxHeight = '100%';

                return(
                        <div style={ this.state.menuStyle }>
                        <a style={style.closebtn} onClick={this.closeMenu} >&times;</a>  
                                <div style={style.overlayContent}>
                                <Link style={style.linkStyle} to = "/" onClick={this.HandleMenu} >WORK</Link>
                                <Link style={style.linkStyle} to = "/about" onClick={this.HandleMenu} >ABOUT</Link>
                                <Link style={style.linkStyle} to = "/notes" onClick={this.HandleMenu} >NOTES</Link>
                                </div>
                        </div>
                );
        }

}

export default Meniu;