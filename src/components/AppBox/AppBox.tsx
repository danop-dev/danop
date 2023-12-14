import React, { forwardRef } from "react";
import { Container, ContainerProps } from "@chakra-ui/react";

const AppBox = forwardRef((props: ContainerProps, ref) => {
  return (
    <Container
      maxW={"1600"}
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      py={4}
      ref={ref}
      {...props}
    />
  );
});

export default AppBox;
