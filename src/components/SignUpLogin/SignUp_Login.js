const SignUp_Login = () => {
    return ( 
        <div className="div.signup-content">
            <div className="navigate-home"></div>
            <div className="login-container">
                <div className="signup-loginform">
                    <div className="heading">
                        <h1>Log in or Sign up</h1>
                        <p>Join millions of others in sharing successful moves on <span>HelpMeOut</span>.</p>
                    </div>
                    <div className="login-buttons">
                        <div className="google-btn"></div>
                        <div className="facebook-btn"></div>
                    </div>
                    <div className="or-frame">
                        <div className="vector-line1"></div>
                        <div className="vector-or"></div>
                        <div className="vector-line2"></div>
                    </div>
                    <div className="form-wrapper">
                        <form className="signup-form">
                            <div className="info">
                                <label>Email</label>
                                <input type="text" name="email" placeholder="Enter your address" />
                            </div>
                            <div className="info">
                                <label>Password</label>
                                <input type="text" name="email" placeholder="Enter your Password"/>
                            </div>
                            <div className="info">
                                <button>Sign Up</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default SignUp_Login;