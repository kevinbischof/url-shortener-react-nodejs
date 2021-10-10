import React from "react";
import ErrorBoxStyled from "./error-box.styles";

export default function ErrorBox(): React.ReactElement {
  return (
    <ErrorBoxStyled>
      <h1>Error</h1>
      <div>Short url not found!</div>
    </ErrorBoxStyled>
  );
}
