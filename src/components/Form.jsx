import { Alert, Button, InputAdornment, TextField, Typography } from "@mui/material";
import { Stack } from "@mui/system";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import PersonIcon from "@mui/icons-material/Person";
import NumbersIcon from "@mui/icons-material/Numbers";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const Form = ({ name, number,alert, handleChange, handleContactList }) => {
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

      <TextField
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

      {
        <Button
          onClick={handleContactList}
          variant="contained"
          size="large"
          disabled={number.length == 10 && name.length > 0 ? false : true}
        >
          <PersonAddIcon sx={{ marginRight: ".7rem" }} />
          Add to Contacts
        </Button>
      }
      {alert && <Alert severity="success" variant="filled">Added to List</Alert>}
    </Stack>
  );
};

export default Form;
