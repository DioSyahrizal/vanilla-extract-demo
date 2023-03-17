export const colors = {
  primary: "#0070f3",
  secondary: "#1a202c",
  white: "#fff",
  black: "#000",
} as const;

export type Colors = keyof typeof colors;
