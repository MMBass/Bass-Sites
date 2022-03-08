import { NavLink } from "react-router-dom";

import { ArrowForward } from '@mui/icons-material';
import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText
} from '@mui/material';

const pages = [
  { name: 'Home', url: '/' },
  { name: 'Wordpress Plugins', url: '/wordpress-plugins' }, 
  { name: 'Our Projects', url: '/projects' }
 ];

function SidePagesList() {
  return (
    <List>
      {pages.map((page, index) => (
        <NavLink to={page.url} key={index}>
          <ListItem button key={page.name}>
            <ListItemText primary={page.name} />
            <ListItemIcon>
              <ArrowForward />
            </ListItemIcon>
          </ListItem>
        </NavLink>
      ))}
    </List>
  );
}

export default SidePagesList;
