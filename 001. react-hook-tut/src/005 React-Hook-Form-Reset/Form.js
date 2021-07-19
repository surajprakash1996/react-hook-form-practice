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
import { useForm } from "react-hook-form";
import axios from 'axios';

const useStyles = makeStyles({
  root: {
    maxWidth: "90%",
  },
});



const Form = () => {
  const classes = useStyles();
  const { register, handleSubmit, errors, reset } = useForm({
    mode: "onTouched"
  });
  const onSubmit = (data) => {
    console.log(data);
  };
    const loadUser = async () => {
        try {   
            const res  = await axios.get('https://jsonplaceholder.typicode.com/posts/1');
            reset(res.data);
            console.log(res.data);
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
        loadUser();
    },[])
 

  const basicForm = (
    <Fragment>
      <Box>
        <Typography gutterBottom variant="h6"> React Hook Form </Typography>
      </Box>
       
      <Box>
        <Divider />
      </Box>

      <br />

      <Box>
        <FormLabel component="legend">ID</FormLabel>
        <TextField
          error={Boolean(errors.id)}
          fullWidth
          variant="outlined"
          type="text"
          name="id"
          inputRef={register({
            required: 'Required.'
          })}
          margin="dense"
          helperText={errors.id ? errors.id.message : null}
        />
      </Box>
      
      <Box>
        <FormLabel component="legend">Title</FormLabel>
        <TextField
          error={Boolean(errors.title)}
          fullWidth
          variant="outlined"
          type="text"
          name="title"
          inputRef={ register({
            required: 'Required.',
          })}
          margin="dense"
          helperText={errors.title ? errors.title.message : null}
        />
      </Box>

      <Box>
        <FormLabel component="legend">Body</FormLabel>
        <TextField
          error={Boolean(errors.body)}
          fullWidth
          variant="outlined"
          type="text"
          name="body"
          inputRef={register({
            required: 'Required.',
          })}
          margin="dense"
          helperText={errors.body ? errors.body.message : null}
        />
      </Box>

    </Fragment>
  );
  return (
    <Card className={classes.root}>
      <CardContent>
        <form onSubmit={handleSubmit(onSubmit)}>
          {basicForm}
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
