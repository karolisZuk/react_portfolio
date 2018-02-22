import React from 'react';
import Responsive from 'react-responsive';


const style = {
        main:{
            color:'white',
            maxWidth:'100%',
            minWidth:'100%',
            position:'fixed',
            left:0,
            bottom:-5,
            height: '30px',
            paddingBottom:'20px',
            textDecoration:'none',
            fontFamily:'Open Sans, sans-serif',
            backgroundColor:'black'
        },
        text:{
            fontFamily:'PT Sans Narrow, sans-serif',
            fontSize:'1em',
            textTransform:'uppercase',
            letterSpacing:'3px',
            float:'right',
            paddingRight:'20px',
        },
        links:{
            textDecoration:'none',
            color:'#4f5b62'
        },
        mobile:{
            main:{
                borderTop:'1px solid #4f5b62',
                color:'white',
                backgroundColor:'#000a12',
                width:'100%',
                position:'fixed',
                left:0,
                bottom:0,
                paddingBottom:'15px',
                textDecoration:'none',
                fontFamily:'Open Sans, sans-serif',
                textAlign:'center'
            },
            text:{
                fontFamily:'PT Sans Narrow, sans-serif',
                fontSize:'0.7em',
                textTransform:'uppercase',
                letterSpacing:'3px',
                display:'inline'
            },
            links:{
                textDecoration:'none',
                color:'#4f5b62',
                marginRight:'5px'
            }
        }
}

const Desktop = props => <Responsive {...props} minWidth={992} />;
const Tablet = props => <Responsive {...props} minWidth={768} maxWidth={991} />;
const Mobile = props => <Responsive {...props} maxWidth={767} />;

const FooterComponent = () => (
    <div>
        <Desktop> 
            <div style={style.main}>
                <p style={style.text}>Facebook: <a target="blank" style={style.links} href="https://www.facebook.com/karolis.zukas.96">fb</a></p>
                <p style={style.text}>LinkedIn: <a target="blank" style={style.links} href="https://www.linkedin.com/in/karolis-zukas/">li</a></p>
                <p style={style.text}>Contact me: <a style={style.links} href="mailto:kar.zukas@gmail.com">email</a>  </p>
            </div>
        </Desktop>
        <Tablet>
            <div style={style.main}>
                <p style={style.text}>Facebook: <a target="blank" style={style.links} href="https://www.facebook.com/karolis.zukas.96">fb</a></p>
                <p style={style.text}>LinkedIn: <a target="blank" style={style.links} href="https://www.linkedin.com/in/karolis-zukas/">li</a></p>
                <p style={style.text}>Contact me: <a style={style.links} href="mailto:kar.zukas@gmail.com">email</a>  </p>
            </div>
        </Tablet>
        <Mobile>
            <div style={style.mobile.main}>
                <p style={style.mobile.text}>Contact: <a style={style.mobile.links} href="mailto:kar.zukas@gmail.com">email</a>  </p>
                <p style={style.mobile.text}>Facebook: <a target="blank" style={style.mobile.links} href="https://www.facebook.com/karolis.zukas.96">fb</a></p>
                <p style={style.mobile.text}>LinkedIn: <a target="blank" style={style.mobile.links} href="https://www.linkedin.com/in/karolis-zukas/">li</a></p>         
            </div>
        </Mobile>

    </div>
    );

export default FooterComponent;