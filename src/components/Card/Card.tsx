import React, { FC, PropsWithChildren } from "react";
import { cardStyles } from "./Card.css";

const Card: FC<PropsWithChildren> = ({ children }) => {
  return <div className={cardStyles}>{children}</div>;
};

export default Card;
