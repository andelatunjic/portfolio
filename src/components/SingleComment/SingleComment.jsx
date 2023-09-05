import React, { useContext, useState, useEffect } from "react";
import { OptionsContext } from "../../context/OptionsContext";
import { useCookies } from "react-cookie";
import { useTranslation } from "react-i18next";
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
import DeleteComment from "../DeleteComment/DeleteComment";
import UpdateComment from "../../modules/Forms/UpdateComment/UpdateComment";
import Tooltip from "@mui/material/Tooltip";

const SingleComment = ({ id, name, date, content, refreshData }) => {
  const { darkMode } = useContext(OptionsContext);
  const [cookies, setCookie] = useCookies([id]);
  const { t } = useTranslation();

  const [deleteDialog, setDeleteDialog] = useState(false);
  const [commentForm, setCommentForm] = useState(false);

  const isIdentified = cookies[id];

  const nameArray = name.split(" ");
  let userInitials= "";

  if (nameArray.length >= 2) {
    userInitials = nameArray[0].charAt(0).toUpperCase() + nameArray[1].charAt(0).toUpperCase();
  } else if (nameArray.length === 1) {
    userInitials = nameArray[0].charAt(0).toUpperCase();
  }

  const deleteDialogHandler = () => {
    setDeleteDialog(!deleteDialog);
  };

  const updateCommentHandler = () => {
    setCommentForm(!commentForm);
  };

  return (
    <>
      <Comment identified={isIdentified}>
        <CommentHeader>
          <Info>
            <Avatar sx={{ bgcolor: "#B3AFF8" }}>{userInitials}</Avatar>
            <Author>
              <Name>{name}</Name>
              <Date>{date}</Date>
            </Author>
          </Info>
          <AdminActions identified={isIdentified}>
            <Tooltip title={t("DeleteCommentTitle")}>
              <Delete
                onClick={deleteDialogHandler}
                sx={{
                  color: darkMode ? "#F9FAFB" : "#1F2937",
                  cursor: "pointer",
                  "&:hover": {
                    color: "#5c6bc0",
                    transition: "0.3s ease-out",
                  },
                }}
              />
            </Tooltip>
            <Tooltip title={t("UpdateCommentTitle")}>
              <Edit
                onClick={updateCommentHandler}
                sx={{
                  color: darkMode ? "#F9FAFB" : "#1F2937",
                  cursor: "pointer",
                  "&:hover": {
                    color: "#5c6bc0",
                    transition: "0.3s ease-out",
                  },
                }}
              />
            </Tooltip>
          </AdminActions>
        </CommentHeader>
        <Content>{content}</Content>
      </Comment>
      <DeleteComment
        show={deleteDialog}
        showHandler={deleteDialogHandler}
        refreshData={refreshData}
        id={id}
      />
      <UpdateComment
        show={commentForm}
        showHandler={updateCommentHandler}
        refreshData={refreshData}
        id={id}
      />
    </>
  );
};

export default SingleComment;
