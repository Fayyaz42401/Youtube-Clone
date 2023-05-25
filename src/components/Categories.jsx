import { Button } from "@material-ui/core";
import { Stack } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { fetchCategory } from "../redux/Slices/apiSlice";

const arr = [
  "All",
  "Vehicles",
  "Film",
  "Music",
  "Pets",
  "Animals",
  "Sports",
  "Movies",
  "Travel",
  "Events",
  "Gaming",
  "People",
  "Blogs",
  "Comedy",
  "Movies",
  "Classics",
  "Comedy",
  "Drama",
  "Family",
  "Foreign",
  "Horror",
  "Thriller",
  "Shorts",
  "Shows",
  "Trailers",
];

const Categories = () => {
  const [selected, setSelected] = useState("All");
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCategory(`/search/?q=${selected}`));
  }, [selected]);

  return (
    <Link to={"/category"} className="Link">
      <Stack
        direction={"row"}
        sx={{ overflowX: "scroll" }}
        spacing={2}
        className="category"
        width={"100%"}
        position={"fixed"}
        top={70}
        bgcolor={"#000"}
        padding={"10px"}
        zIndex={1}
      >
        {arr.map((i, index) => (
          <Button
            onClick={() => setSelected(i)}
            key={index}
            style={{
              wordBreak: "normal",
              width: "auto",
              padding: " 2px 20px",
              background: selected === i ? "#efefef" : "#333",
              color: selected === i ? "#333" : "#fff",
              borderRadius: "5px",
              textTransform: "capitalize",
            }}
            color="inherit"
            variant="contained"
          >
            {i}
          </Button>
        ))}
      </Stack>
    </Link>
  );
};

export default Categories;
