import React, { useEffect, useState } from "react";
import { AppStyled } from "./App.styles";
import Form from "./components/form/form";
import ErrorBox from "./components/error-box/error-box";
import getUrlByShort from "./api/get-url-by-short/get-url";
import parseUrl from "./helper/url-redirect";

function App() {
  const [error, setError] = useState(false);
  async function UrlRedirect() {
    const pathname = window.location.pathname.substr(1);
    if (pathname.length > 0) {
      getUrlByShort(pathname)
        .then((result) => {
          if (result) {
            window.location.href = parseUrl(result).url;
          }
        })
        .catch((e) => {
          setError(true);
          return e;
        });
    }
  }
  UrlRedirect().then();

  useEffect(() => {
    if (error)
      window.history.replaceState({ page: "another" }, "another page", "/");
  }, [error]);

  return (
    <AppStyled>
      {error && <ErrorBox />}
      <Form setError={setError} />
    </AppStyled>
  );
}

export default App;
