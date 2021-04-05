import React, { Component } from 'react';
import HIWImg from '../../images/ForDonar.png'
import ngoImg1 from '../../images/NorthGrove.jpg'
import ngoImg2 from '../../images/DSUFb.jpg'
import ngoImg3 from '../../images/MobileFM.jpg'
import '../../stylesheets/ForDonor.css';
import {Card, Button, CardDeck} from "react-bootstrap";

export class ForDonor extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    redirectToNGOProfile = () => {
        this.props.history.push('/ngoprofile');
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
                    <h2>Explore NGOs</h2>
                </div>
                <div className="container">
                    <br/>
                        <CardDeck>
                            <Card onClick={this.redirectToNGOProfile.bind(this)}>
                                <Card.Img variant="top" src={ngoImg1} />
                                <Card.Body>
                                    <Card.Title>North Grove, Halifax</Card.Title>
                                    <Card.Text>
                                        Require <b>$1000</b> for Food Program
                                    </Card.Text>
                                </Card.Body>
                                <Card.Footer>
                                    <small className="text-muted">April 7, 2021 - April 30, 2021</small>
                                </Card.Footer>
                            </Card>
                            <Card>
                                <Card.Img variant="top" src={ngoImg2} />
                                <Card.Body>
                                    <Card.Title>DSU Food Bank, Halifax</Card.Title>
                                    <Card.Text>
                                        Require <b>$3500</b> for Student Food
                                    </Card.Text>
                                </Card.Body>
                                <Card.Footer>
                                    <small className="text-muted">April 17, 2021 - May 03, 2021</small>
                                </Card.Footer>
                            </Card>
                            <Card>
                                <Card.Img variant="top" src={ngoImg3} />
                                <Card.Body>
                                    <Card.Title>Mobile Food Market, Halifax</Card.Title>
                                    <Card.Text>
                                        Require <b>$3500</b> Food for Homeless
                                    </Card.Text>
                                </Card.Body>
                                <Card.Footer>
                                    <small className="text-muted">April 20, 2021 - May 20, 2021</small>
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
