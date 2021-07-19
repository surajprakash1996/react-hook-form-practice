import React from "react";
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

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
});

const Form = () => {
  const classes = useStyles();
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
      console.log(data);
  }
  return (
    <Card className={classes.root}>
      <CardContent>
        <form onSubmit={ handleSubmit(onSubmit)} >
          <Box >
            <Typography gutterBottom variant="h6">React Hook Form</Typography>
          </Box>
          
          <Box>
            <Divider />
          </Box>
          <br/>
          
          <Box>
            <FormLabel component="legend">Username</FormLabel>
            <TextField fullWidth variant="outlined" type="text" name="username" inputRef={ register } margin="dense" />
          </Box>

          <Box>
            <FormLabel component="legend">Email</FormLabel>
            <TextField fullWidth variant="outlined" type="email" name="email" inputRef={register} margin="dense" />
          </Box>

          <Box>
            <FormLabel component="legend">Phone</FormLabel>
            <TextField fullWidth variant="outlined" type="Phone" name="phone" inputRef={register} margin="dense" />
          </Box>

          <Box>
              <Typography variant="h5" gutterBottom>Permanent Address</Typography>
          </Box>

          <Box>
            <FormLabel component="legend">Address</FormLabel>
            <TextField fullWidth variant="outlined" type="text" name="address[0].street" inputRef={register} margin="dense" />
          </Box>

          <Box>
            <FormLabel component="legend">State</FormLabel>
            <TextField fullWidth variant="outlined" type="text" name="address[0].state" inputRef={register} margin="dense" />
          </Box>
        
          <Box>
            <FormLabel component="legend">pin</FormLabel>
            <TextField fullWidth variant="outlined" type="text" name="address[0].pin" inputRef={register} margin="dense" />
          </Box>



          <Box>
              <Typography variant="h5" gutterBottom>Correspondence Address</Typography>
          </Box>

          <Box>
            <FormLabel component="legend">Address</FormLabel>
            <TextField fullWidth variant="outlined" type="text" name="address[1].street" inputRef={register} margin="dense" />
          </Box>

          <Box>
            <FormLabel component="legend">State</FormLabel>
            <TextField fullWidth variant="outlined" type="text" name="address[1].state" inputRef={register} margin="dense" />
          </Box>
        
          <Box>
            <FormLabel component="legend">pin</FormLabel>
            <TextField fullWidth variant="outlined" type="text" name="address[1].pin" inputRef={register} margin="dense" />
          </Box>

          <Box>
            <Button variant="contained" color="primary" type="submit">Submit</Button>
          </Box>
        </form>
      </CardContent>
    </Card>
  );
};

export default Form;
