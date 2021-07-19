import React, { Fragment, useEffect } from "react";
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


const ContactInformation = () => {
  const classes = useStyles();
  const {register, errors } = useFormContext({
    mode:'onTouch'
  });
  const basicForm = (
    <Fragment>

      <Box>
        <Typography gutterBottom variant="h6"> Contact Information </Typography>
      </Box>

      <Box>
        <Divider />
      </Box>

      <br />

      <Box>
        <FormLabel component="legend">Email</FormLabel>
        <TextField
          fullWidth
          variant="outlined"
          type="email"
          name="email"
          margin="dense"
          inputRef={register({
            required:'Email is Required.'
          })}
          error={Boolean(errors.email)}
          helperText={errors.email ? errors.email.message : null}
        />
      </Box>

      <Box>
        <FormLabel component="legend">Phone</FormLabel>
        <TextField
          fullWidth
          variant="outlined"
          type="phone"
          name="phone"
          margin="dense"
          inputRef={register({
            required:'Phone is Required.'
          })}
          error={Boolean(errors.phone)}
          helperText={errors.phone ? errors.phone.message : null}
        />
      </Box>

      <Box>
        <FormLabel component="legend">Alternate Phone</FormLabel>
        <TextField
          fullWidth
          variant="outlined"
          type="phone"
          name="alternatePhone"
          margin="dense"
          inputRef={register({
            required:'Alternate Phone is Required.'
          })}
          error={Boolean(errors.alternatePhone)}
          helperText={ errors.alternatePhone ? errors.alternatePhone.message : null }
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

export default ContactInformation;
