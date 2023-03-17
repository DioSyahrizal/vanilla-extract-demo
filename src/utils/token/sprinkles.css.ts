import { createSprinkles, defineProperties } from "@vanilla-extract/sprinkles";
import { breakpoints } from "./breakpoints";
import { space } from "./space";
import { colors } from "./colors";

const flexAlignment = ["flex-start", "center", "flex-end", "stretch"] as const;
const flexibility = [0, 1, 2, 3, 4] as const;
const extendedSpace = {
  screenSm: breakpoints.sm,
  screenMd: breakpoints.md,
  screenLg: breakpoints.lg,
  screenXl: breakpoints.xl,
  containerSm: breakpoints.sm - 32,
  containerMd: breakpoints.md - 48,
  containerLg: breakpoints.lg - 64,
  containerXl: breakpoints.xl - 128,
};

const responsiveProperties = defineProperties({
  defaultCondition: "xs",
  conditions: {
    xs: {},
    sm: { "@media": `(min-width: ${breakpoints.sm}px)` },
    md: { "@media": `(min-width: ${breakpoints.md}px)` },
    lg: { "@media": `(min-width: ${breakpoints.lg}px)` },
    xl: { "@media": `(min-width: ${breakpoints.xl}px)` },
  },
  properties: {
    alignItems: [...flexAlignment, "baseline"],
    alignSelf: [...flexAlignment, "baseline"],
    bottom: space,
    display: [
      "block",
      "flex",
      "inline-flex",
      "grid",
      "inline-block",
      "none",
      "contents",
    ],
    flex: {
      1: "1 1 0%",
      auto: "1 1 auto",
      initial: "0 1 auto",
      none: "none",
    },
    flexBasis: {
      ...space,
      ...extendedSpace,
    },
    flexDirection: ["column", "row"],
    flexGrow: flexibility,
    flexShrink: flexibility,
    flexWrap: ["wrap", "nowrap"],

    gap: space,
    height: space,
    inset: space,
    justifyContent: [...flexAlignment, "space-around", "space-between"],
    justifySelf: flexAlignment,
    left: space,

    marginBottom: space,
    marginLeft: space,
    marginRight: space,
    marginTop: space,
    maxHeight: space,
    minHeight: space,
    minWidth: space,
    overflow: ["auto", "hidden", "scroll", "unset"],
    paddingBottom: space,
    paddingLeft: space,
    paddingRight: space,
    paddingTop: space,
    position: ["absolute", "fixed", "relative", "sticky"],
    right: space,
    textAlign: ["center", "left", "right"],
    top: space,
    width: {
      ...space,
      ...extendedSpace,
    },
    backgroundColor: colors,
    color: colors,
  },
  shorthands: {
    margin: ["marginTop", "marginBottom", "marginLeft", "marginRight"],
    marginX: ["marginLeft", "marginRight"],
    marginY: ["marginTop", "marginBottom"],
    padding: ["paddingTop", "paddingBottom", "paddingLeft", "paddingRight"],
    paddingX: ["paddingLeft", "paddingRight"],
    paddingY: ["paddingTop", "paddingBottom"],
  },
});

export const atoms = createSprinkles(responsiveProperties);

export type Atoms = Parameters<typeof atoms>[0];

export const tokens = {
  space,
  colors,
};
