'use client'

import { authClient } from "@/lib/auth-client";

export const useClientSession = () => {
  const { data, isPending, error } = authClient.useSession();

  // Debug log - remove in production
  console.log("Client Session Data:", data);

  return {
    session: data,
    user: data?.user ?? null,
    isPending,
    isAuthenticated: !!data?.user,
    error,
  };
};
