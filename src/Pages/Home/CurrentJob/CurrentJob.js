import { Box, Button, Container, Grid, Link, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import ArrowRightAltSharpIcon from "@mui/icons-material/ArrowRightAltSharp";
// import jobs from "../../../fakeData"

const CurrentJob = () => {
  const [jobs, setJobs] = useState();

  useEffect(() => {
    fetch("https://pacific-lowlands-19741.herokuapp.com/availableJobs")
      .then((res) => res.json())
      .then((data) => setJobs(data));
  }, []);

  return (
    <Container style={{ marginTop: "40px" }}>
      <Box style={{ marginBottom: "50px" }}>
        <Typography variant="h4" style={{ fontWeight: 600, marginTop: "15px" }}>
          Current Job
        </Typography>
      </Box>
      <Box sx={{ flexGrow: 1 }}>
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          {jobs?.slice(0, 6).map((job) => (
            <Grid
              item
              xs={2}
              sm={4}
              md={6}
              key={job._id}
              style={{ borderRadius: "10px", gridGap: "5px" }}
            >
              <Typography
                variant="h5"
                style={{ fontWeight: 600, marginTop: "15px" }}
              >
                {job.jobTitle}
              </Typography>
              <Typography
                variant="h6"
                style={{ fontSize: 16, fontWeight: 500, marginTop: "15px" }}
              >
                {job.companyName}
              </Typography>
              <Typography style={{ marginTop: "15px" }}>
                {job.description.slice(0, 200)}
              </Typography>
              <Link style={{ textDecoration: "none", marginTop: "15px" }}>
                <Button>
                  Learn More{" "}
                  <ArrowRightAltSharpIcon style={{ marginLeft: 10 }} />
                </Button>
              </Link>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
};

export default CurrentJob;
