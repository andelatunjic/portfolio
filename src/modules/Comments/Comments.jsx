import React, { useContext, useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { OptionsContext } from "../../context/OptionsContext";
import { observer } from "mobx-react-lite";
import dataStore from "../../store/DataStore";
import { useCookies } from "react-cookie";
import Section from "../../components/Section/Section";
import TextField from "@mui/material/TextField";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import CustomTheme from "../../components/CustomTheme/CustomTheme";
import {
  CommentsWrapper,
  Title,
  CommentSection,
  CommentsList,
  NewComment,
  ButtonWrapper,
  Form,
} from "./CommentsStyle";
import { Button } from "../../utils/generalStyles";
import SingleComment from "../../components/SingleComment/SingleComment";
import { getAllComments, createComment } from "../../firebase/comment";
import Toast from "../../components/Toast/Toast";

const Comments = () => {
  const { darkMode } = useContext(OptionsContext);
  const { comments, setComments, commentsLength } = dataStore;

  const [cookies, setCookie] = useCookies([]);
  const [isFormValid, setIsFormValid] = useState(false);
  const [sending, setSending] = useState(false);

  const [errorMessage, setErrorMessage] = useState(false);
  const [successMessage, setSuccessMessage] = useState(false);
  const [errorToast, setErrorToast] = useState(false);
  const [successToast, setSuccessToast] = useState(false);

  const [name, setName] = useState("");
  const [content, setContent] = useState("");
  const [isChecked, setIsChecked] = useState(false);
  const [date, setDate] = useState("");

  const { t } = useTranslation();

  function getCurrentDate() {
    const currentDate = new Date();
    const day = String(currentDate.getDate()).padStart(2, "0");
    const month = String(currentDate.getMonth() + 1).padStart(2, "0");
    const year = currentDate.getFullYear();

    return `${day}.${month}.${year}.`;
  }

  useEffect(() => {
    fetchComments();

    if (commentsLength === 0) {
      fetchComments();
    }
  }, []);

  const fetchComments = async () => {
    await getAllComments()
      .then((res) => {
        setComments(res);
      })
      .catch(() => {
        console.log("Failed to fetch comments.");
      });
  };

  const newComment = {
    name: name,
    content: content,
    date: date,
  };

  const inputChangeHandler = (e) => {
    const { name, value } = e.target;
    if (name === "name") {
      setName(value);
    } else if (name === "content") {
      setContent(value);
    }
    setDate(getCurrentDate());
  };

  const robotHandler = (e) => {
    setIsChecked(e.target.checked);
    setIsFormValid(e.target.checked && name !== "" && content !== "");
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    setSuccessMessage(t("SnackBarSuccessfulCreate"));
    setErrorMessage(t("SnackBarFailedCreate"));
    setSending(true);

    if (isFormValid) {
      await createComment(newComment)
        .then((res) => {
          const id = res;
          setCookie(id, "comment cookie");

          setSending(false);
          setName("");
          setContent("");
          setDate("");
          setIsChecked(false);
          fetchComments();
          setSuccessToast(true);
        })
        .catch((e) => {
          console.log(e);
          setSending(false);
          setErrorToast(true);
        });
    } else {
      setErrorToast(true);
    }
    setSending(false);
  };

  const errorHandler = () => {
    setErrorToast(false);
  };

  const succesHandler = () => {
    setSuccessToast(false);
  };

  return (
    <Section>
      <CommentsWrapper>
        <Title>{t("CommentsTitle")}</Title>
        <CommentSection>
          <CommentsList>
            {commentsLength === 0 ? (
              <div>{t("CommentsNoData")}</div>
            ) : (
              comments.map((comment) => (
                <SingleComment
                  key={comment.id}
                  id={comment.id}
                  name={comment.name}
                  date={comment.date}
                  content={comment.content}
                  creator
                  refreshData={fetchComments}
                />
              ))
            )}
          </CommentsList>
          <NewComment>
            <Form onSubmit={submitHandler}>
              <CustomTheme>
                <TextField
                  label={t("CommentsNameLabel")}
                  name="name"
                  value={name}
                  onChange={inputChangeHandler}
                  fullWidth
                  margin="dense"
                  required
                  variant="standard"
                  disabled={sending}
                  type="text"
                  inputProps={{ maxLength: 35 }}
                />
                <TextField
                  label={t("CommentsContentLabel")}
                  name="content"
                  value={content}
                  onChange={inputChangeHandler}
                  fullWidth
                  margin="dense"
                  required
                  multiline
                  rows={3}
                  variant="standard"
                  disabled={sending}
                  type="text"
                  inputProps={{ maxLength: 3000 }}
                />
              </CustomTheme>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={isChecked}
                    onChange={robotHandler}
                    name="checkbox"
                    disabled={sending}
                    sx={{
                      color: darkMode ? "#FFD087" : "#5c6bc0",
                      "&.Mui-checked": {
                        color: darkMode ? "#FFD087" : "#5c6bc0",
                      },
                    }}
                  />
                }
                label={t("CommentsRobotLabel")}
                sx={{
                  color: darkMode ? "#a4a9b0" : "#1F2937",
                }}
              />
              <ButtonWrapper>
                <Button
                  fullWidth
                  dark={darkMode ? "true" : "false"}
                  type="submit"
                  disabled={sending}
                >
                  {t("CommentsPublishButton")}
                </Button>
              </ButtonWrapper>
            </Form>
          </NewComment>
        </CommentSection>
      </CommentsWrapper>
      <Toast
        errorHandler={errorHandler}
        errorToast={errorToast}
        successToast={successToast}
        succesHandler={succesHandler}
        successMessage={successMessage}
        errorMessage={errorMessage}
      />
    </Section>
  );
};

export default observer(Comments);
