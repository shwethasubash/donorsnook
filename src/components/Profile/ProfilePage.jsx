import React, { Component } from 'react'
import './profile.css';
import 'bootstrap/dist/css/bootstrap.css';
import northgrove from '../../images/NorthGrove.png';

export class profilePage extends Component {


    render() {
        return (
            <>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/MaterialDesign-Webfont/5.3.45/css/materialdesignicons.css" integrity="sha256-NAxhqDvtY0l4xn+YVa6WjAcmd94NNfttjNsDmNatFVc=" crossOrigin="anonymous" />
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.13.1/css/all.min.css" integrity="sha256-2XFplPlrFClt0bIdPgpz8H7ojnk10H69xRqd9+uTShA=" crossOrigin="anonymous" />
  <div className="container">
    <div className="row">
      <div className="col-lg-4 col-xl-4">
        <div className="card-box text-center">
          {/*<img src="./logo.png"  width="170" height="170"x/>*/}
          <img src={northgrove}  width="170" height="170"x/>
          <h4 className="mb-0">North Grove</h4>
          <p className="text-muted">@Halifax</p>
          <button type="button" className="btn btn-primary btn-xs waves-effect mb-2 waves-light" id="b1">Connect</button>
          <button type="button" className="btn btn-success waves-effect mb-2 waves-light" id="b2">Chat</button>
          <button type="button" className="btn btn-info btn-xs waves-effect mb-2 waves-light" id="b3">View Website</button>
          <div className="text-left mt-3">
            <h4 className="font-13 text-uppercase">Mission :</h4>
            <p className="text-muted font-13 mb-3">
              Our mission is to end hunger in Halifax and create supportive space for learning and community connections to form and grow.
            </p>
            {/*<p className="text-muted mb-2 font-13"><strong>Full Name :</strong> <span className="ml-2">Halifax No Hunger</span></p>*/}
            <p className="text-muted mb-2 font-13"><strong>Mobile :</strong><span className="ml-2">(123)
                123 1234</span></p>
            <p className="text-muted mb-2 font-13"><strong>Email :</strong> <span className="ml-2 ">user@email.domain</span></p>
            <p className="text-muted mb-1 font-13"><strong>Location :</strong> <span className="ml-2">1234 Park Street</span></p>
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
          <h4 className="header-title">Area of Interest</h4>
          <p className="mb-3">Everyone realizes why a new common language would be desirable</p>
          <div className="pt-1">
            <h6>Health <span className="float-right">90%</span></h6>
            <div className="progress progress-sm m-0">
              <div className="progress-bar bg-purple" role="progressbar" aria-valuenow={90} aria-valuemin={0} aria-valuemax={100} style={{width: '90%'}}>
                <span className="sr-only">90% Complete</span>
              </div>
            </div>
          </div>
          <div className="mt-2 pt-1">
            <h6>Charity/Philanthropy <span className="float-right">67%</span></h6>
            <div className="progress progress-sm m-0">
              <div className="progress-bar bg-purple" role="progressbar" aria-valuenow={67} aria-valuemin={0} aria-valuemax={100} style={{width: '67%'}}>
                <span className="sr-only">67% Complete</span>
              </div>
            </div>
          </div>
          <div className="mt-2 pt-1">
            <h6>Relief <span className="float-right">48%</span></h6>
            <div className="progress progress-sm m-0">
              <div className="progress-bar bg-purple" role="progressbar" aria-valuenow={48} aria-valuemin={0} aria-valuemax={100} style={{width: '48%'}}>
                <span className="sr-only">48% Complete</span>
              </div>
            </div>
          </div>
          <div className="mt-2 pt-1">
            <h6 >Culture & Society <span className="float-right">95%</span></h6>
            <div className="progress progress-sm m-0">
              <div className="progress-bar bg-purple" role="progressbar" aria-valuenow={95} aria-valuemin={0} aria-valuemax={100} style={{width: '95%'}}>
                <span className="sr-only">95% Complete</span>
              </div>
            </div>
          </div>
          <div className="mt-2 pt-1">
            <h6>Public Relations <span className="float-right">72%</span></h6>
            <div className="progress progress-sm m-0">
              <div className="progress-bar bg-purple" role="progressbar" aria-valuenow={72} aria-valuemin={0} aria-valuemax={100} style={{width: '72%'}}>
                <span className="sr-only">72% Complete</span>
              </div>
            </div>
          </div>
        </div> {/* end card-box*/}
      </div> {/* end col*/}
      <div className="col-lg-8 col-xl-8">
        <div className="card-box">
          <ul className="nav nav-pills navtab-bg">
            <li className="nav-item">
              <a href="#about-me" data-toggle="tab" aria-expanded="true" className="nav-link ml-0 active">
                <i className="mdi mdi-face-profile mr-1" />Donate
              </a>
            </li>

          </ul>
          <div className="tab-content">
            <div className="tab-pane show active" id="about-me">
              <h3 className="mb-4 text-uppercase"><i className="mdi mdi-briefcase mr-1" />
                Activities</h3>
              <ul className="list-unstyled timeline-sm" id="time">
                <li className="timeline-sm-item">
                  <span className="timeline-sm-date">2015 - 19</span>
                  <h5 className="mt-0 mb-1">Food Bank Program</h5>
                  <p>Halifax</p>
                  <p className="text-muted mt-2">Local Food Bank Program.</p>
                </li>
                <li className="timeline-sm-item" >
                  <span className="timeline-sm-date">2012 - 15</span>
                  <h5 className="mt-0 mb-1">Children Hunger Program</h5>
                  <p>Halifax</p>
                  <p className="text-muted mt-2">Resolving children hunger issue is Halifax.</p>
                </li>
                <li className="timeline-sm-item" >
                  <span className="timeline-sm-date">2010 - 12</span>
                  <h5 className="mt-0 mb-1">Nova Scotia Hunger Porgram</h5>
                  <p>Nova Scotia</p>
                  <p className="text-muted mt-2 mb-0">Trying to resolve hunger issue among Nova Scotia.</p>
                </li>
              </ul>
              <h3 className="mb-3 mt-4 text-uppercase"><i className="mdi mdi-cards-variant mr-1" />
                Programs</h3>
              <div className="table-responsive">
                <table className="table table-borderless mb-0">
                  <thead className="thead-light">
                    <tr>
                      <th>#</th>
                      <th>Project Name</th>
                      <th>Start Date</th>
                      <th>Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>Dalhousie Food Bank  </td>
                      <td>01/01/2019</td>
                      <td><span className="badge badge-info">Work in Progress</span></td>
                    </tr>
                    <tr>
                      <td>2</td>
                      <td>Halifax Food Bank</td>
                      <td>21/07/2019</td>
                      <td><span className="badge badge-success">Pending</span></td>
                    </tr>
                    <tr>
                      <td>3</td>
                      <td>Nova Scotia No Hunger</td>
                      <td>18/03/2018</td>
                      <td><span className="badge badge-danger">Done</span></td>
                    </tr>
                    <tr>
                      <td>4</td>
                      <td>Children Hunger</td>
                      <td>02/10/2017</td>
                      <td><span className="badge badge-info">Work in Progress</span></td>
                    </tr>
                    <tr>
                      <td>5</td>
                      <td>Trainning Section</td>
                      <td>17/05/2021</td>
                      <td><span className="badge badge-warning">Coming soon</span></td>
                    </tr>
                  </tbody>
                </table>
              </div>
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

export default profilePage

