// src/pages/OrderStatus.js
import React from 'react';
import { useParams } from 'react-router-dom';
import { Box, Typography, Container } from '@mui/material';

const OrderStatus = () => {
    const { orderId } = useParams();

    // You can fetch the order details based on orderId if needed
    const orders = [
        {
            "id": 1,
            "customerName": "John Doe",
            "total": 100.50,
            "status": "On Delivery",
            "address": "123 Main St, Anytown, USA"
        },
        {
            "id": 2,
            "customerName": "Jane Smith",
            "total": 75.00,
            "status": "On Delivery",
            "address": "456 Elm St, Anytown, USA"
        },
        {
            "id": 3,
            "customerName": "Jane Smith",
            "total": 75.00,
            "status": "Confirmation",
            "address": "456 Elm St, Anytown, USA"
        },
    ]
    const order = orders.find(order => order.id.toString() === orderId);

    return (
        <Container>
            <Box sx={{ mt: 5 }}>
                        <Typography variant="h4">Order Status</Typography>
                        <Typography variant="h6">Order ID: {order.id}</Typography>
                        <Typography variant="h6">Customer Name: {order.customerName}</Typography>
                        <Typography variant="h6">Total: ${order.total.toFixed(2)}</Typography>
                        <Typography variant="h6">Status: {order.status}</Typography>
                        <Typography variant="h6">Address: {order.address}</Typography>
            </Box>
        </Container>
    );
};

export default OrderStatus;
