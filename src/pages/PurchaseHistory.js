// // src/pages/MyPurchasesPage.js
// import React from 'react';
// import { Box, Container, Typography, Card, CardContent, CardMedia, Divider, List, ListItem, ListItemText } from '@mui/material';
// import { Link as RouterLink } from 'react-router-dom';
// import UserInfoCard from '../components/UserInfoCard';

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
//         {
//             id: '2',
//             name: 'Adidas Yeezy Boost 350',
//             cover: 'https://storage.googleapis.com/cs-demo-data/coderstore/product_2.jpg',
//             price: 200,
//             date: '2024-03-15',
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
//             <Box sx={{ display: 'flex', mt: 5 }}> {/* Add margin-top here */}
//                <UserInfoCard    name="Nguyen Dinh Bao" />
//                 <Box sx={{ flex: 2 }}>
//                     <Typography variant="h4" gutterBottom>
//                         My Purchases
//                     </Typography>
//                     {purchaseHistory.length === 0 ? (
//                         <Typography variant="h6">You have no purchase history</Typography>
//                     ) : (
//                         <Box>
//                             {purchaseHistory.map((purchase) => (
//                                 <Card key={purchase.id} sx={{ display: 'flex', mb: 2 }}>
//                                     <CardMedia
//                                         component="img"
//                                         sx={{ width: 151 }}
//                                         image={purchase.cover}
//                                         alt={purchase.name}
//                                     />
//                                     <Box sx={{ display: 'flex', flexDirection: 'column', flex: 1 }}>
//                                         <CardContent sx={{ flex: '1 0 auto' }}>
//                                             <Typography component="div" variant="h5">
//                                                 {purchase.name}
//                                             </Typography>
//                                             <Typography variant="subtitle1" color="text.secondary" component="div">
//                                                 ${purchase.price}
//                                             </Typography>
//                                             <Typography variant="subtitle2" color="text.secondary" component="div">
//                                                 Purchased on: {purchase.date}
//                                             </Typography>
//                                         </CardContent>
//                                     </Box>
//                                 </Card>
//                             ))}
//                         </Box>
//                     )}
//                 </Box>
//             </Box>
//         </Container>
//     );
// };

// export default PurchaseHistory;
import React, { useState } from 'react';
import { Box, Container, Typography, Card, CardContent, CardMedia, Tabs, Tab, List, ListItem, ListItemText } from '@mui/material';
import UserInfoCard from '../components/UserInfoCard';

const PurchaseHistory = () => {
    const [selectedTab, setSelectedTab] = useState(0);

    const purchaseHistory = [
        {
            id: '1',
            name: 'Nike Air Force 1 NDESTRUKT',
            cover: 'https://storage.googleapis.com/cs-demo-data/coderstore/product_1.jpg',
            price: 16.19,
            date: '2024-04-21',
        },
        {
            id: '2',
            name: 'Adidas Yeezy Boost 350',
            cover: 'https://storage.googleapis.com/cs-demo-data/coderstore/product_2.jpg',
            price: 200,
            date: '2024-03-15',
        },
        {
            id: '3',
            name: 'Adidas Yeezy Boost 350',
            cover: 'https://storage.googleapis.com/cs-demo-data/coderstore/product_2.jpg',
            price: 200,
            date: '2024-03-15',
        },
        {
            id: '4',
            name: 'Adidas Yeezy Boost 350',
            cover: 'https://storage.googleapis.com/cs-demo-data/coderstore/product_2.jpg',
            price: 200,
            date: '2024-03-15',
        },
    ];

    const handleTabChange = (event, newValue) => {
        setSelectedTab(newValue);
    };

    return (
        <Container>
            <Box sx={{ display: 'flex', mt: 5 }}>
                <UserInfoCard name="Nguyen Dinh Bao" />
                <Box sx={{ flex: 2, ml: 2 }}>
                    <Typography variant="h4" gutterBottom>
                        My Purchases
                    </Typography>
                    
                    {purchaseHistory.length === 0 ? (
                        <Typography variant="h6">You have no purchase history</Typography>
                    ) : (
                        <Box>
                            {purchaseHistory.map((purchase) => (
                                <Card key={purchase.id} sx={{ display: 'flex', mb: 2 }}>
                                    <CardMedia
                                        component="img"
                                        sx={{ width: 151 }}
                                        image={purchase.cover}
                                        alt={purchase.name}
                                    />
                                    <Box sx={{ display: 'flex', flexDirection: 'column', flex: 1 }}>
                                        <CardContent sx={{ flex: '1 0 auto' }}>
                                            <Typography component="div" variant="h5">
                                                {purchase.name}
                                            </Typography>
                                            <Typography variant="subtitle1" color="text.secondary" component="div">
                                                ${purchase.price}
                                            </Typography>
                                            <Typography variant="subtitle2" color="text.secondary" component="div">
                                                Purchased on: {purchase.date}
                                            </Typography>
                                        </CardContent>
                                    </Box>
                                </Card>
                            ))}
                        </Box>
                    )}
                </Box>
            </Box>
        </Container>
    );
};

export default PurchaseHistory;

