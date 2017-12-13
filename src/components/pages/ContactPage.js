import React from 'react';
import { Link } from 'react-router-dom';

const ContactPage = () => (
<div>
<h1>Contact Page</h1>
<Link to = "/">PROJECTS</Link>
<Link to = "/about">ABOUT</Link>
<Link to = "/notes">NOTES</Link>
<Link to = "/contact">CONTACT</Link>
</div>
);

export default ContactPage;