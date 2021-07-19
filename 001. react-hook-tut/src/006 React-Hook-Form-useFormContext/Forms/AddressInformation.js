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
import { useFormContext } from 'react-hook-form';

const useStyles = makeStyles({
  root: {
    maxWidth: "90%",
    margin:"20px",
  },
});


const AddressInformation = () => {
  const classes = useStyles();
  const {register, errors} = useFormContext();
  const basicForm = (
    <Fragment>

      <Box>
        <Typography gutterBottom variant="h6"> Address Information </Typography>
      </Box>

      <Box>
        <Divider />
      </Box>

      <br />

      <Box>
        <FormLabel component="legend">Address</FormLabel>
        <TextField
          fullWidth
          variant="outlined"
          type="text"
          name="address.street"
          margin="dense"
          inputRef={register({
            required:'Address is Required.'
          })}
        />
      </Box>

      <Box>
        <FormLabel component="legend">state</FormLabel>
        <TextField
          fullWidth
          variant="outlined"
          type="text"
          name="address.state"
          margin="dense"
          inputRef={register({
            required:'State is Required.'
          })}
         
        />
      </Box>

      <Box>
        <FormLabel component="legend">Zip Code</FormLabel>
        <TextField
          fullWidth
          variant="outlined"
          type="text"
          name="address.zipCode"
          margin="dense"
          inputRef={register({
            required:'Last Name  is Required.'
          })}
        />
      </Box>
    </Fragment>
  );

  return (
    <Card className={classes.root}>
      <CardContent>
        {basicForm}
      </CardContent>
    </Card>
  );
};

export default AddressInformation;
