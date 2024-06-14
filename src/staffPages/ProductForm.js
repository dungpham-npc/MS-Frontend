// AddStaff.js
import React from 'react';
import { Container, Box, TextField, Typography, Button, FormControl, Select, MenuItem, InputLabel } from '@mui/material';
import { useForm, FormProvider } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useNavigate } from 'react-router-dom';
import FTextField from '../components/form/FTextField';
import { Schema } from '../components/validation/validationSchema';
// import * as yup from 'yup';


function ProductForm() {
  const methods = useForm({
    resolver: yupResolver(Schema),
    mode: 'onChange',
  });


  const { handleSubmit } = methods;
  const navigate = useNavigate();

  const onSubmit = (data) => {
    console.log(data);
    // Handle adding new staff
  };
  const handleGoBack = () => {
    navigate(-1);  // Equivalent to history.goBack()
  };

  return (
    <Container>
      <Typography variant="h4" sx={{ mb: 2 }}>Add Staff</Typography>
      <FormProvider {...methods}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <FTextField
            label="Name"
            name="name"
            fullWidth
            margin="normal"
            
          />
          
          <FTextField
            label="Phone Number"
            name="phoneNumber"
            fullWidth
            margin="normal"
            
          />
          <FTextField
                        name="email"
                        label="Email"
                        variant="outlined"
                        
                    />
            <FormControl fullWidth margin="normal">
                <InputLabel id="role-label">Role</InputLabel>
                <Select
                  labelId="role-label"
                  label="Role"
                  name= "Role"
                  
                >
                  <MenuItem value="SELLER">Seller</MenuItem>
                  <MenuItem value="MANAGER">Manager</MenuItem>
                  <MenuItem value="POST_STAFF">Post Staff</MenuItem>
                  <MenuItem value="PRODUCT_STAFF">Product Staff</MenuItem>
                </Select>
              </FormControl>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 2 }}>
            <Button type="submit" variant="contained" color="primary">Save</Button>
            <Button variant="outlined" onClick={handleGoBack}>Cancel</Button>
          </Box>
        </form>
      </FormProvider>
    </Container>
  );
}

export default ProductForm;
