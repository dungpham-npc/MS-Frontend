// src/components/UserInfoCard.js
import React from 'react';
import { Card, Typography, List, ListItem, ListItemText } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import Box from '@mui/material/Box';

const UserInfoCard = ({ name }) => {
    return (
        <Box sx={{ flex: 1, mr: 3 }}>
            <Card sx={{ mb: 3, p: 2, border: 1, borderColor: 'grey.400' }}>
                <Typography variant="h6">
                    {name}
                </Typography>
            </Card>
            <Card sx={{ p: 2, border: 1, borderColor: 'grey.400' }}>
                <List>
                    <ListItem button component={RouterLink} to="#">
                        <ListItemText primary="Thông tin thành viên" />
                    </ListItem>
                    <ListItem button component={RouterLink} to="/purchase">
                        <ListItemText primary="Lịch sử mua hàng" />
                    </ListItem>
                    <ListItem button component={RouterLink} to="/toship">
                        <ListItemText primary="Đơn hàng" />
                    </ListItem>
                    <ListItem button component={RouterLink} to="/editAcc">
                        <ListItemText primary="Thông tin cá nhân" />
                    </ListItem>
                    <ListItem button component={RouterLink} to="/password">
                        <ListItemText primary="Đổi mật khẩu" />
                    </ListItem>
                </List>
            </Card>
        </Box>
    );
};

export default UserInfoCard;
