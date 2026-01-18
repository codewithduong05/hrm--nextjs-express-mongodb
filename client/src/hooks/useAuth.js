import { login } from "@/services/auth.service";

export function useAuth() {
  const loginUser = async (data) => {
    return login(data);
  };

  return { loginUser };
}
