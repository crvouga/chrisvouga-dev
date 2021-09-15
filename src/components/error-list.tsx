import { useTheme } from "@material-ui/core";
import Box from "@material-ui/core/Box";
import Alert from "@material-ui/lab/Alert";

export const ErrorList = ({ errors }: { errors: { message: string }[] }) => {
  const theme = useTheme();
  return (
    <Box display="flex" flexDirection="column">
      {errors.map((error) => (
        <Alert
          severity="error"
          style={{ marginBottom: theme.spacing(1) }}
          key={error.message}
        >
          {error.message}
        </Alert>
      ))}
    </Box>
  );
};
