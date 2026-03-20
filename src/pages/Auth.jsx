import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext';

export default function Auth() {

    const [mode, setMode] = useState("signup");
    const [error, setError] = useState(null);

    const { register, handleSubmit, formState: { errors } } = useForm();
    const { signUp, logIn } = useAuth();

    const navigate = useNavigate();

    function onSubmit(data) {
        setError(null);
        let result;

        if (mode === "signup") {
            result = signUp(data.email, data.password);
        } else {
            result = logIn(data.email, data.password);
        }

        if (result.success) {
            navigate('/');
        } else {
            setError(result.error);
        }
    }

    return (
        <div className="page container flex-container">
            <div className="form-container rounded text-muted">
                <h3 className="my-3">{mode === "signup" ? "Sign Up" : "LogIn"}</h3>

                {error && <p className='text-white error rounded py-1 px-2'>{error}</p>}

                <form className="form" onSubmit={handleSubmit(onSubmit)}>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">Email:</label>
                        <div className="input-group">
                            <i className="bi bi-envelope-fill input-group-text"></i>
                            <input type="email" id="email" placeholder="Enter your email" className="form-control" {...register("email", { required: "Email is reqiured" })} />
                        </div>
                        {errors.email && <p className='text-danger mt-2'>{errors.email.message}</p>}
                    </div>

                    <div className="mb-3">
                        <label htmlFor="password" className="form-label">password:</label>
                        <div className="input-group">
                            <i className="bi bi-unlock2-fill input-group-text"></i>
                            <input type="password" id="password" placeholder="Enter your password" className="form-control" {...register("password", {
                                required: "Password is reqiured", minLength: {
                                    value: 6,
                                    message: "Password must be at least 6 characters"
                                },
                                maxLength: {
                                    value: 12,
                                    message: "Password most be at most 12 characters"
                                }
                            })} />
                        </div>
                        {errors.password && <p className='text-danger mt-2'>{errors.password.message}</p>}
                    </div>

                    <div className="text-center">
                        <button type="submit" className="btn btn-primary px-4 mb-3 mt-4">{mode === "signup" ? "Sign Up" : "LogIn"}</button>
                    </div>
                    {mode === "signup" ? (
                        <p className="text-center">Already have an account? <span className="text-primary" onClick={() => setMode('login')}>LogIn</span></p>
                    ) : (
                        <p className="text-center">Don't have an account? <span className="text-primary" onClick={() => setMode('signup')}>Sign Up</span></p>
                    )}
                </form>
            </div>
        </div>
    )
}