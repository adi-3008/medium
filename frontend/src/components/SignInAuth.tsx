import { Link, useNavigate } from "react-router-dom"
import { SignInInput } from "@aditya34/common"
import { useState } from "react"
import { LabeledInput } from "./LabeledInput"
import { Button } from "./Button"
import axios from "axios"
import { BASE_URL } from "../../config"

export const SignInAuth = () => {

    const navigate = useNavigate();

    const [signInInput, setSignInInput] = useState<SignInInput>({
        email: "",
        password : "",
    }) 


    async function sendRequest(){
        try {
            const res = await axios.post(`${BASE_URL}/api/v1/user/signIn`, signInInput)
            console.log(res);
            const jwt = res.data.jwt;
            localStorage.setItem("token", jwt);
            navigate("/blogs");
        }catch(e){
            
        }    
    }

    return <div className="h-screen flex justify-center flex-col">
        <div className="flex justify-center">
            <div className="w-full max-w-md px-8 py-6">
                <div className="flex flex-col justify-center items-center">
                    <div>
                        <div className="text-3xl font-bold">
                            Please Sign In
                        </div>
                        <div className = "text-slate-400 mt-1">
                            Dont have an Account?
                            <Link className="pl-2 underline" to="/signUp">
                                SignUp
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="pt-4">

                    <LabeledInput lable={"email"} placeholder={"Enter Username"} onChange={(e) => {
                            setSignInInput(c => ({
                                ...c,
                                email : e.target.value
                            }))
                        }} 
                    />

                    <LabeledInput lable={"Password"} placeholder={"Enter password"} onChange={(e) => {
                            setSignInInput(c => ({
                                ...c,
                                password : e.target.value
                            }))
                        }} 
                        type = "password"
                    />

                    <Button text = { "SignIn" } onClick={sendRequest} />
                </div>
            </div>
        </div>
    </div>
}

