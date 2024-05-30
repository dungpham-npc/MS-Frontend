import { Container, Alert, Box, Stack, Grid } from '@mui/material';
import React, { useState, useEffect } from 'react';
import ProductList from '../components/ProductList';
import apiService from '../app/apiService';
import FormProvider from '../components/form/FormProvider';
import { useForm } from "react-hook-form";
import LoadingScreen from '../components/LoadingScreen';
import CategorySidebar from '../components/CategorySidebar';
function HomePage() {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    const defaultValues = {
        gender: [],
        category: "All",
        priceRange: "",
        sortBy: "featured",
        searchQuery: "",
    };
    const methods = useForm({
        defaultValues,
    });
    const { reset } = methods;

    useEffect(() => {
        const getProducts = async () => {
            setLoading(true);
            try {
                const res = await apiService.get("/products");
                setProducts(res.data);
                setError("");
            } catch (error) {
                console.log(error);
                setError(error.message);
            }
            setLoading(false);
        };
        getProducts();
    }, []);

    return (
        <Container sx={{ display: "flex", minHeight: "100vh", mt: 3 }}>
            <Grid container spacing={3}>
                <Grid item xs={12} sm={4} md={3}>
                    <CategorySidebar />
                </Grid>
                <Grid item xs={12} sm={8} md={9}>
                    <Stack sx={{ flexGrow: 1 }}>
                        <FormProvider methods={methods}>
                            <Stack
                                spacing={2}
                                direction={{ xs: "column", sm: "row" }}
                                alignItems={{ sm: "center" }}
                                justifyContent="space-between"
                                mb={2}
                            >
                                {/* Add form elements or filter components here if needed */}
                            </Stack>
                        </FormProvider>
                        <Box sx={{ position: "relative", height: 1 }}>
                            {loading ? (
                                <LoadingScreen />
                            ) : (
                                <>
                                    {error ? (
                                        <Alert severity="error">{error}</Alert>
                                    ) : (
                                        <ProductList products={products} />
                                    )}
                                </>
                            )}
                        </Box>
                    </Stack>
                </Grid>
            </Grid>
        </Container>
    );
}

export default HomePage;