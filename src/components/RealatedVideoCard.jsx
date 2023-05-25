import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { Link } from "react-router-dom";
import { abbreviateNumber } from "js-abbreviation-number";

const RealatedVideoCard = ({ video }) => {
  return (
    <Link to={`/video/${video?.videoId}`} className="Link">
      <Card
        sx={{
          display: "flex",
          width: { xs: "100%", md: "450px" },
          height: "120px",
          padding: "5px",
        }}
      >
        <CardMedia
          component="img"
          sx={{ width: "200px", borderRadius: "4px" }}
          image={video?.thumbnails[0]?.url}
        />
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <CardContent sx={{ flex: "1 0 auto", padding: "2px 10px" }}>
            <Typography className="title" variant="subtitle2">
              {video?.title}
            </Typography>
            <Stack>
              <Typography
                variant="subtitle2"
                color="text.secondary"
                component="div"
              >
                {`${video?.author?.title?.slice(0, 25)}`}
                {video?.author?.badges?.[0] ? (
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
                {abbreviateNumber(
                  video?.stats.views ? video?.stats.views : "100"
                )}
                views . {video?.publishedTimeText}
              </Typography>
            </Stack>
          </CardContent>
        </Box>
      </Card>
    </Link>
  );
};
export default RealatedVideoCard;
