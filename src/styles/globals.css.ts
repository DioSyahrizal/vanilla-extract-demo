import { globalStyle } from "@vanilla-extract/css";

globalStyle("body", {
  backgroundColor: "white",
  color: "black",
});

globalStyle("a", {
  color: "inherit",
  textDecoration: "underline",
  textUnderlineOffset: "0.125em",
  textDecorationThickness: "0.125em",
});

globalStyle("a:hover", {
  textDecorationColor: "inherit",
});
