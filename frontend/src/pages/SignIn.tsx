import { SignInAuth } from "../components/SignInAuth"
import { Quote } from "../components/Quote"

export const SignIn = () => {
    return <div className="grid grid-cols-1 lg:grid-cols-2">
        <div>
            <SignInAuth/>
        </div>
        <div className = "invisible md:visible">
            <Quote
                text={"The only limit to our realization of tomorrow is our doubts of today."}
                author={"Aditya Garud"}
                designation={"CEO | BussinessNext"}
            />
        </div>
    </div>
}