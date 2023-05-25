import { Skeleton, Stack } from "@mui/material";
import React from "react";

const PlayerSkeleton = () => {
  return (
    <Stack width={"100%"} height={{ sm: "300px", xs: "200px", md: "500px" }}>
      <Skeleton
        variant="rounded"
        animation="wave"
        width={"100%"}
        height={"100%"}
        sx={{ marginTop: "10px" }}
      />
    </Stack>
  );
};

export default PlayerSkeleton;

export const TitleSkeleton = () => {
  return (
    <Stack
      direction={{ xs: "column", sm: "row", md: "row" }}
      spacing={2}
      alignItems={{ xs: "start", sm: "center", md: "center" }}
      justifyContent={"space-between"}
    >
      <Stack direction={"row"} alignItems={"center"} spacing={1}>
        <Skeleton animation="wave" variant="circular" width={50} height={50} />
        <Stack spacing={1}>
          <Skeleton
            animation="wave"
            variant="rectangular"
            width={150}
            height={15}
          />
          <Skeleton
            animation="wave"
            variant="rectangular"
            width={150}
            height={15}
          />
        </Stack>
      </Stack>
      <Stack direction={"row"} spacing={2}>
        <Skeleton animation="wave" variant="rounded" width={150} height={35} />
        <Skeleton animation="wave" variant="rounded" width={150} height={35} />
      </Stack>
    </Stack>
  );
};
