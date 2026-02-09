'use client'
import { useClientSession } from "@/hook/authentication/useClientSession"
import { getSession } from "@/hook/authentication/useGetSession"
import Image from "next/image"


const ProfilePage = () => {
    const { user } = useClientSession()
    return (
        <div className="">
            <div>
                <div className='w-full h-24 border flex justify-center items-center'>
                    <h1 className="text-[5vw] font-bold ">{user?.name}</h1>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 justify-center items-center p-5">
                    <div>
                        <Image
                            src={user?.image || "http://localhost:3000/_next/static/media/teaching.6012afe6.svg"}
                            alt="Profile Images Student"
                            width={400}
                            height={400}
                        />
                    </div>
                    <div className="space-y-5">
                        <p>
                            <span className="text-xl font-bold mr-4">Name:</span>
                            <span className="font-md">{user?.name}</span>
                        </p>
                        <p>
                            <span className="text-xl font-bold mr-4">Email:</span>
                            <span>{user?.email}</span>
                        </p>
                        <p>
                            <span className="text-xl font-bold mr-4">ID:</span>
                            <span>{user?.id}</span>
                        </p>
                        <p>
                            <span className="text-xl font-bold mr-4">Role:</span>
                            <span>{user?.role}</span>
                        </p>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default ProfilePage