import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { red } from "@material-ui/core/colors";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import MoreVertIcon from "@material-ui/icons/MoreVert";

const useStyles = makeStyles(theme => ({
  root: {
    maxWidth: 345,
    margin: "1rem"
  },
  media: {
    height: 0,
    paddingTop: "56.25%" // 16:9
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest
    })
  },
  expandOpen: {
    transform: "rotate(180deg)"
  },
  avatar: {
    backgroundColor: red[500]
  }
}));

export default function Recipes({ title, calories, img, ingredients }) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  return (
    <Card elevation={3} style={{ padding: ".8rem" }} className={classes.root}>
      <CardHeader
        style={{ fontWeight: "bold", fontSize: "1.8rem" }}
        title={title}
      />
      <CardMedia
        style={{ width: "345px" }}
        className={classes.media}
        image={img}
        title="Paella dish"
      />
      <Typography style={{ padding: ".5rem" }}>
        {Math.round(calories)}:kcal
      </Typography>
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          <ol>
            {ingredients.map(ingredient => (
              <li>{ingredient.text}</li>
            ))}
          </ol>
        </Typography>
      </CardContent>
    </Card>
  );
}

{
  /* <div>
  <h1>{title}</h1>
  <ol>
    {ingredients.map(ingredient => (
      <li>{ingredient.text}</li>
    ))}
  </ol>
  <p>{Math.round(calories)} - kcal</p>
  <img src={img} alt={title} />
</div>; */
}
