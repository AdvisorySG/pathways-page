import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";

import "./profile-card.css";

const useStyles = makeStyles({
  root: {
    width: 258,
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 48,
    borderRadius: "0px",
    "&:hover": {
      boxShadow: "0px 0px 4px 5px #EBECF0 ",
    },
  },
  media: {
    width: 258,
    height: 90,
  },
  content: {
    height: 120,
    padding: 15,
  },
  pathway: {
    color: "#0F63D5",
    fontFamily: "Source Sans Pro",
    fontSize: 20,
  },
  mentors: {
    color: "#666666",
    fontFamily: "Open Sans",
    fontSize: 12,
  },
});

export default function ProfileCard({ pathwayDetails, onReadMore }) {
  const classes = useStyles();
  const mentors = [];
  pathwayDetails.instructors.map((instructor) => {
    mentors.push(instructor.name);
  });
  return (
    <Card className={classes.root} variant="outlined">
      <CardActionArea onClick={onReadMore}>
        <CardMedia
          className={classes.media}
          image={`/pathwayImages/${pathwayDetails.pathwayImage}`}
          title={pathwayDetails.pathway}
        />
        <CardContent className={classes.content}>
          <Typography className={classes.pathway}>
            {pathwayDetails.pathway}
          </Typography>
          <Typography className={classes.mentors}>
            {mentors.join(",")}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
