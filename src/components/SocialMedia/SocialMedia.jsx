import React from "react";
import GitHub from "../../assets/images/github.png";
import Mail from "../../assets/images/message.png";
import LinkedIn from "../../assets/images/linkedin.png";
import { SocialMediaWrapper, SocialMediaLogo } from "./SocialMediaStyle";

const SocialMedia = () => {
  return (
    <SocialMediaWrapper>
      <a target="_blank" href="https://github.com/andelatunjic">
        <SocialMediaLogo src={GitHub} />
      </a>
      <a target="_blank" href="mailto:andtunjic@gmail.com">
        <SocialMediaLogo src={Mail} />
      </a>
      <a
        target="_blank"
        href="http://linkedin.com/in/an%C4%91ela-tunji%C4%87-a72012227"
      >
        <SocialMediaLogo src={LinkedIn} />
      </a>
    </SocialMediaWrapper>
  );
};

export default SocialMedia;
