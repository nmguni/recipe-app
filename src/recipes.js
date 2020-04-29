import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
    margin: "1rem",
  },
  media: {
    height: 0,
    paddingTop: "56.25%",
    width: "345px",
    borderRadius: "inherit",
    opacity: ".8",
  },
  cardHeader: {
    fontWeight: "bold",
    fontSize: "1.8rem",
    color: "#3f3e3e",
    padding: ".5rem",
  },
  font: {
    padding: ".5rem",
    fontWeight: "600",
    color: "#5d5d5dde",
  },
  cardContent: {
    paddingTop: "0px",
    paddingLeft: ".2rem",
  },
  list: {
    lineHeight: "2rem",
  },
}));

export default function Recipes({
  title,
  calories,
  img,
  ingredients,
  yieldTotal,
  totalTime,
}) {
  const classes = useStyles();
  // const [expanded, setExpanded] = React.useState(false);

  // const handleExpandClick = () => {
  //   setExpanded(!expanded);
  // };
  return (
    <Card
      elevation={3}
      style={{ padding: ".8rem", backgroundColor: "#f4f4f4b3" }}
      className={classes.root}
    >
      <CardHeader className={classes.cardHeader} title={title} />
      <CardMedia className={classes.media} image={img} title="Paella dish" />
      <Typography className={classes.font}>
        kcal: {Math.round(calories)}
      </Typography>
      <CardContent className={classes.cardContent}>
        <Typography variant="h6" color="textSecondary">
          <ol style={{ paddingLeft: "1.5rem" }}>
            {ingredients.map((ingredient) => (
              <li key={ingredient.value} className={classes.list}>
                {ingredient.text}
              </li>
            ))}
          </ol>
        </Typography>
      </CardContent>
    </Card>
  );
}
