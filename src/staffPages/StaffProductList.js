// ProductList.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Box,
  Button,
  Container,
  CssBaseline,
  Grid,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Toolbar,
  Typography,
} from '@mui/material';

const products = [
  { id: 1, name: "Product #1", image: "path/to/image1.jpg", description: "Description for product #1", quantity: 10, price: 100 },
  { id: 2, name: "Product #2", image: "path/to/image2.jpg", description: "Description for product #2", quantity: 20, price: 100 },
  { id: 3, name: "Product #3", image: "path/to/image3.jpg", description: "Description for product #3", quantity: 30, price: 100 },
  { id: 4, name: "Product #4", image: "path/to/image4.jpg", description: "Description for product #4", quantity: 40, price: 100 },
  { id: 5, name: "Product #5", image: "path/to/image5.jpg", description: "Description for product #5", quantity: 50, price: 100 },
  { id: 6, name: "Product #6", image: "path/to/image6.jpg", description: "Description for product #6", quantity: 60, price: 100 },
];

export default function ProductList() {
  const navigate = useNavigate();

  const handleUpdateClick = (product) => {
    navigate(`edit/${product.id}`);
  };

  const handleAddClick = () => {
    navigate('new');  
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <Box
        component="main"
        sx={{
          backgroundColor: (theme) =>
            theme.palette.mode === 'light' ? theme.palette.grey[100] : theme.palette.grey[900],
          flexGrow: 1,
          height: '100vh',
          overflow: 'auto',
        }}
      >
        <Toolbar />
        <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
          <Typography component="h1" variant="h4" color="inherit" noWrap sx={{ flexGrow: 1, mb: 4 }}>
            Product List
          </Typography>
          <Button variant="contained" color="primary" sx={{ mb: 4 }} onClick={handleAddClick}>
            Add Product
          </Button>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 1100 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>Product Name</TableCell>
                  <TableCell align="right">Quantity</TableCell>
                  <TableCell align="right">Price</TableCell>
                  <TableCell align="right">Description</TableCell>
                  <TableCell align="right">Actions</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {products.map((product) => (
                  <TableRow key={product.id} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                    <TableCell component="th" scope="row">{product.name}</TableCell>
                    <TableCell align="right">{product.quantity}</TableCell>
                    <TableCell align="right">{product.price}</TableCell>
                    <TableCell align="right">{product.description}</TableCell>
                    <TableCell align="right">
                      <Button size="small" onClick={() => handleUpdateClick(product)}>Update</Button>
                      <Button size="small">Remove</Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Container>
      </Box>
    </Box>
  );
}
