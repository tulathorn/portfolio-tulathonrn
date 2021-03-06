import styled from 'styled-components'
import BG from '../static/img/cover.jpg'

import WebFont from 'webfontloader'

const IndexBG = styled.div`
  background-image: url(${BG});
  background-size: cover;
  background-repeat: no-repeat;
  // background-attachment: fixed;
  height: 100vh;
  width: 100%;
`;

// const ProfileBG = styled.div`
//   background-image: url(${Profile});
//   background-size: cover;
//   background-repeat: no-repeat;
//   // background-attachment: fixed;
//   height: 100vh;
//   width: 100%;
//   color: white;
// `;

const HeaderName = styled.div`
    color: white;
    background-color: transparent;
    margin-top: 60vh;
    margin-left: 5vw;
    @media only screen and (max-width: 630px){
        margin-top: 40vh;
        text-align: center;  
    }
`;

export {
    IndexBG,
    // ProfileBG,
    HeaderName
}