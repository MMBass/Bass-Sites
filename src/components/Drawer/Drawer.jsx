import { useContext } from 'react';
import { DrawerContext } from '@context/DrawerContext';

import {Drawer as MuiDrawer, Box} from '@mui/material';

function Drawer({ className, ...props }) {
  const drawerContext = useContext(DrawerContext);

  return (
    <MuiDrawer
      className={className}
      anchor={drawerContext.anchor}
      open={drawerContext.open}
      variant={drawerContext.permanent}
      onClose={()=>{drawerContext.toggleDrawer(false)}}
    >
      <Box
        className='drawer-layout'
        sx={{ width: drawerContext.anchor === 'top' || drawerContext.anchor === 'bottom' ? 'auto' : 250 }}
        role="presentation"
        onClick={()=>{drawerContext.toggleDrawer(false)}}
      >
        <drawerContext.child>
        </drawerContext.child>
      </Box>
    </MuiDrawer>
  );
}

export default Drawer;
