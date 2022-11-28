/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-empty-interface */
import React from 'react';
import { Box, Container } from '@mui/material';
import { makeStyles } from '@mui/styles';
import LoginForm from '../src/auth/Login.form';

const useStyles = makeStyles({
    loginContainer: {
        display: 'flex',
        justifyContent: 'center',
        backgroundColor: '#121212',
        alignItems: 'center',
        width: '100%',
        height: '100vh'
    }
})

interface LoginProps {}

const Login: React.FC<LoginProps> = ({}) => {
    const classes = useStyles();
    return (<Box className={classes.loginContainer}>
            <LoginForm/>
    </Box>   
  );
}

export default Login;
