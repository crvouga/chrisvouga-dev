import {
  Card,
  CardActionArea,
  CardHeader,
  makeStyles,
} from "@material-ui/core";

const useStyles = makeStyles(() => ({
  root: {},
  media: {
    paddingTop: `${(9 / 16) * 100}%`,
    height: 0,
    backgroundColor: "#fff",
  },
}));

export const SkillsCard = () => {
  const classes = useStyles();

  return (
    <CardActionArea>
      <Card className={classes.root}>
        <CardHeader title="Skills" />
      </Card>
    </CardActionArea>
  );
};
