import { createGlobalTheme, createThemeContract } from "@vanilla-extract/css";
import { tokens } from "./token/sprinkles.css";

export const theme = createThemeContract(tokens);
createGlobalTheme(":root", theme, tokens);

export default theme;
