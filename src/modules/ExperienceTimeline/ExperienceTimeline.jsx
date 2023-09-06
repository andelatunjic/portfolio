import React, { useContext, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { OptionsContext } from "../../context/OptionsContext";
import { observer } from "mobx-react-lite";
import dataStore from "../../store/DataStore";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import TimelineDot from "@mui/lab/TimelineDot";
import WorkHistory from "@mui/icons-material/WorkHistory";
import Section from "../../components/Section/Section";
import {
  TimelineWrapper,
  DesignBox,
  ExperienceWrapper,
  TextContent,
  Date,
  MobileVersion,
  NormalVersion,
  Options,
  AdminOptions,
} from "./ExperienceTimelineStyle";
import { Subtitle, Title, SelectForm } from "../../utils/generalStyles";
import TimelineCard from "../../components/TimelineCard/TimelineCard";
import Add from "@mui/icons-material/Add";
import IconButton from "@mui/material/IconButton";
import { getAllExperiences } from "../../firebase/experience";
import CreateUpdateExperience from "../Forms/CreateUpdateExperience/CreateUpdateExperience";
import Tooltip from "@mui/material/Tooltip";
import { format } from "date-fns";

const ExperienceTimeline = () => {
  const { darkMode, authUser } = useContext(OptionsContext);
  const { experiences, setExperiences, experiencesLength } = dataStore;
  const { t } = useTranslation();

  const [experienceForm, setExperienceForm] = useState(false);
  const [sort, setSort] = useState("1");

  useEffect(() => {
    if (experiencesLength === 0) {
      fetchExperiences();
    }
  }, []);

  useEffect(() => {
    fetchExperiences();
  }, [sort]);

  const fetchExperiences = async () => {
    await getAllExperiences()
      .then((res) => {
        res.sort((a, b) => {
          const dateA = new window.Date(a.dateFrom);
          const dateB = new window.Date(b.dateFrom);
          if (sort == "0") return dateA - dateB;
          else return dateB - dateA;
        });

        setExperiences(res);
      })
      .catch((error) => {
        console.log("Failed to fetch experiences:", error);
      });
  };

  const newExperienceHandler = () => {
    setExperienceForm(!experienceForm);
  };

  const sortHandler = (event) => {
    setSort(event.target.value);
  };

  const formatDate = (date) => {
    return format(new window.Date(date), "dd.MM.yyyy.");
  };

  return (
    <Section>
      <TimelineWrapper>
        <DesignBox />
        <ExperienceWrapper>
          <div>
            <TextContent>
              <Title>{t("ExperienceTitle")}</Title>
              <Subtitle moreContrast>{t("ExperienceSubtitle")}</Subtitle>
            </TextContent>
            <Options>
              <AdminOptions auth={authUser}>
                <Tooltip title={t("CreateExperienceTitle")}>
                  <IconButton
                    onClick={newExperienceHandler}
                    sx={{
                      backgroundColor: "rgba(1, 1, 1, 0.2)",
                      "&:hover": {
                        backgroundColor: "rgba(1, 1, 1, 0.3)",
                      },
                      color: "#B3AFF8",
                    }}
                  >
                    <Add
                      sx={{ color: darkMode ? "#F9FAFB" : "#1F2937" }}
                      fontSize="medium"
                    />
                  </IconButton>
                </Tooltip>
              </AdminOptions>
              <SelectForm dark={darkMode} name="Sort" onChange={sortHandler}>
                <option value="1">{t("SortByDateDesc")}</option>
                <option value="0">{t("SortByDateAsc")}</option>
              </SelectForm>
            </Options>
          </div>
          <MobileVersion>
            <Timeline
              sx={{
                "& .MuiTimelineItem-root:before": {
                  flex: 0,
                },
              }}
            >
              {experiences.length === 0 ? (
                <TimelineItem>
                  <TimelineOppositeContent
                    sx={{ flex: 0, padding: 0 }}
                  ></TimelineOppositeContent>
                  <TimelineSeparator>
                    <TimelineDot color="secondary" variant="outlined" />
                    <TimelineConnector sx={{ bgcolor: "secondary.main" }} />
                  </TimelineSeparator>
                  <TimelineContent sx={{ paddingRight: 0 }}>
                    {t("ExperienceNoData")}
                  </TimelineContent>
                </TimelineItem>
              ) : (
                experiences.map((experience) => (
                  <TimelineItem key={experience.id}>
                    <TimelineOppositeContent
                      sx={{ flex: 0, padding: 0 }}
                    ></TimelineOppositeContent>
                    <TimelineSeparator>
                      <TimelineConnector sx={{ bgcolor: "secondary.main" }} />
                      <TimelineDot color="secondary" variant="outlined">
                        <WorkHistory
                          sx={{ color: darkMode ? "#F9FAFB" : "#1F2937" }}
                        />
                      </TimelineDot>
                      <TimelineConnector sx={{ bgcolor: "secondary.main" }} />
                    </TimelineSeparator>
                    <TimelineContent sx={{ paddingRight: 0 }}>
                      <TimelineCard
                        id={experience.id}
                        position={experience.position}
                        company={experience.company}
                        description={experience.description}
                        refreshData={fetchExperiences}
                      />
                    </TimelineContent>
                  </TimelineItem>
                ))
              )}
            </Timeline>
          </MobileVersion>
          <NormalVersion>
            <Timeline>
              {experiences.length === 0 ? (
                <TimelineItem>
                  <TimelineOppositeContent
                    sx={{ flex: 0, padding: 0 }}
                  ></TimelineOppositeContent>
                  <TimelineSeparator>
                    <TimelineDot color="secondary" variant="outlined" />
                    <TimelineConnector sx={{ bgcolor: "secondary.main" }} />
                  </TimelineSeparator>
                  <TimelineContent sx={{ paddingRight: 0 }}>
                    {t("ExperienceNoData")}
                  </TimelineContent>
                </TimelineItem>
              ) : (
                experiences.map((experience) => (
                  <TimelineItem key={experience.id}>
                    <TimelineOppositeContent
                      sx={{ flex: 0.3, paddingLeft: 0, m: "auto 0" }}
                    >
                      <Date>{formatDate(experience.dateFrom)}</Date> <br></br>
                      <Date>{formatDate(experience.dateTo)}</Date>
                    </TimelineOppositeContent>
                    <TimelineSeparator>
                      <TimelineConnector sx={{ bgcolor: "secondary.main" }} />
                      <TimelineDot color="secondary" variant="outlined">
                        <WorkHistory />
                      </TimelineDot>
                      <TimelineConnector sx={{ bgcolor: "secondary.main" }} />
                    </TimelineSeparator>
                    <TimelineContent sx={{ paddingRight: 0 }}>
                      <TimelineCard
                        id={experience.id}
                        position={experience.position}
                        company={experience.company}
                        description={experience.description}
                        refreshData={fetchExperiences}
                      />
                    </TimelineContent>
                  </TimelineItem>
                ))
              )}
            </Timeline>
          </NormalVersion>
        </ExperienceWrapper>
      </TimelineWrapper>
      <CreateUpdateExperience
        show={experienceForm}
        showHandler={newExperienceHandler}
        refreshData={fetchExperiences}
      />
    </Section>
  );
};

export default observer(ExperienceTimeline);
