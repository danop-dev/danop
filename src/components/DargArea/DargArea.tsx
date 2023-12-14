"use client";
import React, { useRef, ReactNode } from "react";
import { SystemStyleObject, chakra } from "@chakra-ui/react";
import { motion } from "framer-motion";

type SxStyle = SystemStyleObject & {
  children?: SystemStyleObject;
};

type DargAreaProps = {
  children: ReactNode;
  sx?: SxStyle;
};

const MotionBox = chakra(motion.div);

const DargArea = (props: DargAreaProps) => {
  const { sx, children } = props;
  const constraintsRef = useRef<HTMLDivElement>(null);

  return (
    <MotionBox
      ref={constraintsRef}
      display="flex"
      alignItems="center"
      justifyContent="center"
      flexWrap="wrap"
      overflow="visible"
      w="100%"
      h="100%"
      sx={sx}
    >
      {React.Children.map(children, (child) => (
        <DragAreaChildren {...props} constraintsRef={constraintsRef}>
          {child}
        </DragAreaChildren>
      ))}
    </MotionBox>
  );
};

export default DargArea;

type DragAreaChildrenProps = DargAreaProps & {
  constraintsRef: React.RefObject<HTMLDivElement>;
};

const DragAreaChildren = (props: DragAreaChildrenProps) => {
  const { children, sx, constraintsRef } = props;
  return (
    <MotionBox
      drag
      dragConstraints={constraintsRef}
      dragElastic={0.1}
      dragMomentum={false}
      cursor="move"
      sx={sx?.children}
    >
      {children}
    </MotionBox>
  );
};
