import React, {useState} from "react";
import logo from "../../../assets/img/labLogo.png";
import http from "../../../http";
import { Navigate, useNavigate } from "react-router-dom";


const Login = () => {

    const navigate = useNavigate();

    const [input, setInput] = useState({});
    const [isLoading, setLoading] = useState(false);
    const [errors, setErrors] = useState({});
    

    // var lab_user_info = localStorage.getItem('lab_user_info');

    // console.log('lab_user_info: ', JSON.parse(lab_user_info));

    const handleInput = (e) => {
        setInput(prevState => ({...prevState, [e.target.name]: e.target.value}));
    }

    const handleLogin = (e) => {
        e.preventDefault();
        setLoading(true);
        http.post('/login', input).then(res=>{
            setLoading(false);
            // console.log(res.data);

            // localStorage.setItem('lab_user_info', JSON.stringify(res.data));
            localStorage.lab_user_token = res.data.token;
            localStorage.lab_user_email = res.data.email;
            localStorage.lab_user_name = res.data.name;
            localStorage.lab_user_photo = res.data.photo;
            localStorage.lab_user_role_id = res.data.role_id;

            navigate('/dashboard');

        }).catch(function (errors) {
            setLoading(false);
            // console.log(errors);
            if(errors.response.status == 422){
                console.log(errors.response.data.errors);
                setErrors(errors.response.data.errors);
            }
        });
        // axios.post('http://127.0.0.1:8000/api', input).then(res=>{
        //     console.log(res.data);
        // })
    }

    if(localStorage.lab_user_token === undefined){
        return (
            <div className="container-fluid bg-theme" id="login">
                <div className="row">
                    <div className="col-md-6 login-box">
                        <div className="logo mb-2">
                            <img src={logo} alt="logo"/>
                        </div>
                        <div className="card">
                            <div className="card-header">
                                <h4>Login</h4>
                            </div>
                            <div className="card-body">
                                <form onSubmit={handleLogin}>
                                    <label className="w-100">
                                        <p>Email</p>
                                        <input
                                            className={errors.email !== undefined ? "form-control mt-2 is-invalid" : "form-control mt-2"}
                                            type="text"
                                            name="email"
                                            value={input.email || ''}
                                            onChange={handleInput}
                                        />
                                        <p className="login-error-msg">
                                            <small>{errors.email !== undefined ? errors.email[0] : null}</small>
                                        </p>
                                    </label>
                                    <label className="w-100 mt-4">
                                        <p>Password</p>
                                        <input
                                            className={errors.password !== undefined ? "form-control mt-2 is-invalid" : "form-control mt-2"}
                                            type="password"
                                            name="password"
                                            value={input.password || ''}
                                            onChange={handleInput}
                                        />
                                        <p className="login-error-msg">
                                            <small>{errors.password !== undefined ? errors.password[0] : null}</small>
                                        </p>
                                    </label>
                                    <div className="d-grid mt-4">
                                        <button type="submit" className="btn btn-primary" disabled={isLoading ? true:false}>
                                            {isLoading ?
                                                <div className="spinner-border spinner-border-sm text-light" role="status">
                                                    <span className="visually-hidden">Loading...</span>
                                                </div> :
                                                <p style={{fontWeight:'bold', letterSpacing:'1px'}}>Login</p>
                                            }    
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }else{
        return <Navigate to='/dashboard' replace={true}/>
    }
    

}

export default Login;