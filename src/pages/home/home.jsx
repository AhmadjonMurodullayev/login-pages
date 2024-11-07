import {
  Stack,
  Typography,
  Grid,
  CircularProgress,
  Container,
} from "@mui/material";
import React from "react";
import Card from "../../components/card/card";
import { useGetCompsQuery } from "../../redux/service/computer";
import { useGetPhonesQuery } from "../../redux/service/phone";
import Phones from "../../components/phones/phones";

export default function Home() {
  const { data, isLoading, error } = useGetCompsQuery();

  const { data: dataPhone, isLoading: isLoadingPhone, error: errorPhone } =useGetPhonesQuery();


  if (isLoading) return <CircularProgress />;
  if (error) return <Typography color="error">Failed to load data</Typography>;

  return (
    <Container>
      <Stack spacing={4} >
        <Typography style={{fontFamily:"cursive", fontWeight:"bold", marginTop:"20px"}} variant="h3" >
          Compyuter
        </Typography>

        <Grid container spacing={3} justifyContent="center">
          {data.map((item, index) => (
            <Grid item xs={12} sm={6} md={3} lg={4} key={index}>
              <Card item={item} />
            </Grid>
          ))}
        </Grid>
      </Stack>

      <Stack>
      <Typography style={{fontFamily:"cursive", fontWeight:"bold", marginTop:"20px"}} variant="h3" >
          Phones
        </Typography>
        <Grid container spacing={3} justifyContent="center">
          {dataPhone.map((item, index) => (
            <Grid item xs={12} sm={6} md={3} lg={4} key={index}>
              <Phones item={item} />
            </Grid>
          ))}
        </Grid>
      </Stack>
    </Container>
  );
}
