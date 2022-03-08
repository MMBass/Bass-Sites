import { NavLink } from "react-router-dom";

import {Box, Button} from '@mui/material';

function NavBar({className}) {
  
  const pages = [
   { name: 'Home', url: '/' },
   { name: 'Wordpress Plugins', url: '/wordpress-plugins' }, 
   { name: 'Our Projects', url: '/projects' }
  ];

  return (
    <Box className={className} sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
    {pages.map((page) => (
      <NavLink to={page.url} key={page.name}>
        <Button
          className="nav-btn"
          sx={{ my: 2 }}
        >
          {page.name}
        </Button>
      </NavLink>
    ))}
  </Box>
  );
}

export default NavBar;
