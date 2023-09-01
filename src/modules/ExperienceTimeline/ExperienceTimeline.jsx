import React, { useContext } from "react";
import { OptionsContext } from "../../context/OptionsContext";
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
  AddNewWrapper,
} from "./ExperienceTimelineStyle";
import { Subtitle, Title } from "../../utils/generalStyles";
import TimelineCard from "../../components/TimelineCard/TimelineCard";
import Add from "@mui/icons-material/Add";
import IconButton from "@mui/material/IconButton";

const ExperienceTimeline = () => {
  const { darkMode, authUser } = useContext(OptionsContext);

  return (
    <Section>
      <TimelineWrapper>
        <DesignBox />
        <ExperienceWrapper>
          <div>
            <AddNewWrapper auth={authUser}>
              <IconButton
                sx={{
                  backgroundColor: "rgba(1, 1, 1, 0.2)",
                  "&:hover": {
                    backgroundColor: "rgba(1, 1, 1, 0.3)",
                  },
                  color: "#B3AFF8",
                }}
              >
                <Add sx={{ color: darkMode ? "#F9FAFB" : "#1F2937" }} fontSize="medium" />
              </IconButton>
            </AddNewWrapper>
            <TextContent>
              <Title>Work experience</Title>
              <Subtitle moreContrast>
                Timeline of work positions & academies
              </Subtitle>
            </TextContent>
          </div>
          <MobileVersion>
            <Timeline
              sx={{
                "& .MuiTimelineItem-root:before": {
                  flex: 0,
                },
              }}
            >
              <TimelineItem>
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
                    position="Software developer"
                    company="Mobilisis d.o.o."
                    description="I was working on bla bla bl with tech this this this and this. Just
                    checking how will this look."
                  />
                </TimelineContent>
              </TimelineItem>
              <TimelineItem>
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
                    position="Software developer"
                    company="Mobilisis d.o.o."
                    description="I was working on bla bla bl with tech this this this and this. Just
                    checking how will this look."
                  />
                </TimelineContent>
              </TimelineItem>
            </Timeline>
          </MobileVersion>
          <NormalVersion>
            <Timeline>
              <TimelineItem>
                <TimelineOppositeContent
                  sx={{ flex: 0.2, paddingLeft: 0, m: "auto 0" }}
                >
                  <Date>16.08.2022.</Date> <br></br>
                  <Date>16.09.2022.</Date>
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
                    position="Software developer"
                    company="Mobilisis d.o.o."
                    description="I was working on bla bla bl with tech this this this and this. Just
                    checking how will this look."
                  />
                </TimelineContent>
              </TimelineItem>
              <TimelineItem>
                <TimelineOppositeContent
                  sx={{ flex: 0.2, paddingLeft: 0, m: "auto 0" }}
                >
                  <Date>16.08.2022.</Date> <br></br>
                  <Date>16.09.2022.</Date>
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
                    position="Software developer"
                    company="Mobilisis d.o.o."
                    description="I was working on bla bla bl with tech this this this and this. Just
                    checking how will this look."
                  />
                </TimelineContent>
              </TimelineItem>
            </Timeline>
          </NormalVersion>
        </ExperienceWrapper>
      </TimelineWrapper>
    </Section>
  );
};

export default ExperienceTimeline;
