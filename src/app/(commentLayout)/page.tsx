export const dynamic = "force-dynamic";

import HomePage from "@/components/layout/homePage/home";
import { getSession } from "@/hook/authentication/useGetSession";
export default async function Home() {
const session = await getSession();
console.log("Session:", session)
  return (
    <>
      <HomePage />
    </>
  );
}
