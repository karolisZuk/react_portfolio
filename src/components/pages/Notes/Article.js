import React from 'react';
import Responsive from 'react-responsive';
import NoteHeader from './NoteHeader';

const style = {
        main:{
            backgroundColor: '#000a12',
            color:'white'
        },
        subtitle: {
            fontFamily:'PT Sans Narrow, sans-serif',
            textTransform:'uppercase',
            fontSize:'4em',
            letterSpacing:'10px',
            textAlign: 'center',
        },
        tldr: {
            textAlign:'center',
            fontSize:'3em',
            fontFamily:'PT Sans Narrow, sans-serif',
            letterSpacing:'14px'
        },
        workDoneList:{
            fontFamily:'Open Sans, sans-serif',
            fontSize:'1.5em',
            marginBottom:'10px',
            textAlign:'center'
        },
        container:{
            width: '90%',
            backgroundColor: '#000a12',
            margin: 'auto',
            padding: '30px'
        },
        firstContainer: {
            minWidth: '480px',
            width: '47.7%',
            textIndent:'50px',
            background: '#000a12',
            float: 'left',
            marginBottom:'20px'
        },
        firstContainerText:{
            textAlign:'justify',
            margin:'20px',
            fontFamily:'Open Sans, sans-serif',
            fontSize:'1.5em'
        },
        date:{
            float:'right',
            margin:'20px',
            fontSize:'1.5em'
        },
        links:{
            fontFamily:'Open Sans, sans-serif',
            fontSize:'1.3em',
            marginBottom:'20px',
            textAlign:'justify'
        }
}

const styleTablet = {
    main:{
        backgroundColor: '#000a12',
        color:'white'
    },
    subtitle: {
        fontFamily:'PT Sans Narrow, sans-serif',
        textTransform:'uppercase',
        fontSize:'4em',
        letterSpacing:'10px',
        textAlign: 'center',
    },
    tldr: {
        textAlign:'center',
        fontSize:'3em',
        fontFamily:'PT Sans Narrow, sans-serif',
        letterSpacing:'14px'
    },
    workDoneList:{
        fontFamily:'Open Sans, sans-serif',
        fontSize:'1.5em',
        marginBottom:'10px',
        textAlign:'center'
    },
    container:{
        width: '90%',
        backgroundColor: '#000a12',
        margin: 'auto',
        padding: '30px'
    },
    firstContainer: {
        minWidth: '480px',
        width: '47.7%',
        textIndent:'50px',
        background: '#000a12',
        float: 'left',
        marginBottom:'20px'
    },
    firstContainerText:{
        textAlign:'justify',
        margin:'20px',
        fontFamily:'Open Sans, sans-serif',
        fontSize:'1.5em'
    },
    date:{
        float:'right',
        margin:'20px',
        fontSize:'1.5em'
    },
    links:{
        fontFamily:'Open Sans, sans-serif',
        fontSize:'1.3em',
        marginBottom:'20px',
        textAlign:'justify'
    }
}

const styleMobile = {
    main:{
        backgroundColor: '#000a12',
        color:'white'
    },
    subtitle: {
        fontFamily:'PT Sans Narrow, sans-serif',
        textTransform:'uppercase',
        fontSize:'4em',
        letterSpacing:'10px',
        textAlign: 'center',
    },
    tldr: {
        textAlign:'center',
        fontSize:'3em',
        fontFamily:'PT Sans Narrow, sans-serif',
        letterSpacing:'14px'
    },
    workDoneList:{
        fontFamily:'Open Sans, sans-serif',
        fontSize:'1.5em',
        marginBottom:'10px',
        textAlign:'center'
    },
    container:{
        width: '90%',
        backgroundColor: '#000a12',
        margin: 'auto',
        padding: '30px'
    },
    firstContainer: {
        minWidth: '480px',
        width: '47.7%',
        textIndent:'50px',
        background: '#000a12',
        float: 'left',
        marginBottom:'20px'
    },
    firstContainerText:{
        textAlign:'justify',
        margin:'20px',
        fontFamily:'Open Sans, sans-serif',
        fontSize:'1.5em'
    },
    date:{
        float:'right',
        margin:'20px',
        fontSize:'1.5em'
    },
    links:{
        fontFamily:'Open Sans, sans-serif',
        fontSize:'1.3em',
        marginBottom:'15px',
        textAlign:'justify'
    }
}

const Desktop = props => <Responsive {...props} minWidth={992} />;
const Tablet = props => <Responsive {...props} minWidth={768} maxWidth={991} />;
const Mobile = props => <Responsive {...props} maxWidth={767} />;

class Article extends React.Component {
    constructor(props){
        super(props);
        this.date = props.date;
        this.title = props.title;
        this.description = props.description;
        this.articleTldr = props.articleTldr;
        this.externalLinks = props.externalLinks;
        this.linkToArticle = props.linkToArticle;
        //images
        this.titleImg = props.titleImg;
    }

    componentDidMount () {
        window.scrollTo(0, 0)
      }


    render(){
        const links = this.props.location.state.externalLinks;

        return (
            <div>
            <Desktop>
             <div  style = {style.main}>
                    <NoteHeader title={this.props.location.state.title} subtitle={this.props.location.state.description}/>
                        <div style={style.container}>
                            <p style={style.firstContainerText}>{this.props.location.state.articleDescriptionLong}</p>
                            <h2 style = {style.tldr}>TL;DR</h2>
                            {this.props.location.state.articleTldr.map(item => 
                                <p style={style.workDoneList} key={item}>{item}</p> )}
                            <h2 style = {style.tldr}>MORE READING</h2>
                            {Object.keys(links).map(function(key) {
                                return <div style={style.links}>{key ? <div>{key}<a href={`http://${links[key]}`}> here.</a></div> : ''}</div>;
                            })}
                        </div>
                     </div>
            </Desktop>
            <Tablet>
            <div  style = {styleTablet.main}>
                    <NoteHeader title={this.props.location.state.title} subtitle={this.props.location.state.description}/>
                        <div style={styleTablet.container}>
                            <p style={styleTablet.firstContainerText}>{this.props.location.state.articleDescriptionLong}</p>
                            <h2 style = {styleTablet.tldr}>TL;DR</h2>
                            {this.props.location.state.articleTldr.map(item => 
                                <p style={styleTablet.workDoneList} key={item}>{item}</p> )}
                            <h2 style = {styleTablet.tldr}>MORE READING</h2>
                            {Object.keys(links).map(function(key) {
                                return <div style={styleTablet.links}>{key ? <div>{key}<a href={`http://${links[key]}`}> here.</a></div> : ''}</div>;
                            })}
                        </div>
                     </div>
            </Tablet>
            <Mobile>
            <div  style = {styleMobile.main}>
                    <NoteHeader title={this.props.location.state.title} subtitle={this.props.location.state.description}/>
                        <div style={styleMobile.container}>
                            <p style={styleMobile.firstContainerText}>{this.props.location.state.articleDescriptionLong}</p>
                            <h2 style = {styleMobile.tldr}>TL;DR</h2>
                            {this.props.location.state.articleTldr.map(item => 
                                <p style={styleMobile.workDoneList} key={item}>{item}</p> )}
                            <h2 style = {styleMobile.tldr}>MORE READING</h2>
                            {Object.keys(links).map(function(key) {
                                return <div style={styleMobile.links}>{key ? <div>{key}<a href={`http://${links[key]}`}> here.</a></div> : ''}</div>;
                            })}
                        </div>
                     </div>
            </Mobile>
            </div>
        );
    }

}

export default Article;