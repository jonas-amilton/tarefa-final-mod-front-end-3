import React from "react";
import Grid from "@mui/material/Grid";
import { BackgroundImg } from "../../components/BackgroundImg/BackgroundImg";
import CardLogin from "../../components/CardLogin/index";

export default function PageLogin() {
  return (
    <Grid container sx={{ width: "100vw", height: "100vh" }}>
      <BackgroundImg />
      <CardLogin />
    </Grid>
  );
}
