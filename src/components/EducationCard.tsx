import {
  Card,
  CardContent,
  Typography,
  CardMedia,
  makeStyles,
  CardActionArea,
} from "@material-ui/core";

const useStyles = makeStyles(() => ({
  root: {
    display: "flex",
  },
  media: {
    width: "240px",
    backgroundColor: "#fff",
  },
}));

interface IEducationCardProps {
  schoolLogoSrc: string;
  schoolName: string;
  degreeName: string;
}

export const EducationCard = (props: IEducationCardProps) => {
  const { schoolLogoSrc, schoolName, degreeName } = props;
  const classes = useStyles();
  return (
    <CardActionArea>
      <Card className={classes.root}>
        <CardMedia className={classes.media} image={schoolLogoSrc} />
        <CardContent>
          <Typography variant="h6">{schoolName}</Typography>
          <Typography variant="subtitle1">{degreeName}</Typography>
        </CardContent>
      </Card>
    </CardActionArea>
  );
};
