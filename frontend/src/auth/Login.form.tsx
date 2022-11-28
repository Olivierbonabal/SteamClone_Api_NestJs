/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-empty-interface */
import React from 'react';
import { makeStyles } from '@mui/styles';
import { Box, TextField, Typography } from '@mui/material';
import { LogoIcon } from "../../assets/icons";

interface LoginFormProps {}

const LoginForm: React.FC<LoginFormProps> = ({}) => {
  const classes = useStyles();
  return (<Box className={classes.Container}>
    <LogoIcon className={classes.logo}/>
    <Typography variant="subtitle2" className={classes.signIn}>
    Se connecter avec un compte Epic Games
    </Typography>
    <form className={classes.form}>
      <TextField classes={{root: classes.textFieldRoot}} variant='outlined' label='Adresse e-mail'/>
      <TextField variant='outlined' label='Mot de passe'/>
      
      </form>
  </Box>);
};

const useStyles = makeStyles({
  Container: {
    maxWidth: '470px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    margin: '32px',
    backgroundColor: '#303030',
    padding: '50px 60px',
    flexDirection: 'column',
  },
  logo: {
    color: 'white',
    width: '48px',
    height: '47px',
    marginBottom: '30px'
  },
  signIn: {
    color: 'white',
    textAlign: 'left',
    marginTop: '20px',
    width: '100%',
    textTransform: 'capitalize'
  },
  form: {
    maxWidth: '380px',
    width: '100%',
    marginTop: '20px'
  },
  textFieldRoot: {
    height: '85px',
    color: 'white',
    //overRide
    '& .MuiInputBase-root': {
      color: "rgba"
    }
  }
});

export default LoginForm;
