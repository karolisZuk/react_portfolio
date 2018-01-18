import React from 'react';
import Transition from 'react-inline-transition-group';
import { Link} from 'react-router-dom';
import HeaderComponent from '../Header/HeaderComponent';
import FooterComponent from '../FooterComponent';
import theme from '../theme';

const style = {
        main:{
            backgroundColor: '#000a12',
            color:'white'
        },
        title: {
            fontFamily:'PT Sans Narrow, sans-serif',
            textTransform:'uppercase',
            fontSize:'8em',
            letterSpacing:'20px',
            textAlign: 'center'
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
        subtitleHolder: {
            width:'100%',
            marginLeft:'-18px'
        },
        subtitleText: {
            display:'inline-block',
            textAlign:'center',
            width:'50%'
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
        description:{
            margin:'20px',
            letterSpacing:'2px',
            fontSize:'1.5em',
            fontFamily:'Open Sans, sans-serif'
        }
}

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
            <HeaderComponent title={`articles/${this.props.location.state.title}`} />
            <div  style = {style.main}>
                    <div style={style.main}>
                        <h1 style={style.title}> {this.props.location.state.title}</h1>
                        <div style={style.container}>
                            <p style={style.description}>"-{this.props.location.state.description}."</p>
                            <p style={style.firstContainerText}>{this.props.location.state.articleDescriptionLong}</p>
                            <h2 style = {style.tldr}>TL;DR</h2>
                            {this.props.location.state.articleTldr.map(item => 
                                <p style={style.workDoneList} key={item}>{item}</p> )}
                            <h2 style = {style.tldr}>MORE READING</h2>
                            {Object.keys(links).map(function(key) {
                                return <div>{key ? <div>{key}<a href={`http://${links[key]}`}> here.</a></div> : ''}</div>;
                            })}
                        </div>
                     </div>
                        </div>
            <FooterComponent />
            </div>
        );
    }

}

export default Article;