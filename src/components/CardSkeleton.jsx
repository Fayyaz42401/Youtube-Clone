import React from "react";
import Skeleton from "@mui/material/Skeleton";
import Stack from "@mui/material/Stack";
import { Box } from "@material-ui/core";
import { useSelector } from "react-redux";

const CardSkeleton = () => {
  const { sidebar } = useSelector((state) => state.sidebar);

  return (
    <Stack
      m={"10px"}
      width={{ xs: "320px", md: sidebar ? "320px" : "380px" }}
      height={320}
    >
      <Skeleton
        variant="rectangular"
        height={200}
        animation="wave"
        sx={{
          borderRadius: "4px",
        }}
      />
      <Box>
        <Stack
          direction={"row"}
          mt={1}
          spacing={1}
          justifyContent={"space-between"}
          alignItems={"center"}
        >
          <Skeleton
            animation="wave"
            variant="circular"
            width={50}
            height={50}
          />
          <Skeleton animation="wave" width={"85%"} height={50} />
        </Stack>
        <Skeleton
          animation="wave"
          width="85%"
          sx={{ float: "right" }}
          height={20}
        />
      </Box>
    </Stack>
  );
};

export default CardSkeleton;
