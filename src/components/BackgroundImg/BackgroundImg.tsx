import { Grid } from "@mui/material";

export const BackgroundImg: React.FC = () => {
  return (
    <Grid
      item
      sm={4}
      md={7}
      sx={{
        backgroundImage: "url(images/welcome-background.jpg)",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    ></Grid>
  );
};
