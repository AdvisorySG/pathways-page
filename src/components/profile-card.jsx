import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import { format } from "date-fns";

import "./profile-card.css";

const useStyles = makeStyles({
  root: {
    width: 258,
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 48,
    borderWidth: 2,
    borderColor: "#D1D1D1",
    borderRadius: "0px",
    "&:hover": {
      boxShadow: "0px 0px 4px 5px #E1E1E1",
    },
  },
  media: {
    width: 258,
    height: 90,
  },
  content: {
    height: "100%",
    padding: 15,
  },
  actionRoot: {
    height: "100%",
  },
  pathway: {
    color: "#0F63D5",
    fontFamily: "Source Sans Pro",
    fontSize: 20,
    lineHeight: 1.1,
  },
  mentor: {
    color: "#666",
    fontFamily: "Open Sans",
    fontSize: 12,
    marginTop: 4,
  },
  dates: {
    color: "#444",
    fontFamily: "Open Sans",
    fontSize: 14,
    marginTop: 4,
  },
});

export default function ProfileCard({ pathwayDetails, onReadMore }) {
  const { dates, imageUrl, instructors, title } = pathwayDetails;
  const classes = useStyles();
  const mentors = instructors.map(({ name }) => name);
  return (
    <Card className={classes.root} variant="outlined">
      <CardActionArea
        classes={{ root: classes.actionRoot }}
        onClick={onReadMore}
      >
        <CardMedia className={classes.media} image={imageUrl} title={title} />
        <CardContent className={classes.content}>
          <Typography className={classes.pathway}>{title}</Typography>
          <Typography className={classes.dates}>
            {dates.map((date) => format(date, "MMM d")).join(", ")}
          </Typography>
          {mentors.map((mentor) => (
            <Typography className={classes.mentor}>{mentor}</Typography>
          ))}
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
