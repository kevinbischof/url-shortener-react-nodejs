import React from "react";
import BoxWithShadow from "../box-with-shadow/box-with-shadow";
import { TitleStyled } from "./form.styles";
import Url from "../../types/types";

type FormResponseBoxProps = {
  url: Url;
};

export default function FormResponseBox({
  url,
}: FormResponseBoxProps): React.ReactElement {
  const shortUrl = `${window.location.origin}/${url.short}`;
  return (
    <BoxWithShadow>
      <TitleStyled>
        <div>Your short url:</div>
      </TitleStyled>
      <div>Short-Url:</div>
      <div>
        <a href={shortUrl} target="_blank" rel="noreferrer">
          {shortUrl}
        </a>
      </div>
    </BoxWithShadow>
  );
}
