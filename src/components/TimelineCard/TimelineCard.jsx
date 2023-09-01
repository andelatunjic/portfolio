import React from "react";
import PropTypes from "prop-types";
import {
  CardInner,
  CardDescription,
  CardTitle,
  CardWrapper,
  CardSubtitle,
} from "./TimelineCardStyle";

const TimelineCard = ({ position, company, description }) => {
  return (
    <CardWrapper>
      <CardInner>
        <CardTitle>{position}</CardTitle>
        <CardSubtitle>{company}</CardSubtitle>
        <CardDescription>{description}</CardDescription>
      </CardInner>
    </CardWrapper>
  );
};

TimelineCard.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  description: PropTypes.string,
};

export default TimelineCard;
