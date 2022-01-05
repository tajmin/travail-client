import React, { useEffect, useState } from "react";
import { Box, Grid, Link, Typography } from "@mui/material";
import HomeWorkIcon from "@mui/icons-material/HomeWork";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import useAuth from "../../../hooks/useAuth";
import spinner from '../../../images/spinner.gif'
import Navbar from '../../../components/Shared/Navbar';

const AllApplication = () => {
  const { user, isLoading } = useAuth();
  const { email } = user;
  const [createJobs, setcreateJobs] = useState();
  useEffect(() => {
    fetch(`https://pacific-lowlands-19741.herokuapp.com/created-jobs/${email}`)
      .then((res) => res.json())
      .then((data) => setcreateJobs(data));
  }, []);

  if (isLoading) {
    return (
      <Box
        sx={{
          backgroundColor: '#fff',
          height: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        }}>
        <img style={{ margin: '0 auto' }} src={spinner} alt="" />
      </Box>
    )
  }

  return (
    <>
      <Navbar></Navbar>
      <Grid style={{ margin: "56px" }}>
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <Grid
                style={{
                  height: "30px",
                  backgroundColor: "#0B7806",
                  marginBottom: "30px",
                }}
              >
                <Typography
                  style={{
                    color: "white",
                  }}
                >
                  My Created Job
                </Typography>
              </Grid>

              <Box sx={{ flexGrow: 1 }}>
                <Grid
                  container
                  spacing={{ xs: 2, md: 1 }}
                  columns={{ xs: 4, sm: 8, md: 12 }}
                >
                  {createJobs?.map((createJob) => (
                    <Grid item xs={12} sm={12} md={12} key={createJob._id}>
                      <Grid>
                        <Grid
                          xs={12}
                          md={12}
                          style={{
                            display: "flex",
                            margin: "5px",
                          }}
                        >
                          <Grid
                            xs={3}
                            md={3}
                            style={{
                              textAlign: "right",
                              marginRight: "15px",
                            }}
                          >
                            <Typography>
                              <HomeWorkIcon style={{ color: "#13F7B5" }} />
                            </Typography>
                          </Grid>
                          {/*======== All My Post Job =========*/}
                          <Grid
                            xs={6}
                            md={6}
                            style={{
                              textAlign: "left",
                              display: "flex",
                            }}
                          >
                            <Grid>
                              <Typography
                                style={{
                                  fontSize: 22,
                                  fontWeight: 600,
                                }}
                              >
                                {createJob.companyName}
                              </Typography>
                              <Typography
                                style={{
                                  fontSize: 20,
                                  fontWeight: 500,
                                }}
                              >
                                {createJob.jobTitle}
                              </Typography>
                              <Typography
                                style={{
                                  fontSize: 14,
                                  fontWeight: 600,
                                }}
                              >
                                {createJob.location}
                              </Typography>
                            </Grid>
                          </Grid>
                          <Grid xs={3} md={3}>
                            {/*======= Detail of Poested Job link =========*/}
                            <Link>
                              <ArrowForwardIosIcon style={{ fontSize: 16 }} />
                            </Link>
                          </Grid>
                        </Grid>
                      </Grid>
                    </Grid>
                  ))}
                </Grid>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Grid>
    </>
  );
};

export default AllApplication;
