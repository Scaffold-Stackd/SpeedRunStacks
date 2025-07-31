/* eslint react/jsx-props-no-spreading: off */
// ☝️ we want this component to be usable with chakra props
import React from "react";
import { chakra, useColorModeValue } from "@chakra-ui/react";

const PixelArt = props => {
  const primaryColor = useColorModeValue("#000000", "#FFFFFF"); // Or any other color for dark mode
  const secondaryColor = useColorModeValue("#FFFFFF", "#FFFFFF"); // Or any other color for dark mode

  return (
    <chakra.svg
      {...props}
      width="256px"
      viewBox="0 0 256 256"
      xmlns="http://www.w3.org/2000/svg"
      sx={{
        path: {
          fill: primaryColor,
        },
      }}
    >
      <rect width="256" height="256" fill={secondaryColor} />
      <path
        d="M128 16c-61.9 0-112 50.1-112 112s50.1 112 112 112 112-50.1 112-112-50.1-112-112-112z"
        fill={primaryColor}
      />
      <path d="M112 112h32v8h-32z" fill={secondaryColor} />
      <path d="M112 136h32v8h-32z" fill={secondaryColor} />
      <path d="M112 112h-8c-2.2 0-4-1.8-4-4s1.8-4 4-4h8c2.2 0 4 1.8 4 4s-1.8 4-4 4z" fill={secondaryColor} />
      <path d="M112 144h-8c-2.2 0-4-1.8-4-4s1.8-4 4-4h8c2.2 0 4 1.8 4 4s-1.8 4-4 4z" fill={secondaryColor} />
      <path d="M144 112h8c2.2 0 4-1.8 4-4s-1.8-4-4-4h-8c-2.2 0-4 1.8-4 4s1.8 4 4 4z" fill={secondaryColor} />
      <path d="M144 144h8c2.2 0 4-1.8 4-4s-1.8-4-4-4h-8c-2.2 0-4 1.8-4 4s1.8 4 4 4z" fill={secondaryColor} />
    </chakra.svg>
  );
};

export default PixelArt;
