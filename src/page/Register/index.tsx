import React from "react";
import Grid from "@mui/material/Grid";
import { BackgroundImg } from "../../components/BackgroundImg/BackgroundImg";
import CardRegister from "../../components/CardRegister";

export default function Register() {
  return (
    <Grid container sx={{ width: "100vw", height: "100vh" }}>
      <BackgroundImg />
      <CardRegister />
    </Grid>
  );
}
