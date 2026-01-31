import { cookies } from "next/headers";
const cookieStore = cookies();
import { getSession } from "@/hook/authentication/useGetSession";
import { TutorService } from "@/services/tutor.service";

const AboutPage = async () => {
    const session =  await getSession()

const profiles = await TutorService.getTutorProfile((await cookieStore).toString());
    // if (isPending) {
    //     return <div>Loading session...</div>;
    // }
    return (
        <div>
            {JSON.stringify(profiles)}
            <h1>About Page</h1>
            {session?.user ? (
                <p>Welcome, {session?.user?.id }!</p>
            ) : (
                <p>You are not logged in.</p>
            )}
        </div>
    )
}

export default AboutPage