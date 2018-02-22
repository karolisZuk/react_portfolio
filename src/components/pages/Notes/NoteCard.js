import React from 'react';
import Cta from '../../Cta';

    const style = {
            card:{
                marginBottom:'40px',
                backgroundColor:'#4f5b62',
                maxWidth: '96%',
                height:'500px',
                position:'relative',
                breakInside: 'avoid',
                padding: '5px'
            },
            cardContent: {
                margin:'20px',
                color:'white'
            },
            date:{
                fontSize:'1em',
                fontFamily: 'Open Sans, sans-serif'
            },
            title:{
                marginTop:'30px',
                marginBottom:'30px',
                textTransform:'uppercase',
                fontFamily: 'PT Sans Narrow, sans-serif',
                letterSpacing: '3px',
                fontSize:'2em'
            },
            description:{
                marginRight:'20px',
                fontFamily: 'Open Sans, sans-serif',
                fontSize:'1em',
                letterSpacing: '2px'
            }
        }



        class NoteCard extends React.Component {
    constructor(props){
        super(props);
        this.title='note card';
    }

    render(){

        const linkTo = {
            pathname:`/articles/${this.props.linkToArticle}`,
                                state:{
                                    date: this.props.articleDate,
                                    title: this.props.title,
                                    description:this.props.description,
                                    articleDescriptionLong: this.props.articleDescriptionLong,
                                    articleTldr:this.props.articleTldr,
                                    externalLinks:this.props.externalLinks,
                                    linkToArticle:this.props.linkToArticle
             }
        }

        return (
                    <div style={style.card} >
                        <div style={{...style.cardContent}} >
                            <h4 style={style.date}> {this.props.date} </h4>
                            <h2 style={style.title}> {this.props.title} </h2>
                            <p style={style.description}>- {this.props.description} </p>
                            <Cta text={'read more >'} link={linkTo} color='white'/>
                        </div>
                    </div>
        );
    }

}

export default NoteCard;