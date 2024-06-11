import React from 'react';
import { useParams } from 'react-router-dom';
import { Box, Typography, Container, List, ListItem, ListItemText } from '@mui/material';

const OrderStatus = () => {
    const { orderId } = useParams();

    // Sample data with product lists
    const orders = [
        {
            "id": 1,
            "customerName": "John Doe",
            "total": 100.50,
            "status": "Đang giao",
            "address": "123 Main St, Anytown, USA",
            "products": [
                { "name": "Sản phẩm 1", "quantity": 2, "price": 25.00 },
                { "name": "Sản phẩm 2", "quantity": 1, "price": 50.50 },
            ],
        },
        {
            "id": 2,
            "customerName": "Jane Smith",
            "total": 75.00,
            "status": "Đang giao",
            "address": "456 Elm St, Anytown, USA",
            "products": [
                { "name": "Sản phẩm 3", "quantity": 3, "price": 25.00 },
            ],
        },
        {
            "id": 3,
            "customerName": "Jane Smith",
            "total": 75.00,
            "status": "Đang xác nhận",
            "address": "456 Elm St, Anytown, USA",
            "products": [
                { "name": "Sản phẩm 4", "quantity": 1, "price": 75.00 },
            ],
        },
    ];

    const order = orders.find(order => order.id.toString() === orderId);

    if (!order) {
        return (
            <Container>
                <Box sx={{ mt: 5 }}>
                    <Typography variant="h4">Order Not Found</Typography>
                </Box>
            </Container>
        );
    }

    return (
        <Container>
            <Box sx={{ mt: 5 }}>
                <Typography variant="h4">Tình trạng đơn hàng</Typography>
                <Typography variant="h6">Tổng tiền: ${order.total.toFixed(2)}</Typography>
                <Typography variant="h6">Tình trạng: {order.status}</Typography>
                <Typography variant="h6">Địa chỉ: {order.address}</Typography>
                <Box sx={{ mt: 3 }}>
                    <Typography variant="h6">Sản phẩm:</Typography>
                    <List>
                        {order.products.map((product, index) => (
                            <ListItem key={index}>
                                <ListItemText
                                    primary={`${product.name} (x${product.quantity})`}
                                    secondary={`Price: $${product.price.toFixed(2)}`}
                                />
                            </ListItem>
                        ))}
                    </List>
                </Box>
            </Box>
        </Container>
    );
};

export default OrderStatus;
