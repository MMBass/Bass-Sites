import { useContext } from 'react';

import {Menu as MenuIcon} from '@mui/icons-material';
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Container
} from '@mui/material';

import { default as SidePagesList } from '../SidePagesList/StyledSidePagesList';
import { default as NavBar } from '@components/NavBar/StyledNavBar';

import { DrawerContext } from '@context/DrawerContext';

const Header = ({ className, ...props }) => {
  const drawerContext = useContext(DrawerContext);

  const handleOpenNavMenu = () => {
    drawerContext.toggleDrawer(true, 'left', 'temporary', SidePagesList);
  };

  return (
    <AppBar position="static" className={className} dir="ltr">
      <Container maxWidth="xl">
        <Toolbar disableGutters>

          <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
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
          </Box>

          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ mr: 2, display: 'flex' }}
          >
            BassSites
          </Typography>

          <NavBar className="nav-bar"></NavBar>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;