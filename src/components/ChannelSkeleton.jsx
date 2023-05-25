import { Box, Skeleton, Stack } from "@mui/material";
import React from "react";

const ChannelSkeleton = () => {
  return (
    <Box>
      <Skeleton animation="wave" width={"100%"} height={"300px"} />

      <Stack
        direction={{ xs: "column", sm: "row" }}
        spacing={2}
        p={4}
        justifyContent={"space-between"}
      >
        <Stack direction={"row"} spacing={2}>
          <Skeleton
            variant="circular"
            animation="wave"
            width={100}
            height={100}
          />
          <Stack>
            <Skeleton animation="wave" width={200} height={50} />
            <Skeleton animation="wave" width={200} height={50} />
          </Stack>
        </Stack>
        <Stack>
          <Skeleton animation="wave" width={200} height={50} />
        </Stack>
      </Stack>
      <Stack spacing={2} direction={"row"} px={4}>
        <Skeleton animation="wave" width={"50%"} height={50} />
        <Skeleton animation="wave" width={"50%"} height={50} />
      </Stack>
    </Box>
  );
};

export default ChannelSkeleton;
