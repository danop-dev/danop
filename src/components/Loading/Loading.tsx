import React from "react";
import { useCycleColors } from "@/utils/hooks/useCycleColors";
import { Box, keyframes } from "@chakra-ui/react";
import { GLOBAL_TRANSITION_DURATION } from "@/utils/constants";

// Define the keyframes using Chakra's keyframes utility
const pingWave = keyframes`
  0% { opacity: 1; transform: scale(0); }
  to { opacity: 0; transform: scale(1); }
`;

const flowCrossSpin = keyframes`
  /* ... other keyframes ... */
`;

const Cross: React.FC<{ className?: string }> = ({ className }) => {
  const { color: systemColor } = useCycleColors();

  return (
    <Box className={`loader bw ${className || ""}`} sx={{}}>
      <Box
        className="flow-cross"
        animation={`${flowCrossSpin} 2s linear infinite`}
        transition={GLOBAL_TRANSITION_DURATION}
        _after={{
          color: systemColor,
        }}
      />
    </Box>
  );
};

const Ping: React.FC<{ className?: string }> = ({ className }) => {
  const { color: systemColor } = useCycleColors();

  return (
    <Box className={`loader bw ${className || ""}`}>
      <Box
        className="ping-wave"
        animation={`${pingWave} 2s linear infinite`}
        transition={GLOBAL_TRANSITION_DURATION}
        _after={{
          backgroundColor: systemColor,
        }}
      />
    </Box>
  );
};

const Loading = {
  Cross,
  Ping,
};

export default Loading;
