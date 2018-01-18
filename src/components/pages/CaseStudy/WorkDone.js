import React from 'react';

const style = {
        title:{
                textTransform:'uppercase',
                textAlign:'center',
                fontFamily:'PT Sans Narrow, sans-serif',
                letterSpacing:'15px'
            },
        workDoneList: {
                margin: 0,
                padding:0,
                marginLeft:'-30px',
                fontFamily:'Open Sans, sans-serif',
                fontSize:'1.3em',
                letterSpacing:'1px',
                marginBottom:'5px'
            }
}

const WorkDone = (props) => (

<div>
        <h2 style={style.title}>Work done</h2>
        {props.projectWork.map(item =><p style={style.workDoneList} key={item}>{item}</p> )}
</div>

);

export default WorkDone;