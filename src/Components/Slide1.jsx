import React, { useState } from "react";
import { Button, Typography, Avatar, Grid } from "@mui/material";

export default function Slide1(props) {
  const [visible, setvisible] = useState(false);
  const [visible1, setvisible1] = useState(false);
  setTimeout(() => {
    setvisible(true);
  }, 1000);

  setTimeout(() => {
    setvisible1(true);
  }, 2000);
  return (
    <div
      style={{ backgroundColor: "#89ABE3", height: "80vh", padding: "20px" }}
    >
      <Typography variant="h3" gutterBottom>
        Hi Priyanka!
      </Typography>
      {visible && (
        <Grid
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Typography variant="h3" gutterBottom>
            How's my baby?
          </Typography>
          <Avatar
            alt="Remy Sharp"
            src="IMG-20240221-WA0004.jpg"
            sx={{ width: 200, height: 200 }}
          />
        </Grid>
      )}
      {visible1 && (
        <Grid sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: 'flex-end',
          }}>
          <Typography variant="h6">Why so sad?</Typography>
          <Button variant="contained" onClick={props.closeSlide1}>
            Click here Motu
          </Button>
        </Grid>
      )}
    </div>
  );
}
