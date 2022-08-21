import { Box } from "@chakra-ui/react";
import React from "react";

export interface PlayerLayoutProps {
  children: React.ReactNode;
}

export const PlayerLayout = ({ children }: PlayerLayoutProps) => {
  return <Box>Layout {children}</Box>;
};
