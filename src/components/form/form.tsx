import React, { useState } from "react";
import { useFormik } from "formik";
import BoxWithShadow from "../box-with-shadow/box-with-shadow";
import { InputStyled, SubmitButtonStyled, TitleStyled } from "./form.styles";
import postUrl from "../../api/post-url/post-url";
import Url from "../../types/types";
import FormResponseBox from "./form.response-box";

type FormProps = {
  setError: Function;
};

export default function Form({ setError }: FormProps): React.ReactElement {
  const [url, setUrl] = useState<Url | null>();

  const formik = useFormik({
    initialValues: {
      url: "",
    },
    onSubmit: async (values) => {
      setError(false);
      postUrl(values.url).then((res) => {
        setUrl(res);
      });
    },
  });

  return (
    <>
      <BoxWithShadow>
        <div>
          <TitleStyled>Url-Shortener</TitleStyled>
        </div>

        <form onSubmit={formik.handleSubmit}>
          <div>
            {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
            <label htmlFor="url">URL</label>
          </div>
          <div>
            <InputStyled
              id="url"
              name="url"
              type="text"
              onChange={formik.handleChange}
              value={formik.values.url}
            />
          </div>
          <div>
            <SubmitButtonStyled type="submit">
              MAKE THE URL SHORT!
            </SubmitButtonStyled>
          </div>
        </form>
      </BoxWithShadow>
      {url && <FormResponseBox url={url} />}
    </>
  );
}
