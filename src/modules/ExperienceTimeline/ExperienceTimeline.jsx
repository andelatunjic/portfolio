import React from "react";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import TimelineDot from "@mui/lab/TimelineDot";
import WorkHistory from "@mui/icons-material/WorkHistory";

import Typography from "@mui/material/Typography";
import Section from "../../components/Section/Section";
import {
  TimelineWrapper,
  DesignBox,
  ExperienceWrapper,
  TextContent,
} from "./ExperienceTimelineStyle";
import { Subtitle, Text, Title } from "../../utils/generalStyles";

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

          <Timeline>
            <TimelineItem>
              <TimelineOppositeContent
                sx={{ m: "auto 0" }}
                align="right"
                variant="body2"
                color="text.secondary"
              >
                16.08.2022. - 16.09.2022.
              </TimelineOppositeContent>
              <TimelineSeparator>
                <TimelineConnector sx={{ bgcolor: "secondary.main" }} />
                <TimelineDot color="secondary" variant="outlined">
                  <WorkHistory />
                </TimelineDot>
                <TimelineConnector sx={{ bgcolor: "secondary.main" }} />
              </TimelineSeparator>
              <TimelineContent sx={{ py: "12px", px: 2 }}>
                <Typography variant="h6" component="span">
                  Span d.d.
                </Typography>
                <Text>I was working with bla bla bla bla bla bal bla bla</Text>
              </TimelineContent>
            </TimelineItem>

            <TimelineItem>
              <TimelineOppositeContent
                sx={{ m: "auto 0" }}
                variant="body2"
                color="text.secondary"
              >
                16.08.2022. - 16.09.2022.
              </TimelineOppositeContent>
              <TimelineSeparator>
                <TimelineConnector sx={{ bgcolor: "secondary.main" }} />
                <TimelineDot color="secondary" variant="outlined">
                  <WorkHistory />
                </TimelineDot>
                <TimelineConnector sx={{ bgcolor: "secondary.main" }} />
              </TimelineSeparator>
              <TimelineContent sx={{ py: "12px", px: 2 }}>
                <Typography variant="h6" component="span">
                  Speck d.o.o.
                </Typography>
                <Text>I was working with bla bla bla bla bla bal bla bla</Text>
              </TimelineContent>
            </TimelineItem>

            <TimelineItem>
              <TimelineOppositeContent
                sx={{ m: "auto 0" }}
                variant="body2"
                color="text.secondary"
              >
                16.08.2022. - 16.09.2022.
              </TimelineOppositeContent>
              <TimelineSeparator>
                <TimelineConnector sx={{ bgcolor: "secondary.main" }} />
                <TimelineDot color="secondary" variant="outlined">
                  <WorkHistory />
                </TimelineDot>
                <TimelineConnector sx={{ bgcolor: "secondary.main" }} />
              </TimelineSeparator>
              <TimelineContent sx={{ py: "12px", px: 2 }}>
                <Typography variant="h6" component="span">
                  Mobilisis d.o.o.
                </Typography>
                <Text>I was working with bla bla bla bla bla bal bla bla</Text>
              </TimelineContent>
            </TimelineItem>

            <TimelineItem>
              <TimelineOppositeContent
                sx={{ m: "auto 0" }}
                variant="body2"
                color="text.secondary"
              >
                16.08.2022. - 16.09.2022.
              </TimelineOppositeContent>
              <TimelineSeparator>
                <TimelineConnector sx={{ bgcolor: "secondary.main" }} />
                <TimelineDot color="secondary" variant="outlined">
                  <WorkHistory />
                </TimelineDot>
                <TimelineConnector sx={{ bgcolor: "secondary.main" }} />
              </TimelineSeparator>
              <TimelineContent sx={{ py: "12px", px: 2 }}>
                <Typography variant="h6" component="span">
                  Mobilisis d.o.o.
                </Typography>
                <Text>I was working with bla bla bla bla bla bal bla bla</Text>
              </TimelineContent>
            </TimelineItem>

            <TimelineItem>
              <TimelineOppositeContent
                sx={{ m: "auto 0" }}
                variant="body2"
                color="text.secondary"
              >
                16.08.2022. - 16.09.2022.
              </TimelineOppositeContent>
              <TimelineSeparator>
                <TimelineConnector sx={{ bgcolor: "secondary.main" }} />
                <TimelineDot color="secondary" variant="outlined">
                  <WorkHistory />
                </TimelineDot>
                <TimelineConnector sx={{ bgcolor: "secondary.main" }} />
              </TimelineSeparator>
              <TimelineContent sx={{ py: "12px", px: 2 }}>
                <Typography variant="h6" component="span">
                  Mobilisis d.o.o.
                </Typography>
                <Text>I was working with bla bla bla bla bla bal bla bla</Text>
              </TimelineContent>
            </TimelineItem>

            <TimelineItem>
              <TimelineOppositeContent
                sx={{ m: "auto 0" }}
                variant="body2"
                color="text.secondary"
              >
                16.08.2022. - 16.09.2022.
              </TimelineOppositeContent>
              <TimelineSeparator>
                <TimelineConnector sx={{ bgcolor: "secondary.main" }} />
                <TimelineDot color="secondary" variant="outlined">
                  <WorkHistory />
                </TimelineDot>
                <TimelineConnector sx={{ bgcolor: "secondary.main" }} />
              </TimelineSeparator>
              <TimelineContent sx={{ py: "12px", px: 2 }}>
                <Typography variant="h6" component="span">
                  Mobilisis d.o.o.
                </Typography>
                <Text>I was working with bla bla bla bla bla bal bla bla</Text>
              </TimelineContent>
            </TimelineItem>
          </Timeline>
        </ExperienceWrapper>
      </TimelineWrapper>
    </Section>
  );
};

export default ExperienceTimeline;
