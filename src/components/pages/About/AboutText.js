import Responsive from 'react-responsive';
import React from 'react';

const style = {
            main: {
                minWidth: '480px',
                width: '70%',
                textIndent:'50px',
                background: '#000a12',
                float: 'left',
                marginBottom:'20px'
            },
            longText:{
                textAlign:'justify',
                margin:'20px',
                fontFamily:'Open Sans, sans-serif',
                fontSize:'1.5em',
                color:'white'
            }
}

const styleTablet = {
    main: {
        width: '90%',
        textIndent:'30px',
        background: '#000a12',
        float: 'left',
        marginBottom:'20px',
        margin:'20px'
    },
    longText:{
        textAlign:'justify',
        fontFamily:'Open Sans, sans-serif',
        fontSize:'1.3em',
        color:'white'
    }
}

const styleMobile = {
    main: {
        width:'80%',
        textIndent:'30px',
        float: 'left',
        marginBottom:'20px',
        marginLeft:'2%',
        paddingBottom:'130px'
    },
    longText:{
        textAlign:'justify',
        fontFamily:'Open Sans, sans-serif',
        fontSize:'1em',
        color:'white',
        marginBottom:'30px'
    }
}

const Desktop = props => <Responsive {...props} minWidth={992} />;
const Tablet = props => <Responsive {...props} minWidth={768} maxWidth={991} />;
const Mobile = props => <Responsive {...props} maxWidth={767} />;

const AboutText = (props) => (
    <div>
    <Desktop>
        <div style={style.main}>
        <p style={style.longText} >
        Lorem ipsum dolor sit amet, dictum ut turpis a lorem, anim et amet, est nonummy 
        justo viverra urna hymenaeos, placerat per metus donec gravida urna erat, sed massa cras mollis ultrices. 
        A rhoncus torquent velit, mattis aliquam orci aliquam sed, sollicitudin aenean magni integer euismod, 
        pulvinar egestas luctus mi, odio maecenas orci in. Quam lacus fusce faucibus, tellus eu tortor facilis, 
        lorem nisl magnis felis suspendisse congue non. Odio interdum mauris convallis et eleifend, sed rhoncus 
        tristique. Et quaerat in senectus maecenas sit, eget ut risus eget euismod leo, ac tristique sed lacus 
        massa donec. Neque ut fames est, eget faucibus vestibulum wisi aliquam, ut lacus sit pede erat ultricies, 
        fringilla non. Ridiculus fusce justo placerat.
        </p>

        <p style={style.longText}>
            Imperdiet odio orci varius posuere, vel orci malesuada lorem, nec suspendisse nisl congue turpis, sed et ultricies 
            eget, vestibulum sodales amet tristique metus. Rutrum sed leo donec odio dapibus luctus, euismod sed elementum 
            taciti amet non, dui rutrum lorem, consequat est, tincidunt in vel eros suspendisse metus. Ac suscipit consequat 
            curabitur sociis volutpat, euismod elit pellentesque a id risus, a tristique lectus ut blandit pellentesque etiam. 
            Morbi integer porta nec, vitae imperdiet, a augue metus ut laoreet sed praesent, duis et integer, lectus ante cras. 
            Enim rutrum ligula semper mollis ut eros, nec aptent felis phasellus ut, diam sed libero pulvinar enim suscipit 
            lacus, at vehicula sed quam sed est, id non nunc. Nunc aptent, wisi nisl, pede libero pede turpis metus aenean. 
            Phasellus dui feugiat malesuada interdum neque in, erat odio est mi eu eros, dui iaculis urna amet sit cum dictum.
        </p>
        </div>
    </Desktop>
    <Tablet>
    <div style={styleTablet.main}>
    <p style={styleTablet.longText} >
    Lorem ipsum dolor sit amet, dictum ut turpis a lorem, anim et amet, est nonummy 
    justo viverra urna hymenaeos, placerat per metus donec gravida urna erat, sed massa cras mollis ultrices. 
    A rhoncus torquent velit, mattis aliquam orci aliquam sed, sollicitudin aenean magni integer euismod, 
    pulvinar egestas luctus mi, odio maecenas orci in. Quam lacus fusce faucibus, tellus eu tortor facilis, 
    lorem nisl magnis felis suspendisse congue non. Odio interdum mauris convallis et eleifend, sed rhoncus 
    tristique. Et quaerat in senectus maecenas sit, eget ut risus eget euismod leo, ac tristique sed lacus 
    massa donec. Neque ut fames est, eget faucibus vestibulum wisi aliquam, ut lacus sit pede erat ultricies, 
    fringilla non. Ridiculus fusce justo placerat.
    </p>

    <p style={styleTablet.longText}>
        Imperdiet odio orci varius posuere, vel orci malesuada lorem, nec suspendisse nisl congue turpis, sed et ultricies 
        eget, vestibulum sodales amet tristique metus. Rutrum sed leo donec odio dapibus luctus, euismod sed elementum 
        taciti amet non, dui rutrum lorem, consequat est, tincidunt in vel eros suspendisse metus. Ac suscipit consequat 
        curabitur sociis volutpat, euismod elit pellentesque a id risus, a tristique lectus ut blandit pellentesque etiam. 
        Morbi integer porta nec, vitae imperdiet, a augue metus ut laoreet sed praesent, duis et integer, lectus ante cras. 
        Enim rutrum ligula semper mollis ut eros, nec aptent felis phasellus ut, diam sed libero pulvinar enim suscipit 
        lacus, at vehicula sed quam sed est, id non nunc. Nunc aptent, wisi nisl, pede libero pede turpis metus aenean. 
        Phasellus dui feugiat malesuada interdum neque in, erat odio est mi eu eros, dui iaculis urna amet sit cum dictum.
    </p>
    </div>
</Tablet>   
<Mobile>
    <div style={styleMobile.main}>
    <p style={styleMobile.longText} >
Lorem ipsum dolor sit amet, dictum ut turpis a lorem, anim et amet, est nonummy 
justo viverra urna hymenaeos, placerat per metus donec gravida urna erat, sed massa cras mollis ultrices. 
A rhoncus torquent velit, mattis aliquam orci aliquam sed, sollicitudin aenean magni integer euismod, 
pulvinar egestas luctus mi, odio maecenas orci in. Quam lacus fusce faucibus, tellus eu tortor facilis, 
lorem nisl magnis felis suspendisse congue non. Odio interdum mauris convallis et eleifend, sed rhoncus 
tristique. Et quaerat in senectus maecenas sit, eget ut risus eget euismod leo, ac tristique sed lacus 
massa donec. Neque ut fames est, eget faucibus vestibulum wisi aliquam, ut lacus sit pede erat ultricies, 
fringilla non. Ridiculus fusce justo placerat.
    </p>

    <p style={styleMobile.longText}>
    Imperdiet odio orci varius posuere, vel orci malesuada lorem, nec suspendisse nisl congue turpis, sed et ultricies 
    eget, vestibulum sodales amet tristique metus. Rutrum sed leo donec odio dapibus luctus, euismod sed elementum 
    taciti amet non, dui rutrum lorem, consequat est, tincidunt in vel eros suspendisse metus. Ac suscipit consequat 
    curabitur sociis volutpat, euismod elit pellentesque a id risus, a tristique lectus ut blandit pellentesque etiam. 
    Morbi integer porta nec, vitae imperdiet, a augue metus ut laoreet sed praesent, duis et integer, lectus ante cras. 
    Enim rutrum ligula semper mollis ut eros, nec aptent felis phasellus ut, diam sed libero pulvinar enim suscipit 
    lacus, at vehicula sed quam sed est, id non nunc. Nunc aptent, wisi nisl, pede libero pede turpis metus aenean. 
    Phasellus dui feugiat malesuada interdum neque in, erat odio est mi eu eros, dui iaculis urna amet sit cum dictum.
    </p>
    </div>
</Mobile>      
    </div>
);

export default AboutText;