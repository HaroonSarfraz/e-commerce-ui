import "./style.scss";
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

// import { CheckoutOrderDetail, CheckoutShippingDetail, CheckoutPayment } from "../../components";

const useStyles = makeStyles(theme => ({
  root: {
    width: '60%',
    margin: 'auto',
  },
  backButton: {
    marginRight: theme.spacing(1),
  },
  instructions: {
    margin: theme.spacing(1),
  },
}));

function getSteps() {
  return ['Your Order', 'Shipping', 'Payment'];
}

export default function Checkout() {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const steps = getSteps();

  // const  getStepContent = (stepIndex) => {
  //   switch (stepIndex) {
  //     case 0:
  //       return <CheckoutOrderDetail nextStep={handleNext}/>;
  //     case 1:
  //       return <CheckoutShippingDetail nextStep={handleNext} backStep={handleBack}/>;
  //     case 2:
  //       return <CheckoutPayment backStep={handleBack}/>;
  //     default:
  //       return 'Unknown stepIndex';
  //   }
  // }

  const handleNext = () => {
    setActiveStep(prevActiveStep => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep(prevActiveStep => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <div className={`${classes.root} checkout`}>
      <Stepper activeStep={activeStep} alternativeLabel>
        {steps.map(label => (
          <Step key={label}>
            <StepLabel className={classes.stepLabel}>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <div>
        {activeStep === steps.length ? (
          <div className={classes.instructions}>
            <Typography>All steps completed</Typography>
            <Button onClick={handleReset}>Reset</Button>
          </div>
        ) : (
          <div className={classes.instructions}>
            {/* <Typography component="div">{getStepContent(activeStep)}</Typography> */}
          </div>
        )}
      </div>
    </div>
  );
}
