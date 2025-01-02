import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import StepContent from '@mui/material/StepContent';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';
import Input from '@mui/joy/Input';
import { useDispatch } from 'react-redux';
import { addReciepe } from '../Store/RecipesSlice';

const steps = [
  {
    label: 'insert name and image',
    description: `For each ad campaign that you create, you can control how much
              you're willing to spend on clicks and conversions, which networks
              and geographical locations you want your ads to show on, and more.`,
    inputes: [
      {
        name: 'name',
        instraction: 'Enter recipe name',
        type: 'text',
      },
      {
        name: 'image',
        instraction: 'Upload image',
        type: 'file',
      },
    ],
  },
  {
    label: 'insert name and image',
    description: `For each ad campaign that you create, you can control how much
              you're willing to spend on clicks and conversions, which networks
              and geographical locations you want your ads to show on, and more.`,
    inputes: [
      {
        name: 'name',
        instraction: 'Enter recipe name',
        type: 'text',
      },
      {
        name: 'image',
        instraction: 'Upload image',
        type: 'file',
      },
    ],
  },
  {
    label: 'insert name and image',
    description: `For each ad campaign that you create, you can control how much
              you're willing to spend on clicks and conversions, which networks
              and geographical locations you want your ads to show on, and more.`,
    inputes: [
      {
        name: 'name',
        instraction: 'Enter recipe name',
        type: 'text',
      },
      {
        name: 'image',
        instraction: 'Upload image',
        type: 'file',
      },
    ],
  }
];

export default function VerticalLinearStepper() {
  const dispatch = useDispatch()
  const [activeStep, setActiveStep] = React.useState(0);
  const data = React.useRef({});
  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const formValues = {};
    formData.forEach((value, key) => {
      formValues[key] = value;
    });
    data.current.value = { ...formValues, ...data.current.value }


    handleNext()

  }

  return (
    <Box
      sx={{
        maxWidth: 400,
        margin: '0 auto',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <Typography variant="h4" sx={{ marginBottom: 2 }}>
        Add a recipe
      </Typography>
      <Stepper activeStep={activeStep} orientation="vertical" sx={{ width: '100%' }}>
        {steps.map((step, index) => (
          <Step key={step.label}>
            <StepLabel
              StepIconProps={{
                style: {
                  color: 'rgb(208, 0, 64)',
                },
              }}
              optional={
                index === steps.length - 1 ? (
                  <Typography variant="caption">Last step</Typography>
                ) : null
              }
            >
              {step.label}
            </StepLabel>
            <StepContent>
            <form onSubmit={(e) => {
    e.preventDefault(); // מונע את ברירת המחדל של שליחת הטופס
    if (index === steps.length - 1) {
      data.current = { ...data.current, id:2000 };
              dispatch(addReciepe(data.current));
    }
    handleSubmit(e);
}}>
                {step.inputes.map((input, index) => (
                  <FormControl key={index} required >
                    <FormLabel>{input.instraction}</FormLabel>
                    <Input type={input.type} name={input.name} sx={{ marginBottom: '20px' }} />
                  </FormControl>))}
                <Box sx={{ mb: 2 }}>
                  <Button
                    type="submit"
                    variant="contained"
                    sx={{ mt: 1, mr: 1, backgroundColor: 'rgb(208, 0, 64)' }}
                  >
                    {index === steps.length - 1 ? 'Finish' : 'Continue'}
                  </Button>
                  <Button
                    disabled={index === 0}
                    onClick={handleBack}
                    sx={{ mt: 1, mr: 1, color: 'rgb(208, 0, 64)' }}
                  >
                    Back
                  </Button>
                </Box>
              </form>
            </StepContent>
          </Step>
        ))}
      </Stepper>
      {activeStep === steps.length && (
        <Paper square elevation={0} sx={{ p: 3 }}>
          <Typography>All steps completed - recipe added successfully!</Typography>
          <Button onClick={handleReset} sx={{ mt: 1, mr: 1, color: 'rgb(208, 0, 64)' }}>
            back to recipes page
          </Button>
        </Paper>
      )}
    </Box>
  );
}