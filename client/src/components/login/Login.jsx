import { useNavigate } from "react-router-dom";
import { UseLogin } from "../../hooks/useAuth"
import { useForm } from "../../hooks/useForm"

const initialValues = {
    email: '',
    password: '',
}

export default function Login() {
    const login = UseLogin();
    const navigate = useNavigate();
    const loginHandler = async ({ email, password }) => {
        try {
            await login(email, password)
            navigate("/");
        } catch (err) {
            console.log(err.message);
        }
    };
    const { values, changeHandler, submitHandler } = useForm(initialValues, loginHandler);

    return (
        <div className="container-fluid py-5">
            <div className="container">
                <div className="mx-auto text-center mb-5" style={{ maxWidth: 500 + 'px' }}>
                    <h6 className="text-primary text-uppercase">Login</h6>
                    <h1 className="display-5">Please Feel To Login</h1>
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
                                            placeholder="email@gmail.com"
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
                                        <button className="btn btn-secondary w-100 py-3" type="submit">Login</button>
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