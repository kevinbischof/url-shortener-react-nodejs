import Url from "../types/types";

export default function parseUrl(url: Url): Url {
  const http = url.url.includes("http://");
  const https = url.url.includes("https://");
  if (http || https) {
    return url;
  }
  if (http) {
    return { ...url, url: `http://${url.url}` };
  }
  return { ...url, url: `https://${url.url}` };
}
