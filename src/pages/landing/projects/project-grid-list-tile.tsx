import Box from "@material-ui/core/Box";
import GridListTile from "@material-ui/core/GridListTile";
import GridListTileBar from "@material-ui/core/GridListTileBar";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Image from "next/image";
import React from "react";
// import { GithubTopicChipGroup } from "../../../components/github-topics";
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

export const ProjectGridListTile = ({ project }: { project: IProject }) => {
  const { src, title, description } = project;

  const classes = useStyles();

  return (
    <GridListTile style={{ width: "33.33%" }}>
      <Box className={classes.media}>
        <Image layout="fill" alt={description} src={src} />
      </Box>
      <GridListTileBar
        title={title}
        subtitle={<Typography color="initial">{description}</Typography>}
      />
    </GridListTile>
  );
};
