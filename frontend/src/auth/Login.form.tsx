/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-empty-interface */
import React from 'react';
import { makeStyles } from '@mui/styles';
import { Box } from '@mui/material';
import { LogoIcon } from "../../assets/icons";

interface LoginFormProps {}

const LoginForm: React.FC<LoginFormProps> = ({}) => {
  const classes = useStyles();
  return (<Box className={classes.Container}>
    <LogoIcon className={classes.logo}/>
  </Box>);
};

const useStyles = makeStyles({
  Container: {
    maxWidth: '470px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    margin: '32px',
    backgoundColor: '#202020',
    padding: '50px 60px',
    flexDirection: 'column',
  },
  logo: {
    color: 'white',
    width: '48px',
    height: '47px',
    marginBottom: '30px'

  }
});

export default LoginForm;
