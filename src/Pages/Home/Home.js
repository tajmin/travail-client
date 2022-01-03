import React from 'react';
import Navbar from '../../components/Shared/Navbar';
import About from '../About/About';
import Contact from '../Contact/Contact';
import Banner from './Banner/Banner';
import CurrentJob from './CurrentJob/CurrentJob';
import Footer from './Footer/Footer';
import Instructions from './Instructions/Instructions';
import JobSeeker from './JobSeeker/JobSeeker';
import RemoteHub from './RemoteHub/RemoteHub';

const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Banner></Banner>
            <Instructions></Instructions>
            <JobSeeker></JobSeeker>
            <RemoteHub></RemoteHub>
            <CurrentJob></CurrentJob>
            <Footer></Footer>
        </div>
    );
};

export default Home;