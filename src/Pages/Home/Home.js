import React from 'react';
import Navbar from '../../components/Shared/Navbar';
import Banner from './Banner/Banner';
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
        </div>
    );
};

export default Home;