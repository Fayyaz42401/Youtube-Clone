import {
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

const ChannelCard = ({ data }) => {
  return (
    <Link to={`/channel/${data?.channelId}`} className="Link">
      <Card
        sx={{
          display: "flex",
          width: "100%",
          height: "200px",
          padding: "5px",
          margin: " 10px 0",
        }}
      >
        <Box
          width={"200px"}
          justifyContent={"center"}
          display="flex"
          alignItems={"center"}
        >
          <CardMedia
            component="img"
            sx={{
              objectFit: "contain",
              width: "100px",
              borderRadius: "50%",
              height: "100px",
            }}
            image={data?.avatar[0]?.url}
          />
        </Box>
        <Box sx={{ display: "flex" }}>
          <Stack
            spacing={1}
            sx={{
              padding: "2px 10px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              paddingLeft: "15px",
            }}
          >
            <Typography className="title" variant="body1">
              {data?.title}
            </Typography>
            <Stack>
              <Typography
                variant="subtitle2"
                color="text.secondary"
                component="div"
              >
                {`${data?.username}`}
                {data?.badges?.[0] ? (
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
                {data?.stats?.subscribersText}
              </Typography>
              <Typography
                variant="subtitle2"
                color="text.secondary"
                component="div"
                className="title"
              >
                {data?.descriptionSnippet}
              </Typography>
            </Stack>
          </Stack>
        </Box>
      </Card>
    </Link>
  );
};

export default ChannelCard;
