import { Stack, Typography, Box, Grid } from '@mui/material';
import React from 'react';

export default function Phones({ item }) {
  return (
    <Box
      sx={{
        p: 3,
        bgcolor: 'background.paper',
        boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.1)',
        borderRadius: 2,
        transition: 'transform 0.3s ease',
        '&:hover': {
          transform: 'scale(1.05)',
          boxShadow: '0px 8px 30px rgba(0, 0, 0, 0.2)',
        },
      }}
    >
      <Stack spacing={2} alignItems="center">
        <Box
          component="img"
          src={item.img}
          alt={item.title}
          sx={{
            width: '100%',
            height: 'auto',
            borderRadius: 1,
            mt: 2,
            boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
          }}
        />
        <Typography variant="h6" color="text.primary" sx={{ mt: 1 }}>
          {item.title}
        </Typography>
        <Grid container spacing={1} sx={{ mt: 1 }}>
          <Grid item xs={6}>
            <Typography variant="body2" color="primary">
              Brand
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography variant="body2" color="text.secondary">
              {item.brand}
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography variant="body2" color="primary">
              RAM
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography variant="body2" color="text.secondary">
              {item.rame}
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography variant="body2" color="primary">
              Color
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography variant="body2" color="text.secondary">
              {item.color}
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography variant="body2" color="primary">
              Price
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography variant="body2" color="text.secondary">
              {item.price}
            </Typography>
          </Grid>
        </Grid>
      </Stack>
    </Box>
  );
}
