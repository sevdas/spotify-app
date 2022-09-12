import NextImage from "next/image";
import NextLink from "next/link";

import {
  List,
  ListItem,
  ListIcon,
//   Divider,
//   Center,
  LinkBox,
  LinkOverlay,
//   OrderedList,
//   UnorderedList,
  Box,
} from "@chakra-ui/react";
import {
  MdHome,
  MdSearch,
  MdLibraryMusic,
//   MdPlaylistAdd,
//   MdFavorite,
} from "react-icons/md";

const navMenu = [
  {
    name: "Home",
    icon: MdHome,
    route: "/",
  },
  {
    name: "Search",
    icon: MdSearch,
    route: "/search",
  },
  {
    name: "Your Library",
    icon: MdLibraryMusic,
    route: "/library",
  },
];

export const Sidebar = () => {
  return (
    <Box
      sx={{
        width: "200px",
        height: "calc(100vh - 100px)",
        bg: "black",
        paddingX: "5px",
        color: "gray",
      }}
    >
      <Box sx={{ paddingY: "20px" }}>
        <Box sx={{ marginBottom: "20px", paddingY: "20px" }}>
          {/* <Box>Trax</Box> */}
          <NextImage
            src="/sanfranciscomunicipalrailway.svg"
            alt="Music player"
            height={60}
            width={120}
          />
        </Box>
        <Box sx={{ marginBottom: "20px" }}>
          <List spacing={2}>
            {navMenu?.map((menu) => (
              <ListItem
                sx={{ paddingX: "20px", fontSize: "16px" }}
                key={menu.name}
              >
                <LinkBox>
                  <NextLink href={menu.route} passHref>
                    <LinkOverlay>
                      <ListIcon
                        as={menu.icon}
                        sx={{ color: "white", marginRight: "20px" }}
                      />
                      {menu.name}
                    </LinkOverlay>
                  </NextLink>
                </LinkBox>
              </ListItem>
            ))}
          </List>
        </Box>
      </Box>
    </Box>
  );
};
