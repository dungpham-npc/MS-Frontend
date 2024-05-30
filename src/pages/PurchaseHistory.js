// // src/pages/MyPurchasesPage.js
// import React from 'react';
// import { Box, Container, Typography, Card, CardContent, CardMedia, Divider } from '@mui/material';

// const PurchaseHistory = () => {
//     // Sample purchase data
//     const purchaseHistory = [
//         {
//             id: '1',
//             name: 'Nike Air Force 1 NDESTRUKT',
//             cover: 'https://storage.googleapis.com/cs-demo-data/coderstore/product_1.jpg',
//             price: 16.19,
//             date: '2024-04-21',
//         },
//         {
//             id: '2',
//             name: 'Adidas Yeezy Boost 350',
//             cover: 'https://storage.googleapis.com/cs-demo-data/coderstore/product_2.jpg',
//             price: 200,
//             date: '2024-03-15',
//         },
//         // Add more purchases as needed
//     ];

//     return (
//         <Container>
//             <Box sx={{ flex: 1, mr: 3 }}>
//             <Card sx={{ mb: 3, p: 2, border: 1, borderColor: 'grey.400' }}>
//                     <Typography variant="h6">
//                         {/* {formValues.name} */}Nguyen Dinh Bao
//                     </Typography>
//                 </Card>
//                 <Card sx={{ p: 2 , border: 1, borderColor: 'grey.400'}}>
//                     <List>
//                         <ListItem button component={RouterLink} to="/change-password">
//                             <ListItemText primary="Change Password" />
//                         </ListItem>
//                         <ListItem button component={RouterLink} to="/my-purchases">
//                             <ListItemText primary="Purchase history" />
//                         </ListItem>
                        
//                     </List>
//                 </Card>
//             </Box>
//             <Typography variant="h4" gutterBottom>
//                 My Purchases
//             </Typography>
//             {purchaseHistory.length === 0 ? (
//                 <Typography variant="h6">You have no purchase history</Typography>
//             ) : (
//                 <Box>
//                     {purchaseHistory.map((purchase) => (
//                         <Card key={purchase.id} sx={{ display: 'flex', mb: 2 }}>
//                             <CardMedia
//                                 component="img"
//                                 sx={{ width: 151 }}
//                                 image={purchase.cover}
//                                 alt={purchase.name}
//                             />
//                             <Box sx={{ display: 'flex', flexDirection: 'column', flex: 1 }}>
//                                 <CardContent sx={{ flex: '1 0 auto' }}>
//                                     <Typography component="div" variant="h5">
//                                         {purchase.name}
//                                     </Typography>
//                                     <Typography variant="subtitle1" color="text.secondary" component="div">
//                                         ${purchase.price}
//                                     </Typography>
//                                     <Typography variant="subtitle2" color="text.secondary" component="div">
//                                         Purchased on: {purchase.date}
//                                     </Typography>
//                                 </CardContent>
//                             </Box>
//                         </Card>
//                     ))}
//                 </Box>
//             )}
//         </Container>
//     );
// };

// export default PurchaseHistory;
