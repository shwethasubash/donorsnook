import React, {Component} from 'react';
import '../../stylesheets/ForgotPassword.css';
import {validateEmail} from "../Validation/ValidateProperties";
import {ErrorMsg} from "../Validation/ErrorMsg";

export class ForgotPassword extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            error: {},
            isEmailValid: false,
            isFormValid: false,
        }
    }

    redirectToLogin = () => {
        this.props.history.push('/user/login');
    }

    redirectToResetPassword = () => {
        this.props.history.push('/resetpassword');
    }

    updateEmail(name, value){
        this.setState({[name]: value}, validateEmail);
    }

    validateForm = () => {
        const {isEmailValid} = this.state;
        this.setState({
            isFormValid: (isEmailValid)
        })
    }

    resetLinkSent = (e) => {
        e.preventDefault();
        console.log('Function called');
        this.setState({
            email: "",
            error: {},
            isEmailValid: false,
            isFormValid: false,
        })
        alert("Here dialog with below confirmation will be implemented\n Password Reset Link Sent!");
    }

    render() {
        console.log("Forgot Passsowrd called!");
        return (
            <section className="col-lg-4">
                <header className="header justify-content-center">
                    <h3>Forgot Password</h3>
                </header>
                <section className="card forgot-password-card mt-2 hv-center">
                    <form className="form">
                        <br/>
                        <section className="form-group text-left">
                            <label htmlFor="exampleInputEmail1">Email address</label>
                            <input type="email"
                                   className="form-control"
                                   id="email"
                                   placeholder="Enter your email address"
                                   value={this.state.email}
                                   onChange={(e) =>
                                       this.updateEmail('email',e.target.value)}
                            />
                            <ErrorMsg valid={this.state.isEmailValid} message={this.state.error.email} />
                        </section>

                        <section>
                            <button
                                type="submit"
                                className="btn btn-primary"
                                disabled={!this.state.isFormValid}
                                onClick={this.redirectToResetPassword}
                            >Send Password Reset Link
                            </button>
                        </section>
                    </form>
                    <br/>
                    <br/>
                    <footer
                        type="submit"
                        className="btn-custom"
                        onClick={this.redirectToLogin.bind(this)}
                    ><strong>Back to Login</strong>
                    </footer>
                </section>
            </section>
        )
    }
}
