import React, { useState, useEffect } from 'react';
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
import apiService from '../app/apiService';
import { useNavigate } from 'react-router-dom';

const CartPage = () => {
    const [cartItems, setCartItems] = useState([]);
    const [cartId, setCartId] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        const savedUser = JSON.parse(localStorage.getItem('user'));

        // Check if the user object exists and get the id
        if (!savedUser || !savedUser.id) {
            console.error('User ID not found in local storage');
            return;
        }

        const userId = savedUser.id;
        const token = localStorage.getItem("token");
        const fetchCartItems = async () => {
            setLoading(true);
            try {
                const response = await apiService.get(`/api/carts/${userId}`, {
                    headers: {
                        'Authorization': 'Bearer ' + token
                    }
                });

                if (response.data.result.length > 0 && response.data.result[0].items) {
                    setCartItems(response.data.result[0].items);
                    setCartId(response.data.result[0].cartId);

                    setError('');
                } else {
                    setError('No items in cart');
                }
                console.log("Cartid is ", cartId);
            } catch (error) {
                console.error('Failed to fetch cart items:', error);
                setError(error.message || 'An error occurred while fetching cart items');
            }
            setLoading(false);
        };

        fetchCartItems();
    }, []);


    if (loading) {
        return <p>Loading cart items...</p>;
    }

    if (error) {
        return <p>Error: {error}</p>;
    }

    const handleIncreaseQuantity = (productId) => {
        setCartItems((prevItems) =>
            prevItems.map((item) =>
                item.productId === productId ? { ...item, quantity: item.quantity + 1 } : item
            )
        );
    };

    const handleDecreaseQuantity = (productId) => {
        setCartItems((prevItems) =>
            prevItems.map((item) =>
                item.productId === productId && item.quantity > 1
                    ? { ...item, quantity: item.quantity - 1 }
                    : item
            )
        );
    };
    const handleProceedCheckout = () => {
        navigate("/checkout")
    }
    const handleQuantityChange = async (productId, event) => {
        const savedUser = JSON.parse(localStorage.getItem('user'));
        const userId = savedUser.id;
        const value = event.target.value;
        if (value === '' || (parseInt(value) > 0 && parseInt(value) <= 99)) {
            setCartItems((prevItems) =>
                prevItems.map((item) =>
                    item.productId === productId ? { ...item, quantity: value === '' ? '' : parseInt(value) } : item
                )
            );
        }
        const token = localStorage.getItem("token");
        const quantity = value;
        const data = {
            productId,
            quantity
        }
        try {
            await apiService.put(`/api/carts/${cartId}/items?userId=${userId}`, data, {
                headers: {
                    'Authorization': 'Bearer ' + token
                }
            })
        } catch {

        }
    };

    const handleRemoveItem = async (productId) => {
        const savedUser = JSON.parse(localStorage.getItem('user'));
        const token = localStorage.getItem("token");

        if (!savedUser || !savedUser.id) {
            console.error('User ID not found in local storage');
            return;
        }
        if (!token) {
            console.error('Token not found in local storage');
            return;
        }

        const userId = savedUser.id;
        console.log('Sending request with Authorization:', `Bearer ${token}`);

        try {
            const response = await apiService.delete(`/api/carts/${cartId}?userId=${userId}&itemId=${productId}`, {
                headers: {
                    'Authorization': 'Bearer ' + token
                }
            });
            if (response.status === 200) {
                setCartItems((prevItems) => prevItems.filter((item) => item.productId !== productId));
            } else {
                console.error('Unexpected response', response);
            }
        } catch (error) {
            console.error('Failed to remove item from cart:', error);
        }
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
                            <Card key={item.productId} sx={{ display: 'flex', mb: 2, border: '2px solid #cb8bcd' }}>
                                <CardMedia
                                    component="img"
                                    sx={{ width: 151 }}
                                    image={item.cover || 'https://via.placeholder.com/151'} // Placeholder in case no image is provided
                                    alt={item.productName}
                                />
                                <Box sx={{ display: 'flex', flexDirection: 'column', flex: 1 }}>
                                    <CardContent sx={{ flex: '1 0 auto' }}>
                                        <Typography component="div" variant="h5">
                                            {item.productName}
                                        </Typography>
                                        <Typography variant="subtitle1" color="text.secondary" component="div">
                                            ${item.price} x {item.quantity} = ${(item.price * item.quantity).toFixed(2)}
                                        </Typography>
                                    </CardContent>
                                    <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
                                        <IconButton onClick={() => handleDecreaseQuantity(item.productId)} disabled={item.quantity <= 1}>
                                            <Remove />
                                        </IconButton>
                                        <TextField
                                            type="number"
                                            value={item.quantity}
                                            onChange={(event) => handleQuantityChange(item.productId, event)}
                                            inputProps={{
                                                min: 1,
                                                max: 99,
                                                style: { textAlign: 'center' },
                                            }}
                                            sx={{ width: 60 }}
                                        />
                                        <IconButton onClick={() => handleIncreaseQuantity(item.productId)}>
                                            <Add />
                                        </IconButton>
                                        <IconButton onClick={() => handleRemoveItem(item.productId)}>
                                            <Delete />
                                        </IconButton>
                                    </Box>
                                </Box>
                            </Card>
                        ))}
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <Box sx={{ p: 2, border: '1px solid #ccc', borderRadius: 2, border: '2px solid #cb8bcd' }}>
                            <Typography variant="h6" gutterBottom>
                                Tổng kết
                            </Typography>
                            <Divider sx={{ mb: 2, color: '#cb8bcd' }} />
                            <Typography variant="subtitle1">Tổng sản phẩm: {cartItems.reduce((acc, item) => acc + item.quantity, 0)}</Typography>
                            <Typography variant="subtitle1">Tổng tiền: ${getTotalPrice()}</Typography>
                            <Button variant="contained" color="primary" onClick={handleProceedCheckout} fullWidth sx={{ mt: 2 }}>
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
