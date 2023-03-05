import { Card, Typography } from "@mui/material";
import { Stack } from "@mui/system";
import React from "react";
import { Link } from "react-router-dom";

const ContactCard = ({ name, number }) => {
  return (
    <Card
      sx={{ padding: ".2rem 1.2rem", margin: "1rem auto", maxWidth: "500px" }}
    >
      <Stack direction={"row"} alignItems={"center"}>
        <img
          style={{ borderRadius: "50%", maxWidth: "15%" }}
          src="/public/anime.jpg"
        />
        <Stack direction={"column"} spacing={"3"} sx={{ margin: "1rem" }}>
          <Typography variant="h5">{name}</Typography>
          <Typography variant="p">{number}</Typography>
        </Stack>
      </Stack>
    </Card>
  );
};

export default ContactCard;
