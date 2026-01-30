'use client'

import { authClient } from "@/lib/auth-client";

export const useClientSession = () => {
  const { data, isPending, error } = authClient.useSession();

  return {
    session: data,
    user: data?.user ?? null,
    isPending,
    isAuthenticated: !!data?.user,
    error,
  };
};
