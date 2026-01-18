const BASE_URL = process.env.NEXT_PUBLIC_API_URL;

async function request(url, options = {}) {
  const token = localStorage.getItem("access_token");

  const res = await fetch(BASE_URL + url, {
    headers: {
      "Content-Type": "application/json",
      ...(token && { Authorization: `Bearer ${token}` }),
    },
    ...options,
  });

  if (!res.ok) {
    const err = await res.json();
    throw err;
  }

  return res.json();
}

export default {
  get: (url) => request(url),
  post: (url, data) =>
    request(url, {
      method: "POST",
      body: JSON.stringify(data),
    }),
};
