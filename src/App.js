import React from 'react';
import { Route } from 'react-router-dom';
import HomePage from './components/pages/HomePage/HomePage';
import AboutPage from './components/pages/AboutPage';
import NotesPage from './components/pages/Notes/NotesPage';
import Menu from './components/Header/Meniu';
import CaseStudy from './components/pages/CaseStudy/CaseStudy';
import Article from './components/pages/Article';

const App = () => 
<div>
<Menu />
<Route path="/" exact  component={HomePage} />
<Route path="/about" exact component={AboutPage} theme={this.theme}/>
<Route path="/notes" exact component={NotesPage} />
<Route path="/projects/:link" exact render={routeProps => <CaseStudy {...routeProps} />} />
<Route path="/articles/:link" exact render={routeProps => <Article {...routeProps} />} />
</ div>


export default App;
