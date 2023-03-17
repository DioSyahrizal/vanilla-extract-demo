import {
  createGlobalTheme,
  createGlobalThemeContract,
} from "@vanilla-extract/css";
import { tokens } from "./token/sprinkles.css";
import { getVarName } from "./format";

export const theme = createGlobalThemeContract(tokens, getVarName);
createGlobalTheme(":root", theme, tokens);

export default theme;
