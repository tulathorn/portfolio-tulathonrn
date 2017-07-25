import styled from 'styled-components'
import BG from '../static/img/cover.jpg'
import WebFont from 'webfontloader'

WebFont.load({
  google: {
    families: ['Oswald:500', 'Oxygen:300']
  }
});

const IndexBG = styled.div`
  background-image: url(${BG});
  background-size: cover;
  background-repeat: no-repeat;
  // background-attachment: fixed;
  height: 100vh;
  width: 100%;
`;

const HeaderName = styled.div`
    color: white;
    margin-top: 60vh;
    margin-left: 5vw;
    @media only screen and (max-width: 630px){
        margin-top: 40vh;
        text-align: center;  
    }
`;

export {
    IndexBG,
    HeaderName
}