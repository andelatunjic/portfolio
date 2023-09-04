import React, { useContext, useState } from "react";
import { OptionsContext } from "../../context/OptionsContext";
import {
  Comment,
  CommentHeader,
  Info,
  Author,
  Name,
  Date,
  Content,
  AdminActions,
} from "./SingleCommentStyle";
import Avatar from "@mui/material/Avatar";
import Delete from "@mui/icons-material/DeleteOutline";
import Edit from "@mui/icons-material/EditTwoTone";

const SingleComment = ({ id, name, date, content, creator }) => {
  const { darkMode } = useContext(OptionsContext);

  return (
    <Comment identified={creator}>
      <CommentHeader>
        <Info>
          <Avatar sx={{ bgcolor: "#B3AFF8" }}>AT</Avatar>
          <Author>
            <Name>{name}</Name>
            <Date>{date}</Date>
          </Author>
        </Info>
        <AdminActions identified={creator}>
          <Delete
            sx={{
              color: darkMode ? "#F9FAFB" : "#1F2937",
              cursor: "pointer",
              "&:hover": {
                color: "#5c6bc0",
                transition: "0.3s ease-out",
              },
            }}
          />
          <Edit
            sx={{
              color: darkMode ? "#F9FAFB" : "#1F2937",
              cursor: "pointer",
              "&:hover": {
                color: "#5c6bc0",
                transition: "0.3s ease-out",
              },
            }}
          />
        </AdminActions>
      </CommentHeader>
      <Content>{content}</Content>
    </Comment>
  );
};

export default SingleComment;
