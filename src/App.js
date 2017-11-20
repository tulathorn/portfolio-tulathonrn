import React, { Component } from 'react';
import './static/bootstrap-4/css/bootstrap.css';
import { compose, withState, withHandlers, lifecycle } from 'recompose'

//  import css
import {
  IndexBG,
  ProfileBG,
  HeaderName
} from './styles/global.js'

import styled from 'styled-components'
import Profile from './static/img/profile.jpg'

const FlexContainer = styled.div`
  display: flex;
`

const FlexPhotoColumn = styled.div`
  display: flex;
  flex: 1;
  background-image: url(${Profile});
  background-size: cover;
  background-repeat: no-repeat;
  // background-attachment: fixed;
  height: 100vh;
  width: 100%;
  color: white;

`

const FlexDetialColumn = styled.div`
  display: flex;
  flex: 1;
  -webkit-flex-direction: column;
  height: 100vh;
  width: 100%;
  // margin-top: 5vh;
  // margin-left: 3vw;
  // text-align: center;
  
  @media only screen and (max-width: 630px){
    color: white;
    position: absolute;
    background: rgba(0,0,0,0.8);
  }
`

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
    <FlexContainer>
      <FlexPhotoColumn />
      <FlexDetialColumn>
        <h1
          style={{
            marginTop: '5vh',
            marginLeft: '1vw'
          }}
        >PERSONAL INFORMATION</h1>
        <dl
          className="row"
          style={{
            marginTop: '5vh',
            marginLeft: '1vw'
          }}
        >
          <dt className="col-sm-3">NAME:</dt>
          <dd className="col-sm-9">Tulathorn Sripongpankul</dd>

          <dt className="col-sm-3">ADDRESS:</dt>
          <dd className="col-sm-9">
            229/131 Moo1, Rangsit-Nakhonayok rd. Lumpukkud, Thanyaburi
            Pathumtani 12110
          </dd>

          <dt className="col-sm-3">E-MAIL:</dt>
          <dd className="col-sm-9">tul.tulathorn@gmail.com</dd>

          <dt className="col-sm-3">TEL:</dt>
          <dd className="col-sm-9">(+66) 86-529-4915</dd>
        </dl>
        <h1
          style={{
            marginTop: '5vh',
            marginLeft: '1vw'
          }}
        >Education Background</h1> 
        <div 
          style={{
            marginTop: '5vh',
            marginLeft: '1vw'
        }}>
          <h4>2015-Present</h4>
          <p>
            Bachelor of Engineering, Computer Enigieering(International Program) 
            <br/>King Mongkut's University of Technology Thonburi, Thailand
          </p>
          <h4>Spring semester 2016</h4>
          <p>
            Semester Exchange, Information Technology
            <br/>JAMK University of Applied Sciences, Finland
          </p>
          <h4>Summer semester 2015</h4>
          <p>
            Summer school, Operation system course
            <br/>ECE Paris, France 
          </p>
        </div>
      </FlexDetialColumn>
    </FlexContainer>
  </div>

)

const AppComposer = compose(

)(AppPage)

export default AppComposer;
