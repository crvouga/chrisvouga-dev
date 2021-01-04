import {
  Card,
  CardActionArea,
  CardHeader,
  CardMedia,
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
        <CardHeader title={schoolName} subheader={degreeName} />
        <CardMedia className={classes.media} image={schoolLogoSrc} />
      </Card>
    </CardActionArea>
  );
};
