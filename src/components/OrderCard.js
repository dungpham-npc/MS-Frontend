
import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const OrderCard = ({ order }) => {
    
    const navigate= useNavigate();
    const handleCardClick = () => {
        navigate(`/toship/${order.id}`);
    };

    return (
        <Card onClick={handleCardClick} sx={{ mb: 2, cursor: 'pointer' }}>
            <CardContent>
                <Typography variant="h6">{order.customerName}</Typography>
                <Typography>Total: ${order.total}</Typography>
                <Typography>Status: {order.status}</Typography>
                <Typography>Address: {order.address}</Typography>
            </CardContent>
        </Card>
    );
};

export default OrderCard;
