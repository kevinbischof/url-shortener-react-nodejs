import React, { ReactNode } from "react";
import { BoxWithShadowStyled } from "./box-with-shadow.styles";

type BoxWithShadowProps = {
  children: ReactNode;
};

export default function BoxWithShadow({
  children,
}: BoxWithShadowProps): React.ReactElement {
  return <BoxWithShadowStyled>{children}</BoxWithShadowStyled>;
}
