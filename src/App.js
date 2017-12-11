import React, { Component } from 'react';
import './static/bootstrap-4/css/bootstrap.css';
import { compose, withState, withHandlers, lifecycle } from 'recompose'

import { injectGlobal } from 'styled-components'

//  import css
import {
  IndexBG,
  ProfileBG,
  HeaderName
} from './styles/global.js'

import styled from 'styled-components'
import Profile from './static/img/profile.jpg'

injectGlobal([`
  * {
    font-family: Lato;
    background-color: transparent;
  }
`])

const FlexContainer = styled.div`
  display: flex;
`

const DetialComp = styled.div`
  flex-direction: column;
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
      </FlexDetialColumn>
    </FlexContainer>
    <div className="container">
      <FlexContainer>
        <DetialComp>
          <h1
            style={{
              marginTop: '5vh',
              marginLeft: '1vw',
              marginBottom: '5vh'
            }}
          >Education Background</h1> 
          <div
            style={{
              marginTop: '1vh',
              marginLeft: '4vw',
              marginBottom: '1vh'
            }}
          >
            <h4>2015-Present</h4>
            <p>
              Bachelor of Engineering, Computer Enigieering(International Program): 
              King Mongkut's University of Technology Thonburi, Thailand
            </p>
            <h4>Spring semester 2016</h4>
            <p>
              Semester Exchange, Information Technology:
              JAMK University of Applied Sciences, Finland
            </p>
            <h4>Summer semester 2015</h4>
            <p>
              Summer school, Operation system course:
              ECE Paris, France 
            </p>
            <h4>2012-2015</h4>
            <p>
              Certificate of Vocational Education in Electric and Electronic (English Program):
              Thai - German Pre Engineering school (KMUTNB), Thailand
            </p>
          </div>
        </DetialComp>  
      </FlexContainer>
    </div>
    <div className="container">
      <FlexContainer>
        <DetialComp>
          <h1
              style={{
                marginTop: '5vh',
                marginLeft: '1vw',
                marginBottom: '5vh'
              }}
            >Experiences</h1> 
          <div
            style={{
              marginTop: '1vh',
              marginLeft: '4vw',
              marginBottom: '1vh'
            }}
          >
            <h4>Junior Web Developer, Alchemist club — 2017 - present</h4>
            <p>
              Alchemist club is the developer club under School of Information Technology, KMUTT. 
              My pasted work is KMUTT Passport, which is event management system in our university 
              and KMUTT ask, which is conference asking system.
              <br/>KMUTT Passport: <a href="https://passport.kmutt.ac.th/">https://passport.kmutt.ac.th/</a>
              <br/>KMUTT ask: <a href="https://ask.kmutt.ac.th/">https://ask.kmutt.ac.th/</a>
            </p>
            <h4>Vice President, KMUTT Photo Club — 2017 - present</h4>
            <p>
              KMUTT Photo Club is one of the oldest club in our university. Our club will support all of people who want to have photographer and video. 
              My job is take care all of photographer and managing the club.
            </p>
            <h4>ATU-NET Internet of Things and Innovation Camp, University of Technology Malaysia — 2017</h4>
            <p>
              One of the two representative from KMUTT and one of the fourth from Thailand to join the camp in Malaysia. 
            </p>
            <h4>Programmer (Camper), YWC15 — 2018</h4>
            <p>
              Participant as a camper in #YWC15, held by Thailand Webmaster Association.
            </p>
            <h4>Photographer, TEDx KMUTT — 2016</h4>
            <p>
              Photographer team for TEDxKMUTT. Take care of speaker photo and event photo.
            </p>
            <h4>OD (one day director), JWC8 — 2016</h4>
            <p>
              JWC (Junior Web Master Camp) is a high-school camp organised by Thailand Webmaster Association. 
              My position is to manage the flow and make a decision in that day. 
              I also be a staff in activity team and being a TA for Wordpress Workshop.
            </p>
          </div>
        </DetialComp>
      </FlexContainer>
    </div>
  </div>
)

const AppComposer = compose(

)(AppPage)

export default AppComposer;
