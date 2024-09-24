import ActivitiesPanel from "./ActivitiesPanel"
import BudgetPanel from "./BudgetPanel";
import React, {useState} from 'react'
import MultiDatePicker from "./MultiDatePicker";
import TimePanel from "./TimePanel";
import './MainPanel.css'
import submitIcon1 from "./assets/Submitted.png"
import submitIcon2 from "./assets/Submitted2.png"
import submitIcon3 from "./assets/Submitted3.png"
import submitIcon4 from "./assets/Submitted4.png"
import submitIcon5 from "./assets/Submitted5.png"
import submitIcon6 from "./assets/Submitted6.png"
import submitIcon7 from "./assets/Submitted7.png"
import submitIcon8 from "./assets/Submitted8.png"
import extracurricularToggleIcon from "./assets/extracurricular.png"
import moneyToggleIcon from "./assets/money.png"
import calendarToggleIcon from "./assets/calendar.png"
import clockToggleIcon from "./assets/clock.png"

function MainPanel( {index, setPanelData} ){

    const [activityRanks, setActivityRanks] = useState(["Board Games", "Shopping", "Beach", "Eating", "Playing Video Games", "Karaoke", "cooking", "traveling"])
    const [maxBudget, setMaxBudget] = useState(0)
    const [minBudget, setMinBudget] = useState(0)
    const [selectedDates, setSelectedDates] = useState([]);
    const [duration, setDuration] = useState([])
    const [time, setTime] = useState([])

    const [activityRanksIsOpen, setActivityRanksIsOpen] = useState(false)
    const [budgetPanelIsOpen, setBudgetPanelIsOpen] = useState(false)
    const [datePanelIsOpen, setDatePanelIsOpen] = useState(false)
    const [timePanelIsOpen, setTimePanelIsOpen] = useState(false)
    const [isSubmitted, setIsSubmitted] = useState(false)
    const [submitImg, setSubmitImg] = useState("")


    function handleSubmit(){
        setIsSubmitted(true)
        const newPanelData = {activityRanks: activityRanks.slice(0,5), minBudget: minBudget, maxBudget: maxBudget, selectedDates: selectedDates, duration:duration, time: time}
        setPanelData(p => [...p, newPanelData])
        handleSubmitImg()
    }

    function setPanelColor(index){
        index = index % 6
        
        if(index == 0){
            return 'one-panel'
        }
        if(index == 1){
            return 'two-panel'
        }
        if(index == 2){
            return 'three-panel'
        }
        if(index == 3){
            return 'four-panel'
        }
        if(index == 4){
            return 'five-panel'
        }
        if(index == 5){
            return 'six-panel'
        }
    }

    function setButtonColor(index){
        index = index % 6
        
        if(index == 0){
            return 'one-button'
        }
        if(index == 1){
            return 'two-button'
        }
        if(index == 2){
            return 'three-button'
        }
        if(index == 3){
            return 'four-button'
        }
        if(index == 4){
            return 'five-button'
        }
        if(index == 5){
            return 'six-button'
        }
    }

    function toggleActivitiesPanel(){
        activityRanksIsOpen ? setActivityRanksIsOpen(false) : setActivityRanksIsOpen(true)
    }

    function toggleBudgetPanel(){
        budgetPanelIsOpen ? setBudgetPanelIsOpen(false) : setBudgetPanelIsOpen(true)
    }

    function toggleDatePanel(){
        datePanelIsOpen ? setDatePanelIsOpen(false) : setDatePanelIsOpen(true)
    }

    function toggleTimePanel(){
        timePanelIsOpen ? setTimePanelIsOpen(false) : setTimePanelIsOpen(true)
    }


    function handleSubmitImg(){
        const val = Math.floor(Math.random() * 8);
        if (val === 0){
            setSubmitImg(submitIcon1)
        }
        else if (val === 1){
            setSubmitImg(submitIcon2)
        }
        else if (val === 2){
            setSubmitImg(submitIcon3)
        }
        else if (val === 3){
            setSubmitImg(submitIcon4)
        }
        else if (val === 4){
            setSubmitImg(submitIcon5)
        }
        else if (val === 5){
            setSubmitImg(submitIcon6)
        }
        else if (val === 6){
            setSubmitImg(submitIcon7)
        }
        else if (val === 7){
            setSubmitImg(submitIcon8)
        }
      }

    return(
    <div className="wrapper">
        <div className={`${isSubmitted ? 'no-border' : ''} ${setPanelColor(index)}`}>

            <div className={`${isSubmitted ? 'submit-show' : ''} submitted-display`}>
                <img height={200} src={submitImg}></img>
                Submitted
            </div>

            <div className={`inputs ${isSubmitted ? 'hidden': ''}`}>
                <form>
                    <input className='input-name' placeholder="Enter Name"></input>
                </form>

                {/* <div className={`panel-toggles ${activityRanksIsOpen ? "panel-open" : "panel-closed"}`} onClick={toggleActivitiesPanel}>
                    <img className="toggle-icons" src={extracurricularToggleIcon}></img>
                    Activities
                </div>
                <ActivitiesPanel setActivityRanksIsOpen={setActivityRanksIsOpen} activityRanksIsOpen={activityRanksIsOpen} handleListUpdate={setActivityRanks}/> */}

                <div className={`panel-toggles ${budgetPanelIsOpen ? "panel-open" : "panel-closed"}`} onClick={toggleBudgetPanel}>
                    <img className="toggle-icons" src={moneyToggleIcon}></img>
                    Budget
                </div>
                <BudgetPanel setBudgetPanelIsOpen={setBudgetPanelIsOpen} budgetPanelIsOpen={budgetPanelIsOpen} setMaxBudget={setMaxBudget} setMinBudget={setMinBudget}/>

                <div className={`panel-toggles ${datePanelIsOpen ? "panel-open" : "panel-closed"}`} onClick={toggleDatePanel}>
                    <img className="toggle-icons" src={calendarToggleIcon}></img>
                    Date
                </div>
                <MultiDatePicker setDatePanelIsOpen={setDatePanelIsOpen} datePanelIsOpen={datePanelIsOpen} setSelectedDates={setSelectedDates} selectedDates={selectedDates} />

                <div className={`panel-toggles ${timePanelIsOpen ? "panel-open" : "panel-closed"}`} onClick={toggleTimePanel}>
                    <img className="toggle-icons" src={clockToggleIcon}></img>
                    Time
                </div>
                <TimePanel timePanelIsOpen={timePanelIsOpen} toggleTimePanel={toggleTimePanel} setDuration={setDuration} setTime={setTime} time={time}/>

                <button className={`submit-button ${setButtonColor(index)}`} onClick={handleSubmit}>Submit</button>
            </div>
        </div>
    </div>
    );
}

export default MainPanel