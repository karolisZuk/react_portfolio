import React from 'react';
import Cta from '../../Cta';

    const style = {
            card:{
                backgroundColor: '#000a12',
                minHeight: 450,
                minWidth: 450,
                display: 'flex',
                padding:'10px',
                paddingTop: '130px',
                paddingBottom: '135px'
            },
            cardContent: {
                transition: 'all 0.2s ease',
                borderRadius:'5px',
                backgroundColor: '#4f5b62',
                minHeight: 450,
                minWidth:'100%',
                position: 'relative'
            },
            date:{
                float:'right',
                margin:'20px',
                fontSize:'1.5em'
            }
        }

class NoteCard extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            scale:1
        }
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
                    <div style={style.card}>
                        <div style={{...style.cardContent}} >
                            <h4 style={style.date}> {this.props.date} </h4>
                            <h2 style={style.title}> {this.props.title} </h2>
                            <p style={style.description}>- {this.props.description} </p>
                            
                            <Cta text={'read more >'} link={linkTo} />
                        </div>
                    </div>
        );
    }

}

export default NoteCard;