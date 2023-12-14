import React, { forwardRef, useMemo } from "react";
import {
  Button as ChakraButton,
  Box,
  ButtonProps,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
import { GiMoon, GiSun } from "react-icons/gi";

interface LinkButtonProps extends ButtonProps {
  children?: React.ReactNode;
}

type IconButtonProps = ButtonProps &
  Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, keyof ButtonProps> & {
    icon: React.ReactNode;
  };

const commonButtonStyles = (colorMode: string) => ({
  cursor: "pointer",
  color: colorMode === "light" ? "blackAlpha.900" : "whiteAlpha.900",
  _hover: {
    color: colorMode === "light" ? "blackAlpha.700" : "whiteAlpha.700",
  },
  p: 0,
  m: 0,
});

const Link: React.FC<LinkButtonProps> = forwardRef(
  ({ children, ...props }, ref) => {
    const { colorMode } = useColorMode();
    const styles = useMemo(() => commonButtonStyles(colorMode), [colorMode]);

    return (
      <ChakraButton
        as="a"
        size="sm"
        rel="noopener noreferrer"
        variant="link"
        textDecor="none"
        ref={ref as React.Ref<HTMLButtonElement>}
        {...styles}
        {...props}
      >
        {children}
      </ChakraButton>
    );
  }
);

const Icon: React.FC<IconButtonProps> = forwardRef(
  ({ icon, ...props }, ref) => {
    const { colorMode } = useColorMode();
    const styles = useMemo(
      () => ({
        ...commonButtonStyles(colorMode),
        fontSize: "lg",
        borderRadius: "50%",
        border: "1px solid",
        borderColor: colorMode === "light" ? "transparent" : "whiteAlpha.100",
        _hover: {
          ...commonButtonStyles(colorMode)._hover,
          backgroundColor:
            colorMode === "light" ? "blackAlpha.10" : "whiteAlpha.50",
          borderColor:
            colorMode === "light" ? "blackAlpha.300" : "whiteAlpha.300",
        },
      }),
      [colorMode]
    );

    return (
      <ChakraButton
        as="a"
        size="sm"
        target="_blank"
        rel="noopener noreferrer"
        variant="ghost"
        ref={ref as React.Ref<HTMLButtonElement>}
        {...styles}
        {...props}
      >
        {icon}
      </ChakraButton>
    );
  }
);

const Background: React.FC<LinkButtonProps> = forwardRef(
  ({ children, ...props }, ref) => {
    const { colorMode } = useColorMode();
    const bgColor = useColorModeValue("blackAlpha.100", "whiteAlpha.100");

    const styles = useMemo(
      () => ({
        ...commonButtonStyles(colorMode),
        px: 4,
        py: 2,
        _hover: {
          color: colorMode === "light" ? "blackAlpha.700" : "whiteAlpha.700",
          textDecoration: "none",
          bg: bgColor,
        },
      }),
      [colorMode, bgColor]
    );

    return (
      <Box
        as="a"
        rounded={"md"}
        fontSize={"sm"}
        fontWeight={"semibold"}
        href={"#"}
        ref={ref as React.Ref<HTMLButtonElement>}
        {...styles}
        {...props}
      >
        {children}
      </Box>
    );
  }
);

const ThemeToggle: React.FC = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  const onClickHandler = () => {
    document.body.style.opacity = "0";
    setTimeout(() => {
      toggleColorMode();
      document.body.style.opacity = "1";
    }, 500);
  };

  return (
    <Icon
      _hover={{
        backgroundColor: colorMode === "light" ? "black" : "white",
        color: colorMode === "light" ? "white" : "black",
      }}
      icon={colorMode === "light" ? <GiMoon /> : <GiSun />}
      onClick={onClickHandler}
    />
  );
};

const Button = {
  Link,
  Icon,
  Background,
  ThemeToggle,
};

export default Button;
