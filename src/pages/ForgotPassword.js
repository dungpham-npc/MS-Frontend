import React from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import { TextField, Button, Container, Typography, Box, Link } from '@mui/material';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import FTextField from '../components/form/FTextField';
import "../App.css";

const schema = yup.object().shape({
    email: yup.string().required('Email không được để trống').email('Email không hợp lệ'),
});

function ForgotPassword() {
    const methods = useForm({
        resolver: yupResolver(schema),
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
                        Bạn quên mật khẩu?
                    </Typography>
                    <Typography variant="h6" component="h1" gutterBottom>
                        Hãy nhập địa chỉ email trước đó bạn dùng để đăng ký
                    </Typography>
                    <FTextField
                        name="email"
                        label="Email"
                        variant="outlined"
                        
                    />
                    <Button
                        type="submit"
                        variant="contained"
                        sx={{ backgroundColor: '#FF5722', color: '#FFFFFF', '&:hover': { backgroundColor: '#E64A19' } }}
                    >
                        Send Email
                    </Button>
                </Box>
            </Container>
        </FormProvider>
    );
}

export default ForgotPassword;
