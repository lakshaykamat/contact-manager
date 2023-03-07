import { Card, Typography } from "@mui/material";
import {  Stack } from "@mui/system";
import React from "react";

const ContactCard = ({ name, number,img }) => {

  return (
    <Card
      sx={{ padding: ".2rem 1.2rem",margin:'1rem auto', maxWidth: "400px" }}
    >
      <Stack direction={"row"} alignItems={"center"}>
        <img
          style={{ borderRadius: "50%", maxWidth: "15%" }}
          src={img}
        />
        <Stack direction={"column"} spacing={"2"} sx={{ margin: "1rem" }}>
          <Typography variant="h6">{name}</Typography>
          <Typography variant="p">{number}</Typography>
        </Stack>
      </Stack>
    </Card>
  );
};

export default ContactCard;
