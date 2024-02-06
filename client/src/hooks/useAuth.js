import { login } from "@/services/auth.service";

export function useAuth() {
  const loginUser = async (data) => {
    return login(data);
  };
  const signupUser = async (data) => {
    return login(data);
  };
  return { loginUser,signupUser };

}
