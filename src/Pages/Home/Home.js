import React from 'react';
import Navbar from '../../components/Shared/Navbar';
import Profail from '../Profail/Profail';
import Banner from './Banner/Banner';
import CurrentJob from './CurrentJob/CurrentJob';
import Instructions from './Instructions/Instructions';
import JobSeeker from './JobSeeker/JobSeeker';
import RemoteHub from './RemoteHub/RemoteHub';

const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Profail></Profail>
            <Banner></Banner>
            <Instructions></Instructions>
            <JobSeeker></JobSeeker>
            <RemoteHub></RemoteHub>
            <CurrentJob></CurrentJob>
        </div>
    );
};

export default Home;