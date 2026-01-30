  import { cookies } from "next/headers";
  
  export const getSession = async () => {
  const cookieStore = await cookies()
    const res = await fetch('http://localhost:5000/api/auth/get-session', {
        method: 'GET',
        credentials: 'include',
        headers:{
            Cookie: cookieStore.toString()
        }
    });
    const session = await res.json();
    return session;
}