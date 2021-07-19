import React, { Fragment } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import TextField from "@material-ui/core/TextField";
import Button from '@material-ui/core/Button';
import Divider from "@material-ui/core/Divider";
import { useForm } from 'react-hook-form';

const useStyles = makeStyles({
  root: {
    maxWidth: "90%",
    margin:"20px",
  },
});

const getDimension = async (file) => {
    let reader = new FileReader();
    return new Promise((resolve, reject) => {
      reader.onerror = () => {
        reader.abort();
        reject(new DOMException("Problem parsing input file."));
      };
  
      reader.onload = () => {
        var image = new Image();
        image.src = reader.result;
        image.onload = function () {
          resolve({ width: this.width, height: this.height });
        };
      };
      reader.readAsDataURL(file);
    });
  
  };

const ContactInformation = () => {
  const classes = useStyles();
  const {register, errors , handleSubmit} = useForm({
    mode:'onTouch'
  });

  const onSubmit = data => console.log(data);

  return (
    <Card className={classes.root}>
      <CardContent>
       <form onSubmit={handleSubmit(onSubmit)}>
       <Box>
           <Typography gutterBottom variant="h6">Image Uploading</Typography>
       </Box>
       <Box>
           <Divider />
       </Box> 
       <br/>
       <Box>
       <TextField
          error = {Boolean(errors.profile)}
          fullWidth
          variant="outlined"
          type="file"
          name="profile"
          inputRef={register({
            required: 'Profile Required.',
            validate: async (data) => {
                // FileSize Come from Client in byte unit.
                const fileTypes = ['PNG','png','JPG','jpg','JPEG','jpeg'];
                const fileType = data[0].name.split('.')[1];
                const fileSize = data[0].size;
                if(!fileTypes.includes(fileType)) {
                    return `Invalid File Format. You can use only PNG,png,JPG,jpg,JPEG,jpeg Formats.`
                }

                if(fileSize > 1000000) {
                    return `File Size is Bigger. You Can Upload Less Than 1 Mb. `
                }
            
                const sizes = await getDimension(data[0]);
                if (sizes.width >= 1000 && sizes.height >= 1000) {
                  return "Image width and height must be less than or equal to 1000px";
                }
            }
          })}
          margin="dense"
          helperText={errors.profile ? errors.profile.message : null}
        />
       </Box>
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

export default ContactInformation;
