import FontAwesome from 'react-fontawesome';
import Responsive from 'react-responsive';
import React from 'react';
import Logo from './Logo';
import Menu from './Meniu';


const style = {
        navbar:{
                position:'fixed',
                color:'white',
                marginTop:'-32px',
                marginLeft:'-13px',
                padding:'10px',
                display:'flex',
                flexWrap: 'nowrap',
                justifyContent: 'space-between',
                flexDirection: 'row',
                backgroundColor:'#263238',
                width:'100%',
                fontFamily:'Open Sans, sans-serif',
                zIndex:1
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
                padding:'8px',
                paddingLeft:'15px',
                paddingRight:'15px',
                borderRadius:'30px',
                backgroundColor:'rgba(0,0,0, 0.4)'
            },
        mobile:{
            meniu:{ 
                zIndex:1,
                position:'fixed',
                cursor: 'pointer',
                left:'45%',
                top:'3%',
                fontSize:'1.2em',
                border: '2px solid white',
                padding:'2%',
                paddingLeft:'3%',
                paddingRight:'3%',
                borderRadius:'30px',
                backgroundColor:'rgba(0,0,0, 0.4)'
            }
        }
        
};

const Desktop = props => <Responsive {...props} minWidth={992} />;
const Tablet = props => <Responsive {...props} minWidth={768} maxWidth={991} />;
const Mobile = props => <Responsive {...props} maxWidth={767} />;

class HeaderComponent extends React.Component {
    constructor(props){
        super(props);
        this.state = {menuOpen : false}
    this.openMenu = () => {
        this.setState({menuOpen:true});
        }
    this.closeMenu=() => {
        this.setState({menuOpen:false})
        }
    }


render(){

    return (
        <div>
            <Desktop>
                <div style={style.navbar}>
                    <Logo />
                    <a style={style.meniu}  onClick={this.openMenu}><FontAwesome name='bars' /></a>
                </div>
            <Menu menuOpen = {this.state.menuOpen} closeMenu={this.closeMenu} />
            </Desktop>
            <Tablet>
                <div style={style.navbar}>
                    <Logo />
                    <a style={style.title} href="/">/{this.props.title}</a>
                    <a style={style.meniu}  onClick={this.openMenu}><FontAwesome name='bars' /></a>
                </div>
        <Menu menuOpen = {this.state.menuOpen} closeMenu={this.closeMenu}/>
        </Tablet>
        <Mobile>
            <div style={style.navbar}>
                <Logo />
                <a style={style.title} href="/">/{this.props.title}</a>
                <a style={style.mobile.meniu}  onClick={this.openMenu}><FontAwesome name='bars' /></a>
            </div>
            <Menu menuOpen = {this.state.menuOpen} closeMenu={this.closeMenu}/>
        </Mobile>

        </div>
    );
}

}

export default HeaderComponent;