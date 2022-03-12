import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import image from '../../images/logo/logo.png';
import { makeStyles, Tabs, Tab } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  appbar: {
    backgroundColor: '#16161a',
    color: 'black',
    boxShadow: '0px 0px 0px 0px'
  }
}));

const Navbar = () => {
  const classes = useStyles({});
  return (
    <AppBar position='fixed' className={classes.appbar}>
      <Toolbar>
        <IconButton>
          <img src={image} alt='gym' />
        </IconButton>
        <Tabs textColor='inherit'>
          <Tab label='Home' />
          <Tab label='About' />
          <Tab label='Service' />
          <Tab label='Shedule' />
          <Tab label='Gallery' />
          <Tab label='Blog' />
        </Tabs>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
