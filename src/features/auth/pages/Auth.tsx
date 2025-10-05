import LoginForm from "@features/auth/components/LoginForm";
import RegisterForm from "@features/auth/components/RegisterForm";
import { look } from "@assets/images";


const AuthPage = ({ type }: { type: "login" | "register" }) => {

    return (
        <div className="w-full h-screen flex justify-center items-center bg-gray-100">
            <div className="w-full max-w-4xl h-[75%] max-md:h-[calc(100%-32px)] bg-white rounded-3xl 
            shadow-2xl p-4 max-md:m-4 flex max-md:flex-col-reverse  gap-4">
                <div className="w-1/2 max-md:w-full ">
                    {type === "login" ? <LoginForm /> : <RegisterForm />}
                </div>
                <div className="overflow-hidden w-1/2 max-md:w-full h-full rounded-2xl ">
                    <img src={look} alt="" className="select-none w-full h-full object-cover object-center " />
                </div>
            </div>
        </div>
    );
}

export default AuthPage;