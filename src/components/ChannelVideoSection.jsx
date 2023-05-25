import { Box, Button, Divider, Stack, Typography } from "@mui/material";
import React, { useState } from "react";
import VideoCard from "./VideoCard";
import CardSkeleton from "./CardSkeleton";

const ChannelVideoSection = ({ channel, video }) => {
  const [selected, setSelected] = useState("Home");
  return (
    <Stack p={4}>
      <Stack width={"100%"} direction={"row"} spacing={2}>
        <Button
          sx={{ width: "50%" }}
          color="inherit"
          variant="contained"
          onClick={() => setSelected("Home")}
          style={{
            background: selected === "Home" ? "#fff" : "",
            color: selected === "Home" ? "#222" : "#fff",
          }}
        >
          Home
        </Button>
        <Button
          sx={{ width: "50%" }}
          color="inherit"
          variant="contained"
          onClick={() => setSelected("About")}
          style={{
            background: selected === "About" ? "#fff" : "",
            color: selected === "About" ? "#222" : "#fff",
          }}
        >
          About
        </Button>
      </Stack>
      {selected === "Home" ? (
        <ChannelHome video={video} channel={channel} />
      ) : (
        <ChannelAbout channel={channel} />
      )}
    </Stack>
  );
};

export default ChannelVideoSection;

const ChannelHome = ({ video, channel }) => {
  return (
    <Box flexWrap={"wrap"} display={"flex"} justifyContent={"space-around"}>
      {video?.map((item) => (
        <VideoCard
          channel={channel}
          video={item?.video}
          key={item?.video?.videoId}
        />
      ))}
    </Box>
  );
};

const ChannelAbout = ({ channel }) => {
  return (
    <Stack
      p={4}
      direction={{ xs: "column ", sm: "row", md: "row" }}
      spacing={2}
    >
      <Stack spacing={2} width={{ xs: "100%", sm: "60%" }}>
        <Typography variant="h5">Description</Typography>
        <Typography variant="body2">{channel?.description}</Typography>

        <Divider />
        <Typography variant="h5">Links</Typography>
        {channel?.links?.map((item, index) => (
          <Stack direction={"row"} spacing={1} key={index}>
            <img src={item?.icon} alt="" width={25} height={25} />
            <a href={item?.targetUrl} target="_blank" rel="noopener noreferrer">
              {item?.targetUrl}
            </a>
          </Stack>
        ))}
        <Divider />
        <Typography variant="h5">Location</Typography>
        <Typography variant="body2">Country : {channel?.country}</Typography>
        <Divider />
      </Stack>

      <Stack spacing={2} width={"40%"}>
        <Typography variant="h5">Stats</Typography>
        <Divider />
        <Typography variant="body2">{channel?.joinedDateText}</Typography>
        <Divider />
        <Typography variant="body2">{channel?.stats?.videosText}</Typography>
        <Divider />
        <Typography variant="body2">
          {channel?.stats?.subscribersText}
        </Typography>
        <Divider />
        <Typography variant="body2">{channel?.stats?.views} views</Typography>
        <Divider />
      </Stack>
    </Stack>
  );
};
