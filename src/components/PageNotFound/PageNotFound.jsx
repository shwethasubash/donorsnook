import React, {Component} from 'react';
import error from '../../images/A2Error404.png';

export class PageNotFound extends Component {
    render() {
        return (<div className="logosytle">
                <img src={error} alt="404-notfound"/>
                </div>)
    }
}
