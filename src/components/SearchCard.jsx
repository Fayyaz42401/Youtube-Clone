import {
  Avatar,
  Box,
  Card,
  CardContent,
  CardMedia,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { Link } from "react-router-dom";
import { abbreviateNumber } from "js-abbreviation-number";

const SearchCard = ({ video }) => {
  return (
    <Link to={`/video/${video?.videoId}`} className="Link">
      <Card
        sx={{
          display: "flex",
          width: "100%",
          //   height: "200px",
          padding: "5px",
          margin: "10px 0",
        }}
      >
        <Stack
          width={"100%"}
          direction={{ xs: "column", sm: "row", md: "row" }}
        >
          <CardMedia
            component="img"
            sx={{
              width: { xs: "100%", sm: "400px", md: "400px" },
              borderRadius: "4px",
            }}
            image={video?.thumbnails?.[video?.thumbnails?.length - 1]?.url}
          />
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <CardContent sx={{ flex: "1 0 auto", padding: "2px 10px" }}>
              <Typography className="title" variant={"h6"}>
                {video?.title}
              </Typography>
              <Stack
                spacing={1}
                flexWrap={"wrap"}
                width={"100%"}
                direction={{ xs: "row-reverse", sm: "column", md: "column" }}
                justifyContent={"start"}
                sx={{ float: { xs: "right", sm: "none", md: "none" } }}
              >
                <Typography
                  variant="subtitle2"
                  color="text.secondary"
                  component="div"
                  className="wrap"
                >
                  {abbreviateNumber(
                    video?.stats.views ? video?.stats.views : "100"
                  )}
                  views . {video?.publishedTimeText}
                </Typography>
                <Stack direction={"row"} spacing={1} alignItems={"center"}>
                  <Link
                    style={{
                      display: "flex",
                    }}
                    to={`/channel/${video?.author?.channelId}`}
                    className="Link"
                  >
                    <Avatar
                      sx={{ width: 25, height: 25 }}
                      src={
                        video?.author?.avatar?.[
                          video?.author?.avatar?.length - 1
                        ]?.url
                      }
                    >
                      {video?.author?.title}
                    </Avatar>
                    <Typography
                      sx={{ marginLeft: "12px" }}
                      variant="subtitle2"
                      component="div"
                    >
                      {`${video?.author?.title?.slice(0, 25)}`}
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
                </Stack>
                <Typography
                  className="title"
                  variant={"caption"}
                  display={{ xs: "none", sm: "-webkit-box", md: "-webkit-box" }}
                >
                  {video?.descriptionSnippet}
                </Typography>
              </Stack>
            </CardContent>
          </Box>
        </Stack>
      </Card>
    </Link>
  );
};

export default SearchCard;
