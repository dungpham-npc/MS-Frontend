import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import FormProvider from '../components/form/FormProvider'
import { TextField, Button, Container, Typography, Box, Link, Divider, Alert } from '@mui/material';
import { yupResolver } from '@hookform/resolvers/yup';
import { useLocation, useNavigate } from "react-router-dom";
import useAuth from '../hooks/useAuth';
import { LoadingButton } from "@mui/lab"
import * as yup from 'yup';
import FTextField from '../components/form/FTextField';
import "../App.css";
// import { Schema } from '../components/validation/validationSchema';

const schema = yup.object().shape({
    password: yup.string().required('Mật khẩu không được để trống'),
    username: yup.string().required('email khong duoc de trong')
});

const defaultValues = {
    username: "",
    password: "",

}
function Login() {

    const navigate = useNavigate();
    const location = useLocation();
    const auth = useAuth();


    // const handleGoogleLogin = () => {
    //     window.location.href = "http://localhost:8080/oauth2/authorization/google";
    // };

    const methods = useForm({
        resolver: yupResolver(schema),
        defaultValues,
        mode: 'onChange'
    });
    const {
        handleSubmit,
        reset,
        setError,
        formState: { errors, isSubmitting },
    } = methods;

    const onSubmit = async (data) => {
        const from = location.state?.from?.pathname || "/";
        let { username, password } = data;

        try {
            await auth.login({ username, password }, () => {
                navigate(from, { replace: true });
            });
        } catch (error) {
            reset();
            setError("responseError", error);
        }
    };

    return (
        <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
            {!!errors.responseError && (
                <Alert severity="error">{errors.responseError.message}</Alert>
            )}
            <Container maxWidth="sm">

                <Box


                    // action="http://localhost:8080/login" method="post"
                    sx={{
                        // display: 'flex',
                        // // flexDirection: 'column',
                        gap: 2,
                        mt: 5,
                        padding: 3,
                        border: '1px solid #ccc',
                        borderRadius: '8px',
                        boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
                    }}
                >
                    <Typography variant="h4" component="h1" gutterBottom>
                        Đơn đăng nhập
                    </Typography>
                    <FTextField
                        name="username"
                        label="Email"

                    />
                    <FTextField
                        name="password"
                        label="Mật khẩu"
                        type="password"

                    />
                    <Typography underline="none" sx={{ alignSelf: 'flex-end', mb: 2 }}>
                        <Link href="/reset" underline='hover' color='#4285F4'>
                            Quên mật khẩu?
                        </Link>
                    </Typography>
                    <LoadingButton
                        fullWidth
                        size="large"
                        type="submit"
                        variant="contained"
                        loading={isSubmitting}
                    >
                        Login
                    </LoadingButton>
                    <Divider sx={{ my: 2 }} />
                    <Button
                    // className="google-login"
                    // variant="contained"
                    // color="primary"
                    // sx={{ mb: 1, backgroundColor: '#4285F4', '&:hover': { backgroundColor: '#357ae8' } }}
                    // onClick={handleGoogleLogin}
                    >
                        đăng nhập bằng Google
                    </Button>
                    <Typography variant="body2" sx={{ mt: 2, textAlign: 'center' }}>
                        Chưa có tài khoản?{' '}
                        <Link href="/register" underline="hover" color='#4285F4'>
                            Đăng ký
                        </Link>
                    </Typography>
                </Box>
            </Container>
        </FormProvider>
    );
}

export default Login;
