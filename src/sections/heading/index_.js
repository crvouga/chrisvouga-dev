// @ts-check
import { t } from "../../elem";
import { viewTypography } from "../../ui/typography";
import { viewColored } from "./colored_";

/**
 * @type {import("../../elem").H}
 */
export const viewHeadingSection = () => {
  return t("div", {}, [
    t("div", { style: { flex: 1 } }, [
      viewTypography({ level: "h1", text: "Chris Vouga" })({
        style: { "font-weight": 900 },
      }),
      viewColored({ text: "Software Developer" })(),
    ]),
  ]);
  //   return (
  //     <Stack
  //       direction={{ xs: "column", sm: "row" }}
  //       spacing={{ xs: 1, sm: 2, md: 4 }}
  //     >
  //       <Stack flex={1}>
  //         <Typography level="h1" fontWeight={900}>
  //           Chris Vouga
  //         </Typography>

  //         <Colored text="Software Developer" />
  //       </Stack>

  //       <HeadingContact />
  //     </Stack>
  //   );
};
