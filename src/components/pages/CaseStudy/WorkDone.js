import React from 'react';
import Responsive from 'react-responsive';

const style = {
        div:{
                position:'relative',
                marginTop:'130px'
        },
        title:{
                textTransform:'uppercase',
                textAlign:'center',
                fontFamily:'PT Sans Narrow, sans-serif',
                letterSpacing:'15px'
            },
        workDoneList: {
                textIndent:'20px',
                fontFamily:'Open Sans, sans-serif',
                fontSize:'1.3em',
                marginBottom:'2px',
                marginTop:'2px',
                width:'90%',
                bottom:0,
                textAlign:'justify',
                marginLeft:'4%',
                marginRight:'4%'

            }
}

const styleMobile = {
        div:{
                position:'relative',
                marginTop:'10px'
        },
        title:{
                textTransform:'uppercase',
                textAlign:'center',
                fontFamily:'PT Sans Narrow, sans-serif',
                letterSpacing:'15px'
            },
        workDoneList: {
                fontFamily:'Open Sans, sans-serif',
                fontSize:'1em',
                marginBottom:'2px',
                marginTop:'2px',
                width:'95%',
                bottom:0,
                textAlign:'justify',
                marginLeft:'2%',
                marginRight:'2%'
            }
}

const Desktop = props => <Responsive {...props} minWidth={992} />;
const Tablet = props => <Responsive {...props} minWidth={768} maxWidth={991} />;
const Mobile = props => <Responsive {...props} maxWidth={767} />;

const WorkDone = (props) => (
<div>
        <Desktop>
                <div style={style.div}>
                        <h2 style={style.title}>Work done</h2>
                        {props.projectWork.map(item =><p style={style.workDoneList} key={item}>{item}</p> )}
                </div>
        </Desktop>
        <Tablet>
        <div style={style.div}>
                <h2 style={style.title}>Work done</h2>
                {props.projectWork.map(item =><p style={style.workDoneList} key={item}>{item}</p> )}
        </div>
        </Tablet>
        <Mobile>
        <div style={styleMobile.div}>
                <h2 style={styleMobile.title}>Work done</h2>
                {props.projectWork.map(item =><p style={styleMobile.workDoneList} key={item}>{item}</p> )}
        </div>
        </Mobile>
</div>

);

export default WorkDone;