import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import headerStyles from "./head.module.css";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import CardMedia from "@material-ui/core/CardMedia";
import HeaderImge from "../images/crackAnEgg.jpg";
import SearchIcon from "@material-ui/icons/Search";
import SearchAppBar from "./searchBar";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    margin: "0px",
    padding: "0px"
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1
  }
}));

export default function Header() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Box className={headerStyles.head}>
        <AppBar
          style={{ backgroundColor: "#f4f4f4", color: "black" }}
          position="static"
          elevation={0}
        >
          <Toolbar>
            <Typography
              style={{ fontWeight: "bold" }}
              variant="h6"
              className={classes.title}
            >
              Food
            </Typography>
            {/* <Button color="inherit">Login</Button> */}
          </Toolbar>
        </AppBar>
        {/* Grid-------- */}

        <Grid style={{ height: "100%" }} container>
          <Grid className={headerStyles.centerItems} item sx={12} md={5}>
            <div style={{ margin: "0 auto" }}>
              <Typography
                style={{
                  fontWeight: "bold",
                  fontSize: "4.5rem",
                  paddingBottom: "1.2rem",
                  color: "#2c2c2c"
                }}
                variant="h1"
              >
                Your favirout <br /> food searching <br /> app
              </Typography>
              <Typography
                style={{ paddingBottom: "1.2rem", color: "#2c2c2c" }}
                variant="h6"
              >
                Choose your favourite meals now
              </Typography>
              <Button
                style={{
                  backgroundColor: "#508553",
                  padding: "1rem",
                  borderRadius: "2rem",
                  fontWeight: "500",
                  fontSize: ".8rem"
                }}
                variant="contained"
                color="primary"
                disableElevation
              >
                Explore All
              </Button>
            </div>
          </Grid>
          <Grid item sx={12} md={7}>
            <CardMedia
              className={classes.media}
              image={HeaderImge}
              title="cook cracking an egg"
              style={{
                height: "100%",
                backgroundPosition: "center",
                backgroundSize: "cover",
                width: "100%"
              }}
            />
          </Grid>
        </Grid>
      </Box>
      <SearchAppBar />
    </div>
  );
}
