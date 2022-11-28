/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-empty-interface */
import React from 'react';
import { Container } from '@mui/material';
import { makeStyles } from '@mui/styles';
import LoginForm from '../src/auth/Login.form';


const useStyles = makeStyles({
    loginContainer: {
        backgroundColor: '#121212',
        width: '100%',
        height: '100vh'
    }
})

interface LoginProps {}

const Login: React.FC<LoginProps> = ({}) => {
    const classes = useStyles();
    return (<Container className={classes.loginContainer}>
            <LoginForm/>
    </Container>   
  );
}

export default Login;