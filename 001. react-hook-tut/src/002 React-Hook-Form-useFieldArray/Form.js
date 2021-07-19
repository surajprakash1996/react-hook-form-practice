import React, { Fragment, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
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
  const { register, control } = props;
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
                fullWidth
                variant="outlined"
                type="text"
                inputRef={register()}
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
                fullWidth
                variant="outlined"
                type="text"
                name={`passenger_details[${index}].age`}
                inputRef={register()}
                margin="dense"
                defaultValue={item.age}
              />
            </Box>
          </Grid>

          <Grid item xs={3}>
            <Box>
              <FormLabel component="legend">Preference</FormLabel>
              <TextField
                fullWidth
                variant="outlined"
                type="text"
                name={`passenger_details[${index}].preference`}
                inputRef={register()}
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
  const { register, handleSubmit, control } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };
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
        <FormLabel component="legend">Username</FormLabel>
        <TextField
          fullWidth
          variant="outlined"
          type="text"
          name="username"
          inputRef={register}
          margin="dense"
        />
      </Box>

      <Box>
        <FormLabel component="legend">Email</FormLabel>
        <TextField
          fullWidth
          variant="outlined"
          type="email"
          name="email"
          inputRef={register}
          margin="dense"
        />
      </Box>

      <Box>
        <FormLabel component="legend">Phone</FormLabel>
        <TextField
          fullWidth
          variant="outlined"
          type="Phone"
          name="phone"
          inputRef={register}
          margin="dense"
        />
      </Box>
    </Fragment>
  );
  return (
    <Card className={classes.root}>
      <CardContent>
        <form onSubmit={handleSubmit(onSubmit)}>
          {basicForm}
          <AddPassenger register={register} control={control} /> 
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
