import React, { useEffect, useState } from 'react';
import { Box, Card, CardContent, CardMedia, Typography, Grid } from '@mui/material';
import axios from 'axios';
import Header from './Header';

const Cart = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get('https://fakestoreapi.com/products')
      .then(response => {
        setProducts(response.data);
      })
      .catch(error => {
        console.error('Error fetching the products:', error);
      });
  }, []);

  return (
    <>
      <Header />
      <Box sx={{ 
        backgroundColor: 'skyblue', 
        display: 'flex', 
        flexDirection: 'column', 
        alignItems: 'center', 
        justifyContent: 'center', 
        padding: 2, 
        minHeight: '50px', 
        
      }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Our Products
        </Typography>
        <Grid container spacing={3}>


          {products.map(product => 
                
                (
            <Grid item xs={12} sm={6} md={4} >
              <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                <CardMedia
                  component="img"
                  image={product.image}
                  
                  sx={{ height: 140, objectFit: 'contain' }}
                />
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography variant="h6" component="div">
                    {product.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {product.category}
                  </Typography>
                  <Typography variant="h6" color="text.primary">
                    {product.price}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          )
            )
                }


        </Grid>
      </Box>
    </>
  );
}

export default Cart;
