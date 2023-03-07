import {
  Alert,
  Box,
  Button,
  Grid,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";
import { Stack } from "@mui/system";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import PersonIcon from "@mui/icons-material/Person";
import NumbersIcon from "@mui/icons-material/Numbers";
import React from "react";

const Form = ({
  name,
  number,
  imagesData,
  alert,
  handleChange,
  handleContactList,
  handleImageClick,
  selectedImage
}) => {
  return (
    <Stack
      spacing={3}
      justifyContent="center"
      alignItems="center"
      maxWidth={"sm"}
      sx={{ margin: "5rem auto" }}
    >
      <Typography variant="h3" sx={{ textAlign: "center" }}>
        Contact Manager
      </Typography>
      {/* ****************Image ****************/}
      <Stack maxWidth={'sm'} marginX={2} justifyContent={'center'}>
        <Typography variant="h5" textAlign={'start'}>Select Image</Typography>

      <Grid container  spacing={2} justifyContent={'center'} marginTop={3}> 
        {imagesData.map((item, index) => {
          return <Grid item   key={index}><img  style={{
            border:  selectedImage &&   selectedImage.id === item.id ? '5px solid green'  : 'none',
            boxSizing:'border-box',
            borderRadius:"50%",
            width:'80px'
          }}  src={item.url} onClick={() => handleImageClick(item)} /></Grid>
        })}
      </Grid>
      </Stack>
      {/* ****************Image*************** */}
      <TextField
        size="small"
        onChange={handleChange}
        name="name"
        error={name.length >= 1 ? false : true}
        helperText={name.length >= 1 ? "" : "Enter Name"}
        id="name"
        type={"text"}
        label="Name"
        value={name}
        variant="outlined"
        // fullWidth={true}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <PersonIcon />
            </InputAdornment>
          ),
        }}
      />

      <TextField
        size="small"
        onChange={handleChange}
        error={number.length >= 1 && number.length == 10 ? false : true}
        helperText={
          number.length >= 1 && number.length == 10
            ? ""
            : number.length <= 10
            ? `Enter ${10 - number.length} more digits`
            : `Remove ${number.length - 10} Digits`
        }
        name="number"
        id="number"
        value={number}
        type={"number"}
        label="Number"
        variant="outlined"
        // fullWidth={true}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <NumbersIcon />
            </InputAdornment>
          ),
        }}
      />

      {/* If number length is not eqal to 10 nor greaeter than 0 then disabled the button*/}
      {
        <Button
          onClick={handleContactList}
          variant="contained"
          size="small"
          disabled={number.length == 10 && name.length > 0 ? false : true}
        >
          <PersonAddIcon sx={{ marginRight: ".7rem" }} />
          Add to Contacts
        </Button>
      }

      {alert && (
        <Alert severity="success" variant="filled">
          Added to List
        </Alert>
      )}
    </Stack>
  );
};

export default Form;
