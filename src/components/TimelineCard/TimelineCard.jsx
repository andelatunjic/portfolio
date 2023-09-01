import React, { useContext } from "react";
import PropTypes from "prop-types";
import { OptionsContext } from "../../context/OptionsContext";
import {
  CardInner,
  CardDescription,
  CardTitle,
  CardWrapper,
  CardContent,
  CardSubtitle,
  AdminOptions,
} from "./TimelineCardStyle";
import IconButton from "@mui/material/IconButton";
import Add from "@mui/icons-material/Add";
import Delete from "@mui/icons-material/Delete";
import Edit from "@mui/icons-material/EditTwoTone";

const TimelineCard = ({ position, company, description }) => {
  const { darkMode, authUser } = useContext(OptionsContext);

  return (
    <CardWrapper>
      <AdminOptions auth={authUser}>
        <IconButton
          sx={{
            backgroundColor: "rgba(1, 1, 1, 0.2)",
            "&:hover": {
              backgroundColor: "rgba(1, 1, 1, 0.3)",
            },
            color: "#FF6668",
          }}
        >
          <Delete
            sx={{ color: darkMode ? "#F9FAFB" : "#1F2937" }}
            fontSize="small"
          />
        </IconButton>
        <IconButton
          sx={{
            backgroundColor: "rgba(1, 1, 1, 0.2)",
            "&:hover": {
              backgroundColor: "rgba(1, 1, 1, 0.3)",
            },
            color: "#FF6668",
          }}
        >
          <Edit
            sx={{ color: darkMode ? "#F9FAFB" : "#1F2937" }}
            fontSize="small"
          />
        </IconButton>
      </AdminOptions>
      <CardContent>
        <CardInner>
          <CardTitle>{position}</CardTitle>
          <CardSubtitle>{company}</CardSubtitle>
          <CardDescription>{description}</CardDescription>
        </CardInner>
      </CardContent>
    </CardWrapper>
  );
};

TimelineCard.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  description: PropTypes.string,
};

export default TimelineCard;
