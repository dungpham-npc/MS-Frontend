import { Grid } from "@mui/material";
import ProductCard from "./ProductCard";

function ProductList({ data }) {
    return (
        <Grid container spacing={2} mt={1}>
            {data.map((product, index

            ) => (
                <Grid key={product.productID} item xs={6} md={4} lg={3}>
                    <ProductCard product={product} />
                </Grid>
            ))}
        </Grid>
    );
}

export default ProductList;
