import {
  Card,
  CardActionArea,
  CardContent,
  CardHeader,
  CardMedia,
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

interface IEducationCardProps {
  schoolLogoSrc: string;
  schoolName: string;
  degreeName: string;
  schoolUrl: string;
}

export const EducationCard = (props: IEducationCardProps) => {
  const { schoolUrl, schoolLogoSrc, schoolName, degreeName } = props;
  const classes = useStyles();

  const handleClick = () => {
    window.location.href = schoolUrl;
  };

  return (
    <CardActionArea onClick={handleClick}>
      <Card className={classes.root}>
        <CardHeader title="Education" />
        <CardMedia className={classes.media} image={schoolLogoSrc} />
        <CardContent>
          <Typography variant="h5">{degreeName}</Typography>
          <Typography variant="h6" color="textSecondary">
            {schoolName}
          </Typography>
        </CardContent>
      </Card>
    </CardActionArea>
  );
};
