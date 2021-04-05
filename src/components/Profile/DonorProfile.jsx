import React, { Component } from 'react'
import './profile.css';
import 'bootstrap/dist/css/bootstrap.css';
import donor from '../../images/donor0.png'
import {Card} from "react-bootstrap";

export class donorProfile extends Component {
    render() {
        return (
            <>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/MaterialDesign-Webfont/5.3.45/css/materialdesignicons.css" integrity="sha256-NAxhqDvtY0l4xn+YVa6WjAcmd94NNfttjNsDmNatFVc=" crossOrigin="anonymous" />
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.13.1/css/all.min.css" integrity="sha256-2XFplPlrFClt0bIdPgpz8H7ojnk10H69xRqd9+uTShA=" crossOrigin="anonymous" />
  <div className="container">
    <div className="row">
      <div className="col-lg-4 col-xl-4">
        <div className="card-box text-center">
          <img src={donor}  width="170" height="170"x/>
          <h4 className="mb-0">Natasha Smith</h4>
          <p className="text-muted">Humanitarian, Halifax</p>
          <button type="button" className="btn btn-primary btn-xs waves-effect mb-2 waves-light" id="b1">Connect</button>
          <button type="button" className="btn btn-success waves-effect mb-2 waves-light" id="b2">Chat</button>
          {/*<button type="button" className="btn btn-info btn-xs waves-effect mb-2 waves-light" id="b3">View Website</button>*/}
          <div className="text-left mt-3">
            <h4 className="font-13 text-uppercase">About Me :</h4>
            <p className="text-muted font-13 mb-3">
              This is Natasha from Bikini Bottom Halifax. It's my pleasure to help the hunger and people in need.
            </p>
            {/*<p className="text-muted mb-2 font-13"><strong>Full Name :</strong> <span className="ml-2">Spongebob Squarepants</span></p>*/}
            <p className="text-muted mb-2 font-13"><strong>Mobile :</strong><span className="ml-2">(123) 456 7890</span></p>
            <p className="text-muted mb-2 font-13"><strong>Email :</strong> <span className="ml-2 ">spongebob@gmail.com</span></p>
            <p className="text-muted mb-1 font-13"><strong>Location :</strong> <span className="ml-2">233 Bikini Bottom</span></p>
          </div>
          <ul className="social-list list-inline mt-3 mb-0">
            <li className="list-inline-item">
              <a href="javascript: void(0);" className="social-list-item border-purple text-purple"><i className="fab fa-facebook" /></a>
            </li>
            <li className="list-inline-item">
              <a href="javascript: void(0);" className="social-list-item border-danger text-danger"><i className="fab fa-google" /></a>
            </li>
            <li className="list-inline-item">
              <a href="javascript: void(0);" className="social-list-item border-info text-info"><i className="fab fa-twitter" /></a>
            </li>
            <li className="list-inline-item">
              <a href="javascript: void(0);" className="social-list-item border-secondary text-secondary"><i className="fab fa-github" /></a>
            </li>
          </ul>
        </div> {/* end card-box */}
        <div className="card-box">
          <h3 className="header-title">Helps</h3>
          <div className="pt-1">
            <ul>
              <h5><li>Students</li></h5>
              <h5><li>Homeless People</li></h5>
              <h5><li>Lonely Old People</li></h5>
            </ul>

          </div>
        </div> {/* end card-box*/}
      </div> {/* end col*/}
      <div className="col-lg-8 col-xl-8">
        <div className="card-box">
          <ul className="nav nav-pills navtab-bg">
            <li className="nav-item">
              <a href="#about-me" data-toggle="tab" aria-expanded="true" className="nav-link ml-0 active">
                <i className="mdi mdi-face-profile mr-1" />About Me
              </a>
            </li>

          </ul>
          <div className="tab-content">
            <div className="tab-pane show active" id="about-me">
              <h3 className="mb-4 text-uppercase"><i className="mdi mdi-briefcase mr-1" />Experience</h3>
              <ul className="list-unstyled timeline-sm" id="time">
                <li className="timeline-sm-item">
                  <span className="timeline-sm-date">Apr, 2015</span>
                  <h5 className="mt-0 mb-1">Volunteer at local food bank</h5>
                  <p>Halifax West Ecumenical Food Bank</p>
                  <p className="text-muted mt-2">Halifax, Nova Scotia</p>
                </li>
                <li className="timeline-sm-item" >
                  <span className="timeline-sm-date">Jul, 2016</span>
                  <h5 className="mt-0 mb-1">Donate CAD 200 to NGO</h5>
                  <p>Feed Nova Scotia</p>
                  <p className="text-muted mt-2">Dartmouth, Nova Scotia</p>
                </li>
                <li className="timeline-sm-item" >
                  <span className="timeline-sm-date">Jan, 2017</span>
                  <h5 className="mt-0 mb-1">Donate CAD 100 to NGO</h5>
                  <p>Caregivers Nova Scotia</p>
                  <p className="text-muted mt-2 mb-0">Dartmouth, Nova Scotia</p>
                </li>
				<li className="timeline-sm-item" >
                  <span className="timeline-sm-date">May, 2017</span>
                  <h5 className="mt-0 mb-1">Volunteer at local nursing home</h5>
                  <p>Maplestone Enhanced Care</p>
                  <p className="text-muted mt-2 mb-0">Hailfax, Nova Scotia</p>
                </li>
				<li className="timeline-sm-item" >
                  <span className="timeline-sm-date">Nov, 2018</span>
                  <h5 className="mt-0 mb-1">Donate CAD 200 to NGO</h5>
                  <p>Shelter Nova Scotia</p>
                  <p className="text-muted mt-2 mb-0">Hailfax, Nova Scotia</p>
                </li>
				<li className="timeline-sm-item" >
                  <span className="timeline-sm-date">Feb, 2019</span>
                  <h5 className="mt-0 mb-1">Donate food to local food bank</h5>
                  <p>DSU Food Bank</p>
                  <p className="text-muted mt-2 mb-0">Hailfax, Nova Scotia</p>
                </li>
              </ul>
            </div>
            {/* end timeline content*/}
            <div className="tab-pane" id="settings">
              <form>
                <h5 className="mb-3 text-uppercase bg-light p-2"><i className="mdi mdi-account-circle mr-1" /> Personal Info</h5>
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <label htmlFor="firstname">First Name</label>
                      <input type="text" className="form-control" id="firstname" placeholder="Enter first name" />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label htmlFor="lastname">Last Name</label>
                      <input type="text" className="form-control" id="lastname" placeholder="Enter last name" />
                    </div>
                  </div> {/* end col */}
                </div> {/* end row */}
                <div className="row">
                  <div className="col-12">
                    <div className="form-group">
                      <label htmlFor="userbio">Bio</label>
                      <textarea className="form-control" id="userbio" rows={4} placeholder="Write something..." defaultValue={""} />
                    </div>
                  </div> {/* end col */}
                </div> {/* end row */}
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <label htmlFor="useremail">Email Address</label>
                      <input type="email" className="form-control" id="useremail" placeholder="Enter email" />
                      <span className="form-text text-muted"><small>If you want to change email please <a href="javascript: void(0);">click</a> here.</small></span>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label htmlFor="userpassword">Password</label>
                      <input type="password" className="form-control" id="userpassword" placeholder="Enter password" />
                      <span className="form-text text-muted"><small>If you want to change password please <a href="javascript: void(0);">click</a> here.</small></span>
                    </div>
                  </div> {/* end col */}
                </div> {/* end row */}
                <h5 className="mb-3 text-uppercase bg-light p-2"><i className="mdi mdi-office-building mr-1" /> Company Info</h5>
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <label htmlFor="companyname">Company Name</label>
                      <input type="text" className="form-control" id="companyname" placeholder="Enter company name" />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label htmlFor="cwebsite">Website</label>
                      <input type="text" className="form-control" id="cwebsite" placeholder="Enter website url" />
                    </div>
                  </div> {/* end col */}
                </div> {/* end row */}
                <h5 className="mb-3 text-uppercase bg-light p-2"><i className="mdi mdi-earth mr-1" /> Social</h5>
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <label htmlFor="social-fb">Facebook</label>
                      <div className="input-group">
                        <div className="input-group-prepend">
                          <span className="input-group-text"><i className="fab fa-facebook-square" /></span>
                        </div>
                        <input type="text" className="form-control" id="social-fb" placeholder="Url" />
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label htmlFor="social-tw">Twitter</label>
                      <div className="input-group">
                        <div className="input-group-prepend">
                          <span className="input-group-text"><i className="fab fa-twitter" /></span>
                        </div>
                        <input type="text" className="form-control" id="social-tw" placeholder="Username" />
                      </div>
                    </div>
                  </div> {/* end col */}
                </div> {/* end row */}
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <label htmlFor="social-insta">Instagram</label>
                      <div className="input-group">
                        <div className="input-group-prepend">
                          <span className="input-group-text"><i className="fab fa-instagram" /></span>
                        </div>
                        <input type="text" className="form-control" id="social-insta" placeholder="Url" />
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label htmlFor="social-lin">Linkedin</label>
                      <div className="input-group">
                        <div className="input-group-prepend">
                          <span className="input-group-text"><i className="fab fa-linkedin" /></span>
                        </div>
                        <input type="text" className="form-control" id="social-lin" placeholder="Url" />
                      </div>
                    </div>
                  </div> {/* end col */}
                </div> {/* end row */}
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <label htmlFor="social-sky">Skype</label>
                      <div className="input-group">
                        <div className="input-group-prepend">
                          <span className="input-group-text"><i className="fab fa-skype" /></span>
                        </div>
                        <input type="text" className="form-control" id="social-sky" placeholder="@username" />
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label htmlFor="social-gh">Github</label>
                      <div className="input-group">
                        <div className="input-group-prepend">
                          <span className="input-group-text"><i className="fab fa-github" /></span>
                        </div>
                        <input type="text" className="form-control" id="social-gh" placeholder="Username" />
                      </div>
                    </div>
                  </div> {/* end col */}
                </div> {/* end row */}
                <div className="text-right">
                  <button type="submit" className="btn btn-success waves-effect waves-light mt-2"><i className="mdi mdi-content-save" /> Save</button>
                </div>
              </form>
            </div>
            {/* end settings content*/}
          </div> {/* end tab-content */}
        </div> {/* end card-box*/}
      </div> {/* end col */}
    </div>
  </div>
</>

        );
    }
}

