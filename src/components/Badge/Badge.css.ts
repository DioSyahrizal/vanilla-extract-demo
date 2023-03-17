import theme from "@/utils/theme.css";
import { atoms } from "@/utils/token/sprinkles.css";
import { recipe, RecipeVariants } from "@vanilla-extract/recipes";

const spaceSprinkles = atoms({
  padding: "3",
});

export const badgeRecipes = recipe({
  base: [
    spaceSprinkles,
    {
      borderRadius: 8,
    },
  ],
  variants: {
    color: {
      primary: atoms({
        backgroundColor: "primary",
        color: "white",
      }),
      secondary: {
        backgroundColor: theme.colors.secondary,
        color: theme.colors.white,
      },
    },
    variant: {
      solid: {},
      outline: {},
    },
  },
  defaultVariants: {
    variant: "solid",
    color: "primary",
  },
  compoundVariants: [
    {
      variants: {
        color: "primary",
        variant: "outline",
      },
      style: {
        backgroundColor: theme.colors.white,
        border: `1px solid ${theme.colors.primary}`,
        color: theme.colors.primary,
      },
    },
    {
      variants: {
        color: "secondary",
        variant: "outline",
      },
      style: {
        backgroundColor: theme.colors.white,
        border: `1px solid ${theme.colors.secondary}`,
        color: theme.colors.secondary,
      },
    },
  ],
});

export type BadgeVariants = RecipeVariants<typeof badgeRecipes>;
