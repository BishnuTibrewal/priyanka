import React, { useState } from "react";
import { Button, Typography, Avatar, Grid } from "@mui/material";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import AdbIcon from "@mui/icons-material/Adb";
import DirectionsRunIcon from "@mui/icons-material/DirectionsRun";

export default function Slide1(props) {
  const [visible, setvisible] = useState(false);
  const [visible1, setvisible1] = useState(false);
  const [visible3, setvisible3] = useState(true);
  const [visible4, setvisible4] = useState(false);
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const moveForward = () => {
    setvisible3(false);
    setTimeout(() => {
      setvisible(true);
    }, 1000);

    setTimeout(() => {
      setvisible1(true);
    }, 2000);
  };

  const catchFraud = () => {
    setvisible3(false);
    setvisible4(true);
  };

  return (
    <div
      style={{ backgroundColor: "#89ABE3", height: "80vh", padding: "20px" }}
    >
      {visible3 && (
        <>
          <Typography variant="h3" gutterBottom>
            Hi Priyanka!
          </Typography>
          <Button variant="contained" onClick={handleClickOpen}>
            Verify its You!
          </Button>
          <AdbIcon></AdbIcon>
        </>
      )}
      <Dialog
        open={open}
        onClose={handleClose}
        PaperProps={{
          component: "form",
          onSubmit: (event) => {
            event.preventDefault();
            const formData = new FormData(event.currentTarget);
            const formJson = Object.fromEntries(formData.entries());
            const answer = formJson.email;
            console.log(answer);
            if (answer === "kolkata") {
              handleClose();
              moveForward();
            } else {
              handleClose();
              catchFraud();
            }
          },
        }}
      >
        <DialogTitle>Hello Priyanka, please verify its you!</DialogTitle>
        <DialogContent>
          <DialogContentText>
            To verify yourself, Please enter the name of the city we went as a
            couple for the first time!
          </DialogContentText>
          <TextField
            autoFocus
            required
            margin="dense"
            id="name"
            name="email"
            label="Answer"
            type="password"
            fullWidth
            variant="standard"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button type="submit">Submit</Button>
        </DialogActions>
      </Dialog>
      {visible4 && (
        <Grid container sx={{ justifyContent: "center" }} mt={20}>
          <Typography variant="h3" gutterBottom>
            Fraud, Run Away
          </Typography>
          <DirectionsRunIcon sx={{ fontSize: 50 }}></DirectionsRunIcon>
          <DirectionsRunIcon sx={{ fontSize: 50 }}></DirectionsRunIcon>
        </Grid>
      )}
      {visible && (
        <Grid
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Grid
            container
            sx={{ justifyContent: "center", flexDirection: "column" }}
          >
            <Typography variant="h6">Hurrah! Its You !</Typography>
            <Typography variant="h3">HAPPY BIRTHDAY TO...</Typography>
          </Grid>
          <Grid container sx={{ justifyContent: "center" }}>
            <Grid
              p={5}
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Avatar
                alt="Remy Sharp"
                src="IMG-20240221-WA0004.jpg"
                sx={{ width: 150, height: 150 }}
              />
              <Typography>
                <b>The Eyes, I adore</b>
              </Typography>
            </Grid>
            <Grid
              p={5}
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Avatar
                alt="Remy Sharp"
                src="IMG-20240511-WA0028.jpg"
                sx={{ width: 150, height: 150 }}
              />
              <Typography>
                <b>The Cuteness, I cruss upon</b>
              </Typography>
            </Grid>
            <Grid
              p={5}
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Avatar
                alt="Remy Sharp"
                src="IMG-20231228-WA0047.jpg"
                sx={{ width: 150, height: 150 }}
              />
              <Typography>
                <b>The Smile, I love</b>
              </Typography>
            </Grid>
            <Grid
              p={5}
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Avatar
                alt="Remy Sharp"
                src="IMG-20221125-WA0016.jpg"
                sx={{ width: 150, height: 150 }}
              />
              <Typography>
                <b>The only Lips, I wanna kiss</b>
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      )}
      {visible1 && (
        <Grid
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "flex-end",
          }}
        >
          <Typography variant="h6">Excited?</Typography>
          <Button variant="contained" onClick={props.closeSlide1}>
            Click Here
          </Button>
        </Grid>
      )}
    </div>
  );
}
