import React, { Component } from 'react';
import '../../stylesheets/Registration.css';
import {ErrorMsg} from '../Validation/ErrorMsg';
import {validateEmail} from "../Validation/ValidateProperties";
import {validatePassword} from "../Validation/ValidateProperties";
import {validateConfirmPassword} from "../Validation/ValidateProperties";
import {Col, Row, Container, Button} from "react-bootstrap";
import signUp from '../../images/Deconstructed food-bro.png'

export class Registration extends Component{
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",
            confirmPassword: "",
            error: {},
            isEmailValid: false,
            isPasswordValid: false,
            isConfirmPasswordValid: false,
            isTermsChecked: false,
            isFormValid: false,
        };
    }


    redirectToLogin = () => {
        this.props.history.push('/user/login');
    }

    updateProperties(name, value){
        console.log("This is name: " + name);
        console.log("This is value: " + value);

        switch(name)
        {
            case "email":
                this.setState({[name]: value}, validateEmail);
                break;
            case "password":
                this.setState({[name]: value}, validatePassword);
                break;
            case "confirmPassword":
                this.setState({[name]: value}, validateConfirmPassword);
                break;
            case "isTermsChecked":
                this.setState({[name]: !value}, this.validateForm);
                break;
            default:
                break;
        }
    }

    validateForm = () => {
        const {isEmailValid, isPasswordValid, isConfirmPasswordValid, isTermsChecked} = this.state;
        this.setState({
            isFormValid: (isEmailValid && isPasswordValid && isConfirmPasswordValid && isTermsChecked)
        })
    }

    handleSubmitClicked(e) {
        console.log("I am inside handleSubmitClicked");
        e.preventDefault();
        this.setState({
            email: "",
            password: "",
            confirmPassword: "",
            error: {},
            isEmailValid: false,
            isPasswordValid: false,
            isConfirmPasswordValid: false,
            isTermsChecked: false,
            isFormValid: false,
        })
        alert("You are successfully Registered!\n" +
            "You will be now redirected to the Login");
        this.redirectToLogin();
    }

    render() {
        return(
            <Container>
                <br/>
                <br/>
                <Row>
                    <Col>
                        <img  src={signUp} style={{align: "left"}} >
                        </img>
                    </Col>
                    <Col>
                        <br/>
                        <section>
                            <header className="header justify-content-center">
                                <h3>Sign Up</h3>
                            </header>
                            <section className="card signup-card mt-2 hv-center">
                                <form className="form">
                                    <br/>
                                    <section className="form-group text-left">
                                        <label htmlFor="InputEmail">Email address</label>
                                        <input  type="email"
                                                className="form-control"
                                                id="email"
                                                placeholder="Enter Email"
                                                value={this.state.email}
                                                onChange={(e) =>
                                                    this.updateProperties('email',e.target.value)}
                                        />
                                        <ErrorMsg valid={this.state.isEmailValid} message={this.state.error.email} />
                                    </section>

                                    <section className="form-group text-left">
                                        <label htmlFor="InputPassword">Password</label>
                                        <input  type="password"
                                                className="form-control"
                                                id="password"
                                                placeholder="Enter Password"
                                                value={this.state.password}
                                                onChange={(e) =>
                                                    this.updateProperties('password',e.target.value)}
                                        />
                                        <ErrorMsg valid={this.state.isPasswordValid} message={this.state.error.password} />
                                    </section>

                                    <section className="form-group text-left">
                                        <label htmlFor="InputConfirmPassword">Confirm Password</label>
                                        <input  type="password"
                                                className="form-control"
                                                id="confirmPassword"
                                                placeholder="Confirm Password"
                                                value={this.state.confirmPassword}
                                                onChange={(e) =>
                                                    this.updateProperties('confirmPassword',e.target.value)}
                                        />
                                        <ErrorMsg valid={this.state.isConfirmPasswordValid}
                                                  message={this.state.error.confirmPassword} />
                                    </section>

                                    <section className="checkbox">
                                        <input type="checkbox"
                                               checked={this.state.isTermsChecked}
                                               onChange={(e) =>
                                                   this.updateProperties('isTermsChecked', this.state.isTermsChecked)}
                                        />
                                        <label htmlFor="terms"><h6> &nbsp;I agree to the Terms and Privacy Policy</h6></label>
                                    </section>
                                    <br/>

                                    <section>
                                        <button
                                            type="submit"
                                            className="btn btn-primary"
                                            disabled={!this.state.isFormValid}
                                            onClick={this.handleSubmitClicked.bind(this)}
                                        >
                                            Sign Up
                                        </button>
                                    </section>
                                </form>

                                <footer className="mt-2">
                                    <span>Already have an account? </span>
                                    <span className="loginText"
                                          onClick={this.redirectToLogin.bind(this)}>
                        Login here
                    </span>
                                </footer>
                                <br/>
                            </section>
                        </section>
                    </Col>
                </Row>

            </Container>
        )
    }
}
