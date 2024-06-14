import React from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import { TextField, Button, Container, Typography, Box, Link } from '@mui/material';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import FTextField from '../components/form/FTextField';
import "../App.css";

const schema = yup.object().shape({
    otp: yup.string()
        .required('OTP không được để trống')
        .matches(/^\d{6}$/, 'OTP phải gồm 6 chữ số'),
});

function OTP() {
    const methods = useForm({
        resolver: yupResolver(schema),
        mode: 'onChange'
    });

    const onSubmit = (data) => {
        console.log(data);
        // Handle OTP verification logic here
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
                        Xác thực OTP
                    </Typography>
                    <Typography variant="h6" component="h1" gutterBottom>
                        Vui lòng nhập mã OTP bạn nhận được qua email
                    </Typography>
                    <FTextField
                        name="otp"
                        label="Mã OTP"
                        variant="outlined"
                    />
                    <Button
                        type="submit"
                        variant="contained"
                        sx={{ backgroundColor: '#FF5722', color: '#FFFFFF', '&:hover': { backgroundColor: '#E64A19' } }}
                    >
                        Xác thực
                    </Button>
                </Box>
            </Container>
        </FormProvider>
    );
}

export default OTP;
