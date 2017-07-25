import React, { Component } from 'react';
import './static/bulma/bulma.css';
import styled from 'styled-components'
import { compose, withState, withHandlers, lifecycle } from 'recompose'
import BG from './static/img/cover.jpg'

// styled component
const IndexBG = styled.div`
  background-image: url(${BG});
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
  height: 100vh;
  width: 100%;
`;

const AppPage = props => (
  <div className="App">
    <div className="row"> 
      <div className="cover">
        <IndexBG>
          
        </IndexBG>
      </div>
    </div>
  </div>

)


const AppComposer = compose(

)(AppPage)

export default AppComposer;
