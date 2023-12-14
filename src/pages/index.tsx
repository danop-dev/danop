import React from "react";
import { NextPage } from "next";
import { Center } from "@chakra-ui/react";
import Layout from "@/layout";
import { useCycleColors } from "@/utils/hooks/useCycleColors";

import { Placeholder, DargArea } from "@/components";

const Index: NextPage = () => {
  const { color: systemColor, gradient: systemGradient } = useCycleColors();

  return (
    <>
      <Layout>
        <Center
          width={"100%"}
          height={"100%"}
          bgGradient={systemGradient}
          bgClip="text"
          fontSize="5xl"
          fontWeight="extrabold"
          display={"flex"}
          flexDirection={"column"}
        >
          <DargArea>
            <Placeholder
              color={systemColor}
              transition="all .3s linear"
              minH={"200px"}
              minW={"200px"}
            >
              Welcome to ...
            </Placeholder>
          </DargArea>
        </Center>
      </Layout>
    </>
  );
};

export default Index;
