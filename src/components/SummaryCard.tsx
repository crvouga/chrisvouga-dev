import {
  Card,
  CardContent,
  CardHeader,
  makeStyles,
  Typography,
} from "@material-ui/core";

const useStyles = makeStyles(() => ({
  root: {},
  media: {
    paddingTop: `${(9 / 16) * 100}%`,
    height: 0,
    backgroundColor: "#fff",
  },
}));

export const SummaryCard = () => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardHeader title="Summary" />
      <CardContent>
        <Typography variant="body1">
          Hello, my name is Chris Vouga. I'm a software developer based in the
          Phoenix Valley.
        </Typography>
      </CardContent>
    </Card>
  );
};
