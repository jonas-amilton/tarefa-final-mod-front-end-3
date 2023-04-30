import { CircularProgress, Grid, Typography } from "@mui/material";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Welcome: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      navigate("/login");
    }, 3000);
  }, []);

  return (
    <Grid container justifyContent={"center"}>
      <Grid
        item
        sm={6}
        xs={12}
        sx={{ textAlign: "center", color: { xs: "#fff", sm: "#fff" } }}
      >
        <Typography variant="h3">Bem vindo!</Typography>
        <Typography variant="h5">
          Esta é sua aplicação para cadastrar seus recados.
        </Typography>
        <CircularProgress />
      </Grid>
    </Grid>
  );
};

export default Welcome;
