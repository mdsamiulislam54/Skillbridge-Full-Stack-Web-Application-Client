import { cookies } from "next/headers";
import { getSession } from "@/hook/authentication/useGetSession";
import { TutorService } from "@/services/tutor.service";

const AboutPage = async () => {
    const session = await getSession()
    const cookieStore = await cookies()
    const profiles = await TutorService.getTutorProfile(cookieStore.toString());
    // if (isPending) {
    //     return <div>Loading session...</div>;
    // }
    return (
        <div>
            {JSON.stringify(profiles)}
            <h1>About Page</h1>
            {session?.user ? (
                <p>Welcome, {session?.user?.id}!</p>
            ) : (
                <p>You are not logged in.</p>
            )}
        </div>
    )
}

export default AboutPage