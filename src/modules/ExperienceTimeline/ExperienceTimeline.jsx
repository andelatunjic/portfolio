import React from "react";
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
} from "./ExperienceTimelineStyle";
import { Subtitle, Title } from "../../utils/generalStyles";
import TimelineCard from "../../components/TimelineCard/TimelineCard";

const ExperienceTimeline = () => {
  return (
    <Section>
      <TimelineWrapper>
        <DesignBox />
        <ExperienceWrapper>
          <TextContent>
            <Title>Work experience</Title>
            <Subtitle moreContrast>
              Timeline of work positions & academies
            </Subtitle>
          </TextContent>

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
                  sx={{ flex: 0, padding: 0 }}
                ></TimelineOppositeContent>
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
