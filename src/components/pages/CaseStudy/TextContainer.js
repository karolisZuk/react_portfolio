import React from 'react';

const style = {
            main: {
                minWidth: '480px',
                width: '47.7%',
                textIndent:'50px',
                background: '#000a12',
                float: 'left',
                marginBottom:'20px'
            },
            longText:{
                textAlign:'justify',
                margin:'20px',
                fontFamily:'Open Sans, sans-serif',
                fontSize:'1.5em'
            },
            description:{
                fontFamily:'PT Sans Narrow, sans-serif',
                letterSpacing:"2px",
                fontSize:'2em',
                marginLeft:'20px'
            }
}

const TextContainer = (props) => (
        <div style={style.main}>
        <p style={style.description} >"-{props.description}."</p>
        <p style={style.longText} >{props.longDescription}</p>
        </div>
);

export default TextContainer;