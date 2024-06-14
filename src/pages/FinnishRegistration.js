import React, { useState, useEffect } from "react";
import { useForm, FormProvider } from 'react-hook-form';
import { TextField, Button, Container, Typography, Box, Link, Divider } from '@mui/material';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useLocation } from "react-router-dom";
import FTextField from '../components/form/FTextField';
import "../App.css";
import { Schema } from "../components/validation/validationSchema";


const FinishRegistration = () => {
  const location = useLocation();
  const [email, setEmail] = useState("");

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    setEmail(params.get("email"));
  }, [location]);

  const methods = useForm({
    resolver: yupResolver(Schema),
    mode: 'onChange'
  });

  const onSubmit = async (data) => {
    const formData = new URLSearchParams();
    formData.append("emailAddress", email);
    formData.append("username", data.username);
    formData.append("phoneNumber", data.phoneNumber);
    formData.append("password", data.password);

    try {
      const response = await fetch("http://localhost:8080/register/complete-registration", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: formData,
      });

      if (response.ok) {
        console.log("Registration completed");
        // Handle successful registration
      } else {
        console.error("Registration failed");
        // Handle registration failure
      }
    } catch (error) {
      console.error("Error:", error);
    }
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
            Hoàn thành đăng ký
          </Typography>
          <FTextField
            name="email"
            label="Email"
            variant="outlined"
            value={email || ""}
            InputProps={{
              readOnly: true,
            }}
          />
          <FTextField
            name="username"
            label="Username"
            variant="outlined"
          />
          <FTextField
            name="phoneNumber"
            label="Số điện thoại"
            variant="outlined"
          />
          <FTextField
            name="password"
            label="Mật khẩu"
            type="password"
            variant="outlined"
          />
          <Button
            type="submit"
            variant="contained"
            sx={{ backgroundColor: '#FF5722', color: '#FFFFFF', '&:hover': { backgroundColor: '#E64A19' } }}
          >
            Gửi
          </Button>
        </Box>
      </Container>
    </FormProvider>
  );
};

export default FinishRegistration;
