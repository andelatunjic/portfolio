import React from "react";
import { NotFoundWrapper, Image, ImageWrapper, Content } from "./NotFoundStyle";
import Section from "../../components/Section/Section";
import { Subtitle, Text, Title } from "../../utils/generalStyles";
import UFO from "../../assets/images/UFO.png";

const NotFound = () => {
  return (
    <Section>
      <NotFoundWrapper>
        <Content>
          <Title>404 Not Found</Title>
          <Subtitle>This page is deleted or it never existed.</Subtitle>
          <Text>
            We couldn't find what you're looking for. This page might have
            moved, no longer exists, or is only visible to a selected audience.
          </Text>
        </Content>
        <ImageWrapper>
          <Image src={UFO} alt="Design illustration - UFO" />
        </ImageWrapper>
      </NotFoundWrapper>
    </Section>
  );
};

export default NotFound;
