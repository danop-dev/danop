import React from "react";
import { Box, HStack } from "@chakra-ui/react";

import { FaLinkedin, FaGithub } from "react-icons/fa";
import { AppBox, Button } from "@/components";

const AppFooter: React.FC = () => {
  return (
    <Box as="footer">
      <AppBox>
        <SocialMediaList />
        <HStack spacing={1}>
          <Button.Background fontSize="xs">Privacy Policy</Button.Background>
          <Button.Background fontSize="xs">
            2023 © All rights reserved
          </Button.Background>
          <Button.ThemeToggle />
        </HStack>
      </AppBox>
    </Box>
  );
};

export default AppFooter;

const socialMediaItems = [
  {
    name: "Linkedin",
    icon: FaLinkedin,
    url: "#",
  },
  {
    name: "Github",
    icon: FaGithub,
    url: "#",
  },
];

const SocialMediaList: React.FC = () => {
  return (
    <HStack spacing={1}>
      {socialMediaItems.map((socialMedia) => (
        <Button.Icon
          target="_blank"
          key={socialMedia.name}
          icon={<socialMedia.icon />}
        />
      ))}
    </HStack>
  );
};
