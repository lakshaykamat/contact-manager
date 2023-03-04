import {
  Button,
  ImageList,
  ImageListItem,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";
import { Box, Container, Stack } from "@mui/system";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import PersonIcon from "@mui/icons-material/Person";
import NumbersIcon from "@mui/icons-material/Numbers";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const Form = (props) => {
  return (
    <Stack
      spacing={3}
      justifyContent="center"
      alignItems="center"
      maxWidth={"sm"}
      sx={{ margin: "1rem auto" }}
    >
      <Typography variant="h3" sx={{ textAlign: "center" }}>
        Contact Manager
      </Typography>

      <TextField
        onChange={props.handleChange}
        name="name"
        id="name"
        type={"text"}
        label="Name"
        value={props.contactDetail.name}
        variant="outlined"
        fullWidth={true}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <PersonIcon />
            </InputAdornment>
          ),
        }}
      />

      <TextField
        onChange={props.handleChange}
        error={
          props.contactDetail.number.length >= 1
            ? props.contactDetail.number.length == 10
              ? false
              : true
            : false
        }
        name="number"
        id="number"
        value={props.contactDetail.number}
        type={"number"}
        label="Number"
        variant="outlined"
        fullWidth={true}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <NumbersIcon />
            </InputAdornment>
          ),
        }}
      />

      {
        <Button
          onClick={props.handleContactList}
          variant="contained"
          size="large"
          disabled={props.contactDetail.number.length == 10 ? false : true}>
          <PersonAddIcon sx={{ marginRight: ".7rem" }} />
          Add to Contact
        </Button>
      }
      <Link to={"/contacts"}>
        <Button variant="outlined" size="large">All Contacts</Button>
      </Link>
    </Stack>
  );
};

export default Form;
