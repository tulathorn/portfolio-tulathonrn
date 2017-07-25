import React, { Component } from 'react';
import './static/bootstrap-4/css/bootstrap.css';
import { compose, withState, withHandlers, lifecycle } from 'recompose'

//  import css
import {
  IndexBG,
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

  </div>

)

const AppComposer = compose(

)(AppPage)

export default AppComposer;
