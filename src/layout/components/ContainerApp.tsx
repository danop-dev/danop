import { Flex, FlexProps, useColorModeValue } from "@chakra-ui/react";
import { AppBox } from "@/components";
import { colors } from "@/utils/theme";

const AppContainer = (props: FlexProps) => {
  const { children } = props;

  const bgColor = useColorModeValue(
    colors.light.background,
    colors.dark.background
  );
  const colorBar = useColorModeValue("gray.200", "#7A7A7A");
  const thumbColor = useColorModeValue("#757575", "#D8D8D8");
  const thumbColorHover = useColorModeValue("#4d4d4d", "white");

  const scrollBarStyles = {
    "&::-webkit-scrollbar": {
      width: "8px",
      height: "8px",
    },
    "&::-webkit-scrollbar-track": {
      border: `2px solid ${bgColor}`,
      borderRadius: "4px",
      backgroundColor: colorBar,
    },
    "&::-webkit-scrollbar-thumb": {
      backgroundColor: thumbColor,
      borderRadius: "4px",
    },
    "&::-webkit-scrollbar-thumb:hover": {
      backgroundColor: thumbColorHover,
    },
    "&::-webkit-scrollbar-button": {
      display: "none",
    },
  };

  return (
    <Flex
      as="main"
      role="main"
      direction="column"
      flex="1"
      overflowY="auto"
      sx={scrollBarStyles}
      {...props}
    >
      <AppBox flex="1" alignItems={"flex-start"} bg="bg.accent.default">
        {children}
      </AppBox>
    </Flex>
  );
};

export default AppContainer;
