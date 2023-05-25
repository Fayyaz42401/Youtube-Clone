import { Box, Stack } from "@mui/material";
import React from "react";
import VideoCard from "./VideoCard";
import CardSkeleton from "./CardSkeleton";

const VideoBox = ({ isLoading, videos }) => {
  return (
    <Stack
      direction={"row"}
      p={2}
      justifyContent={{ xs: "center", md: "start", xl: "space-around" }}
      display={"flex"}
      flexWrap={"wrap"}
      width={"100%"}
      marginTop={13}
    >
      {isLoading ? (
        <>
          <CardSkeleton />
          <CardSkeleton />
          <CardSkeleton />
          <CardSkeleton />
          <CardSkeleton />
          <CardSkeleton />
          <CardSkeleton />
          <CardSkeleton />
          <CardSkeleton />
          <CardSkeleton />
          <CardSkeleton />
          <CardSkeleton />
          <CardSkeleton />
          <CardSkeleton />
          <CardSkeleton />
        </>
      ) : (
        videos?.map((item) => (
          <VideoCard
            key={item?.video?.videoId}
            video={item?.video}
            isLoading={isLoading}
          />
        ))
      )}
    </Stack>
  );
};

export default VideoBox;
