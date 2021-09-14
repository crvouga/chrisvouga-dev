import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardHeader from "@material-ui/core/CardHeader";
import Link from "@material-ui/core/Link";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import CodeIcon from "@material-ui/icons/Code";
import LinkIcon from "@material-ui/icons/Link";
import Image from "next/image";
import React from "react";
import { IProject } from "../../../data-access/projects";

const useStyles = makeStyles(() => ({
  media: {
    position: "relative",
    height: 0,
    paddingTop: "75%",
  },
  card: {
    display: "flex",
    flexDirection: "column",
    height: "100%",
  },
  content: {
    flex: 1,
  },
}));

export const ProjectCard = ({ project }: { project: IProject }) => {
  const { src, title, description, liveSiteUrl, sourceCodeUrl } = project;

  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardHeader title={title} />

      <Link href={liveSiteUrl}>
        <CardActionArea>
          <Box className={classes.media}>
            <Image layout="fill" alt={description} src={src} />
          </Box>
        </CardActionArea>
      </Link>

      <CardContent className={classes.content}>
        <Typography variant="body1" color="textSecondary">
          {description}
        </Typography>
      </CardContent>

      <CardActions>
        <Link href={liveSiteUrl}>
          <Button startIcon={<LinkIcon />} variant="outlined">
            Live Site
          </Button>
        </Link>
        <Link href={sourceCodeUrl}>
          <Button startIcon={<CodeIcon />} color="primary" variant="outlined">
            Code
          </Button>
        </Link>
      </CardActions>
    </Card>
  );
};
