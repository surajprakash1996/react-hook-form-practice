import React, { Fragment, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";


const useStyles = makeStyles({
  root: {
    maxWidth: "90%",
    margin:"20px",
  },
});


const ContactInformation = () => {
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <CardContent>
        <Button type="submit" color="primary" variant="contained">Submit</Button>
      </CardContent>
    </Card>
  );
};

export default ContactInformation;
