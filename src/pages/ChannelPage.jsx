import { Avatar, Box, Button, Divider, Stack, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchChannelDetail,
  fetchChannelVideo,
} from "../redux/Slices/channelSlice";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { Link } from "react-router-dom";
import ChannelVideoSection from "../components/ChannelVideoSection";
import ChannelSkeleton from "../components/ChannelSkeleton";
import CardSkeleton from "../components/CardSkeleton";

const ChannelPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const [sub, setSub] = useState(true);
  const { isLoading, channelDetail, channelVideo } = useSelector(
    (state) => state.channel
  );
  useEffect(() => {
    dispatch(fetchChannelDetail(`/channel/details/?id=${id}`));
    dispatch(fetchChannelVideo(`/channel/videos/?id=${id}`));
  }, [id]);

  const numberOfComponents = 30;
  const components = Array.from({ length: numberOfComponents }, (_, index) => (
    <CardSkeleton key={index} />
  ));

  return isLoading ? (
    <>
      <ChannelSkeleton />
      <Box flexWrap={"wrap"} display={"flex"} justifyContent={"space-around"}>
        {components}
      </Box>
    </>
  ) : (
    <Stack color={"#fff"} minHeight={"100vh"} bgcolor={"#222"} mt={9}>
      <Box width={"100%"}>
        <img
          width={"100%"}
          src={
            channelDetail?.banner?.desktop?.[
              channelDetail?.banner?.desktop?.length - 1
            ]?.url
          }
          alt="Banner"
        />
      </Box>
      <Stack
        spacing={2}
        p={4}
        direction={{ xs: "column", sm: "row" }}
        alignItems={"center"}
      >
        <Avatar
          src={channelDetail?.avatar?.[channelDetail?.avatar?.length - 1]?.url}
          sx={{ width: 100, height: 100, objectFit: "cover" }}
        >
          {channelDetail?.title}
        </Avatar>

        <Stack spacing={2} px={2} alignItems={{ xs: "center", sm: "start" }}>
          <Typography className="title" variant="h5">
            {channelDetail?.title}
          </Typography>

          <Stack spacing={1} alignItems={{ xs: "center", sm: "start" }}>
            <Typography
              variant="subtitle2"
              color="text.secondary"
              component="div"
              display={"flex"}
              alignItems={"center"}
            >
              {`${channelDetail?.username}`}
              {channelDetail?.badges?.[0] ? (
                <CheckCircleIcon fontSize="2px" sx={{ marginLeft: "5px" }} />
              ) : (
                ""
              )}
            </Typography>
            <Typography
              variant="subtitle2"
              color="text.secondary"
              component="div"
            >
              {channelDetail?.stats?.subscribersText}
            </Typography>
            <Typography
              variant="subtitle2"
              color="text.secondary"
              component="div"
              className="title"
              sx={{ width: { xs: "100%", sm: "50%" }, wordBreak: "break-all" }}
            >
              {channelDetail?.description}
            </Typography>
          </Stack>
        </Stack>
        <Button
          variant="contained"
          color={sub ? "error" : "inherit"}
          sx={{
            borderRadius: "50px",
            width: { xs: "300px", sm: "600px", md: "400px" },
          }}
          onClick={() => setSub(!sub)}
        >
          {sub ? "Subscribe" : " Subscribed"}
        </Button>
      </Stack>
      <Divider />
      <ChannelVideoSection channel={channelDetail} video={channelVideo} />
    </Stack>
  );
};

export default ChannelPage;
