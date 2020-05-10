import React, { Component } from 'react';
export default class About extends Component {
  render() {
    return (
      <React.Fragment>
      {/*generated code*/}
      <p> </p><section id="about">
    <div className="row">
      <div className="three columns">
        <img className="profile-pic" src="images/profilepic.jpg" alt="" />
      </div>
      <div className="nine columns main-col">
        <h2>About Me</h2>
        <p> Backend Engineer with a demonstrated history of working in the web development industry.
         Skilled in Go, ,PHP, SQL, WordPress, C++, and Git. 
         Strong engineering professional graduated from Faculty of Computer Science and Engineering - Skopje . 
        </p>
        <div className="row">
          <div className="columns contact-details">
            <h2>Contact Details</h2>
            <p className="address">
              <span>Darko Djalevski</span><br />
              <span>Manapo 3<br />
                Skopje, 1000
              </span><br />
              <span>+389 72 525 705</span><br />
              <span>darkodjalevski.info</span>
            </p>
          </div>
          <div className="columns download">
            <p>
              <a href="#" className="button"><i className="fa fa-download" />Download Resume</a>
            </p>
          </div>
        </div> {/* end row */}
      </div> {/* end .main-col */}
    </div>
  </section> {/* About Section End*/}<p />
      </React.Fragment>
    );
  }
}