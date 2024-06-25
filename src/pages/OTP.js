import React, { useEffect } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { TextField, Button, Container, Typography, Box } from '@mui/material';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import "../App.css";
import useAuth from '../hooks/useAuth';
import { useNavigate, useLocation } from 'react-router-dom';
import { useFormContext } from '../components/form/FormContext';

const schema = yup.object().shape({
    emailAddress: yup.string().email('Email không hợp lệ').required('Email không được để trống'),
    otpCode: yup.string()
        .required('OTP không được để trống')
        .matches(/^\d{6}$/, 'OTP phải gồm 6 chữ số'),
});





function OTP() {
    const auth = useAuth();
    const navigate = useNavigate();
    const location = useLocation();
    // const queryParams = new URLSearchParams(location.search);
    // const email = queryParams.get('email') || ""; // Retrieve email from query params
    const { formData } = useFormContext();
    const { handleSubmit, control, reset, setError, setValue, formState: { errors, isSubmitting } } = useForm({
        resolver: yupResolver(schema),
        mode: 'onChange',
        defaultValues: {
            emailAddress: formData.emailAddress || "",
            otp: ""
        },
    });
    useEffect(() => {
        // Set the email value in the form if it's available in the context
        if (formData.emailAddress) {
            setValue('emailAddress', formData.emailAddress);
        }
    }, [formData, setValue]);
    // useEffect(() => {
    //     setValue('emailAddress', email); // Set the email value in the form
    // }, [email, setValue]);

    const onSubmit = async (data) => {
        const { emailAddress, otpCode } = data;
        try {
            await auth.sendOTP({ emailAddress, otpCode }, () => {
                navigate("/fill", { replace: true });
            });
        } catch (error) {
            reset();
            setError("responseError", error);
        }
    };

    return (
        <Container maxWidth="sm">
            <Box
                component="form"
                onSubmit={handleSubmit(onSubmit)}
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
                <Controller
                    name="emailAddress"
                    control={control}
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="Email"
                            variant="outlined"
                            error={!!errors.emailAddress}
                            helperText={errors.emailAddress ? errors.emailAddress.message : ""}
                            disabled
                        />

                    )}
                />
                <Controller
                    name="otpCode"
                    control={control}
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="Mã OTP"
                            variant="outlined"
                            error={!!errors.otp}
                            helperText={errors.otp ? errors.otp.message : ""}
                        />
                    )}
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
    );
}

export default OTP;
