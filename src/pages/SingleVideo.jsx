import Stack from "@mui/material/Stack";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchRelatedVideo, fetchVideoDetail } from "../redux/Slices/apiSlice";
import { Link, useParams } from "react-router-dom";
import ReactPlayer from "react-player/youtube";
import { Avatar, Box, Typography } from "@material-ui/core";
import RealatedVideoCard from "../components/RealatedVideoCard";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import RelatedSkeleton from "../components/RelatedSkeleton";
import { abbreviateNumber } from "js-abbreviation-number";
import { Button, IconButton } from "@mui/material";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ThumbDownIcon from "@mui/icons-material/ThumbDown";
import PlayerSkeleton, { TitleSkeleton } from "../components/PlayerSkeleton";

const SingleVideo = () => {
  const [show, setShow] = useState(false);
  const [sub, setSub] = useState(true);
  const dispatch = useDispatch();
  const { videoDetail, relatedVideo, isLoading } = useSelector(
    (state) => state.api
  );
  const { id } = useParams();
  useEffect(() => {
    dispatch(fetchVideoDetail(`/video/details/?id=${id}`));
    dispatch(fetchRelatedVideo(`/video/related-contents/?id=${id}`));
  }, [id]);

  const numberOfComponents = 30;

  const components = Array.from({ length: numberOfComponents }, (_, index) => (
    <RelatedSkeleton key={index} />
  ));

  return (
    <Stack
      width={"100%"}
      minHeight={"100vh"}
      bgcolor={"#222"}
      color={"#fff"}
      mt={9}
      direction={{ xs: "column", md: "row" }}
    >
      <Stack
        width={{ xs: "100%", md: "-webkit-calc(100% - 350px)" }}
        padding={2}
      >
        <Stack
          width={"100%"}
          height={{ sm: "300px", xs: "200px", md: "500px" }}
        >
          {isLoading ? (
            <PlayerSkeleton />
          ) : (
            <ReactPlayer
              url={`https://www.youtube.com/watch?v=${videoDetail?.videoId}`}
              playing
              controls
              width="100%"
              volume={1}
              config={{ youtube: { playerVars: { disablekb: 1 } } }}
              height={"100%"}
            />
          )}
        </Stack>
        <Typography variant="body1" style={{ margin: "10px 0 10px 5px" }}>
          {videoDetail?.title}
        </Typography>

        {isLoading ? (
          <TitleSkeleton />
        ) : (
          <Stack
            direction={{ xs: "column", sm: "row", md: "row" }}
            spacing={2}
            alignItems={{ xs: "start", sm: "center", md: "center" }}
            justifyContent={"space-between"}
          >
            <Stack direction={"row"} spacing={1} alignItems={"center"}>
              <Link
                to={`/channel/${videoDetail?.author?.channelId}`}
                className="Link"
              >
                <Avatar
                  style={{ width: 50, height: 50 }}
                  src={
                    videoDetail?.author?.avatar?.[
                      videoDetail?.author?.avatar?.length - 1
                    ]?.url
                  }
                >
                  {videoDetail?.author?.title}
                </Avatar>
              </Link>
              <Stack spacing={"2px"}>
                <Link
                  to={`/channel/${videoDetail?.author?.channelId}`}
                  className="Link"
                  style={{ color: "#fff" }}
                >
                  <Typography variant="subtitle2">
                    {videoDetail?.author?.title}
                  </Typography>
                </Link>
                <Typography
                  variant="subtitle2"
                  style={{
                    color: "#999",
                    alignItems: "center",
                    display: "flex",
                  }}
                >
                  {videoDetail?.author?.stats?.subscribersText}
                  {videoDetail?.author?.badges?.[0] ? (
                    <CheckCircleIcon
                      fontSize="2px"
                      sx={{ marginLeft: "5px" }}
                    />
                  ) : (
                    ""
                  )}
                </Typography>
              </Stack>
            </Stack>

            <Stack direction={"row"} spacing={2}>
              <Button
                variant="contained"
                color={sub ? "error" : "inherit"}
                sx={{ borderRadius: "50px" }}
                onClick={() => setSub(!sub)}
              >
                {sub ? "Subscribe" : " Subscribed"}
              </Button>

              <Button
                size="small"
                variant="contained"
                sx={{ borderRadius: "50px" }}
                color="inherit"
              >
                <IconButton color="inherit" size="small">
                  <ThumbUpIcon />
                  <span style={{ marginLeft: "2px" }}>
                    {abbreviateNumber(videoDetail?.stats?.likes)}
                  </span>
                </IconButton>
                |
                <IconButton size="small">
                  <ThumbDownIcon />
                </IconButton>
              </Button>
            </Stack>
          </Stack>
        )}

        {isLoading ? (
          <PlayerSkeleton />
        ) : (
          <Stack
            bgcolor={"#555"}
            borderRadius={"5px"}
            spacing={1}
            mt={2}
            px={4}
            py={2}
          >
            <Typography variant="body2" color="text.secondary">
              {abbreviateNumber(
                videoDetail?.stats?.views ? videoDetail?.stats?.views : "100"
              )}
              views . {videoDetail?.publishedDate}
            </Typography>
            <Typography className={!show ? "desc" : ""}>
              {videoDetail?.description}
            </Typography>
            <Button
              onClick={() => setShow(!show)}
              variant="text"
              color="inherit"
            >
              show {!show ? "more" : "less"}
            </Button>
          </Stack>
        )}
      </Stack>

      <Stack mt="15px">
        {isLoading ? (
          <>{components}</>
        ) : (
          relatedVideo?.contents?.map((item) => {
            return (
              <RealatedVideoCard
                key={item?.video?.videoId}
                video={item?.video}
              />
            );
          })
        )}
      </Stack>
    </Stack>
  );
};

export default SingleVideo;
