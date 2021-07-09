import LazyLoad from "react-lazyload";
import React from "react";

import "./profile-card.css";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";

const useStyles = makeStyles({
  root: {
    maxWidth: 240,
    margin: 5,
    boxShadow: "4px 4px 2px #dedede",
    backgroundColor: "#f0f0f0",
  },
});

export default function ProfileCard({ onReadMore }) {
  const classes = useStyles();

  return (
    <Card className={classes.root} variant="outlined">
      <CardActionArea onClick={onReadMore}>
        <LazyLoad height={240} offset={720} once></LazyLoad>
        <CardContent></CardContent>
      </CardActionArea>
    </Card>
  );
}
