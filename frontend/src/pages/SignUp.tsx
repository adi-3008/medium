import { SignUpAuth } from "../components/SignUpAuth"
import { Quote } from "../components/Quote"

export const SignUp = () => {
    return <div className="grid grid-cols-1 lg:grid-cols-2">
        <div>
            <SignUpAuth/>
        </div>
        <div className = "hidden lg:block">
            <Quote
                text={"The only limit to our realization of tomorrow is our doubts of today."}
                author={"Aditya Garud"}
                designation={"CEO | BussinessNext"}
            />
        </div>
    </div>
}