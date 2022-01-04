import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import { grey, lightGreen } from '@mui/material/colors';
import { Link, useNavigate } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import avatar from '../../images/avatar.jpg'

const ResponsiveAppBar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const { user, logout } = useAuth();
  let navigate = useNavigate();

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar sx={{ backgroundColor: lightGreen[600], py: 0.5 }} position="static">
      <Container maxWidth="lg">
        <Toolbar disableGutters>
          <Typography onClick={() => navigate('/')}
            variant="h4"
            noWrap
            component="div"
            sx={{
              flexGrow: 1,
              pr: 1,
              fontWeight: 'bold',
              cursor: 'pointer',
              display: {
                xs: 'none',
                md: 'flex'
              }
            }}
          >
            Travail
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              <MenuItem as={Link} to="/jobs" onClick={handleCloseNavMenu}>
                <Typography textAlign="center">Jobs</Typography>
              </MenuItem>
              <MenuItem as={Link} to="/about" onClick={handleCloseNavMenu}>
                <Typography textAlign="center">About Us</Typography>
              </MenuItem>
              <MenuItem as={Link} to="/contact" onClick={handleCloseNavMenu}>
                <Typography textAlign="center">Contact</Typography>
              </MenuItem>
              <MenuItem as={Link} to="/" onClick={handleCloseNavMenu}>
                <Typography textAlign="center">Sign Up</Typography>
              </MenuItem>
            </Menu>
          </Box>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}
          >
            Travail
          </Typography>

          <Box sx={{ flexGrow: 0, mr: 1, display: { xs: 'none', md: 'flex' } }}>
            <Typography as={Link} to={'/jobs'}
              sx={{
                my: 2,
                mr: 2,
                textDecoration: 'none',
                color: 'white',
                transition: 'all 0.1s ease-in',
                '&:hover': {
                  color: grey[300],
                }
              }}
              variant="h6" component="div">
              Jobs
            </Typography>
            <Typography as={Link} to={'/about'}
              sx={{
                my: 2,
                mr: 2,
                textDecoration: 'none',
                color: 'white',
                transition: 'all 0.1s ease-in',
                '&:hover': {
                  color: grey[300],
                }
              }}
              variant="h6" component="div">
              About Us
            </Typography>
            <Typography as={Link} to={'/contact'}
              sx={{
                my: 2,
                mr: 2,
                textDecoration: 'none',
                color: 'white',
                transition: 'all 0.1s ease-in',
                '&:hover': {
                  color: grey[300],
                }
              }}
              variant="h6" component="div">
              Contact
            </Typography>
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            {
              user?.email ? (<><Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar alt="Profile Picture" src={user?.photoURL ? user?.photoURL : avatar} />
                </IconButton>
              </Tooltip>
                <Menu
                  sx={{ mt: '45px' }}
                  id="menu-appbar"
                  anchorEl={anchorElUser}
                  anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  open={Boolean(anchorElUser)}
                  onClose={handleCloseUserMenu}
                >
                  <MenuItem as={Link} to="/my-profile" onClick={handleCloseNavMenu}>
                    <Typography textAlign="center">My Profile</Typography>
                  </MenuItem>
                  <MenuItem as={Link} to="/" onClick={handleCloseNavMenu}>
                    <Typography textAlign="center">My Jobs</Typography>
                  </MenuItem>
                  <MenuItem onClick={logout}>
                    <Typography textAlign="center">Log Out</Typography>
                  </MenuItem>
                </Menu>
              </>) : <Button
                component={Link}
                to={'/login'}
                sx={{
                  px: 1.5,
                  py: 0.75,
                  backgroundColor: grey[100],
                  color: 'black',
                  '&:hover': {
                    backgroundColor: 'black',
                    color: grey[200]
                  }
                }}
                variant="contained"
              >
                Login
              </Button>
            }

          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default ResponsiveAppBar;
