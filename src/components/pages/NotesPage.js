import React from 'react';
import { Link } from 'react-router-dom';

const NotesPage = () => (
<div>
<h1>Notes Page</h1>
<Link to = "/">PROJECTS</Link>
<Link to = "/about">ABOUT</Link>
<Link to = "/notes">NOTES</Link>
<Link to = "/contact">CONTACT</Link>
</div>
);

export default NotesPage;