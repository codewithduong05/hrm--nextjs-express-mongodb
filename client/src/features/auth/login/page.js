// client/src/features/auth/login/page.js
"use client";
import LoginForm from "@/features/auth/components/LoginForm";
import { useAuth } from "@/features/auth/hooks/useAuth";

export default function LoginPage() {
  const { loginUser } = useAuth();

  return <LoginForm onSubmit={loginUser} />;
}
