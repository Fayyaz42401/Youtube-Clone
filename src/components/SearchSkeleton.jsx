import { Skeleton, Stack } from "@mui/material";
import React from "react";

const SearchSkeleton = () => {
  return (
    <Stack
      mt={"15px"}
      mx={1}
      width={{ xs: "100%", md: "50%" }}
      height={"200px"}
      direction={{ xs: "column", sm: "row", md: "row" }}
      spacing={1}
    >
      <Stack width={{ xs: "100%", sm: "50%", md: "50%" }} height={"100%"}>
        <Skeleton
          animation="wave"
          variant="rounded"
          width={"100%"}
          height={"100%"}
        />
      </Stack>
      <Stack
        width={{ xs: "100%", sm: "50%", md: "50%" }}
        height={"100%"}
        justifyContent={""}
        spacing={1}
      >
        <Skeleton
          animation="wave"
          variant="rounded"
          width={"100%"}
          height={"20%"}
        />
        <Skeleton
          animation="wave"
          variant="rounded"
          width={"75%"}
          height={"20%"}
        />
        <Skeleton
          animation="wave"
          variant="rounded"
          width={"50%"}
          height={"20%"}
        />
        <Skeleton
          animation="wave"
          variant="rounded"
          width={"25%"}
          height={"20%"}
        />
      </Stack>
    </Stack>
  );
};

export default SearchSkeleton;
