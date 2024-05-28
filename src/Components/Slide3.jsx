import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import StepContent from "@mui/material/StepContent";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Rating from "@mui/material/Rating";
import SentimentVeryDissatisfiedIcon from "@mui/icons-material/SentimentVeryDissatisfied";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { Grid } from "@mui/material";

const steps = [
  {
    label: "Select the correct option",
    description: `Congrats, you have selected the ultimate correct option. With this selection, you get unlimited access to love, laughter and life AND AND AND the very very limited access to the one and only, Bishnu Kumar Tibrewal's heart !`,
  },
  {
    label: "Promise & Prosper",
    description:
      "With your birthday, we also mark 8 years of togetherness, I promise to make the count 80++++",
  },
  {
    label: "Last but not the least",
    description: `Thank you for coming in my life, thank you for being mine. I know you are headache sometimes but still better than I could ever ask for. I love you and I am sorry if I ever wrong you anyway. STAY BLEESED, BEAUTIFUL & MINE`,
  },
];

export default function Slide3() {
  const [activeStep, setActiveStep] = React.useState(0);
  const [value, setValue] = React.useState(1);
  const [showThankYou, setShowThankYou] = React.useState(false);
  const [showSad, setShowSad] = React.useState(false);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  const handleRating = (value) => {
    if (value === 5) {
      setShowThankYou(true);
      setShowSad(false);
    } else {
      setShowSad(true);
      setShowThankYou(false);
    }
  };

  return (
    <Grid
      container
      sx={{
        backgroundColor: "#D3C5E5",
        height: "80vh",
        padding: "20px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <Grid>
        <img
          src={"—Pngtree—happy birthday font text balloon_8186777.png"}
          alt={"birthday"}
          loading="lazy"
          width={"300px"}
        />
      </Grid>
      <Box sx={{ maxWidth: 400 }}>
        <Stepper activeStep={activeStep} orientation="vertical">
          {steps.map((step, index) => (
            <Step key={step.label}>
              <StepLabel
                optional={
                  index === 2 ? (
                    <Typography variant="caption">Last step</Typography>
                  ) : null
                }
              >
                {step.label}
              </StepLabel>
              <StepContent>
                <Typography>{step.description}</Typography>
                <Box sx={{ mb: 2 }}>
                  <div>
                    <Button
                      variant="contained"
                      onClick={handleNext}
                      sx={{ mt: 1, mr: 1 }}
                    >
                      {index === steps.length - 1 ? "Finish" : "Continue"}
                    </Button>
                    <Button
                      disabled={index === 0}
                      onClick={handleBack}
                      sx={{ mt: 1, mr: 1 }}
                    >
                      Back
                    </Button>
                  </div>
                </Box>
              </StepContent>
            </Step>
          ))}
        </Stepper>
        {activeStep === steps.length && (
          <Paper
            square
            elevation={2}
            sx={{
              p: 3,
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignContent: "center",
            }}
          >
            <Typography>Once again,Happy birthday Baby!</Typography>
            <Typography component="legend" mt={4}>
              Please rate this small token of love
            </Typography>
            <Grid cotainer sx={{ justifyContent: "center" }}>
              <Rating
                name="simple-controlled"
                value={value}
                onChange={(event, newValue) => {
                  setValue(newValue);
                  handleRating(newValue);
                }}
              />
            </Grid>
            {showThankYou && (
              <Button onClick={handleReset} sx={{ mt: 1, mr: 1 }}>
                <b>Thank You</b>
                <FavoriteIcon></FavoriteIcon>
              </Button>
            )}
            {showSad && (
              <Button onClick={handleReset} sx={{ mt: 1, mr: 1 }}>
                <b>Me Sad</b>
                <SentimentVeryDissatisfiedIcon></SentimentVeryDissatisfiedIcon>
              </Button>
            )}
          </Paper>
        )}
      </Box>
    </Grid>
  );
}
