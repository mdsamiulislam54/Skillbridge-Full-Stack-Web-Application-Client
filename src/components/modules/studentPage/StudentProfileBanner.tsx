
'use client'

import { useClientSession } from "@/hook/authentication/useClientSession"

const StudentProfileBanner =  () => {
const {user} = useClientSession()

  return (
    <div className="py-60 w-full bg-red-400  flex items-center justify-center ">
      <p className="text-[10vw] font-extrabold leading-none text-center text-foreground">
        {user?.name}
      </p>
    </div>
  )
}

export default StudentProfileBanner
