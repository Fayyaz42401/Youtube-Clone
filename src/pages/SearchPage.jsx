import { Stack } from "@mui/material";
import React, { useState } from "react";
import SearchCard from "../components/SearchCard";
import { useDispatch, useSelector } from "react-redux";
import ChannelCard from "../components/ChannelCard";
import SearchSkeleton from "../components/SearchSkeleton";

const SearchPage = () => {
  const dispatach = useDispatch();
  const { searchVideo, isLoading } = useSelector((state) => state.api);

  const numberOfComponents = 30;

  const components = Array.from({ length: numberOfComponents }, (_, index) => (
    <SearchSkeleton key={index} />
  ));

  return (
    <Stack
      color={"#fff"}
      minHeight={"100vh"}
      bgcolor={"#222"}
      mt={9}
      py={{ xs: 1, md: 2 }}
      px={{ xs: 2, md: 4 }}
    >
      {isLoading ? (
        <>{components}</>
      ) : (
        searchVideo?.contents?.map((item) => {
          if (item.type === "video") {
            return (
              <SearchCard video={item?.video} key={item?.video?.videoId} />
            );
          } else if (item.type === "channel") {
            return (
              <ChannelCard
                data={item?.channel}
                key={item?.channel?.channelId}
              />
            );
          }
        })
      )}
    </Stack>
  );
};

export default SearchPage;
