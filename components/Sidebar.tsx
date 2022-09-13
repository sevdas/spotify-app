import NextImage from "next/image";
import NextLink from "next/link";

import {
  List,
  ListItem,
  ListIcon,
  Divider,
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
  MdPlaylistAdd,
  MdFavorite,
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

const musicMenu = [
  {
    name: "Create Playlist",
    icon: MdPlaylistAdd,
    route: "/",
  },
  {
    name: "Liked Songs",
    icon: MdFavorite,
    route: "/",
  },
];

const playLists = new Array(30).fill(1).map((_, i) => `Playlist ${i + 1}`);

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
      <Box sx={{ paddingY: "20px", height: "100%" }}>
        <Box sx={{ width: "120px", marginBottom: "20px", paddingY: "20px" }}>
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
        <Box>
          <List spacing={2}>
            {musicMenu?.map((song) => (
              <ListItem
                sx={{ paddingX: "20px", fontSize: "16px" }}
                key={song?.name}
              >
                <LinkBox>
                  <NextLink href={song.route} passHref>
                    <LinkOverlay>
                      <ListIcon
                        as={song.icon}
                        sx={{ color: "white", marginRight: "20px" }}
                      />
                      {song.name}
                    </LinkOverlay>
                  </NextLink>
                </LinkBox>
              </ListItem>
            ))}
          </List>
        </Box>
        <Divider sx={{ paddingY: "10px" }} color="gray.800" />
        <Box sx={{ height: "55%", overflowY: "auto", padding: "20px" }}>
          <List spacing={2}>
            {playLists.map((playlist) => (
              <ListItem sx={{ paddingX: "20px" }} key={playlist}>
                <LinkBox>
                  <NextLink href="/">
                    <LinkOverlay>{playlist}</LinkOverlay>
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
