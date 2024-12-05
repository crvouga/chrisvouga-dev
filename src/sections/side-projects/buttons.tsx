import { Box, Button } from "@mui/joy";

export function SideProjectsSectionButtons({
  state,
  hiddenCardCount,
  onExpand,
  onContract,
}: {
  hiddenCardCount: number;
  state: "contracted" | "expanded";
  onExpand: () => void;
  onContract: () => void;
}) {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        pt: 3,
      }}
    >
      {state === "contracted" && (
        <Button variant="solid" size="lg" onClick={onExpand}>
          {`See ${hiddenCardCount.toLocaleString()} more`}
        </Button>
      )}

      {state === "expanded" && (
        <Button variant="solid" size="lg" onClick={onContract}>
          See less
        </Button>
      )}
    </Box>
  );
}
