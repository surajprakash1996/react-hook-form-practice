import React, { Fragment } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
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


const BasicInformation = () => {
  const classes = useStyles();
  const {register, errors} = useFormContext({
    mode:'onTouch'
  });
  const basicForm = (
    <Fragment>

      <Box>
        <Typography gutterBottom variant="h6"> Basic Information </Typography>
      </Box>

      <Box>
        <Divider />
      </Box>

      <br />

      <Box>
        <FormLabel component="legend">First Name</FormLabel>
        <TextField
          
          fullWidth
          variant="outlined"
          type="text"
          name="firstName"
          margin="dense"
          inputRef={register({
            required:'First Name  is Required.'
          })}
          error={Boolean(errors.firstName)}
          helperText={ errors.firstName ? errors.firstName.message : null }
        />
      </Box>

      <Box>
        <FormLabel component="legend">Second Name</FormLabel>
        <TextField
          fullWidth
          variant="outlined"
          type="text"
          name="secondName"
          margin="dense"
          inputRef={register({
            required:'Second Name  is Required.'
          })}
          error={Boolean(errors.secondName)}
          helperText={ errors.secondName ? errors.secondName.message : null }
        />
      </Box>

      <Box>
        <FormLabel component="legend">Last Name</FormLabel>
        <TextField
          fullWidth
          variant="outlined"
          type="text"
          name="lastName"
          margin="dense"
          inputRef={register({
            required:'Last Name  is Required.'
          })}
          error={Boolean(errors.lastName)}
          helperText={ errors.lastName ? errors.lastName.message : null }
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

export default BasicInformation;
