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
    borderRadius: "0px",
    boxShadow: [
      "0 0.6px 2.8px -80px rgba(0, 0, 0, 0.287)",
      "0 1.3px 6.7px -80px rgba(0, 0, 0, 0.389)",
      "0 2.5px 12.5px -80px rgba(0, 0, 0, 0.456)",
      "0 4.5px 22.3px -80px rgba(0, 0, 0, 0.516)",
      "0 8.4px 41.8px -80px rgba(0, 0, 0, 0.594)",
      "0 20px 100px -80px rgba(0, 0, 0, 0.8)",
    ],
    "&:hover": {
      boxShadow: [
        "0 2px 4.6px rgba(0, 0, 0, 0.036)",
        "0 4.9px 11.2px rgba(0, 0, 0, 0.049)",
        "0 9.3px 21px rgba(0, 0, 0, 0.057)",
        "0 16.5px 37.5px rgba(0, 0, 0, 0.065)",
        "0 30.9px 70.2px rgba(0, 0, 0, 0.074)",
        "0 74px 168px rgba(0, 0, 0, 0.1)",
      ],
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
    <Card classes={{ root: classes.root }} variant="outlined">
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
