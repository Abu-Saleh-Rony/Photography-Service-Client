import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { userContext } from "../../AuthProvider/AuthContext";
import useTitle from "../../Hooks/useTitle";
import toast from "react-hot-toast";
const Register = () => {
    useTitle('register')
    const [error, setError] = useState("");
    const [success, setSuccess] = useState(false);

    const { userRegister } = useContext(userContext);

    const handleRegister = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        userRegister(email, password)
            .then((res) => {
                const user = res.user;
                form.reset()
                setError('')
                // setSuccess('Successfully registered')
                toast.success('Successfully Register!')
                console.log(user);
            })
            .catch((err) => {
                const errorCode = err.code;
                const errorMessage = err.message;
                setError(errorCode, errorMessage);
                toast.error(errorMessage)
            });
    };
    return (
        <div className="flex items-center justify-center text-center h-screen">
            <form
                onSubmit={handleRegister}
                action=""
                className="flex flex-col w-full max-w-lg p-12 rounded shadow-lg dark:text-gray-100 ng-untouched ng-pristine ng-valid bg-slate-200"
            >
                <label for="username" className="self-start text-xs font-semibold">
                    Email
                </label>
                <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    className="flex items-center h-12 px-4 mt-2 rounded"
                />
                <label for="password" className="self-start mt-3 text-xs font-semibold">
                    Password
                </label>
                <input
                    id="password"
                    type="password"
                    name="password"
                    required
                    className="flex items-center h-12 px-4 mt-2 rounded"
                />

                <button
                    type="submit"
                    className="flex items-center justify-center h-12 px-6 mt-8 text-sm font-semibold rounded dark:bg-violet-400 dark:text-gray-900"
                >
                    Register
                </button>
                <p className="text-warning">{error}</p>
                <p className="text-success">{success}</p>
                <div className="flex justify-center mt-6 space-x-2 text-xs">

                    <p className="dark:text-gray-400">
                        <span>Already have an account?</span>
                        <Link className="underline dark:text-gray-100" to="/login">Login</Link>
                    </p>
                    <Link to="/" className="dark:text-gray-400"></Link>
                </div>
            </form>
        </div>
    );
};

export default Register;
