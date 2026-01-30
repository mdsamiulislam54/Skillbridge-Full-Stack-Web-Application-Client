'use client'

import { useClientSession } from "@/hook/authentication/useClientSession";

const AboutPage = () => {
    const { session,isPending } = useClientSession();

    if (isPending) {
        return <div>Loading session...</div>;
    }
    return (
        <div>
          
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