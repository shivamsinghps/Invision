import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import MenuIcon from '@material-ui/icons/Menu';
import Divider from '@material-ui/core/Divider';
import classess from './SideDrawer.module.css'
import SideList from './List/List'

const useStyles = makeStyles({

  list: {
    width: 250,
  },
  paper: {
  background: "#333333"
}
});

const SideDrawer=()=> {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const primarylinks = ['Home','AboutUs','OurWork','Techs','Career','Vision','Contact']
  const seclinks = ['UnBunked','TeamAnonymous']
  const toggleDrawer = () => {
    setOpen(!open);
  };

  const list = (
    <div
      className={classes.list}
      role="presentation"
      onClick={toggleDrawer}
    >
      <SideList links={primarylinks} />
      <Divider />
      <SideList links={seclinks} />
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
