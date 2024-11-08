import { Link, useNavigate } from "react-router-dom"
import { SignUpInput } from "@aditya34/common"
import { useState } from "react"
import { LabeledInput } from "./LabeledInput"
import { Button } from "./Button"
import axios from "axios"
import { BASE_URL } from "../../config"

export const SignUpAuth = () => {

    const navigate = useNavigate();

    const [signUpInput, setSignUpInput] = useState<SignUpInput>({
        email: "",
        password : "",
        name : ""
    }) 


    async function sendRequest(){
        try {
            const res = await axios.post(`${BASE_URL}/api/v1/user/signUp`, signUpInput)
            const jwt = res.data;
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
                        <div className="text-3xl font-bold text-left">
                            Create an Account
                        </div>
                        <div className = "text-slate-400 mt-1">
                            Already have an account?
                            <Link className="pl-2 underline" to="/signIn">
                                SignIn
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="pt-4">
                    <LabeledInput lable={"Name"} placeholder={"Enter name"} onChange={(e) => {
                            setSignUpInput(c => ({
                                ...c,
                                name : e.target.value
                            }))
                        }}
                    />        

                    <LabeledInput lable={"email"} placeholder={"Enter Username"} onChange={(e) => {
                            setSignUpInput(c => ({
                                ...c,
                                email : e.target.value
                            }))
                        }} 
                    />

                    <LabeledInput lable={"Password"} placeholder={"Enter password"} onChange={(e) => {
                            setSignUpInput(c => ({
                                ...c,
                                password : e.target.value
                            }))
                        }} 
                        type = "password"
                    />

                    <Button text = { "SignUp" } onClick={sendRequest} />
                </div>
            </div>
        </div>
    </div>
}

