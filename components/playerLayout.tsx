import { Box } from "@chakra-ui/react";
import React from "react";
import { Sidebar } from "./Sidebar";

export interface PlayerLayoutProps {
  children: React.ReactNode;
}

export const PlayerLayout = ({ children }: PlayerLayoutProps) => {
  return (
    <Box sx={{ width: "100vw", height: "100vh" }}>
      <Box sx={{ position: "absolute", width: "250px", top: "0", left: "0" }}>
        <Sidebar />
      </Box>
      <Box sx={{ marginLeft: "250px", marginBottom: "100px" }}>{children}</Box>
      <Box sx={{ position: "absolute", left: "0", bottom: "0" }}>player</Box>
    </Box>
  );
};
