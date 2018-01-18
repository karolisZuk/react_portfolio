import Transition from 'react-inline-transition-group';
import React from 'react';
import HeaderComponent from '../../Header/HeaderComponent';
import FooterComponent from '../../FooterComponent';
import theme from '../../theme';
import {posts} from '../../data/notesPosts';
import NoteCard from './NoteCard';

const style = {
        main:{
            backgroundColor:'#000a12',
            color:'white'
        },
        cardHolder: {
            backgroundColor:'#4f5b62',
            overflowY:'hidden',
            margin:'20px'
        }
}

class NotesPage extends React.Component {
    constructor(props){
        super(props);
        this.title = 'notes';
    }

    render(){
            return (
                <div style = {style.main}>
                    <HeaderComponent title={this.title} />
                        <div style={style.cardHolder}>
                            {posts.map(item => <NoteCard
                                key = {item.articleId} 
                                date = {item.articleDate} 
                                title = {item.articleTitle}
                                description = {item.articleDescription}
                                articleDescriptionLong = {item.articleDescriptionLong}
                                articleTldr = {item.articleTldr}
                                externalLinks = {item.externalLinks}
                                linkToArticle = {item.linkToArticle}
                                /> )}
                        </div>
                    <FooterComponent />
                </div>
                );
    }

}

export default NotesPage;