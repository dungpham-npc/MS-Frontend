// src/pages/EditCustomerAccount.js
import React, { useState, useEffect } from 'react';
import { Box, Button, Typography, Container, Alert,Card, List, ListItem, ListItemText  } from '@mui/material';
import SkipInputField from '../components/form/SkipInputField';
import apiService from '../app/apiService';
import { Link as RouterLink } from 'react-router-dom';

const EditCustomerAccount = () => {
    const [formValues, setFormValues] = useState({
        name: '',
        email: '',
        address: '',
    });
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(null);

//     useEffect(() => {
//         const fetchCustomerData = async () => {
//             setLoading(true);
//             try {
//                 const response = await apiService.get('/customer/account');
//                 setFormValues(response.data);
//                 setError(null);
//             } catch (err) {
//                 setError('Failed to fetch customer data');
//             } finally {
//                 setLoading(false);
//             }
//         };

//         fetchCustomerData();
//     }, []);

    const handleInputChange = (name, value) => {
        setFormValues((prevValues) => ({
            ...prevValues,
            [name]: value,
        }));
    };

    const handleSubmit = async () => {
    //     setLoading(true);
    //     try {
    //         await apiService.put('/customer/account', formValues);
    //         setSuccess('Account updated successfully');
    //         setError(null);
    //     } catch (err) {
    //         setError('Failed to update account');
    //         setSuccess(null);
    //     } finally {
    //         setLoading(false);
    //     }
    };

    return (
        <Container sx={{ padding: 3, display: 'flex' }}>
            <Box sx={{ flex: 1, mr: 3 }}>
            <Card sx={{ mb: 3, p: 2, border: 1, borderColor: 'grey.400' }}>
                    <Typography variant="h6">
                        {/* {formValues.name} */}Nguyen Dinh Bao
                    </Typography>
                </Card>
                <Card sx={{ p: 2 , border: 1, borderColor: 'grey.400'}}>
                    <List>
                        <ListItem button component={RouterLink} to="/change-password">
                            <ListItemText primary="Change Password" />
                        </ListItem>
                        <ListItem button component={RouterLink} to="/my-purchases">
                            <ListItemText primary="Purchase history" />
                        </ListItem>
                        
                    </List>
                </Card>
            </Box>
            <Box sx={{ flex: 2 }}>
                <Typography variant="h4" gutterBottom>
                    My profile
                </Typography>
                {loading && <Typography>Loading...</Typography>}
                {error && <Alert severity="error">{error}</Alert>}
                {success && <Alert severity="success">{success}</Alert>}
                {!loading && (
                    <Box>
                        <SkipInputField
                            label="Name"
                            name="name"
                            value={formValues.name}
                            onChange={handleInputChange}
                            helperText="Name is required"
                        />
                        <SkipInputField
                            label="Email"
                            name="email"
                            value={formValues.email}
                            onChange={handleInputChange}
                            helperText="Email is required"
                            sx={{ mt: 2 }}
                        />
                        <SkipInputField
                            label="Address"
                            name="address"
                            value={formValues.address}
                            onChange={handleInputChange}
                            helperText="Address is required"
                            sx={{ mt: 2 }}
                        />
                        <Button
                            variant="contained"
                            color="primary"
                            onClick={handleSubmit}
                            sx={{ mt: 3 }}
                        >
                            Save Changes
                        </Button>
                    </Box>
                )}
            </Box>
        </Container>
    );
};

export default EditCustomerAccount;
