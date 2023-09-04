import React, { useContext, useState } from "react";
import { OptionsContext } from "../../context/OptionsContext";
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

const Comments = () => {
  const { darkMode } = useContext(OptionsContext);

  const [isFormValid, setIsFormValid] = useState(false);
  const [sending, setSending] = useState(false);

  const [name, setName] = useState("");
  const [content, setContent] = useState("");
  const [isChecked, setIsChecked] = useState(false);

  const inputChangeHandler = (e) => {
    const { name, value } = e.target;
    if (name === "name") {
      setName(value);
    } else if (name === "content") {
      setContent(value);
    }
  };

  const robotHandler = (e) => {
    setIsChecked(e.target.checked);

    setIsFormValid(e.target.checked && name !== "" && content !== "");
  };

  const submitHandler = (e) => {
    e.preventDefault();
  };

  return (
    <Section>
      <CommentsWrapper>
        <Title>Testimonial & Comments</Title>
        <CommentSection>
          <CommentsList>
            <SingleComment
              id="1"
              name="Anđela Tunjić"
              date="20.06.2023."
              content="Ovo je primjer teksta nekog komentara štoj e ostavljen ovdje ggg
              ggg ggg ggggggggggggggggggggg gg gggggg gg g g g ggggggggggg."
              creator
            />
            <SingleComment
              id="1"
              name="Anđela Tunjić"
              date="20.06.2023."
              content="Ovo je primjer teksta nekog komentara štoj e ostavljen ovdje ggg
              ggg ggg ggggggggggggggggggggg gg gggggg gg g g g ggggggggggg."
            />
          </CommentsList>
          <NewComment>
            <Form onSubmit={submitHandler}>
              <CustomTheme>
                <TextField
                  label="name"
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
                  label="content"
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
                label="I'm not a robot"
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
                  Publish
                </Button>
              </ButtonWrapper>
            </Form>
          </NewComment>
        </CommentSection>
      </CommentsWrapper>
    </Section>
  );
};

export default Comments;
