import "./HangoutResults.css"
import ReactDom from 'react-dom'
import React, {useState, useEffect} from 'react'
import closeIcon from "./assets/close.png"
import notEnoughDataIcon from "./assets/not-enough-data-img.png"

function HangoutResults( {enoughData, data, open, onClose} ){
  
    const [displayActivities, setDisplayActivities] = useState([])
    const [displayMinBudget, setDisplayMinBudget] = useState()
    const [displayMaxBudget, setDisplayMaxBudget] = useState()
    const [displayDates, setDisplayDates] = useState([])
    const [displayDuration, setDisplayDuration] = useState()
    const [displayTime, setDisplayTime] = useState([])

    const dataLength = data.length

    function handleIfDataHasBeenSubmitted(){
      if (dataLength < 2){
        return false;
      }
      else{
        return true;
      }
    }
    
    function findResults(){
    
        let sharedActivities = [];
        let setSharedActivities = [];
    
        let lowerBudgetRange = data[0].minBudget;
        let higherBudgetRange = data[0].maxBudget;
    
        let sharedDates = [];
        let setSharedDates = [];
    
        let agreedDuration = data[0].duration;
        
        let sharedTimes = [];
        let setSharedTimes = [];
    
    
        for (const item of data){
          //find matching activities that were ranked highly and save to sharedActivities list
          for (const activity of item.activityRanks){
            if (!setSharedActivities.includes(activity)){
              setSharedActivities.push(activity)
            }
            else{
              if (!sharedActivities.includes(activity)){
                sharedActivities.push(activity)
              }
            }
          }
          //find lowest minimum budget and minimum max budget
          if (item.minBudget < lowerBudgetRange){
            lowerBudgetRange = item.minBudget;
          }
          if (item.maxBudget < higherBudgetRange){
            higherBudgetRange = item.maxBudget;
          }
          //find matching dates from dates selected from users
          for (const date of item.selectedDates){
            if (!setSharedDates.includes(date.toDateString())){
                setSharedDates.push(date.toDateString())
            }
            else{
              if (!sharedDates.includes(date.toDateString())){
                sharedDates.push(date.toDateString())
              }
            }
          }
          //find shortest duration 
          if (item.duration < agreedDuration){
            agreedDuration = item.duration;
          }
          //find matching times from times selected from users
          for (const t of item.time){
            if (!setSharedTimes.includes(t)){
              setSharedTimes.push(t)
            }
            else{
              if (!sharedTimes.includes(t)){
                sharedTimes.push(t)
              }
            }
          }
        }
        setDisplayActivities(sharedActivities)
        setDisplayDates(sharedDates)
        if (sharedDates == []){
            setDisplayDates("No Dates found where all friends are availible")
        }
        setDisplayMinBudget(lowerBudgetRange)
        setDisplayMaxBudget(higherBudgetRange)
        setDisplayDuration(agreedDuration)
        setDisplayTime(sharedTimes)
        if (sharedTimes == []){
            setDisplayTime("No Time periods found where all friends are availible")
        }
      }

      //calculate ideal hangout only when find hangout has been pressed and when at leaast 2 panels have been submitted
      useEffect(() => {
      if (open && dataLength > 1){
        findResults();
      }
      }, [open, dataLength])
    

    if(!open) return null

    return ReactDom.createPortal(
    <>
      <div className="overlay"></div>

      {/* ERROR DISPLAY WHEN NOT ENOUGH PANELS HAVE BEEN SUBMITTED */}
      <div className={`${handleIfDataHasBeenSubmitted() ? "hide" : ''} hangout-results-container`}>
        <div className="exit-button-container">
              <img onClick={onClose} src={closeIcon} className="exit-button"></img>
            </div>

            <div className={`${handleIfDataHasBeenSubmitted() ? "hide" : ''} not-enough-data-container`} >
              <div className="results-header-title-container">
                <h1>NOT ENOUGH DATA</h1>
              </div>
              <h2 className="not-enough-data-msg">*You have to submit at least 2 panels to find a hangout</h2>
              <img width={200} src={notEnoughDataIcon}></img>
            </div>
      </div>
      {/* RESULTS WHEN USER SUBMITS AT LEAST 2 PANELS */}
          <div className={` ${handleIfDataHasBeenSubmitted() ? "" : 'hide'} hangout-results-container`}>
          <div className="exit-button-container">
              <img onClick={onClose} src={closeIcon} className="exit-button"></img>
            </div>
              <div className="results-header-title-container valid-data">
                <h1>Best</h1>
                <h2>Hangout</h2>
              </div>

                <div className="container-fluid">

                  <div className="row">
                    <div className="col-sm-6">
                      <div className="panel-result-header activities-result-header">Activities</div>
                      <div className="panel-result-container activities-result-panel">
                      <h4><span>Everyone</span> wants to: </h4>
                        <ul>
                          {displayActivities.map((activity,index) => <li key={index}>{activity}</li>)}
                        </ul>
                      </div>
                    </div>
                    <div className="col-sm-6">
                    <div className="panel-result-header budget-result-header">Budget</div>
                      <div className="panel-result-container budget-result-panel">
                        <h4><span>Everybody</span> can afford:</h4>
                          ${displayMinBudget} - ${displayMaxBudget}  
                      </div>
                    </div>
                  </div>
                    <div className="row">
                    <div className="col-sm-6">
                    <div className="panel-result-header dates-result-header">Activities</div>
                      <div className="panel-result-container dates-result-panel">
                        <h4><span>Everyone</span> is free on: </h4>
                        <ul>
                          {displayDates.map((date,index) => <li key={index}>{date}</li>)}
                        </ul>
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="panel-result-header times-result-header">Time</div>
                      <div className="panel-result-container time-result-panel">
                      <h4><span>Everybody</span> is availible in the</h4>
                        <ul>
                          {displayTime.map((time,index) => <li key={index}>{time}</li>)}
                        </ul>
                         for {displayDuration} hours
                      </div>
                    </div>
                  </div>
                </div>
            </div>



    </>,
    document.getElementById('portal')
    );
}

export default HangoutResults
