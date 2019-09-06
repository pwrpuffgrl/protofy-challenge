import React from 'react';
import Globalstyle from './Globalstyle';
import Grid from './Grid';
import Header from './Header'
import Main from './Main';
import Footer from './Footer';
import footerImg from './Images/footer_protofy.png';

function App() {

  
  return (
    <>
    <Globalstyle /> 
      <Grid>
      <Header>
        Protofy Challenge<span>*</span>
      </Header>
      <Main>

      </Main>
      <Footer src={footerImg}>
      </Footer>

    </Grid>
</>
  );
}

export default App;
