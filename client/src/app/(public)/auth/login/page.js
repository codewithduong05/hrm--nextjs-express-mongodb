"use client";

import LoginForm from "@/features/auth/components/LoginForm";
import { useAuth } from "@/hooks/useAuth";


export default function LoginPage() {
  const { loginUser } = useAuth();

  const submit = async (data) => {
    await loginUser(data);
  };

  return <LoginForm onSubmit={submit} />;
}
