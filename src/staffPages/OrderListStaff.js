import React, { useState } from 'react';
import {Stack, Container, Typography, Dialog, DialogActions, DialogContent, DialogTitle, Button, TextField, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import { styled } from '@mui/material';
// import ProductSort from '../components/ProductSort'
import { FormProvider } from 'react-hook-form';

// Sample orders data
const orders = [
  { id: 1, customerName: 'John Doe', productName: ['Product 1', 'Product 3'], phoneNumber: '1234567890', address: '123 Main St', status: 'Complete transactions' },
  { id: 2, customerName: 'Jane Smith', productName: 'Product 2', phoneNumber: '0987654321', address: '456 Elm St', status: 'In progress' },
  { id: 3, customerName: 'Alice Johnson', productName: 'Product 4', phoneNumber: '1234509876', address: '789 Oak St', status: 'Complete' },
  // ... Other orders
];

const StyledTableContainer = styled(TableContainer)(({ theme }) => ({
  maxHeight: 600, // Set a height for the table container
}));

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
  position: 'sticky',
  top: 0,
  zIndex: 1,
}));


const OrderListStaff = () => {
  const [selectedOrder, setSelectedOrder] = useState(null);
  const [denyReason, setDenyReason] = useState('');
  const [isDenyFormOpen, setIsDenyFormOpen] = useState(false);

  const handleRowClick = (order) => {
    if (order.status !== 'Complete') {
      setSelectedOrder(order);
    }
  };

  const handleClose = () => {
    setSelectedOrder(null);
  };

  const handleAccept = () => {
    // Implement accept logic here
    setSelectedOrder(null);
  };

  const handleDeny = () => {
    setIsDenyFormOpen(true);
  };

  const handleDenySubmit = () => {
    // Implement deny logic here with denyReason
    setIsDenyFormOpen(false);
    setSelectedOrder(null);
    setDenyReason('');
  };

  const handleComplete = () => {
    // Implement complete logic here
    // Update order status to "Complete"
    if (selectedOrder) {
      const updatedOrder = { ...selectedOrder, status: 'Complete' };
      setSelectedOrder(updatedOrder);
      // You would typically update the orders array in your state here as well
    }
  };

  return (
    <Container>
      <Typography variant="h4" gutterBottom>Order List</Typography>
      <FormProvider>
          <Stack
            spacing={2}
            direction={{ xs: "column", sm: "row" }}
            alignItems={{ sm: "center" }}
            justifyContent="space-between"
            mb={2}
          >
            {/* <ProductSearch /> */}
           
          </Stack>
        </FormProvider>
      <StyledTableContainer component={Paper}>
        <Table stickyHeader aria-label="order table">
          <TableHead>
            <TableRow>
              <StyledTableCell>Order ID</StyledTableCell>
              <StyledTableCell>Customer Name</StyledTableCell>
              <StyledTableCell>Product Name</StyledTableCell>
              <StyledTableCell>Phone Number</StyledTableCell>
              <StyledTableCell>Address</StyledTableCell>
              <StyledTableCell>Status</StyledTableCell>
              
            </TableRow>
          </TableHead>
          <TableBody>
            {orders.map((order) => (
              <TableRow
                key={order.id}
                hover={order.status !== 'Complete'}
                onClick={() => handleRowClick(order)}
                style={{ cursor: order.status !== 'Complete' ? 'pointer' : 'default' }}
              >
                <TableCell>{order.id}</TableCell>
                <TableCell>{order.customerName}</TableCell>
                <TableCell>
                  {Array.isArray(order.productName) ? (
                    order.productName.map((product, index) => (
                      <Typography key={index}>{product}</Typography>
                    ))
                  ) : (
                    <Typography>{order.productName}</Typography>
                  )}
                </TableCell>
                <TableCell>{order.phoneNumber}</TableCell>
                <TableCell>{order.address}</TableCell>
                <TableCell>{order.status}</TableCell>
                
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </StyledTableContainer>
      {selectedOrder && selectedOrder.status !== 'Complete' && (
        <Dialog open={true} onClose={handleClose}>
          <DialogTitle>Order Details</DialogTitle>
          <DialogContent>
            <Typography>Order ID: {selectedOrder.id}</Typography>
            <Typography>Customer Name: {selectedOrder.customerName}</Typography>
            <Typography>Product Name: {Array.isArray(selectedOrder.productName) ? selectedOrder.productName.join(', ') : selectedOrder.productName}</Typography>
            <Typography>Phone Number: {selectedOrder.phoneNumber}</Typography>
            <Typography>Address: {selectedOrder.address}</Typography>
          </DialogContent>
          <DialogActions>
            {selectedOrder.status === 'In progress' ? (
              <Button onClick={handleComplete} color="primary">Order Complete</Button>
            ) : (
              <>
                <Button onClick={handleAccept} color="primary">Accept</Button>
                <Button onClick={handleDeny} color="secondary">Deny</Button>
              </>
            )}
          </DialogActions>
        </Dialog>
      )}
      <Dialog open={isDenyFormOpen} onClose={() => setIsDenyFormOpen(false)}>
        <DialogTitle>Reason for Denial</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            label="Reason"
            fullWidth
            value={denyReason}
            onChange={(e) => setDenyReason(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setIsDenyFormOpen(false)} color="primary">Cancel</Button>
          <Button onClick={handleDenySubmit} color="secondary">Submit</Button>
        </DialogActions>
      </Dialog>
    </Container>
  );
};

export default OrderListStaff;
