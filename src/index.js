import React from "react";
import ReactDOM from "react-dom/client";

// Composants //
import BarreTaches from "./components/BarreTaches/index";
import Burger from "./components/Burger";
import IconPresentation from "./components/Presentation/Icon_Presentation";
import IconAudio from "./components/Lecteur_Audio/Icon_Audio";
import IconPrompt from "./components/Prompt/Icon_Prompt";
import HQIcon from "./components/HeroQuest/HQIcon";
import SQIcon from "./components/SpaceQuest/SQ_Icon";
// Styles //
import "./style/normalize.css";
import "./style/style.scss";

// Variables //
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <BarreTaches>
      <Burger />
    </BarreTaches>
    <IconPresentation />
    <IconAudio />
    <IconPrompt />
    <HQIcon />
    <SQIcon />
  </React.StrictMode>
);
/** <Route path="the-book" element={<Book />} /> */
