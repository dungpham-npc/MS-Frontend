import React from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { TextField, Divider, Button, Container, Typography, Box, Link } from '@mui/material';
import "../App.css";
import FTextField from '../components/form/FTextField';
import { Schema } from '../components/validation/validationSchema';

// const validationSchema = Yup.object().shape({
//     email: Yup.string().email('Email không hợp lệ').required('Email không được để trống'),
//     createPassword: Yup.string().required('Mật khẩu không được để trống'),
//     confirmPassword: Yup.string()
//         .oneOf([Yup.ref('createPassword'), null], 'Mật khẩu không khớp')
//         .required('Mật khẩu không được để trống'),
// });

function Register() {
    const methods = useForm({
        resolver: yupResolver(Schema),
        mode: 'onChange' // Validate on change
    });

    const onSubmit = (data) => {
        console.log(data);
    };

    return (
        <FormProvider {...methods}>
            <Container maxWidth="sm">
                <Box
                    component="form"
                    onSubmit={methods.handleSubmit(onSubmit)}
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
                        Đăng ký
                    </Typography>
                    <FTextField
                        name="email"
                        label="Email"
                        variant="outlined"
                    />
                    <FTextField
                        name="createPassword"
                        label="Nhập mật khẩu"
                        type="password"
                        variant="outlined"
                    />
                    <FTextField
                        name="confirmPassword"
                        label="Nhập lại khẩu"
                        type="password"
                        variant="outlined"
                    />

                    <Button
                        type="submit"
                        variant="contained"
                        sx={{ backgroundColor: '#FF5722', color: '#FFFFFF', '&:hover': { backgroundColor: '#E64A19' } }}
                    >
                        Tạo tài khoản
                    </Button>
                    <Typography variant="body2" sx={{ mt: 2, textAlign: 'center' }}>
                        Đã có tài khoản?{' '}
                        <Link href="/login" underline="hover">
                            Đăng nhập
                        </Link>
                    </Typography>
                    <Divider sx={{ my: 2 }} />

                    <Button
                        variant="contained"
                        color="primary"
                        sx={{ mb: 1, backgroundColor: '#4285F4', '&:hover': { backgroundColor: '#357ae8' } }}
                        onClick={() => { console.log('Login with Google'); }}
                    >
                        Đăng nhập bằng google 
                    </Button>
                </Box>
            </Container>
        </FormProvider>
    );
}

export default Register;
