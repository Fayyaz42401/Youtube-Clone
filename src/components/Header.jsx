import {
  Avatar,
  Box,
  IconButton,
  Input,
  InputAdornment,
  Stack,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import { Search } from "@mui/icons-material";
import logo from "../assets/logo.png";
import { Link, Navigate, useNavigate } from "react-router-dom";
import NotificationsIcon from "@mui/icons-material/Notifications";
import MicIcon from "@mui/icons-material/Mic";
import Sidebar from "./Sidebar";
import { useDispatch, useSelector } from "react-redux";
import { sidebarHandler } from "../redux/Slices/sidebarSlice";
import { fetchSearchVideo, queryHandler } from "../redux/Slices/apiSlice";

const Header = () => {
  const dispatch = useDispatch();
  const [input, setInput] = useState("");
  const { sidebar } = useSelector((state) => state.sidebar);
  const { query } = useSelector((state) => state.api);
  const navigate = useNavigate();

  const searchHandler = () => {
    dispatch(queryHandler(input));
    dispatch(fetchSearchVideo(`/search/?q=${input}`));
    navigate(`/search/${input}`);
  };
  const keyUpHandler = (e) => {
    if (e.key === "Enter" || e.which === 13) {
      dispatch(queryHandler(input));
      dispatch(fetchSearchVideo(`/search/?q=${input}`));

      navigate(`/search/${input}`);
    }
  };

  const menuHandler = () => {
    dispatch(sidebarHandler());
  };
  return (
    <Stack
      direction={"row"}
      bgcolor={"#000"}
      py={2}
      px={2}
      justifyContent={"space-between"}
      position={"fixed"}
      width={"100%"}
      top={0}
      zIndex={1}
      color={"#fff"}
    >
      <Sidebar />
      <Stack
        direction={"row"}
        spacing={2}
        sx={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <IconButton onClick={menuHandler}>
          <MenuIcon />
        </IconButton>
        <Link to={"/"} className="link">
          <img
            src={logo}
            alt=""
            height={40}
            width={40}
            style={{ objectFit: "cover" }}
          />
          <Box
            variant="h6"
            display={{ xs: "none", md: "block" }}
            style={{
              color: "#fff",
              paddingLeft: "5px",
            }}
          >
            YouTube
          </Box>
        </Link>
      </Stack>
      <Input
        disableUnderline
        onKeyUp={keyUpHandler}
        value={input}
        onChange={(e) => setInput(e.target.value)}
        sx={{
          border: "2px solid #333",
          borderRadius: "50px",
          width: "50%",
          padding: "0 10px 0 20px",
        }}
        placeholder="Search...."
        type="text"
        endAdornment={
          <InputAdornment position="end">
            <IconButton onClick={searchHandler}>
              <Search />
            </IconButton>
          </InputAdornment>
        }
      />
      <Stack direction={"row"} spacing={{ xs: 1, md: 2 }}>
        <IconButton sx={{ display: { xs: "none", md: "block" } }}>
          <NotificationsIcon />
        </IconButton>
        <IconButton sx={{ display: { xs: "none", md: "block" } }}>
          <MicIcon />
        </IconButton>
        <Avatar src="" sx={{ color: "#fff", background: "#333" }}>
          F
        </Avatar>
      </Stack>
    </Stack>
  );
};

export default Header;
