import React, { Component } from 'react';
import HIWImg from '../../images/ForNGO.png'
import donor1 from '../../images/donor1.jpg'
import donor2 from '../../images/donor2.jpg'
import donor3 from '../../images/donor3.jpg'
import '../../stylesheets/ForDonor.css';
import {Card, Button, CardDeck} from "react-bootstrap";

export class ForNGO extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render() {
        return (
            <section>
                <br/>
                <header>
                    <h2>How it Works</h2>
                </header>
                <br/>
                <div >
                    <img  src={HIWImg}>
                    </img>
                    <br/>
                    <br/>
                    <h2>Explore Donors</h2>
                </div>
                <div className="container">
                    <br/>
                    <CardDeck>
                        <Card>
                            <Card.Img variant="top" src={donor1} />
                            <Card.Body>
                                <Card.Title>Natasha Smith</Card.Title>
                                <Card.Text>
                                    Humanitarian, Halifax
                                </Card.Text>
                            </Card.Body>
                            <Card.Footer>
                                <a href="/donorprofile">View Profile</a>
                            </Card.Footer>
                        </Card>
                        <Card>
                            <Card.Img variant="top" src={donor2} />
                            <Card.Body>
                                <Card.Title>Rickey Makwana</Card.Title>
                                <Card.Text>
                                    Social Worker, Halifax
                                </Card.Text>
                            </Card.Body>
                            <Card.Footer>
                                <a href="/donorprofile">View Profile</a>
                            </Card.Footer>
                        </Card>
                        <Card>
                            <Card.Img variant="top" src={donor3} />
                            <Card.Body>
                                <Card.Title>David Backham</Card.Title>
                                <Card.Text>
                                    Philanthropist, Halifax
                                </Card.Text>
                            </Card.Body>
                            <Card.Footer>
                                <a href="/donorprofile">View Profile</a>
                            </Card.Footer>
                        </Card>
                    </CardDeck>
                </div>
                <br/>
                <div>
                    <Button variant="secondary">View All</Button>
                </div>
                <br/>
            </section>
        )};
}
