import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Button, Grid } from "@mui/material";
import Profail from "../Profail";
import { Link } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import avatar from '../../../images/avatar.jpg'
import spinner from '../../../images/spinner.gif'

import { lightGreen } from "@mui/material/colors";

const drawerWidth = 150;

function ProfailDrawer(props) {
  const { user, isLoading } = useAuth();
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <Toolbar />
      <Box>
        <img style={{ width: "50px", height: "50px", borderRadius: "80px" }} src={user?.photoURL ? user?.photoURL : avatar} alt="avatar" />
      </Box>
      <Divider />
      <Link style={{ textDecoration: "none", fontWeight: 700, color: lightGreen[900] }} to="/home">
        Home
      </Link>
      <br />
      <Link to="/created-jobs" style={{ textDecoration: "none", fontWeight: 700, color: lightGreen[900] }}>
        Created Jobs
      </Link>
      <br />
      <Link to="/my-applications" style={{ textDecoration: "none", fontWeight: 700, color: lightGreen[900] }}>
        Applied Jobs
      </Link>
      <br />
      <Link to="/postjob" style={{ textDecoration: "none", fontWeight: 700, color: lightGreen[900] }}>
        Post Job
      </Link>
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

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
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
          backgroundColor: lightGreen[800],
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            MyProfile
          </Typography>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        <Toolbar />
        <Typography paragraph>
          <Grid>
            <Grid>
              <Profail></Profail>
            </Grid>
          </Grid>
        </Typography>
      </Box>
    </Box>
  );
}

ProfailDrawer.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default ProfailDrawer;
