import React from "react";
import { NotFoundWrapper, Image, ImageWrapper, Content } from "./NotFoundStyle";
import Section from "../../components/Section/Section";
import { Subtitle, Text, Title } from "../../utils/generalStyles";
import UFO from "../../assets/images/ufo.png";
import { useTranslation } from "react-i18next";

const NotFound = () => {
  const { t } = useTranslation();

  return (
    <Section>
      <NotFoundWrapper>
        <Content>
          <Title>{t("NotFoundTitle")}</Title>
          <Subtitle>{t("NotFoundSubtitle")}</Subtitle>
          <Text>{t("NotFoundText")}</Text>
        </Content>
        <ImageWrapper>
          <Image src={UFO} alt="Design illustration - UFO" />
        </ImageWrapper>
      </NotFoundWrapper>
    </Section>
  );
};

export default NotFound;
