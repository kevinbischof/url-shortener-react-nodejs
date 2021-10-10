import Url from "../../types/types";

export default async function postUrl(url: string): Promise<Url> {
  const data = {
    url,
  };
  try {
    const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}`, {
      method: "POST",
      body: JSON.stringify(data),
      headers: { "Content-Type": "application/json; charset=UTF-8" },
    });
    if (response.status === 500) {
      throw new Error("Not found");
    }
    const result = await response.json();
    return result.data;
  } catch (e) {
    throw new Error("Not found");
  }
}
