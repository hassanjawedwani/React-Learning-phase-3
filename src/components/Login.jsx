import { useNavigate } from "react-router-dom";

const Login = () => {
    const navigate = useNavigate();
    return (
        <div>
            <input type="email" placeholder="Enter email"/>
            <input type="password" placeholder="Enter password"/>
            <button type="button" onClick={()=>{localStorage.setItem('login', true); navigate("/");}}>Login</button>
            <button type="button" onClick={()=>{localStorage.removeItem('login'); navigate("/login");}}>Logout</button>
        </div>
    );
}

export default Login;