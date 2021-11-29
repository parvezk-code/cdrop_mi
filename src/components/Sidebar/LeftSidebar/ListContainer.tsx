import { FC } from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import {leftSidebarData} from '../../../repository/projectrepository';

const ListContainer:FC = () => {
  return (
        <List>
            {leftSidebarData.map((item) =>(
              <ListItem button key={item.label}>
                <ListItemIcon>
                  {item.icon}
                </ListItemIcon>
                <ListItemText primary={item.label} />
              </ListItem>
            ))}
        </List>
  );
}

export default ListContainer;
