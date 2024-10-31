import { Fragment } from "react";

export const ComponentsMultiplier = ({ children, itemsQuant }) => {
  const multiplierQuantity = Array.from(Array(itemsQuant).keys());
  return (
    <>
      {multiplierQuantity.map((i) => (
        <Fragment key={i}>{children}</Fragment>
      ))}
    </>
  );
};
