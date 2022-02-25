import React from 'react';
import './homepage.scss';
import Introduction from '../../components/introduction/introduction';
import AboutMe from '../../components/about-me/about-me';
import Summary from '../../components/summary/summary';
import Projects from '../../components/projects/project';
import Contact from '../../components/contact/contact';

const HomePage = () => (
    <div className='homepage'>
        <Introduction></Introduction>
        <AboutMe></AboutMe>
        <Summary></Summary>
        <Projects></Projects>
        <Contact></Contact>
    </div>
)

export default HomePage;