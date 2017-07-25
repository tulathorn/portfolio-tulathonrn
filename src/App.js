import React, { Component } from 'react';
import './static/bootstrap-4/css/bootstrap.css';
import { compose, withState, withHandlers, lifecycle } from 'recompose'

//  import css
import {
  IndexBG,
  ProfileBG,
  HeaderName
} from './styles/global.js'


const AppPage = props => (
  <div className="App">
    <IndexBG>
      <div className="container">
        <div className="row"> 
          <HeaderName className="col-12">
            <h1>PORTFOLIO</h1>
            <h5>TULATHORN SRIPONGPANKUL</h5>
          </HeaderName>
        </div>
      </div>
    </IndexBG>
    <div className="container">
      <div className="row ">
        <ProfileBG className="col-12 col-md-6" />
        <div className="col-md-6">
          <div className="container">
            <h1>PERSONAL INFORMATION</h1>
            <ul className="list-unstyled">
              <li>NAME</li>
                <ul>
                  <p>Tulathorn Sripongpankul</p>
                </ul>
              <li>ADDRESS</li>
                <ul>
                  <p>229/131 Moo1 Rangsit-Nakhonayok rd.
                    <br /> Lumpukkud, Thanyaburi
                    <br /> Pathumtani 12110
                  </p> 
                </ul>
              <li>Integer molestie lorem at massa</li>
              <li>Facilisis in pretium nisl aliquet</li>
              <li>Nulla volutpat aliquam velit
                <ul>
                  <li>Phasellus iaculis neque</li>
                  <li>Purus sodales ultricies</li>
                  <li>Vestibulum laoreet porttitor sem</li>
                  <li>Ac tristique libero volutpat at</li>
                </ul>
              </li>
              <li>Faucibus porta lacus fringilla vel</li>
              <li>Aenean sit amet erat nunc</li>
              <li>Eget porttitor lorem</li>
            </ul>
          </div>
        </div>
      </div>
    </div>

  </div>

)

const AppComposer = compose(

)(AppPage)

export default AppComposer;
