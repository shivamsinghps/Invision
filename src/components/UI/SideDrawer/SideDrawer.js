import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import MenuIcon from '@material-ui/icons/Menu';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import classess from './SideDrawer.module.css'

const useStyles = makeStyles({

  list: {
    width: 250,
  },
  text:{
    color:'white'
  },
  fullList: {
    width: 'auto',
  },
  paper: {
  background: "#333333"
}
});

const SideDrawer=()=> {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = () => {
    setOpen(!open);
  };

  const list = (
    <div
      className={classes.list}
      role="presentation"
      onClick={toggleDrawer}
    >
      <List>
        {['Home', 'Latest News', 'AboutUs', 'Contact Us'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
            <ListItemText classes={{ root: classes.text }} primary={text} />
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {['UnBunked', 'Team Anonymous'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </div>
  );

  return (
        <React.Fragment>
        <div className={classess.Menu}>
          <Button onClick={toggleDrawer}><MenuIcon /></Button>
        </div>
          <Drawer classes={{ paper: classes.paper }} anchor='right' open={open} onClose={toggleDrawer}>
            {list}
          </Drawer>
        </React.Fragment>
  );
}

export default SideDrawer
