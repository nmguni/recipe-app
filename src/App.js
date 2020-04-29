import React, { useEffect, useState } from "react";
import "./App.css";
import Recipes from "./recipes";
import AppBar from "@material-ui/core/AppBar";
import { Toolbar, InputBase } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import SearchIcon from "@material-ui/icons/Search";

const APP_ID = process.env.REACT_APP_ID;
const APP_KEY = process.env.REACT_APP_KEY;

const useStyles = makeStyles((theme) => ({
  root: {},
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    display: "none",

    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
  },

  appBar: {
    backgroundColor: "#fff",
    borderRadius: "4px",
    marginTop: "2rem",
  },
  search: {
    position: "relative",
    color: "black",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: "#f4f4f4",
    "&:hover": {
      backgroundColor: "rgba(0,0,0, 0.5)",
    },
    // marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(1),
      width: "auto",
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "black",
  },
  inputRoot: {
    color: "inherit",
    width: "400px",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

const App = () => {
  const classes = useStyles();
  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("chicken");

  useEffect(() => {
    getRecipes();
  }, [query]);

  const getRecipes = async () => {
    const response = await fetch(
      `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`
    );

    const data = await response.json();
    setRecipes(data.hits);
  };

  const updateSearch = (e) => {
    setSearch(e.target.value);
  };

  const getSearch = (e) => {
    e.preventDefault();
    setQuery(search);
    setSearch("");
  };

  return (
    <div className="App">
      {/* ---------------------------------------------------------- */}
      <form
        onSubmit={getSearch}
        style={{ margin: "0 10% 0 10%" }}
        className={classes.root}
      >
        <AppBar
          className={classes.appBar}
          elevation={1}
          position="static"
          id="appbar"
        >
          <Toolbar style={{ margin: "0 auto" }}>
            <div className={classes.search}>
              <div className={classes.searchIcon}>
                <SearchIcon />
              </div>
              <InputBase
                className="search-bar"
                placeholder="search"
                type="text"
                value={search}
                onChange={updateSearch}
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput,
                }}
                inputProps={{ "aria-label": "search" }}
              />
            </div>
          </Toolbar>
        </AppBar>
      </form>
      {/* --------------------------------------------------- */}
      <div style={{ paddingTop: "0" }} className="recipes">
        {recipes.map((recipe) => (
          <Recipes
            key={recipe.recipe.label}
            title={recipe.recipe.label}
            calories={recipe.recipe.calories}
            img={recipe.recipe.image}
            ingredients={recipe.recipe.ingredients}
          />
        ))}
      </div>
    </div>
  );
};

export default App;
