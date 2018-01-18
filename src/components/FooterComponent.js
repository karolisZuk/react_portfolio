import React from 'react';

const style = {
    footerComponent:{
        main:{
            color:'white',
            backgroundColor:'#000a12',
            width:'100%',
            position:'fixed',
            left:0,
            bottom:-5,
            height: '30px',
            paddingBottom:'20px',
            textDecoration:'none',
            fontFamily:'Open Sans, sans-serif'
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
        }
    }
}

const FooterComponent = () => (
            <div style={style.footerComponent.main}>
                <p style={style.footerComponent.text}>Facebook: <a target="blank" style={style.footerComponent.links} href="https://www.facebook.com/karolis.zukas.96">fb</a></p>
                <p style={style.footerComponent.text}>LinkedIn: <a target="blank" style={style.footerComponent.links} href="https://www.linkedin.com/in/karolis-zukas/">li</a></p>
                <p style={style.footerComponent.text}>Contact me: <a style={style.footerComponent.links} href="mailto:kar.zukas@gmail.com">email</a>  </p>
            </div>
    );

export default FooterComponent;