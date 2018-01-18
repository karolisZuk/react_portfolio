import FontAwesome from 'react-fontawesome';
import React from 'react';
import Logo from './Logo';
import Menu from './Meniu';

const style = {
    header: {
        navbar:{
                color:'white',
                marginTop:'-32px',
                marginLeft:'-10px',
                padding:'10px',
                display:'flex',
                flexWrap: 'nowrap',
                justifyContent: 'space-between',
                flexDirection: 'row',
                backgroundColor:'#263238',
                width:'100%',
                fontFamily:'Open Sans, sans-serif',
            },
        title: {
                marginTop:'30px',
                fontFamily:'Open Sans, sans-serif',
                letterSpacing: '3px',
                fontSize:'0.8em',
                textDecoration: 'none',
                color:'#4f5b62'
            },
        meniu:{
                zIndex:1,
                position:'fixed',
                cursor: 'pointer',
                left:'47%',
                top:'3%',
                fontSize:'1.8em',
                border: '2px solid white',
                padding:'7px',
                paddingLeft:'14px',
                paddingRight:'14px',
                borderRadius:'30px',
                backgroundColor:'rgba(0,0,0, 0.4)'
            }
    },
};

class HeaderComponent extends React.Component {
    constructor(props){
        super(props);
        this.state = {menuOpen : false}
    this.handleMenu = () => {
        this.setState({menuOpen:true});
        }
    }

render(){

    return (
        <div>
            <div style={style.header.navbar}>
                <Logo />
                <a style={style.header.title} href="/">/{this.props.title}</a>
                <a style={style.header.meniu}  onClick={this.handleMenu}><FontAwesome name='bars' /></a>
            </div>
        <Menu menuOpen = {this.state.menuOpen}/>
        </div>
    );
}

}

export default HeaderComponent;