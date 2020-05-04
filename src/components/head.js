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
import Card from "@material-ui/core/Card";

import PropTypes from "prop-types";
import Hidden from "@material-ui/core/Hidden";
import withWidth from "@material-ui/core/withWidth";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    margin: "0px",
    padding: "0px",
  },
  appBar: {
    backgroundColor: "#fff",
    color: "black",
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  gridHeight: {
    height: "100%",
  },
  nav: {
    fontSize: "1rem",
    fontWeight: "bold",
    textTransform: "uppercase",
    color: "rgba(0,0,0, 0.58)",
  },
  title: {
    fontWeight: "bold",
    textTransform: "capitalize",
    padding: "1rem",
    fontSize: "4.5rem",
    paddingBottom: "1.2rem",
    color: "rgba(0,0,0, 0.78)",
  },
  subHeadText: {
    color: "rgba(0,0,0, 0.50)",
    padding: "1.2rem",
  },
  button: {
    width: "30%",
    fontWeight: "bold",
    backgroundColor: "#508553",
    padding: "1rem",
    borderRadius: "2rem",
    fontSize: ".9rem",
    letterSpacing: ".2rem",
    color: "#fff",
    margin: "1rem",
    "&:hover": {
      backgroundColor: "#50855370",

      boxShadow: "1px 1px 5px 1px #ccc",
    },
  },

  media: {
    height: "100%",
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  },
  search: {
    color: "#fff",
    textDecoration: "none",
  },
}));

function Header(props) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Box className={headerStyles.head}>
        <AppBar className={classes.appBar} position="static" elevation={0}>
          <Toolbar>
            <Typography variant="h6" className={classes.nav}>
              recipe app
            </Typography>
          </Toolbar>
        </AppBar>
        {/* Grid-------- */}

        <Grid className={classes.gridHeight} container>
          <Grid
            className={headerStyles.centerItems}
            item
            sx={12}
            sm={12}
            md={6}
            lg={5}
          >
            <div style={{ margin: "0 auto" }}>
              <Typography className={classes.title} variant="h1">
                Your favorite <br /> food searching <br /> app
              </Typography>
              <Typography variant="h6" className={classes.subHeadText}>
                Choose your favourite meals now
              </Typography>
              <Button
                className={classes.button}
                color="primary"
                disableElevation
              >
                <a className={classes.search} href="/#appbar">
                  Search
                </a>
              </Button>
            </div>
          </Grid>
          <Hidden only="sm">
            <Grid item sx={12} sm={12} md={6} lg={7}>
              <Card className={classes.media}>
                <CardMedia
                  className={classes.media}
                  image={HeaderImge}
                  title="cook cracking an egg"
                />
              </Card>
            </Grid>
          </Hidden>
        </Grid>
      </Box>
    </div>
  );
}

Header.propTypes = {
  width: PropTypes.oneOf(["lg", "md", "sm", "xl", "xs"]).isRequired,
};
export default withWidth()(Header);
