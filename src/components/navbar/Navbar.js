import React, { useState, useEffect } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
// import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

import image from '../../images/logo/logo.png';
import { makeStyles, Tabs, Tab } from '@material-ui/core';
import { Link } from 'react-router-dom';

const useStyles = makeStyles(theme => ({
  appbar: {
    backgroundColor: '#16161a',
    color: 'black',
    boxShadow: '0px 0px 0px 0px',
    padding: '1rem 5rem'
  },
  buttonContaine: {
    padding: 0,
    '&:hover': {
      backgroundColor: 'transparent'
    }
  },
  toolbarMargin: {
    marginBottom: '9em'
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
  const [value, setValue] = useState(0);

  const handleChange = (e, value) => {
    setValue(value);
  };

  useEffect(() => {
    if (window.location.pathname === '/' && value !== 0) {
      setValue(0);
    } else if (window.location.pathname === '/about' && value !== 1) {
      setValue(1);
    } else if (window.location.pathname === '/service' && value !== 2) {
      setValue(2);
    } else if (window.location.pathname === '/shedule' && value !== 3) {
      setValue(3);
    } else if (window.location.pathname === '/gallery' && value !== 4) {
      setValue(4);
    } else if (window.location.pathname === '/blog' && value !== 5) {
      setValue(5);
    } else if (window.location.pathname === '/contact' && value !== 6) {
      setValue(6);
    }
  }, [value]);

  return (
    <>
      <AppBar position='fixed' className={classes.appbar}>
        <Toolbar className={classes.toolbar} disableGutters>
          <Button
            component={Link}
            to='/'
            disableRipple
            onClick={() => setValue(0)}
            className={classes.buttonContaine}
          >
            <img src={image} alt='gym' />
          </Button>
          <Tabs className={classes.tabs} value={value} onChange={handleChange}>
            <Tab className={classes.tab} component={Link} to='/' label='Home' />
            <Tab
              className={classes.tab}
              component={Link}
              to='/about'
              label='About'
            />
            <Tab
              className={classes.tab}
              component={Link}
              to='/service'
              label='Service'
            />
            <Tab
              className={classes.tab}
              component={Link}
              to='/shedule'
              label='Shedule'
            />
            <Tab
              className={classes.tab}
              component={Link}
              to='/gallery'
              label='Gallery'
            />
            <Tab
              className={classes.tab}
              component={Link}
              to='/blog'
              label='Blog'
            />
            <Tab
              className={classes.tab}
              component={Link}
              to='/contact'
              label='Contact'
            />
          </Tabs>
          <Button variant='contained' color='secondary' className={classes.btn}>
            Became a member
          </Button>
        </Toolbar>
      </AppBar>
      <div className={classes.toolbarMargin} />
    </>
  );
};

export default Navbar;
