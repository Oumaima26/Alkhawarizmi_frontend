import * as React from 'react';
import {   
  CssBaseline, 
  Paper,
  Container,
  Typography,
  createTheme, 
  ThemeProvider, 
  Stepper,
  Step,
  StepLabel,
  Button,
  Box
} from '@mui/material';
import InfoPupil from './InfoPupil';
import InfoParent from './InfoParent';
import Payment from './Payment';
import Header from '../layouts/Header';
import Menu from '../layouts/Menu';
import Footer from '../../layouts/Footer';
const steps = ['Pupil Information', 'Parent Information', 'Payment'];
function getStepContent(step) {
  switch (step) {
    case 0:
      return <InfoPupil />;
    case 1:
      return <InfoParent />;
    case 2:
      return <Payment />;
    default:
      throw new Error('Unknown step');
  }
}

const theme = createTheme();

export default function AddPupil() {
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep(activeStep + 1);
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  return (

    <>
      <Header />
      <Menu />
      <div className="content-wrapper" >
        <section className="content" >
          <div className="container-fluid" >
            <div className="row" >
            <ThemeProvider theme={theme} >
              <CssBaseline />
              <Container component="main" maxWidth="sm" sx={{ mb: 4 }} >
                <Paper variant="outlined" sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}>
                  <Typography component="h3" variant="h4" align="center">
                    Add Pupil
                  </Typography>
                  <Stepper activeStep={activeStep} sx={{ pt: 3, pb: 5 }}>
                    {steps.map((label) => (
                      <Step key={label}>
                        <StepLabel>{label}</StepLabel>
                      </Step>
                    ))}
                  </Stepper>
                  {activeStep === steps.length ? (
                    <React.Fragment>
                      <Typography variant="h5" gutterBottom>
                        Thank you for your order.
                      </Typography>
                      <Typography variant="subtitle1">
                        Your order number is #2001539. We have emailed your order
                        confirmation, and will send you an update when your order has
                        shipped.
                      </Typography>
                    </React.Fragment>
                  ) : (
                    <React.Fragment>
                      {getStepContent(activeStep)}
                      <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                        {activeStep !== 0 && (
                          <Button onClick={handleBack} sx={{ mt: 3, ml: 1 }}>
                            Back
                          </Button>
                        )}

                        <Button
                          variant="contained"
                          onClick={handleNext}
                          sx={{ mt: 3, ml: 1 }}
                        >
                          {activeStep === steps.length - 1 ? 'Place order' : 'Next'}
                        </Button>
                      </Box>
                    </React.Fragment>
                  )}
                </Paper>
              </Container>
            </ThemeProvider>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}