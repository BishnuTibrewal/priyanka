import { Grid } from "@mui/material";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import ListSubheader from "@mui/material/ListSubheader";
import IconButton from "@mui/material/IconButton";
import InfoIcon from "@mui/icons-material/Info";
import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import FavoriteIcon from "@mui/icons-material/Favorite";

export default function Slide2(props) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <>
      <Grid
        container
        sx={{ backgroundColor: "#F7C5CC", height: "80vh", padding: "20px" }}
      >
        <ImageList sx={{ width: 500, height: 450 }}>
          <ImageListItem key="Subheader" cols={2}>
            <ListSubheader component="div">
              <b>Lets rejoice some moments?...Scroll Down!</b>
            </ListSubheader>
          </ImageListItem>
          {itemData.map((item) => (
            <ImageListItem key={item.img}>
              <img
                srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                src={`${item.img}?w=248&fit=crop&auto=format`}
                alt={item.title}
                loading="lazy"
              />
              <ImageListItemBar
                title={item.title}
                subtitle={item.author}
                actionIcon={
                  <IconButton
                    sx={{ color: "rgba(255, 255, 255, 0.54)" }}
                    aria-label={`info about ${item.title}`}
                  >
                    <InfoIcon />
                  </IconButton>
                }
              />
            </ImageListItem>
          ))}
        </ImageList>

        <Card sx={{ minWidth: 375, marginLeft: 20 }}>
          <CardContent>
            <Typography
              sx={{ fontSize: 14 }}
              color="text.secondary"
              gutterBottom
            >
              You know
            </Typography>
            <Typography variant="h5" component="div">
              You mean the world to me!
            </Typography>
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
              Listen..
            </Typography>
            <Typography variant="body2">
              Happy birthday to my beautiful girl.
              <br />
              {"You make every day brighter with your love."}
              <br />
              {"To the woman who completes me,"}
              <br />
              {"Here’s to eternity of love and laughter."}
            </Typography>
            <Typography variant="h5" component="div" mt={5}>
              Lovin' you's the antidote
            </Typography>
            <FavoriteIcon></FavoriteIcon>
          </CardContent>
          <CardActions
            sx={{
              display: "flex",
              alignItems: "flex-end",
              justifyContent: "flex-end",
              marginTop: "100px",
            }}
          >
            <Button size="small" onClick={handleClickOpen}>
              WANNA SEE MORE?
            </Button>
          </CardActions>
        </Card>
      </Grid>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"How about you?"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Are you ready to love and handle me for the rest of the life?
            <br />
            <b>Disclaimer: Clicking on Disagree wont be of any use !</b>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Disagree</Button>
          <Button onClick={props.closeSlide2} autoFocus>
            Agree
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}

const itemData = [
  {
    img: "20230930_131944.jpg",
    title: "Model Material",
  },
  {
    img: "20240218_163200.jpg",
    title: "Killer Smile(when I am around)",
  },
  {
    img: "IMG_20240226_140400_109.jpg",
    title: "Ever Energetic",
  },
  {
    img: "20230929_160928.jpg",
    title: "Sesky Boyfriend!",
  },
  {
    img: "20230529_025039.jpg",
    title: "That Blush :)",
  },
  {
    img: "IMG-20230529-WA0036.jpg",
    title: "The Love Frame",
  },
  {
    img: "IMG-20220205-WA0006.jpg",
    title: "Bahu Material",
  },
  {
    img: "IMG-20220718-WA0008.jpg",
    title: "Cafe Material",
  },
  {
    img: "IMG_20230206_102845_629.jpg",
    title: "Club Material",
  },
  {
    img: "IMG-20220403-WA0027.jpg",
    title: "My LOve",
  },
  {
    img: "IMG-20221113-WA0017.jpg",
    title: "My star",
  },
  {
    img: "IMG-20221125-WA0009.jpg",
    title: "My Life",
  },
];
