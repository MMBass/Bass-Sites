import { NavLink } from "react-router-dom";

import {
  Grid,
  List,
  ListSubheader,
  ListItem,
  ListItemText,
  Link
} from '@mui/material';

const pages = [
  { name: 'Home', url: '/' },
  { name: 'Wordpress Plugins', url: '/wordpress-plugins' }, 
  { name: 'Our Projects', url: '/projects' }
 ];
const social = [{ name: 'Github', url: 'https://github.com/MMBass/Bass-Sites' }];
const contact = [{ name: 'example@gmail.com', url: 'mailto:example@gmail.com' }];

function Footer({ className }) {
  return (
    <div id="FOOTER" className={className}>
      <Grid container rowSpacing={6} columnSpacing={2}>
        <Grid item xs={12} sm={4}>
          <List>
            <ListSubheader
              variant="h5"
              component="h5"
            >
              Pages
            </ListSubheader>
            {pages.map((item, index) => (
              <NavLink to={item.url} key={index}>
                <ListItem key={index}>
                  <ListItemText primary={item.name} />
                </ListItem>
              </NavLink>
            ))}
          </List>

        </Grid>

        <Grid item xs={12} sm={4}>
          <List>
            <ListSubheader
              variant="h5"
              component="h5"
            >
              Social
            </ListSubheader>
            {social.map((item, index) => (
              <Link href={item.url} key={index}>
                <ListItem key={index}>
                  <ListItemText primary={item.name} />
                </ListItem>
              </Link>
            ))}
          </List>

        </Grid>

        <Grid item xs={12} sm={4}>
          <List>
            <ListSubheader
              variant="h5"
              component="h5"
            >
              Stay Connected
            </ListSubheader>
            {contact.map((item, index) => (
              <Link href={item.url} key={index}>
                <ListItem key={index}>
                  <ListItemText primary={item.name} />
                </ListItem>
              </Link>
            ))}
          </List>

        </Grid>
      </Grid>
    </div>
  );
}

export default Footer;
