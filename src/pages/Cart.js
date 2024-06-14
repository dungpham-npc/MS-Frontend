import React, { useState } from 'react';
import {
    Box,
    Typography,
    Card,
    CardContent,
    CardMedia,
    IconButton,
    Button,
    Divider,
    Grid,
    TextField,
} from '@mui/material';
import { Add, Remove, Delete } from '@mui/icons-material';

const CartPage = () => {
    const initialCartItems = [
        {
            id: '1',
            name: 'Nike Air Force 1 NDESTRUKT',
            cover: 'https://storage.googleapis.com/cs-demo-data/coderstore/product_1.jpg',
            price: 16.19,
            quantity: 2,
        },
        {
            id: '2',
            name: 'Adidas Yeezy Boost 350',
            cover: 'https://storage.googleapis.com/cs-demo-data/coderstore/product_2.jpg',
            price: 200,
            quantity: 1,
        },
        {
            id: '3',
            name: 'Sample 3',
            cover: 'https://storage.googleapis.com/cs-demo-data/coderstore/product_2.jpg',
            price: 200,
            quantity: 1,
        },
        {
            id: '4',
            name: 'Sample 4',
            cover: 'https://storage.googleapis.com/cs-demo-data/coderstore/product_2.jpg',
            price: 200,
            quantity: 1,
        },
    ];

    const [cartItems, setCartItems] = useState(initialCartItems);

    const handleIncreaseQuantity = (id) => {
        setCartItems((prevItems) =>
            prevItems.map((item) =>
                item.id === id ? { ...item, quantity: item.quantity + 1 } : item
            )
        );
    };

    const handleDecreaseQuantity = (id) => {
        setCartItems((prevItems) =>
            prevItems.map((item) =>
                item.id === id && item.quantity > 1
                    ? { ...item, quantity: item.quantity - 1 }
                    : item
            )
        );
    };

    const handleQuantityChange = (id, event) => {
        const value = event.target.value;
        if (value === '' || (parseInt(value) > 0 && parseInt(value) <= 99)) {
            setCartItems((prevItems) =>
                prevItems.map((item) =>
                    item.id === id ? { ...item, quantity: value === '' ? '' : parseInt(value) } : item
                )
            );
        }
    };

    const handleRemoveItem = (id) => {
        setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
    };

    const getTotalPrice = () => {
        return cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0).toFixed(2);
    };

    return (
        <Box sx={{ padding: 3 }}>
            <Typography variant="h4" gutterBottom>
                Giỏ hàng 
            </Typography>
            {cartItems.length === 0 ? (
                <Typography variant="h6">Your cart is empty</Typography>
            ) : (
                <Grid container spacing={2}>
                    <Grid item xs={12} md={8}>
                        {cartItems.map((item) => (
                            <Card key={item.id} sx={{ display: 'flex', mb: 2 }}>
                                <CardMedia
                                    component="img"
                                    sx={{ width: 151 }}
                                    image={item.cover}
                                    alt={item.name}
                                />
                                <Box sx={{ display: 'flex', flexDirection: 'column', flex: 1 }}>
                                    <CardContent sx={{ flex: '1 0 auto' }}>
                                        <Typography component="div" variant="h5">
                                            {item.name}
                                        </Typography>
                                        <Typography variant="subtitle1" color="text.secondary" component="div">
                                            ${item.price} x {item.quantity} = ${(item.price * item.quantity).toFixed(2)}
                                        </Typography>
                                    </CardContent>
                                    <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
                                        <IconButton onClick={() => handleDecreaseQuantity(item.id)} disabled={item.quantity <= 1}>
                                            <Remove />
                                        </IconButton>
                                        <TextField
                                            type="number"
                                            value={item.quantity}
                                            onChange={(event) => handleQuantityChange(item.id, event)}
                                            inputProps={{
                                                min: 1,
                                                max: 99,
                                                style: { textAlign: 'center' },
                                            }}
                                            sx={{ width: 60 }}
                                        />
                                        <IconButton onClick={() => handleIncreaseQuantity(item.id)}>
                                            <Add />
                                        </IconButton>
                                        <IconButton onClick={() => handleRemoveItem(item.id)}>
                                            <Delete />
                                        </IconButton>
                                    </Box>
                                </Box>
                            </Card>
                        ))}
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <Box sx={{ p: 2, border: '1px solid #ccc', borderRadius: 2 }}>
                            <Typography variant="h6" gutterBottom>
                                Tổng kết
                            </Typography>
                            <Divider sx={{ mb: 2 }} />
                            <Typography variant="subtitle1">Tổng sản phẩm: {cartItems.reduce((acc, item) => acc + item.quantity, 0)}</Typography>
                            <Typography variant="subtitle1">Tổng tiền: ${getTotalPrice()}</Typography>
                            <Button variant="contained" color="primary" fullWidth sx={{ mt: 2 }}>
                                Thanh toán
                            </Button>
                        </Box>
                    </Grid>
                </Grid>
            )}
        </Box>
    );
};

export default CartPage;
