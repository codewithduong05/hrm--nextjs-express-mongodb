export function saveAuth(data) {
  localStorage.setItem("access_token", data.accessToken);
  localStorage.setItem("user", JSON.stringify(data.user));
}

export function logout() {
  localStorage.clear();
}
