import { Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import {
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    Area,
    Bar,
    ComposedChart
} from "recharts";


const Chart = () => {
    
// get all data from api 
const [allJob, setAllJob] = useState([]);


useEffect(() => {
    fetch('https://pacific-lowlands-19741.herokuapp.com/availableJobs')
    .then(res => res.json())
    .then(data =>{
        setAllJob(data);
    })
},[]);
    const webDeveloperJob = allJob.filter((job)=> job?.jobTitle.toLowerCase().includes("develop"));
    const wordpressJob = allJob.filter((job)=> job?.jobTitle.toLowerCase().includes("word"));
    const blockChainJob = allJob.filter((job)=> job?.jobTitle.toLowerCase().includes("block"));
    const graphicJob = allJob.filter((job)=> job?.jobTitle.toLowerCase().includes("graphic"));
    const nodeJsJob = allJob.filter((job)=> job?.jobTitle.toLowerCase().includes("node"));

    const data = [
        {
            "name": "Developer",
            "opportunity": webDeveloperJob.length,
        },
        {
            "name": "Designer",
            "opportunity": graphicJob.length,
        },
        {
            "name": "Wordpress",
            "opportunity": wordpressJob.length,
        },
        {
            "name": "Block Chain",
            "opportunity": blockChainJob.length,
        },
        {
            "name": "Node JS",
            "opportunity": nodeJsJob.length,
        },
    ]
    
    
    return (
        <div>

            <ComposedChart width={900} height={300} data={data}>
                <XAxis dataKey="name" />
                <YAxis/>
                <Tooltip />
                <CartesianGrid stroke="#f5f5f5" />
                <Area type="monotone" dataKey="opportunity" fill="#8884d8" stroke="#8884d8" />
                <Bar dataKey="opportunity" barSize={20} fill="#413ea0" />
                <Line type="monotone" dataKey="opportunity" stroke="red" />
            <Typography>The chart shows job opportunity by specific category. </Typography>

            </ComposedChart>
        </div>
    );
};

export default Chart;