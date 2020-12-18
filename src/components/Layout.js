import Axios from "axios";
import React, { useEffect, useState } from "react";
import MovieCard from "./MovieCard";
import MovieModal from "./MovieModal";
import "./style.css";
import {
  InputBase,
  Paper,
  IconButton,
  Menu,
  MenuItem,
} from "@material-ui/core";

const img_url = "https://image.tmdb.org/t/p/original/";

const Layout = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState("");
  const [endlimit, setEndlimit] = useState(10);
  useEffect(() => {
    const fetchData = async () => {
      const res = await Axios.get(
        `https://api.themoviedb.org/3/trending/movie/day?api_key=${process.env.REACT_APP_TMDB}`
      );
      setMovies(res.data.results);
    };
    fetchData();
  }, []);

  useEffect(() => {
    if (search != "") {
      const fetchData = async () => {
        const res = await Axios.get(
          `https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_TMDB}&query=${search}`
        );
        setMovies(res.data.results);
      };
      fetchData();
    }
  }, [search]);

  console.log(movies);

  return (
    <div className="d-flex flex-column justify-content-center mx-2">
      <div className="bg-light search">
        <Paper
          variant="elevation"
          component="form"
          className="align-self-center py-0 d-flex align-items-center px-2 bg-light"
        >
          <IconButton
            className="p-3"
            aria-label="search"
            aria-controls="simple-menu"
            aria-haspopup="true"
            onClick={handleClick}
            style={{fontSize:"20px"}}
          >
            <span className="fa fa-sliders-h text-primary"></span>
          </IconButton>
          <Menu
            id="simple-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <MenuItem onClick={handleClose}>Profile</MenuItem>
            <MenuItem onClick={handleClose}>My account</MenuItem>
            <MenuItem onClick={handleClose}>Logout</MenuItem>
          </Menu>
          <InputBase
            placeholder="Search..."
            inputProps={{ "aria-label": "search" }}
            onChange={(e) => {
              setSearch(e.target.value);
            }}
            className="px-2"
          />
          <IconButton type="submit" aria-label="search" style={{fontSize:"20px"}}>
            <span className="fa fa-search text-primary p-1"></span>
          </IconButton>
        </Paper>
      </div>
      <div className="rowposters">
        {movies.map((movie) => (
          <div key={movie.id}>
            <MovieCard imgurl={img_url + movie.poster_path} backdrop_img={img_url + movie.backdrop_path} movie={movie} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Layout;
