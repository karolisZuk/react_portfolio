import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => (
<div>
<h1>Home Page</h1>
<Link to = "/">PROJECTS</Link>
<Link to = "/about">ABOUT</Link>
<Link to = "/notes">NOTES</Link>
<Link to = "/contact">CONTACT</Link>
</div>
);

export default HomePage;