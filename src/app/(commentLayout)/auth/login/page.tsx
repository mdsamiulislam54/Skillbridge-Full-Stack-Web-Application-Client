import LoginPage from "@/components/modules/authentication/login"
import Images from '@/media/login.svg'
import Image from "next/image"
export const dynamic = "force-dynamic";

const Login = () => {
  return (
    <div className="md:w-10/12 w-full mx-auto shadow-lg shadow-blue-500 my-5 p-4">
      <div className="md:grid grid-cols-4  justify-center items-center">
        <div className="col-span-2">
          <LoginPage />
        </div>
        <div className="col-span-2">
          <Image src={Images} alt="login image"
            className="w-full h-full"
          />
        </div>

      </div>
    </div>
 
)
}

export default Login