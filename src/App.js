import React from 'react';
import { Route } from 'react-router-dom';
import { spring, AnimatedSwitch } from 'react-router-transition';
import HomePage from './components/pages/HomePage/HomePage';
import AboutPage from './components/pages/About/AboutPage';
//import NotesPage from './components/pages/Notes/NotesPage';
import CaseStudy from './components/pages/CaseStudy/CaseStudy';
//import Article from './components/pages/Notes/Article';
import wrapperStyle from './wrapperStyle.css';
import Header from './components/Header/HeaderComponent';
import Footer from './components/FooterComponent';
import ContactPage from './components/pages/ContactPage/ContactPage';

function mapStyles(styles) {
    return {
      opacity: styles.opacity,
      transform: `scale(${styles.scale})`,
    };
  }
  
  function bounce(val) {
    return spring(val, {
      stiffness: 180,
      damping: 60,
    });
  }
  
  const bounceTransition = {
    atEnter: {
      opacity: 0,
      scale: 1.2,
    },
    atLeave: {
      opacity: bounce(0),
      scale: bounce(0.6),
    },
    atActive: {
      opacity: bounce(1),
      scale: bounce(1),
    },
  };


const App = () => 
<div>


<Header />

<AnimatedSwitch
    atEnter={ bounceTransition.atEnter }
    atLeave={ bounceTransition.atLeave }
    atActive={ bounceTransition.atActive }
    mapStyles={mapStyles}
    className="route-wrapper"
>
    <Route path="/" exact  component={HomePage} />
    <Route path="/about" exact component={AboutPage} theme={this.theme}/>

    <Route path="/contact" exact component={ContactPage} />
    <Route path="/projects/:link" exact render={routeProps => <CaseStudy {...routeProps} />} />

</AnimatedSwitch>
<Footer />
</ div>


export default App;
