import MainPanel from "./MainPanel";
import HangoutResults from "./HangoutResults";
import './App.css'
import 'react-day-picker/dist/style.css';
import React, { useState } from "react";
import findResIcon from "./assets/FindRes.png"
import addPanelIcon from "./assets/plus.png"
import mobileInstructionsImg from "./assets/startInstructions.png"
import desktopInstructionsImg from "./assets/desktopStartInstruction.png"

function App() {

  const [panelData, setPanelData] = useState([])
  const [panels, setPanels] = useState([])
  const [showInstructions, setShowInstructions] = useState(true)
  const [resultsIsOpen, setResultsIsOpen] = useState(false)

  function handleNewPanel(){
    setShowInstructions(false)
    const newPanel = {}
    setPanels(p => [...p, newPanel])
  }


  return (
    <div className="container">

      <HangoutResults data={panelData} open={resultsIsOpen} onClose={() => setResultsIsOpen(false)} />

      <div className="row topbar">
        <div className="col-sm-4 center-items">
          <span className="hangouts-title">Hangouts</span>
        </div>
        <div className="col-sm-8 container-fluid center-items">
          <div className="toolbar row mx-auto">
            <div className="col-sm-6">
              <div onClick={handleNewPanel} className="tool-button">
                  <img src={addPanelIcon}></img>Add Panel
                </div>
            </div>
            <div className="col-sm-6">
              <div onClick={() => setResultsIsOpen(true)} className="tool-button">
                <img src={findResIcon}></img>Find Hangout
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={`instructions-panel ${showInstructions ? '' : 'hide'}`}>
        <img className="mobile" width={328} src={mobileInstructionsImg} alt="instructions"></img>
        <img className="desktop" width={800} src={desktopInstructionsImg} alt="instructions"></img>
      </div>


        <div className="row panel-container">
          {panels.map((_,index) => 
          <div key={index} className={`col-sm-4`}>
            <MainPanel 
              className = "panel"
              index={index}
              setPanelData={setPanelData} 
              panelData={panelData}
            />
          </div>
          )}
        </div>
        <HangoutResults data={panelData}/>
    </div>
  );
}

export default App
