import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { TextField, Divider, Button, Container, Typography, Box, Link, Grid } from '@mui/material';
import "../App.css";
import FTextField from '../components/form/FTextField';
import FormProvider from '../components/form/FormProvider';
import * as yup from 'yup';
import useAuth from '../hooks/useAuth';
import { useNavigate } from 'react-router-dom';
import { useFormContext } from '../components/form/FormContext';

const Schema = yup.object().shape({
    emailAddress: yup.string().email('Email không hợp lệ').required('Email không được để trống'),
});

const defaultValues = {
    emailAddress: ""
}

function Register() {
    const navigate = useNavigate();
    const auth = useAuth();
    const { updateFormData } = useFormContext()

    const methods = useForm({
        resolver: yupResolver(Schema),
        defaultValues,
        mode: 'onChange' // Validate on change
    });

    const {
        handleSubmit,
        reset,
        setError,
        formState: { errors, isSubmitting }
    } = methods;

    const onSubmit = async (data) => {
        const { emailAddress } = data;
        try {
            await auth.sendEmail({ emailAddress }, () => {
                updateFormData({ emailAddress });
                navigate('/otp'); // Pass email as a query parameter
            });
        } catch (error) {
            reset();
            setError("responseError", error);
        }
    };

    return (
        <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
            <Container maxWidth="sm">
                <Box
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
                    <Typography type="submit" variant="h4" component="h1" gutterBottom>
                        Đăng ký
                    </Typography>

                    <FTextField
                        name="emailAddress"
                        label="Email"
                        variant="outlined"
                    />
                    <Button
                        type="submit"
                        variant="contained"
                        sx={{ backgroundColor: '#4285F4', color: '#FFFFFF', '&:hover': { backgroundColor: '#E64A19' } }}
                    >
                        Lấy OTP
                    </Button>

                    <Typography variant="body2" sx={{ mt: 2, textAlign: 'center' }}>
                        Đã có tài khoản?{' '}
                        <Link href="/login" underline="hover" color='#4285F4'>
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
