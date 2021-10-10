import Url from "../../types/types";

export default async function getUrlByShort(
  short: string
): Promise<Url | null> {
  const data = {
    short,
  };
  const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/short`, {
    method: "POST",
    body: JSON.stringify(data),
    headers: { "Content-Type": "application/json; charset=UTF-8" },
  });
  if (!response.body) {
    return null;
  }
  if (response.status === 500) {
    throw new Error("Not found");
  }
  const result = await response.json();
  return result.data;
}
