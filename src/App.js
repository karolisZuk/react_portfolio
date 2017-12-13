import React from 'react';
import { Container} from 'semantic-ui-react';
import { Route } from 'react-router-dom';
import HomePage from './components/pages/HomePage';
import AboutPage from './components/pages/AboutPage';
import NotesPage from './components/pages/NotesPage';
import ContactPage from './components/pages/ContactPage';


const App = () => 
<Container>
<Route path="/" exact component={HomePage} />
<Route path="/about" exact component={AboutPage} />
<Route path="/notes" exact component={NotesPage} />
<Route path="/contact" exact component={ContactPage} />
</ Container>;

export default App;
