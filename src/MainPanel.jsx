import ActivitiesPanel from "./ActivitiesPanel"
import BudgetPanel from "./BudgetPanel";
import React, {useState} from 'react'
import MultiDatePicker from "./MultiDatePicker";
import TimePanel from "./TimePanel";
import './MainPanel.css'

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
    const [submitImg, setSubmitImg] = useState('')

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
            setSubmitImg('src/assets/Submitted.png')
        }
        else if (val === 1){
            setSubmitImg("src/assets/Submitted2.png")
        }
        else if (val === 2){
            setSubmitImg("src/assets/Submitted3.png")
        }
        else if (val === 3){
            setSubmitImg("src/assets/Submitted4.png")
        }
        else if (val === 4){
            setSubmitImg("src/assets/Submitted5.png")
        }
        else if (val === 5){
            setSubmitImg("src/assets/Submitted6.png")
        }
        else if (val === 6){
            setSubmitImg("src/assets/Submitted7.png")
        }
        else if (val === 7){
            setSubmitImg("src/assets/Submitted8.png")
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

                <div className={`panel-toggles ${activityRanksIsOpen ? "panel-open" : "panel-closed"}`} onClick={toggleActivitiesPanel}>
                    <img className="toggle-icons" src="src/assets/extracurricular.png"></img>
                    Activities
                </div>
                <ActivitiesPanel setActivityRanksIsOpen={setActivityRanksIsOpen} activityRanksIsOpen={activityRanksIsOpen} handleListUpdate={setActivityRanks}/>

                <div className={`panel-toggles ${budgetPanelIsOpen ? "panel-open" : "panel-closed"}`} onClick={toggleBudgetPanel}>
                    <img className="toggle-icons" src="src/assets/money.png"></img>
                    Budget
                </div>
                <BudgetPanel setBudgetPanelIsOpen={setBudgetPanelIsOpen} budgetPanelIsOpen={budgetPanelIsOpen} setMaxBudget={setMaxBudget} setMinBudget={setMinBudget}/>

                <div className={`panel-toggles ${datePanelIsOpen ? "panel-open" : "panel-closed"}`} onClick={toggleDatePanel}>
                    <img className="toggle-icons" src="src/assets/calendar.png"></img>
                    Date
                </div>
                <MultiDatePicker setDatePanelIsOpen={setDatePanelIsOpen} datePanelIsOpen={datePanelIsOpen} setSelectedDates={setSelectedDates} selectedDates={selectedDates} />

                <div className={`panel-toggles ${timePanelIsOpen ? "panel-open" : "panel-closed"}`} onClick={toggleTimePanel}>
                    <img className="toggle-icons" src="src/assets/clock.png"></img>
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