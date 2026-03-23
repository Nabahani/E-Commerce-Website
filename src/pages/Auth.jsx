import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { useAuth } from '../context/AuthContext';

export default function Auth() {

    const [searchParams] = useSearchParams();
    let mode = searchParams.get("mode") || "signup";
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
                            <input type="email" id="email" placeholder="Enter your email" className="form-control" {...register("email", { required: "Email is required" })} />
                        </div>
                        {errors.email && <p className='text-danger mt-2'>{errors.email.message}</p>}
                    </div>

                    <div className="mb-3">
                        <label htmlFor="password" className="form-label">Password:</label>
                        <div className="input-group">
                            <i className="bi bi-unlock2-fill input-group-text"></i>
                            <input type="password" id="password" placeholder="Enter your password" className="form-control" {...register("password", {
                                required: "Password is required", minLength: {
                                    value: 6,
                                    message: "Password must be at least 6 characters"
                                },
                                maxLength: {
                                    value: 18,
                                    message: "Password must be at most 18 characters"
                                }
                            })} />
                        </div>
                        {errors.password && <p className='text-danger mt-2'>{errors.password.message}</p>}
                    </div>

                    <div className="text-center">
                        <button type="submit" className="btn btn-primary px-4 mb-3 mt-4">{mode === "signup" ? "Sign Up" : "LogIn"}</button>
                    </div>
                    {mode === "signup" ? (
                        <p className="text-center">Already have an account? <button type='button' style={{ border: "none", backgroundColor: 'transparent' }} className="text-primary p-0" onClick={() => navigate('/auth?mode=login')}>LogIn</button></p>
                    ) : (
                        <p className="text-center">Don't have an account? <button type='button' style={{ border: "none", backgroundColor: 'transparent' }} className="text-primary p-0" onClick={() => navigate('/auth?mode=signup')}>Sign Up</button></p>
                    )}
                </form>
            </div>
        </div>
    )
}