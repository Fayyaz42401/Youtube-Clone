import { Home } from "@mui/icons-material";
import { Button, Divider, Stack } from "@mui/material";
import React, { useState } from "react";
import SubscriptionsIcon from "@mui/icons-material/Subscriptions";
import VideoLibraryIcon from "@mui/icons-material/VideoLibrary";
import ThumbUpAltIcon from "@mui/icons-material/ThumbUpAlt";
import WhatshotIcon from "@mui/icons-material/Whatshot";
import { useSelector } from "react-redux";

const arr = [
  { title: "Home", icon: <Home /> },
  { title: "Trending", icon: <WhatshotIcon /> },
  { title: "Subscription", icon: <SubscriptionsIcon /> },
  { title: "Library", icon: <VideoLibraryIcon /> },
  { title: "Liked Videos", icon: <ThumbUpAltIcon /> },
];

const Sidebar = () => {
  const [selectItem, setSelectedItem] = useState("Home");
  const { sidebar } = useSelector((state) => state.sidebar);

  return (
    <Stack
      position={"fixed"}
      left={sidebar ? "0" : "-100%"}
      top={{ xs: 55, md: 55 }}
      height={"100%"}
      bgcolor={"#000"}
      zIndex={100}
      width={"200px"}
      color={"#fff"}
      pt={2}
      sx={{ transition: sidebar ? "0" : "0.5s" }}
    >
      {arr.map((item, index) => {
        return (
          <Stack key={index}>
            <Button
              onClick={() => setSelectedItem(item.title)}
              fullWidth
              sx={{
                display: "flex",
                padding: "15px",
                justifyContent: "start",
                paddingLeft: "20px",
                alignItems: "center",
                fontWeight: 600,
              }}
              variant="text"
              color={selectItem === item.title ? "error" : "inherit"}
              startIcon={item.icon}
            >
              {item.title}
            </Button>
            <Divider />
          </Stack>
        );
      })}
    </Stack>
  );
};

export default Sidebar;
