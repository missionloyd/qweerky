import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import HomeIcon from '@material-ui/icons/Home';
import ExploreIcon from '@material-ui/icons/Explore';
import QueueMusicIcon from '@material-ui/icons/QueueMusic';
import LibraryMusicIcon from '@material-ui/icons/LibraryMusic';
import AssignmentIcon from '@material-ui/icons/Assignment';
import LinkIcon from '@material-ui/icons/Link';
import { useRouter } from "next/router";
import { makeStyles } from '@material-ui/core/styles';
import pageNames from './pageNames.json';
import { List } from '@material-ui/core';
import Link from 'next/link';

const useStyles = makeStyles({
  inactive: {
    transition: 'all 0.2s',
    '&:hover': {
      backgroundColor: '#f5f5f5' 
    },
  },  
  active: {
    backgroundColor: '#eeeeee'
  },
})

const IconManager = ({name, className}) => {

  return(    
    name == "Home" &&
      <HomeIcon className={className} />
    ||
    name == "Library" &&
      <QueueMusicIcon className={className} />
    ||
    name == "Playlists" &&
      <LibraryMusicIcon className={className} />
    ||
    name == "Explore" &&
      <ExploreIcon className={className} />
    ||
      <LinkIcon className={className} />
  )
}

export const MainListItems = () => {
  const classes = useStyles();
  const router = useRouter();
  
  return(
  <List>
   {pageNames.map((item, key) => {
      return (
        <div 
          className={router.pathname == item.link ? classes.active : classes.inactive}
          key={key}
        >
          <Link href={item.link} passHref>
            <ListItem button component="a">
              <ListItemIcon>
                <IconManager name={item.name} className={router.pathname == item.link ? classes.active : classes.inactive} />
              </ListItemIcon>
              <ListItemText primary={item.name}/>
            </ListItem>
          </Link>
        </div>
      )
    })}
  </List>
);
}

export const secondaryListItems = (
  <div>
    <ListSubheader inset>Saved reports</ListSubheader>
    <ListItem button>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Current month" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Last quarter" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Year-end sale" />
    </ListItem>
  </div>
);