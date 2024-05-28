import React, { useState } from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import { TextField, Button, Container, Typography, Box, Link } from '@mui/material';
import "../App.css";
import FTextField from '../components/form/FTextField';
function Login() {
    // const [username, setUsername] = useState('');
    // const [password, setPassword] = useState('');
    // const [errors, setErrors] = useState({});

    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     const validationErrors = {};
    //     if (!username) {
    //         validationErrors.username = 'Field cannot be blank';
    //     }
    //     if (!password) {
    //         validationErrors.password = 'Field cannot be blank';
    //     }
    //     setErrors(validationErrors);
    //     if (Object.keys(validationErrors).length === 0) {
    //         // Proceed with form submission
    //         console.log('Form submitted');
    //     }
    // };
    const methods = useForm();

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
                        Login
                    </Typography>
                    <FTextField
                        name="phoneNumber-email"
                        label="Phone number/Email"
                        variant="outlined"
                        validationRules={{ required: 'Phone number/Email must not be empty' }}
                    />
                    <FTextField
                        name="password"
                        label="Password"
                        type="password"
                        variant="outlined"
                        validationRules={{ required: 'Password must not be empty' }}
                    />
                    <Typography underline="none" sx={{ alignSelf: 'flex-end', mb: 2 }}>
                        <Link href="/forgotpassword" underline='hover'>
                            Forgot Password?
                        </Link>
                    </Typography>
                    <Button
                        type="submit"
                        variant="contained"
                        sx={{ backgroundColor: '#FF5722', color: '#FFFFFF', '&:hover': { backgroundColor: '#E64A19' } }}
                    >
                        Login
                    </Button>
                    <Typography variant="body2" sx={{ mt: 2, textAlign: 'center' }}>
                        Don't have an account?{' '}
                        <Link href="/register" underline="hover">
                            Register
                        </Link>
                    </Typography>
                </Box>
            </Container>
        </FormProvider>
    );
};

export default Login;
