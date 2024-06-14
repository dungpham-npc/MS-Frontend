// StaffDetailModal.js
import React from 'react';
import { Modal, Box, Typography,  Button, Avatar, Grid,  FormControl, Select, MenuItem, InputLabel } from '@mui/material';
import styled from '@emotion/styled';
import { yupResolver } from '@hookform/resolvers/yup';
import { FormProvider, useForm } from 'react-hook-form';
import FTextField from './form/FTextField';
import * as yup from 'yup';
import { Schema } from '../components/validation/validationSchema';




const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 600,
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
  overflow: 'auto', // Ensure scrolling if content overflows
  maxHeight: '80vh' // Limit the maximum height of the modal
};

const ProfilePicture = styled(Avatar)`
  width: 150px;
  height: 150px;
  background-color: grey;
  margin-bottom: 16px;
`;

const StaffDetailModal = ({ open, handleClose, staff }) => {
  const methods = useForm({
    resolver: yupResolver(Schema),
    mode: 'onChange',
    
  });

  if (!staff) return null;

  const { handleSubmit} = methods;

  const onSubmit = (data) => {
    console.log(data);
    handleClose(); // Close the modal after saving
  };
  return (
    <FormProvider{...methods}>
    <form onSubmit={handleSubmit(onSubmit)}>
    <Modal open={open} onClose={handleClose}>
      <Box sx={style}>
        <Grid container spacing={2}>
          <Grid item xs={12} container justifyContent="space-between" alignItems="center">
            <Typography variant="h6">{staff.name}</Typography>
            <Button variant="contained" color="error">Delete</Button>
          </Grid>
          <Grid item xs={12} container justifyContent="center" alignItems="center" direction="column">
            <ProfilePicture src={staff.profilePicture} alt={`${staff.name} profile`} />
            <Typography>Role: {staff.role}</Typography>
            <Typography>Added on: {staff.addedOn}</Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="h6">Employee details</Typography>
            <FTextField label="Name" defaultValue={staff.name} fullWidth name="name" margin="normal" />
            <FTextField label="Phone number" type='tel' defaultValue={staff.phoneNumber} name="phoneNumber" fullWidth margin="normal" />
            <FTextField label="Email" defaultValue={staff.email} fullWidth name="email" margin="normal" />
            <FormControl fullWidth margin="normal">
                <InputLabel id="role-label">Role</InputLabel>
                <Select
                  labelId="role-label"
                  label="Role"
                  defaultValue={staff.role}
                  name= "Role"
                  
                >
                  <MenuItem value="SELLER">Seller</MenuItem>
                  <MenuItem value="MANAGER">Manager</MenuItem>
                  <MenuItem value="POST_STAFF">Post Staff</MenuItem>
                  <MenuItem value="PRODUCT_STAFF">Product Staff</MenuItem>
                </Select>
              </FormControl>
          </Grid>
          <Grid item xs={12} container justifyContent="space-between">
            <Button type="submit" variant="contained" color="primary">Save</Button>
            <Button variant="outlined" onClick={handleClose}>Cancel</Button>
          </Grid>
        </Grid>
      </Box>
    </Modal>
    </form>
    </FormProvider>
  );
};

export default StaffDetailModal;
