"use client";

import { authClient } from "@/lib/auth-client";

export const useUniversalSession = () => {
    const { data, isPending, error } = authClient.useSession();
   console.log("ClientSession", data)
    return {
      session: data,
      user: data?.user ?? null,
      isPending,
      isAuthenticated: !!data?.user,
      error,
    };
};
