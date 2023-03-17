import React, { FC, PropsWithChildren } from "react";
import { BadgeVariants, badgeRecipes } from "./Badge.css";

type BadgeProps = BadgeVariants;

const Badge: FC<PropsWithChildren<BadgeProps>> = ({
  children,
  variant,
  color,
}) => {
  return <div className={badgeRecipes({ variant, color })}>{children}</div>;
};

export default Badge;
