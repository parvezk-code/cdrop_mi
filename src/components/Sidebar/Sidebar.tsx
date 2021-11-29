import React, { FC } from 'react';
import MuiDrawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import {sidebarProps} from './Types'
import "./Sidebar.scss";


const Sidebar: FC<sidebarProps>= (props) => {

  const [open, setOpen] = React.useState(false);
  const handleDrawerOpen = () => {
    setOpen(!open);
  };   
  
  const openIcon = (props.direction=='left')?<ChevronRightIcon /> : <ChevronLeftIcon />;
  const closeIcon = (props.direction=='left')?<ChevronLeftIcon /> : <ChevronRightIcon />;
  const width = open? props.maxWidth : props.minWidth;

  return (
      <MuiDrawer variant="permanent" open={open} className= {open?"l-sidebar open":" l-sidebar close"} sx={{ width: width }} >

        <Box component="button" onClick={handleDrawerOpen} className="toggler">
            {open ? closeIcon: openIcon}
        </Box>

        {props.children}

      </MuiDrawer>
  );
}

export default Sidebar;
