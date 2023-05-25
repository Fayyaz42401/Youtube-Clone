import { Stack } from "@mui/material";
import React, { useEffect } from "react";
import Categories from "../components/Categories";
import { useDispatch, useSelector } from "react-redux";
import VideoCard from "../components/VideoCard";
import VideoBox from "../components/VideoBox";
import { fetchVideo } from "../redux/Slices/apiSlice";
const Home = () => {
  const dispatch = useDispatch();
  const { isLoading, videos } = useSelector((state) => state.api);

  useEffect(() => {
    dispatch(fetchVideo("/home/"));
  }, []);
  const { sidebar } = useSelector((state) => state.sidebar);
  return (
    <Stack
      color={"#fff"}
      minHeight={"100vh"}
      bgcolor={"#222"}
      zIndex={-1}
      width={{
        xs: "100%",
        md: sidebar ? "-webkit-calc(100% - 200px)" : "100%",
      }}
      sx={{ float: "right", transition: sidebar ? "0.3s" : "0" }}
      display={"flex"}
    >
      <Categories />

      <VideoBox videos={videos} isLoading={isLoading} />
    </Stack>
  );
};

export default Home;
