import React, { Fragment, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import TextField from "@material-ui/core/TextField";
import FormLabel from "@material-ui/core/FormLabel";
import Divider from "@material-ui/core/Divider";
import { useFieldArray, useForm } from "react-hook-form";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles({
  root: {
    maxWidth: "90%",
  },
});

const AddPassenger = (props) => {
  const { register, control, errors} = props;
  const { append, fields, remove } = useFieldArray({
    control,
    name: "passenger_details",
  });
  const appendHandler = () => {
    return append({
      passengerName:'',
      age:'',
      preference:'',
    })
  }
  
  useEffect(() => {
    appendHandler();
  },[]);

  return (
    <Fragment>
      <Box>
        <Typography gutterBottom variant="h6">
          Add Passenger Details
        </Typography>
      </Box>
      {fields.map((item, index) =>(
      <Grid container key={index}>
          <Grid item xs={3}>
            <Box>
              <FormLabel component="legend">Passenger Name</FormLabel>
              <TextField
                error={errors + `.` + `passenger_details[${index}].passengerName`}
                helperText={errors + `.` + `passenger_details[${index}].passengerName` ? errors`.passenger_details[${index}].passengerName.message` : null}
                fullWidth
                variant="outlined"
                type="text"
                inputRef={register({
                  required: 'Required.'
                })}
                margin="dense"
                name={`passenger_details[${index}].passengerName`}
                defaultValue={item.passengerName}
              />
              
            </Box>
          </Grid>

          <Grid item xs={3}>
            <Box>
              <FormLabel component="legend">Age</FormLabel>
              <TextField
                error={errors + `.` + `passenger_details[${index}].age`}
                helperText={errors + `.` +  `passenger_details[${index}].age` ? errors`.passenger_details[${index}].age.message` : null}
                
                fullWidth
                variant="outlined"
                type="text"
                name={`passenger_details[${index}].age`}
                inputRef={ register({
                  required: 'Required.'
                })}
                margin="dense"
                defaultValue={item.age}

              />
            </Box>
          </Grid>

          <Grid item xs={3}>
            <Box>
              <FormLabel component="legend">Preference</FormLabel>
              <TextField
                error={errors + `.` + `passenger_details[${index}].preference`}
                helperText={errors + `.` +  `passenger_details[${index}].preference` ? errors`.passenger_details[${index}].preference.message` : null}
                
                fullWidth
                variant="outlined"
                type="text"
                name={`passenger_details[${index}].preference`}
                inputRef={register({
                  required: 'Required.'
                })}
                margin="dense"
                defaultValue={item.preference}
              />
            </Box>
          </Grid>

          <Grid item xs={3}>
            <Box>
              <FormLabel component="legend"> Options </FormLabel>
              <Button onClick={()=> remove(index)} variant="contained"> Delete </Button>
            </Box>
          </Grid>
        </Grid>
      ))}

          <Box>
            <Button variant="contained" color="primary" onClick={appendHandler} type="button">
              Add New Passenger
            </Button>
          </Box>
    </Fragment>
  );
};

const Form = () => {
  const classes = useStyles();
  const { register, handleSubmit, control, errors, getValues } = useForm({
    mode: "onTouched"
  });
  const onSubmit = (data) => {
    console.log(data);
  };

  console.log(errors);

  const basicForm = (
    <Fragment>
      <Box>
        <Typography gutterBottom variant="h6">
          React Hook Form
        </Typography>
      </Box>
       
      <Box>
        <Divider />
      </Box>

      <br />

      <Box>
        <FormLabel component="legend">Email</FormLabel>
        <TextField
          error={Boolean(errors.email)}
          fullWidth
          variant="outlined"
          type="email"
          name="email"
          inputRef={register({
            required: 'Required.'
          })}
          margin="dense"
          helperText={errors.email ? errors.email.message : null}
        />
      </Box>
      
      <Box>
        <FormLabel component="legend">Password</FormLabel>
        <TextField
          error={Boolean(errors.email)}
          fullWidth
          variant="outlined"
          type="password"
          name="password"
          inputRef={register({
            required: 'Password Required.',
            maxLength: {
              value: 10,
              message:'Maximum Length 10.'
            },
            minLength: {
              value: 4,
              message:'Minimum Length 4.'
            }
          })}
          margin="dense"
          helperText={errors.password ? errors.password.message : null}
        />
      </Box>

      <Box>
        <FormLabel component="legend">Confirm Password</FormLabel>
        <TextField
          error={Boolean(errors.email)}
          fullWidth
          variant="outlined"
          type="password"
          name="confirm_password"
          inputRef={register({
            required: 'Password Required.',
            validate : (value) => value === getValues('password') || 'Password Does not Match' 
          })}
          margin="dense"
          helperText={errors.confirm_password ? errors.confirm_password.message : null}
        />
      </Box>
     
 
    </Fragment>
  );
  return (
    <Card className={classes.root}>
      <CardContent>
        <form onSubmit={handleSubmit(onSubmit)}>
          {basicForm}
          {/* <AddPassenger register={register} errors={errors} control={control} />  */}
          <br />
          <Box>
            <Button variant="contained" color="primary" type="submit">
              Submit
            </Button>
          </Box>
        </form>
      </CardContent>
    </Card>
  );
};

export default Form;
