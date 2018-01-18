import React from 'react';

const style = {
        main: {
            minWidth: '480px',
            margin:'20px',
            minHeight:'600px',
            marginLeft: '50.5%',
            background: '#4f5b62'
        }
}

const ImagesContainer = (props) => (
    <div style={style.main}>
    <p>Block for storing photo thumbnails</p>
</div>
);

export default ImagesContainer;