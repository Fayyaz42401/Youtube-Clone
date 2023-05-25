import React, { useEffect } from "react";
import { Stack } from "@mui/material";
import Categories from "../components/Categories";
import { useDispatch, useSelector } from "react-redux";
import VideoBox from "../components/VideoBox";
import { fetchCategoryVideo } from "../redux/Slices/apiSlice";
import VideoCard from "../components/VideoCard";
import CardSkeleton from "../components/CardSkeleton";
const CategoryPage = () => {
  const { sidebar } = useSelector((state) => state.sidebar);
  const { categoryName, categoryVideos, isLoading } = useSelector(
    (state) => state.api
  );
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCategoryVideo(`/search/?q=${categoryName}`));
  }, [categoryName]);

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
      <Stack
        direction={"row"}
        p={2}
        justifyContent={{ xs: "center", md: "start" }}
        display={"flex"}
        flexWrap={"wrap"}
        width={"100%"}
        marginTop={12}
      >
        {isLoading ? (
          <>
            <CardSkeleton /> <CardSkeleton /> <CardSkeleton /> <CardSkeleton />
            <CardSkeleton /> <CardSkeleton /> <CardSkeleton /> <CardSkeleton />
            <CardSkeleton /> <CardSkeleton /> <CardSkeleton /> <CardSkeleton />
            <CardSkeleton /> <CardSkeleton /> <CardSkeleton />
          </>
        ) : (
          categoryVideos?.map((item) => (
            <VideoCard video={item?.video} key={item?.video?.videoId} />
          ))
        )}
      </Stack>
    </Stack>
  );
};

export default CategoryPage;
