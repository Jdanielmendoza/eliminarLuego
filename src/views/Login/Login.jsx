import './Login.css';
import { Link } from 'react-router-dom';

const Login = () => {
    const cargarDashboard = () => {
        window.location.href = "/Dashboard"; 
    };

    return (
        <div>
            <section>
                <div className="color"></div>
                <div className="box">
                    <div className="container">
                        <div className="form"  >
                            <h2>Iniciar Sesion</h2>
                            <form onSubmit={()=> cargarDashboard()} >
                                <div className="inputBox">
                                    <input type="text" name="" placeholder="Nombre de Usuario"/>
                                </div>
                                <div className="inputBox">
                                    <input type="password" name="" placeholder="Contraseña"/>
                                </div>
                                <div className="inputBox">
                                {/* <input type="submit" value="Login"/> */}
                                    <Link to="/Dashboard" className="submit" >Login</Link>
                                </div>

                               {/*  <p className="forgot">Forgot password? <a href="#">Click Here</a></p>
                                <p className="forgot">Need an account? <a href="#">Sign up</a></p> */}
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
export default Login