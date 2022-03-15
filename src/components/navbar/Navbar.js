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
    boxShadow: '0px 0px 0px 0px',
    padding: '1rem 5rem'
  },
  toolbar: {
    display: 'flex',
    justifyContent: 'space-between',
    flexWrap: 'wrap'
  },
  tabs: {
    color: 'white',
    marginLeft: 'auto'
  },
  tab: {
    minWidth: 10,
    marginLeft: '20px',
    textTransform: 'none'
  },
  btn: {
    marginLeft: '20px',
    backgroundColor: '#ff1313',
    color: 'white',
    padding: '20px 33px',
    textTransform: 'uppercase',
    letterSpacing: '.15rem',
    transition: 'all .3s',
    position: 'relative',
    overflow: 'hidden',
    zIndex: '1',
    borderRadius: '0',

    '&:after': {
      content: '',
      position: 'absolute',
      bottom: 0,
      left: 0,
      width: '100%',
      height: '100%',
      backgroundColor: '',

      zIndex: '-2'
    },
    '&:before': {
      content: '',
      position: 'absolute',
      bottom: 0,
      left: 0,
      width: '%',
      height: '100%',
      backgroundColor: '#c20505',
      transition: 'all .3s',
      zIndex: '-1'
    },
    '&:hover': {
      color: 'white'
    }
  }
}));

const Navbar = () => {
  const classes = useStyles({});
  return (
    <AppBar position='fixed' className={classes.appbar}>
      <Toolbar className={classes.toolbar}>
        <IconButton>
          <img src={image} alt='gym' />
        </IconButton>
        <Tabs className={classes.tabs}>
          <Tab className={classes.tab} label='Home' />
          <Tab className={classes.tab} label='About' />
          <Tab className={classes.tab} label='Service' />
          <Tab className={classes.tab} label='Shedule' />
          <Tab className={classes.tab} label='Gallery' />
          <Tab className={classes.tab} label='Blog' />
        </Tabs>
        <Button variant='contained' color='secondary' className={classes.btn}>
          Became a member
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
