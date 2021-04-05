import React, {Component} from 'react';
import '../../stylesheets/Header.css'
import logo from '../../images/A2HeaderFMTLogo.png'
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

export class Header extends Component {
    render() {
        return(
                <header>
                    <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
                        <section>
                            <Navbar.Brand className="header-info" href="/Home">                             
                                <img
                                    alt=""
                                    src={logo}
                                    width="60"
                                    height="60"
                                   className="align-top"
                                />{' '}

                            </Navbar.Brand>
                        </section>  
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                        <Navbar.Brand className="header-info" href="/Home">       
                        <h4>Donor's Nook</h4>
                        </Navbar.Brand>
                            <ul className="navbar-nav mr-auto">
                            </ul>
                            <ul className="navbar-nav">
                                <Nav.Link className="header-info" href="/fordonor"><h4>For Donors</h4></Nav.Link>
                                &nbsp;
                                &nbsp;
                                <Nav.Link className="header-info" href="/forngo"><h4>For NGOs</h4></Nav.Link>
                                &nbsp;
                                &nbsp;
                                {/*<Nav.Link className="header-info" href="/underimplementation"><h4>Donate</h4></Nav.Link>*/}
                                {/*&nbsp;*/}
                                {/*&nbsp;*/}
                                <Nav.Link className="header-info" href="/user/register"><h4>Sign Up</h4></Nav.Link>
                                &nbsp;
                                &nbsp;
                                <Nav.Link className="header-info" href="/user/login"><h4>Sign In</h4></Nav.Link>
                                &nbsp;
                                &nbsp;
                                <Nav.Link className="header-info" href="/user/notifications">
                                </Nav.Link>
                            </ul>
                        </Navbar.Collapse>
                    </Navbar>
                </header>
        )
    }
}
