import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Link from "@material-ui/core/Link";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import BrokenImageIcon from "@material-ui/icons/BrokenImage";
import Skeleton from "@material-ui/lab/Skeleton";
import React from "react";
import { IProject } from "../../../data-access/projects";
import { useScreenshot } from "../../../screenshot/screenshot.client-side";

const useStyles = makeStyles(() => ({
  media: {
    position: "relative",
    height: 0,
    paddingTop: "75%",
  },
  card: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-end",
    height: "100%",
  },
  content: {
    flex: 1,
  },
}));

export const ProjectCard = ({ project }: { project: IProject }) => {
  const { title, description, liveSiteUrl, sourceCodeUrl } = project;

  const classes = useStyles();

  const screenshot = useScreenshot({
    timeout: 3000,
    targetUrl: liveSiteUrl,
  });

  return (
    <Card className={classes.card}>
      <Link
        href={liveSiteUrl}
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <CardActionArea
          style={{
            width: "100%",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <Box className={classes.media} width="100%" height="100%">
            {screenshot.state === "success" && screenshot.src && (
              <img
                src={screenshot.src}
                alt={title}
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                }}
              />
            )}

            {screenshot.state === "loading" && (
              <Box
                position="absolute"
                top={0}
                left={0}
                width="100%"
                height="100%"
                display="flex"
                flexDirection="column"
                justifyContent="center"
                alignItems="center"
              >
                <Skeleton width="100%" height="100%" variant="rect" />
              </Box>
            )}

            {screenshot.state === "error" && (
              <Box
                position="absolute"
                top={0}
                left={0}
                width="100%"
                height="100%"
                display="flex"
                flexDirection="column"
                justifyContent="center"
                alignItems="center"
                color="text.secondary"
              >
                <BrokenImageIcon />
              </Box>
            )}
          </Box>

          <CardContent className={classes.content}>
            <Typography gutterBottom variant="h5" component="h2">
              {title}
            </Typography>

            <Typography variant="body1" color="textSecondary">
              {description}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Link>

      <CardActions>
        <Link href={sourceCodeUrl}>
          <Button color="primary">Code</Button>
        </Link>
        <Link href={liveSiteUrl}>
          <Button color="primary">Live Site</Button>
        </Link>
      </CardActions>
    </Card>
  );
};
