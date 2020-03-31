import React from "react";
import AppBar from "@material-ui/core/AppBar";
import { Toolbar, InputBase } from "@material-ui/core";
import { fade, makeStyles } from "@material-ui/core/styles";
import SearchIcon from "@material-ui/icons/Search";

const useStyles = makeStyles(theme => ({
  root: {
    // margin: "10px"
    // display: "flex",
    // justifyContent: "row",
    // alignItems: "center"
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1,
    display: "none",

    [theme.breakpoints.up("sm")]: {
      display: "block"
    }
  },
  search: {
    position: "relative",
    color: "black",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: "#f4f4f4",
    "&:hover": {
      backgroundColor: "rgba(0,0,0, 0.5)"
    },
    // marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(1),
      width: "auto"
    }
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "black"
  },
  inputRoot: {
    color: "inherit",
    width: "400px"
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
        width: "20ch"
      }
    }
  }
}));

export default function SearchAppBar() {
  const classes = useStyles();

  return (
    <div style={{ margin: "0 10% 0 10%" }} className={classes.root}>
      <AppBar
        style={{ backgroundColor: "white", borderRadius: "5rem" }}
        elevation={1}
        position="static"
      >
        <Toolbar style={{ margin: "0 auto" }}>
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput
              }}
              inputProps={{ "aria-label": "search" }}
            />
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}
