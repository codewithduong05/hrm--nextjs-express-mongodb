"use client";
import SignupForm from "@/features/auth/components/SignupForm";
import { useAuth } from "@/features/auth/hooks/useAuth";

export default function SignupPage() {
  const { signupUser } = useAuth();

  return <SignupForm onSubmit={signupUser} />;
}
