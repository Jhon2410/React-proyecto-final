import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useRef } from 'react';
import { añadirCorte } from '../../services/index';
import Swal from 'sweetalert2';

const steps = ['Info general', 'Galeria', 'Confirmar información'];

export default function HorizontalLinearStepper({props}) {
  const [activeStep, setActiveStep] = React.useState(0);
  const [skipped, setSkipped] = React.useState(new Set());

  
  const step1 = (
        <div className="form-group text-center text-bold">
            <label>Name</label>
            <input type="text" onChange={(e)=>{props[2]({...props[1] , name : e.target.value })}} id="name" value={props[1].name}  className="form-control" placeholder="name"></input>
            <label>Description</label>
            <input type="text" id="description"  onChange={(e)=>{props[2]({...props[1] , description : e.target.value })}} value={props[1].description}  className="form-control"  placeholder="description"></input>
            <label>Price</label>
            <input type="number" id="price" value={props[1].price}   onChange={(e)=>{props[2]({...props[1] , price : e.target.value })}} className="form-control"  placeholder="price"></input>
        </div>
    )

    const addToPeluqueria = async()=>{
        const res = await añadirCorte(props[1]) 
        if(res.status === 200){
            if(res.data.success){
                Swal.fire('Success' , res.data.msg , "success")
            }else{
                Swal.fire('Error' , res.data.msg , "error")

            }
        }else{
            Swal.fire('Error' , "Error en el servidor", "error")

        }
       
    }

  const step2 =  (
        <div className="form-group text-center text-bold">
            <label>Main image </label>
            <input type="file" onChange={(e)=>{props[2]({...props[1] , mainPhoto : e.target.files[0] })}} className="form-control" placeholder="name"></input>
            <label>Secondary image</label>
            <input type="file" onChange={(e)=>{props[2]({...props[1] , subPhotos : e.target.files[0] })}}   className="form-control"  placeholder="description"></input>
            </div>
    )

  const step3 = (
        <div>Resultado final</div>
    )
  


  const isStepOptional = (step) => {
    return step === 1;
  };

  const isStepSkipped = (step) => {
    return skipped.has(step);
  };

  const handleNext = () => {
    let newSkipped = skipped;
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped(newSkipped);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleSkip = () => {
    if (!isStepOptional(activeStep)) {
      // You probably want to guard against something like this,
      // it should never occur unless someone's actively trying to break something.
      throw new Error("You can't skip a step that isn't optional.");
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped((prevSkipped) => {
      const newSkipped = new Set(prevSkipped.values());
      newSkipped.add(activeStep);
      return newSkipped;
    });
  };

  const handleReset = () => {
    props[0](false)
    console.log(props[1])
    if(props[1].name!== "" && props[1].description !== ""  && props[1].mainPhoto!=="") {
        addToPeluqueria()

    }else{
       Swal.fire('Error' , "Error, los datos no fueron llenados correctamente.", "error")
    }
  };

  return (
    <Box sx={{ width: '100%' , marginTop : "150px" , background : "#fff" , padding: "15px"}}>
    <p className="text-center font-bold fs-2">Agregar</p>
      <Stepper activeStep={activeStep}>
        {steps.map((label, index) => {
          const stepProps = {};
          const labelProps = {};
          if (isStepOptional(index)) {
          
          }
          if (isStepSkipped(index)) {
            stepProps.completed = false;
          }
          return (
            <Step key={label} {...stepProps}>
              <StepLabel {...labelProps}>{label}</StepLabel>
            </Step>
          );
        })}
      </Stepper>
      {activeStep === steps.length ? handleReset() : (
        <React.Fragment>
        
          <Typography sx={{ mt: 2, mb: 1 }}>
          <div>
            {activeStep === 0  ?  step1: null}
            {activeStep === 1  ?  step2: null}
            {activeStep === 2  ?  step3: null}
          </div>

            
          </Typography>
          <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
            <Button
              color="inherit"
              disabled={activeStep === 0}
              onClick={handleBack}
              sx={{ mr: 1 }}
            >
              Back
            </Button>
            <Box sx={{ flex: '1 1 auto' }} />
         

            <Button onClick={handleNext}>
              {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
            </Button>
          </Box>
        </React.Fragment>
      )}
    </Box>
  );
}
