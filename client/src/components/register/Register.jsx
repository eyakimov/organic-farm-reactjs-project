import { useNavigate } from "react-router-dom";
import { useRegister } from "../../hooks/useAuth"
import { useForm } from "../../hooks/useForm";


const initialValues = {
    email: '',
    password: '',
    rePassword: '',
}

export default function Register() {
    const register = useRegister(initialValues);
    const navigate = useNavigate();
    const registerHandler = async ({ email, password }) => {
        try {
            await register(email, password)
            navigate("/");
        } catch (err) {
            console.log(err.message);
        }
    };
    const { values, changeHandler, submitHandler } = useForm(initialValues, registerHandler);

    return (
        <div className="container-fluid py-5">
            <div className="container">
                <div className="mx-auto text-center mb-5" style={{ maxWidth: 500 + 'px' }}>
                    <h6 className="text-primary text-uppercase">Register</h6>
                    <h1 className="display-5">Please Feel To Register</h1>
                </div>
                <div className="mx-auto" style={{ maxWidth: 500 + 'px' }}>
                    <div className="col">
                        <div className="bg-primary h-100 p-5">
                            <form onSubmit={submitHandler}>
                                <div className="row g-3">
                                    <div className="col-12">
                                        <input
                                            type="text"
                                            name="email"
                                            value={values.email}
                                            onChange={changeHandler}
                                            className="form-control bg-light border-0 px-4"
                                            placeholder="Email"
                                            style={{ height: 55 + 'px' }} />
                                    </div>
                                    <div className="col-12">
                                        <input
                                            type="password"
                                            name="password"
                                            value={values.password}
                                            onChange={changeHandler}
                                            className="form-control bg-light border-0 px-4"
                                            placeholder="Password"
                                            style={{ height: 55 + 'px' }} />
                                    </div>
                                    <div className="col-12">
                                        <input
                                            type="password"
                                            name="repassword"
                                            value={values.rePassword}
                                            onChange={changeHandler}
                                            className="form-control bg-light border-0 px-4"
                                            placeholder="Repeat Password"
                                            style={{ height: 55 + 'px' }} />
                                    </div>
                                    <div className="col-12">
                                        <button className="btn btn-secondary w-100 py-3" type="submit">Register</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}