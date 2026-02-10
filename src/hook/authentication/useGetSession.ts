export const dynamic = "force-dynamic";
import { config } from "@/config/config";
  import { cookies } from "next/headers";
  
  export const getSession = async () => {
  const cookieStore = await cookies()
    const res = await fetch(`${config.backendUrl}/api/auth/get-session`, {
        method: 'GET',
        credentials: 'include',
        headers:{
            Cookie: cookieStore.toString()
        }
    });
    const session = await res.json();
    return session;
}