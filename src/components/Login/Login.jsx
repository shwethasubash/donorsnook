import React, {Component} from 'react';
import '../../stylesheets/Login.css';
import login from '../../images/Authentication.png'
import {Col, Row, Container, Button} from "react-bootstrap";

export class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",
        }
    }

    redirectToHomeAftLogin = () => {
        this.props.history.push('/home');
    }

    redirectToRegister = () => {
        this.props.history.push('/user/register');
    }

    handleChange = (e) => {
        const {id, value} = e.target
        this.setState(prevState => ({
            ...prevState,
            [id]: value
        }))
    }

    render() {
        return (
            <Container>
                <Row>
                    <Col>
                        <img  src={login} style={{align: "left"}} >
                        </img>
                    </Col>
                    <Col>
                        <section>
                            <br/>
                            <br/>
                            <br/>
                            <br/>
                            <header className="header justify-content-left">
                                <h3>Login</h3>
                            </header>
                            <section className="card login-card mt-2 hv-left">
                                <form className="form">
                                    <br/>
                                    <section className="form-group text-left">
                                        <label htmlFor="exampleInputEmail1">Email address</label>
                                        <input type="email"
                                               className="form-control"
                                               id="email"
                                               placeholder="Enter email"
                                               value={this.state.email}
                                               onChange={this.handleChange}
                                        />
                                    </section>

                                    <section className="form-group text-left">
                                        <label htmlFor="exampleInputPassword1">Password</label>
                                        <input type="password"
                                               className="form-control"
                                               id="password"
                                               placeholder="Password"
                                               value={this.state.password}
                                               onChange={this.handleChange}
                                        />
                                    </section>

                                    <section>
                                        <Button variant="secondary"
                                                type="submit"
                                                className="btn btn-primary"
                                                onClick={this.redirectToHomeAftLogin.bind(this)}
                                        >Login
                                        </Button>
                                    </section>
                                </form>

                                <section className="forgot-password">
                                    <a href="/forgotpassword">Forgot Password?</a>
                                </section>
                                <footer className="registerMessage">
                                    <span>Dont have an account? </span>
                                    <span className="loginText" onClick={this.redirectToRegister.bind(this)}>Register</span>
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
