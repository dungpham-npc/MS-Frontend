import React, { useState } from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import { TextField, Button, Container, Typography, Box, Link, Divider } from '@mui/material';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import FTextField from '../components/form/FTextField';
import "../App.css";
import { Schema } from '../components/validation/validationSchema';

// const schema = yup.object().shape({
//     email: yup.string().required('Email không được để trống').email('Email không hợp lệ'),
//     password: yup.string().required('Mật khẩu không được để trống')
// });

function Login() {
    const [isLogin, setIsLogin] = useState(true);
    
    const toggleForm = () => {
        setIsLogin(!isLogin);
    };
    
    const handleGoogleLogin = () => {
        window.location.href = "http://localhost:8080/oauth2/authorization/google";
    };

    const methods = useForm({
        resolver: yupResolver(Schema),
        mode: 'onChange'
    });

    const onSubmit = (data) => {
        console.log(data);
    };

    return (
        <FormProvider {...methods}>
            <Container maxWidth="sm">
                <Box
                    component="form"
                    action="http://localhost:8080/login" method="post"
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: 2,
                        mt: 5,
                        padding: 3,
                        border: '1px solid #ccc',
                        borderRadius: '8px',
                        boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
                    }}
                >
                    <Typography variant="h4" component="h1" gutterBottom>
                        Đăng nhập
                    </Typography>
                    <FTextField
                        name="email"
                        label="Email"
                        variant="outlined"
                        
                    />
                    <FTextField
                        name="password"
                        label="Mật khẩu"
                        type="password"
                        variant="outlined"
                        
                    />
                    <Typography underline="none" sx={{ alignSelf: 'flex-end', mb: 2 }}>
                        <Link href="/reset" underline='hover' color='#4285F4'>
                            Quên mật khẩu?
                        </Link>
                    </Typography>
                    <Button
                        type="submit"
                        variant="contained"
                        sx={{ backgroundColor: '#1939B7', color: '#FFFFFF', '&:hover': { backgroundColor: '#E64A19' } }}
                    >
                        Đăng nhập
                    </Button>
                    <Divider sx={{ my: 2 }} />
                    <Button
                        className="google-login"
                        variant="contained"
                        color="primary"
                        sx={{ mb: 1, backgroundColor: '#4285F4', '&:hover': { backgroundColor: '#357ae8' } }}
                        onClick={handleGoogleLogin}
                    >
                        Đăng nhập bằng Google
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
