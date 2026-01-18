import http from "@/services/http";

export function login(data) {
  return http.post("/auth/login", data);
}
