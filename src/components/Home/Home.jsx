import React, { Component } from 'react';
import landing from '../../images/Landing1.jpg'
import landing2 from '../../images/Landing2.jpg'
import '../../stylesheets/Home.css';

export class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render() {
        return (
            <section>
                <div >
                    <img  src={landing}>
                    </img>
                </div>
                <div className="space from footer pt-5 pb-5"></div>
                <div className="container">
                    <h1 className="mt-50">Why join with us?</h1>
                    <div className="space from footer pt-3 pb-3"></div>
                    <p className="normal mt-20 text-design" style={{ color: "00ffff" }}>There are a lot of NGOs functioning all over the world that
                        runs both as a small scale and a big scale organisation. Unfortunately, not all NGOs are well
                        known around the world. We, in here, help to overcome this scenario. We act as a platform to
                        spread NGOs among the people who urge to help others. Volunteering is the core point of being a
                        human. No one has made it through life without someone’s help. In that way, we feel proud, that,
                        we are being a part in helping the people who helps the people in need. “You start a group and
                        we help you to reach out to the cute hearts of the world”.</p>
                    <div className="space from footer pt-5 pb-5"></div>
                </div>
                <div >
                    <img src={landing2}>
                    </img>
                </div>
                <div className="nos-section">
                    <div className="container" >
                        <ul className="d-flex justify-content-center">
                            <li className="donors">
                                <span>4,333</span>
                                <p>
                                    Donors</p>
                            </li>
                            <li className="ngos">
                                <span>517</span>
                                <p>
                                    NGOs</p>
                            </li>
                            <li className="amount">
                                <span>$</span> <span>2,70,98,000</span>
                                <p>
                                    Amount Donated</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>
        )};
}
