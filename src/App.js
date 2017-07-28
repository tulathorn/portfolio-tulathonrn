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
  height: 100vh;
  width: 100%;
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
        
        <dl className="row">
          <h1>PERSONAL INFORMATION</h1>
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
      </FlexDetialColumn>
    </FlexContainer>
    {/* <div className="container">
      <div className="row ">
        <ProfileBG className="col-12 col-md-6" />
        <div className="col-md-6">
          <div className="container">
            <h1>PERSONAL INFORMATION</h1>
            <dl className="row">
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
          </div>
        </div>
      </div>
    </div> */}

  </div>

)

const AppComposer = compose(

)(AppPage)

export default AppComposer;
