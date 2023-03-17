import { style } from "@vanilla-extract/css";

export const cardStyles = style({
  backgroundColor: "white",
  borderRadius: 4,
  boxShadow: "0 0 0 1px rgba(0, 0, 0, 0.1), 0 2px 3px rgba(0, 0, 0, 0.2)",
  padding: "1rem",
  margin: "1rem",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  alignItems: "flex-start",
  height: "100%",
});
