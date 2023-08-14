import React, { Component } from 'react';
import { Container, Grid, Typography, Card, CardContent, Button } from '@mui/material';

const Dashboard = () => {
  return (
    <Container>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <Card>
            <CardContent>
              <Typography variant="h5">Total Revenue</Typography>
              <Typography variant="subtitle2">$100,000</Typography>
              <Button variant="contained">View Details</Button>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={6}>
          <Card>
            <CardContent>
              <Typography variant="h5">New Customers</Typography>
              <Typography variant="subtitle2">100</Typography>
              <Button variant="contained">View Details</Button>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={6}>
          <Card>
            <CardContent>
              <Typography variant="h5">Active Users</Typography>
              <Typography variant="subtitle2">10,000</Typography>
              <Button variant="contained">View Details</Button>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={6}>
          <Card>
            <CardContent>
              <Typography variant="h5">Average Order Value</Typography>
              <Typography variant="subtitle2">$100</Typography>
              <Button variant="contained">View Details</Button>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Dashboard;
