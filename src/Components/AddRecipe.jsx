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
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';

export default function VerticalLinearStepper({ handleClose }) {

  const [category, setCategory] = React.useState('');

  const handleChange = (event) => {
    setCategory(event.target.value);
  };

  const steps = [
    {
      label: 'insert name and image',
      inputes: [
        {
          instraction: 'Enter recipe name',
          input: <Input type='text' name='name' sx={{ marginBottom: '20px' }} />,
        },
        {
          instraction: 'Upload image',
          input: <Input type='file' accept='image/*' name='image' sx={{ marginBottom: '20px' }} />,
        },
      ],
    },
    {
      label: 'Ingredients and instructions',
      inputes: [
        {
          instraction: 'Enter recipe ingredients (separated by commas)',
          input: <textarea name="ingredients" sx={{ marginBottom: "20px" }} />
        },
        {
          instraction: 'Enter recipe instructions',
          input: <textarea name="instructions" sx={{ marginBottom: "20px" }} />
        },
      ],
    },
    {
      label: 'More details',
      inputes: [
        {
          instraction: 'Enter preparation time',
          input: <Input type='number' name='preparationTime' sx={{ marginBottom: '20px' }} />,
        },
        {
          instraction: 'choose category',
          input: <Select
            value={category}
            onChange={handleChange}
            displayEmpty
            name='category'
            inputProps={{ 'aria-label': 'Without label' }}

          >
            <MenuItem value="Vegan">
            </MenuItem>
            <MenuItem value={'Dairy'}>Dairy</MenuItem>
            <MenuItem value={'Fleshi'}>Fleshi</MenuItem>
            <MenuItem value={'Vegan'}>Vegan</MenuItem>
          </Select>
        }
      ],
    }
  ];

  const dispatch = useDispatch()
  const [activeStep, setActiveStep] = React.useState(0);
  const data = React.useRef({});
  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const formValues = {};
    formData.forEach((value, key) => {
      formValues[key] = value instanceof File ? URL.createObjectURL(value) : value;
    });
    data.current.value = { ...formValues, ...data.current.value }
    if (activeStep === steps.length - 1) {
      data.current.value.ingredients = data.current.value.ingredients.split(',')
      dispatch(addReciepe(data.current.value));
    }
    handleNext()

  }
  return (
    <Box
      sx={{
        maxWidth: 400,
        minWidth: 400,
        margin: '1em, 4.5em, 4.5em, 0.5em',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >

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
              <form onSubmit={(e) => { handleSubmit(e) }}>
                {step.inputes.map((input, index) => (
                  <FormControl key={index} required >
                    <FormLabel>{input.instraction}</FormLabel>
                    {input.input}
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
          <Button onClick={handleClose} sx={{ mt: 1, mr: 1, color: 'rgb(208, 0, 64)' }}>
            back to recipes page
          </Button>
        </Paper>
      )}
    </Box>
  );
}