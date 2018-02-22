import Responsive from 'react-responsive';
import React from 'react';
import {posts} from '../../data/notesPosts';
import NoteCard from './NoteCard';

const style = {
        main:{
            backgroundColor:'#000a12'
        },
        card:{
            marginLeft:'1%',
            marginTop:'80px',
            paddingBottom:'50px',
            columnCount: 4,
            columnGap: 0,
            border:'1px solid black'
        }
    }
const styleMobile = {
            main:{
                backgroundColor:'#000a12'
            },
            card:{
                marginLeft:'1%',
                marginTop:'80px',
                paddingBottom:'75px',
                columnCount: 1,
                columnGap: 0,
            }
}

const styleTablet = {
    main:{
        backgroundColor:'#000a12'
    },
    card:{
        marginLeft:'1%',
        paddingTop:'50px',
        paddingBottom:'50px',
        columnCount: 2,
        columnGap: 0
    }
}

const Desktop = props => <Responsive {...props} minWidth={992} />;
const Tablet = props => <Responsive {...props} minWidth={768} maxWidth={991} />;
const Mobile = props => <Responsive {...props} maxWidth={767} />;

class NotesPage extends React.Component {
    constructor(props){
        super(props);
        this.title = 'notes';
    }

    render(){
            return (
                <div style = {style.main}>
                    <Desktop>
                        <div style={style.card}>
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
                    </Desktop>
                    <Tablet>
                    <div style={styleTablet.card}>
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
                    </Tablet>
                    <Mobile>
                    <div style={styleMobile.card}>
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
                    </Mobile>                
                                </div>
                );
    }

}

export default NotesPage;