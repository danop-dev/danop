import React from "react";
import { Flex } from "@chakra-ui/react";

import {
  HeaderApp as Header,
  ContainerApp as Main,
  FooterApp as Footer,
} from "@/layout/components";

type LayoutProps = {
  children: React.ReactNode;
};

const Layout: React.FC<LayoutProps> = (props) => {
  const { children } = props;
  return (
    <Flex
      direction="column"
      flex="1"
      w="100vw"
      h="100vh"
      overflow="hidden"
      wrap="wrap"
    >
      <Header />
      <Main>{children}</Main>
      <Footer />
    </Flex>
  );
};

export default Layout;
