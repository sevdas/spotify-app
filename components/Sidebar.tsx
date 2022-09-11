import NextImage from "next/image";
import {
  List,
  ListItem,
  ListIcon,
  Divider,
  Center,
  LinkBox,
  LinkOverlay,
  OrderedList,
  UnorderedList,
  Box,
} from "@chakra-ui/react";
import {
  MdHome,
  MdSearh,
  MdLibraryMusic,
  MdPlaylistAdd,
  MdFavorite,
} from "react-icons/md";

export const Sidebar = () => {
  return (
    <Box
      sx={{
        width: "100px",
        height: "calc(100vh - 100px)",
        bg: "black",
        paddingX: "5px",
        color: "gray",
      }}
    >
      <Box sx={{ paddingY: "20px" }}>
        <Box sx={{ marginBottom: "20px", paddingY: "20px" }}>
          <NextImage
            src="/sanfranciscomunicipalrailway.svg"
            alt="Music player"
            height={60}
            width={120}
          />
        </Box>
      </Box>
    </Box>
  );
};
