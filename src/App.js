import DeepHeader from "./components/persistent/DeepHeader"
import Header from "./components/persistent/Header"
import Footer from "./components/persistent/Footer"
import DeepFooter from "./components/persistent/DeepFooter"
import CardsBlock from "./components/persistent/CardsBlock"
import DisciplinesList from "./components/persistent/DisciplinesList"
import './App.css'

import React from "react";
import {Container} from "react-bootstrap";
import BackGroundBlock from "./components/temporary/BackGroundBlock";
import map from "components/svg/map.png";
import pattern from "components/svg/pattern.svg";


function App() {
  return (
      <div>
          <DeepHeader />
          <Header />
          <BackGroundBlock bg={pattern} first={'true'}/>

          <Container className="main-container">
              <h2 className="pt-5 ps-3">
                  Новости и события
              </h2>
              <CardsBlock />

              <h2 className="pt-5 pb-3 text-center">
                  Дисциплины
              </h2>
              <DisciplinesList />
          </Container>

          <BackGroundBlock bg={map} second='true'/>
          <Footer />
          <DeepFooter />
      </div>
  );
}

export default App;
