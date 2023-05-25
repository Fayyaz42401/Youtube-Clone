import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Avatar, Stack } from "@mui/material";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { abbreviateNumber } from "js-abbreviation-number";

const VideoCard = ({ video, channel }) => {
  const [thumbnail, setThumbnail] = useState(true);
  const { sidebar } = useSelector((state) => state.sidebar);
  return (
    <Link to={`/video/${video?.videoId}`} className="Link">
      <Card
        sx={{
          maxWidth: { xs: "300px", md: sidebar ? "320px" : "380px" },
          margin: "10px",
          cursor: "pointer",
          backgroundColor: "#222",
          height: "320px",
          objectFit: "cover",
        }}
      >
        <CardMedia
          component="img"
          height="200px"
          sx={{ width: sidebar ? "350px" : "380px" }}
          image={
            thumbnail
              ? video?.thumbnails?.[video?.thumbnails.length - 1]?.url
              : video?.movingThumbnails?.[video?.movingThumbnails.length - 1]
                  ?.url
              ? video?.movingThumbnails?.[video?.movingThumbnails.length - 1]
                  ?.url
              : video?.thumbnails?.[video?.thumbnails.length - 1]?.url
          }
          onMouseEnter={() => setThumbnail(false)}
          onMouseLeave={() => setThumbnail(true)}
        />
        <CardContent>
          <Stack direction={"row"} spacing={2}>
            <Link to={`/channel/${video?.author?.channelId}`} className="Link">
              <Avatar
                src={
                  video?.author?.avatar?.[video?.author?.avatar.length - 1]
                    ?.url || channel?.avatar?.[0]?.url
                }
              >
                {video?.author?.title}
              </Avatar>
            </Link>
            <Stack spacing={"2px"}>
              <Typography
                className="title"
                variant="subtitle2"
                color="Background"
              >
                {video?.title}
              </Typography>
              <Link className="Link">
                <Typography
                  variant="body2"
                  color="text.secondary"
                  display={"flex"}
                  alignItems={"center"}
                >
                  {channel?.title || `${video?.author?.title?.slice(0, 25)}`}
                  {video?.author?.badges?.[0] ? (
                    <CheckCircleIcon
                      fontSize="2px"
                      sx={{ marginLeft: "5px" }}
                    />
                  ) : (
                    ""
                  )}
                </Typography>
              </Link>
              <Typography variant="body2" color="text.secondary">
                {abbreviateNumber(
                  video?.stats.views ? video?.stats.views : "100"
                )}
                views . {video?.publishedTimeText}
              </Typography>
            </Stack>
          </Stack>
        </CardContent>
      </Card>
    </Link>
  );
};

export default VideoCard;
