
import Register from '@/components/modules/authentication/register'
import Images from '@/media/login.svg'
import Image from "next/image"
export const dynamic = "force-dynamic";
const RegisterPage = () => {
  return (
    <div className="md:w-10/12 w-full mx-auto shadow-lg shadow-blue-500 sha p-4 my-5">
      <div className="md:grid grid-cols-4  justify-center items-center">
        <div className="col-span-2">
          <Register />
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

export default RegisterPage