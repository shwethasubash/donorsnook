import React, {Component} from 'react';
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import {Footer} from "react-materialize";
import '../../stylesheets/Footer.css';
import fb from "../../images/A2FooterFb.png";
import insta from "../../images/A2FooterInsta.png";
import twit from "../../images/A2FooterTwitter.png";

export class FooterCus extends Component{

    render(){
        return (
            <footer className={Footer}>
                <section>
                    <Navbar classname="footer" bg="dark" variant="dark" expand="lg" sticky="bottom" >
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse >
                            <ul></ul><ul></ul><ul></ul><ul></ul><ul></ul>
                            <ul></ul><ul></ul>
                            <ul>
                                <Nav.Link className="footer-info" href="/underimplementation" >About US</Nav.Link>
                                <Nav.Link className="footer-info" href="/underimplementation">FAQs</Nav.Link>
                                <Nav.Link className="footer-info" href="/feedback">Feedback</Nav.Link>
                            </ul>
                            <ul></ul>
                            <ul></ul>
                            <ul></ul>
                            <ul className="navbar-nav">
                                <Nav.Link className="footer-info" href="https://www.facebook.com/" >
                                    <img
                                        src={fb}
                                        id="fb-link"
                                        class="img-fluid"
                                        width="50"
                                        height="50"
                                        alt=""
                                    /></Nav.Link>
                                &nbsp;
                                &nbsp;
                                &nbsp;
                                <Nav.Link className="footer-info" href="https://www.instagram.com/" >
                                    <img
                                        src={insta}
                                        id="insta-links"
                                        className="img-fluid"
                                        width="50"
                                        height="50"
                                        alt=""/></Nav.Link>
                                &nbsp;
                                &nbsp;
                                &nbsp;
                                <Nav.Link className="footer-info" href="https://twitter.com/explore" >
                                    <img
                                        src={twit}
                                        id="twit-links"
                                        className="img-fluid"
                                        width="53"
                                        height="53"
                                        alt=""/></Nav.Link>
                            </ul>
                            <ul></ul>
                            <ul>
                                <Nav.Link className="footer-info" href="/underimplementation">Contact Us</Nav.Link>
                                <Nav.Link className="footer-info" href="/underimplementation">Terms</Nav.Link>
                                <Nav.Link className="footer-info" href="/underimplementation">Privacy Policy</Nav.Link>
                            </ul>
                        </Navbar.Collapse>
                    </Navbar>
                </section>

                <section>
                    <Navbar bg="light" variant="light"expand="lg" sticky="bottom" >
                        <ul className="navbar-nav mr-auto" >
                        </ul>
                        <ul className="navbar-nav">
                            &copy; {new Date().getFullYear()} Copyright: <a href="/home"> donornook.com </a>
                        </ul>
                        <ul className="navbar-nav mr-auto">
                        </ul>
                    </Navbar>
                </section>
            </footer>
        );
    }
}
